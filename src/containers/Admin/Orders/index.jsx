import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row.jsx';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api.js';
import { Filter, FilterOption } from './styles';
import { orderStatusOptions } from './orderStatus';

// helper estável fora do componente para evitar warnings de hooks
function createData(order) {
	return {
		_id: order._id,
		name: order.user?.name ?? '',
		orderId: order._id,
		date: order.createdAt,
		status: order.status ?? '',
		products: order.products ?? [],
	};
}

export function Orders() {
	const [orders, setOrders] = useState([]); // BACKUP
	const [filteredOrders, setFilteredOrders] = useState([]); // OS VALORES QUE ESTAO NA TELA

	const [activeStatus, setActiveStatus] = useState(0);

	const [rows, setRows] = useState([]);

	// Carrega pedidos da API
	useEffect(() => {
		async function loadOrders() {
			try {
				const { data } = await api.get('orders');
				setOrders(data || []);
				setFilteredOrders(data || []);
			} catch (err) {
				console.error('Failed to load orders:', err);
				setOrders([]);
			}
		}
		loadOrders();
	}, []);

	// Atualiza as linhas da tabela quando orders muda
	useEffect(() => {
		const newRows = (filteredOrders || []).map(order => createData(order));
		setRows(newRows);
	}, [filteredOrders]);

	function handleStatus(status) {
		if (status.id === 0) {
			setFilteredOrders(orders);
		} else {
			const newOrders = orders.filter(order => order.status === status.value);
			setFilteredOrders(newOrders);
		}
		setActiveStatus(status.id);
	}

	useEffect(() => {
		if (activeStatus === 0) {
			setFilteredOrders(orders);
		} else {
			const statusIndex = orderStatusOptions.findIndex(
				item => item.id === activeStatus
			);
			const newFilteredOrders = orders.filter(
				order => order.status === orderStatusOptions[statusIndex].value
			);
			setFilteredOrders(newFilteredOrders);
		}
	}, [orders]);

	return (
		<>
			<Filter>
				{orderStatusOptions.map(status => (
					<FilterOption
						key={status.id}
						onClick={() => handleStatus(status)}
						$isActiveStatus={activeStatus === status.id}
					>
						{status.label}
					</FilterOption>
				))}
			</Filter>

			<TableContainer component={Paper}>
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell>Pedido</TableCell>
							<TableCell>Cliente</TableCell>
							<TableCell>Data do Pedido</TableCell>
							<TableCell>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<Row
								key={row.orderId}
								row={row}
								orders={orders}
								setOrders={setOrders}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
