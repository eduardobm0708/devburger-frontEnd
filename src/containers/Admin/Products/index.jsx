import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import {
	Container,
	ProductImage,
	EditButton,
	CardList,
	Card,
	TableWrapper,
	DesktopOnly,
} from './styles';
import { CheckCircle, Pencil, XCircle } from '@phosphor-icons/react';
import { formatPrice } from '../../../utils/formatPrice';

export function Products() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get('/products');

			setProducts(data);
		}

		loadProducts();
	}, []);

	function isOffer(offer) {
		if (offer) {
			return <CheckCircle color="#61a120" width={20} height={20} />;
		} else {
			return <XCircle color="#c53030" width={20} height={20} />;
		}
	}

	function editProduct(product) {
		navigate('/admin/editar-produto', { state: { product } });
	}

	return (
		<Container>
			<TableWrapper>
				<DesktopOnly>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="Tabela de produtos">
							<TableHead>
								<TableRow>
									<TableCell>Nome</TableCell>
									<TableCell align="center">Preço</TableCell>
									<TableCell align="center">Produto em Oferta</TableCell>
									<TableCell align="center">Imagem do Produto</TableCell>
									<TableCell align="center">Editar</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{products.map(product => (
									<TableRow
										key={product.id}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell component="th" scope="row">
											{product.name}
										</TableCell>
										<TableCell align="center">
											{formatPrice(product.price)}
										</TableCell>
										<TableCell align="center">
											{isOffer(product.offer)}
										</TableCell>
										<TableCell align="center">
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
												}}
											>
												<ProductImage
													src={product.url}
													alt={`Imagem do produto ${product.name}`}
												/>
											</div>
										</TableCell>
										<TableCell align="center">
											<EditButton
												aria-label={`Editar ${product.name}`}
												onClick={() => editProduct(product)}
											>
												<Pencil />
											</EditButton>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</DesktopOnly>
				{/* Mobile cards */}
				<CardList aria-live="polite">
					{products.map(p => (
						<Card key={`card-${p.id}`}>
							<ProductImage src={p.url} alt={`Imagem do produto ${p.name}`} />
							<div className="meta">
								<strong>{p.name}</strong>
								<span>Preço: {p.price}</span>
								<span>Estoque: {p.stock ?? '—'}</span>
							</div>
							<div style={{ marginLeft: 'auto' }}>
								<EditButton aria-label={`Editar ${p.name}`}>
									<Pencil />
								</EditButton>
							</div>
						</Card>
					))}
				</CardList>
			</TableWrapper>
		</Container>
	);
}
