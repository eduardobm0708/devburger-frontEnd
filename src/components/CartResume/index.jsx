import { Container } from './styles';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { useEffectEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export function CartResume() {
	const navigate = useNavigate();
	const [finalPrice, setFinalPrice] = useState(0);
	const [deliveryTax] = useState(500); // Taxa de entrega fixa de R$ 5,00
	const { cartProducts, clearCart } = useCart();

	useEffect(() => {
		const validProducts = cartProducts.filter(
			p => p && p.id && typeof p.quantity === 'number'
		);
		const sumAllItems = validProducts.reduce((acc, current) => {
			const price = Number(current.price) || 0;
			const quantity = Number(current.quantity) || 0;
			return price * quantity + acc;
		}, 0);
		setFinalPrice(sumAllItems);
	}, [cartProducts]);

	const submitOrder = async () => {
		const products = cartProducts
			.filter(p => p && p.id && typeof p.quantity === 'number')
			.map(product => ({
				id: product.id,
				quantity: product.quantity,
				price: product.price,
			}));

		if (products.length === 0) {
			toast.error('Carrinho vazio ou produtos inválidos.');
			return;
		}

		try {
			const { data } = await api.post('create-payment-intent', { products });
			navigate('/checkout', {
				state: data,
			});
		} catch (err) {
			toast.error('🦄 Erro ao processar pagamento. Tente novamente.', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		}
	};

	return (
		<Container>
			<div className="container-top">
				<div className="title">Resumo do pedido</div>
				<div className="row">
					<span>Itens</span>
					<span>{formatPrice(finalPrice)}</span>
				</div>
				<div className="row">
					<span>Taxa de entrega</span>
					<span>{formatPrice(deliveryTax)}</span>
				</div>
			</div>
			<div className="container-bottom">
				<span className="total-label">Total</span>
				<span className="total-price">
					{formatPrice(finalPrice + deliveryTax)}
				</span>
			</div>
			<button onClick={submitOrder} type="button" className="resume-btn">
				Continuar
			</button>
		</Container>
	);
}
