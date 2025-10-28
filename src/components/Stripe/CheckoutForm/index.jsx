import {
	PaymentElement,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './styles.css';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

export default function CheckoutForm() {
	const { cartProducts, clearCart } = useCart();
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();

	const {
		state: { dpmCheckerLink },
	} = useLocation();

	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();

		if (!stripe || !elements) {
			console.error('stripe ou Elements com falha, tente novamente');
			return;
		}

		setIsLoading(true);

		const { error, paymentIntent } = await stripe.confirmPayment({
			elements,
			redirect: 'if_required',
		});

		if (error) {
			setMessage(error.message);
			toast.error(error.message);
		} else if (paymentIntent && paymentIntent.status === 'succeeded') {
			const products = cartProducts
				.filter(p => p && p.id && typeof p.quantity === 'number')
				.map(product => ({
					id: product.id,
					quantity: product.quantity,
					price: product.price,
				}));

			try {
				const { status } = await api.post(
					'/orders',
					{ products },
					{ validateStatus: () => true }
				);

				if (status === 200 || status === 201) {
					clearCart();
					setTimeout(() => {
						navigate(
							`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`
						);
					}, 4000);
					clearCart();
					toast.success('Pedido Realizado Com Sucesso!');
				} else if (status === 409) {
					toast.error('Falha ao realizar o seu pedido.');
				} else {
					throw new Error();
				}
			} catch (error) {
				toast.error('Falha no Sistema! Tente novamente.');
			}
		} else {
			navigate(
				`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`
			);
		}

		setIsLoading(false);
	};

	const paymentElementOptions = {
		layout: 'accordion',
	};

	return (
		<div className="container">
			<form id="payment-form" onSubmit={handleSubmit}>
				<PaymentElement id="payment-element" options={paymentElementOptions} />
				<button
					type="submit"
					id="submit"
					className="button"
					disabled={isLoading || !stripe || !elements}
				>
					<span id="button-text">
						{isLoading ? (
							<div className="spinner" id="spinner"></div>
						) : (
							'Pagar Agora'
						)}
					</span>
				</button>
				{/* Show any error or success messages */}
				{message && <div id="payment-message">{message}</div>}
			</form>

			<div>
				<p>
					Os Métodos de pagamento são disponíveis de acordo com a sua
					região.&nbsp;
					{dpmCheckerLink ? (
						<a
							href={dpmCheckerLink}
							target="_blank"
							rel="noopener noreferrer"
							id="dpm-integration-checker"
						>
							Verifique os métodos de pagamento disponíveis para sua região
						</a>
					) : (
						<span>Verifique no painel do Stripe para mais informações.</span>
					)}
				</p>
			</div>
		</div>
	);
}
