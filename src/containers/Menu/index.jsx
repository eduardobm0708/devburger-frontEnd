import { useEffect, useState } from 'react';
import {
	Banner,
	Container,
	CategoryMenu,
	ProductsContainer,
	CategoryButton,
	ButtonVoltar,
} from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../../components/CardProduct';
import { replace, useLocation, useNavigate } from 'react-router-dom';

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const { search } = useLocation();

	const queryParams = new URLSearchParams(search);

	const [activeCategory, setActiveCategory] = useState(() => {
		const categoryId = +queryParams.get('categoria');
		if (categoryId) {
			return categoryId;
		}
		return 0;
	});

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');
			const NewCategories = [{ id: 0, name: 'todas' }, ...data];
			setCategories(NewCategories);
		}

		async function loadProducts() {
			try {
				const { data } = await api.get('/products');

				const newProducts = data.map(product => ({
					...product,
					currencyValue: formatPrice(product.price),
				}));

				setProducts(newProducts);
			} catch (err) {
				setError('Falha ao carregar as ofertas. Tente novamente.');
				console.error(err);
			} finally {
				setLoading(false);
			}
		}
		loadProducts();
		loadCategories();
	}, []);

	useEffect(() => {
		if (activeCategory === 0) {
			setFilteredProducts(products);
		} else {
			const newFilteredProducts = products.filter(
				product => product.category_id === activeCategory
			);
			setFilteredProducts(newFilteredProducts);
		}
	}, [activeCategory, products]);

	return (
		<Container>
			<Banner>
				<h1>
					O MELHOR
					<br />
					HAMBURGER
					<br />
					DA CIDADE!
				</h1>
				<span>esse cardápio é para você!</span>
			</Banner>

			<CategoryMenu>
				{categories.map(category => (
					<CategoryButton
						key={category.id}
						$isActiveCategory={category.id === activeCategory}
						onClick={() => {
							navigate(
								{
									pathname: '/cardapio',
									search: `?categoria=${category.id}`,
								},
								{
									replace: true,
								}
							);
							setActiveCategory(category.id);
						}}
					>
						{category.name}
					</CategoryButton>
				))}

				<ButtonVoltar onClick={() => navigate(-1)}>Voltar</ButtonVoltar>
			</CategoryMenu>

			<ProductsContainer>
				{filteredProducts.map(product => (
					<CardProduct key={product.id} product={product} />
				))}
			</ProductsContainer>
		</Container>
	);
}
