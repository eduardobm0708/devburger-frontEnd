import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';

import { CardProduct } from '../CardProduct';
import { Container, Title } from './styles';

export function OffersCarousel() {
	const [offers, setOffers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadProducts() {
			try {
				const { data } = await api.get('/products');

				const onlyOffers = data
					.filter(product => product.offer)
					.map(product => ({
						...product,
						currencyValue: formatPrice(product.price),
					}));

				setOffers(onlyOffers);
			} catch (err) {
				setError('Falha ao carregar as ofertas. Tente novamente.');
				console.error(err);
			} finally {
				setLoading(false);
			}
		}

		loadProducts();
	}, []);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1280 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1280, min: 690 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 690, min: 0 },
			items: 2,
		},
	};

	if (loading) {
		return (
			<Container>
				<Title>Carregando ofertas...</Title>
			</Container>
		);
	}

	if (error) {
		return (
			<Container>
				<Title>{error}</Title>
			</Container>
		);
	}

	return (
		<Container>
			<Title>Ofertas do dia</Title>
			<Carousel
				responsive={responsive}
				infinite={true}
				itemClass="carousel-item"
			>
				{offers.map(product => (
					<CardProduct key={product.id} product={product}></CardProduct>
				))}
			</Carousel>
		</Container>
	);
}
