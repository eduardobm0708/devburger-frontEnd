import * as Icons from '@phosphor-icons/react';

// tenta nomes comuns / fallback para evitar erro se um nome foi marcado/deprecated/renomeado
const Receipt = Icons.Receipt || Icons.ReceiptIcon || (() => null);
const List = Icons.List || Icons.ListIcon || (() => null);
const ListPlus = Icons.ListPlus || Icons.ListPlusIcon || (() => null);

export const navLinks = [
	{
		id: 1,
		label: 'Pedidos',
		path: '/admin/pedidos',
		icon: <Receipt size={18} />,
	},
	{
		id: 2,
		label: 'Produtos',
		path: '/admin/produtos',
		icon: <List size={18} />,
	},
	{
		id: 3,
		label: 'Adicionar Produto',
		path: '/admin/novo-produto',
		icon: <ListPlus size={18} />,
	},
];
