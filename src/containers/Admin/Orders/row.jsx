import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import { SelectStatus } from './styles';
import { orderStatusOptions } from './orderStatus';
import { api } from '../../../services/api'; // <-- import do api
import { toast } from 'react-toastify';

export function Row({ row, setOrders, orders }) {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const placeholder = 'https://via.placeholder.com/80?text=no+img';

	// controla localmente o status para refletir imediatamente a mudança
	const [status, setStatus] = useState(row.status);

	// envia para a API e atualiza localmente em caso de sucesso
	async function newStatusOrder(id, newStatus) {
		setLoading(true);
		try {
			const resp = await api.put(
				`orders/${id}`,
				{ status: newStatus },
				{ validateStatus: () => true }
			);

			const newOrders = orders.map(order =>
				// compara ambos _id e orderId para evitar inconsistência de chave
				order._id === id || order.orderId === id
					? { ...order, status: newStatus }
					: order
			);

			if (resp.status >= 200 && resp.status < 300) {
				// atualiza lista de pedidos no estado pai
				setOrders(newOrders);
				// atualiza estado local do select
				setStatus(newStatus);
				toast.success('Status atualizado com sucesso.');
			} else {
				console.error('Falha ao atualizar status', resp.status, resp.data);
				toast.error('Falha ao atualizar status.');
			}
		} catch (err) {
			console.error('Erro na requisição de atualização de status', err);
			toast.error('Erro ao conectar com o servidor.');
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(prev => !prev)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.orderId}
				</TableCell>
				<TableCell>{row.name || '-'}</TableCell>
				<TableCell>{formatDate(row.date)}</TableCell>
				<TableCell>
					<SelectStatus
						options={orderStatusOptions.filter(s => s.id !== 0)}
						placeholder="Selecione o status"
						// usa value controlado para refletir mudanças
						value={orderStatusOptions.find(s => s.value === status) || null}
						onChange={option => newStatusOrder(row.orderId, option?.value)}
						isLoading={loading}
						menuPortalTarget={document.body}
					/>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								Pedido
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Quantidade</TableCell>
										<TableCell>Produto</TableCell>
										<TableCell>Categoria</TableCell>
										<TableCell>Imagem</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{(row.products || []).map(product => (
										<TableRow key={product._id || product.id || product.name}>
											<TableCell component="th" scope="row">
												{product.quantity ?? product.qty ?? 1}
											</TableCell>
											<TableCell>{product.name || '-'}</TableCell>
											<TableCell>{product.category || '-'}</TableCell>
											<TableCell>
												<img
													src={product.url || placeholder}
													alt={product.name || 'produto'}
													style={{ maxWidth: 80, borderRadius: 6 }}
												/>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}

Row.propTypes = {
	orders: PropTypes.array.isRequired,
	setOrders: PropTypes.func.isRequired,
	row: PropTypes.shape({
		orderId: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		products: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
				_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
				category: PropTypes.string,
				name: PropTypes.string,
				price: PropTypes.number,
				quantity: PropTypes.number,
				url: PropTypes.string,
			})
		).isRequired,
		status: PropTypes.string.isRequired,
	}).isRequired,
};
