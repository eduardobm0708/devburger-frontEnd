import { Button, Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import {
	ButtonGroup,
	EmptyCart,
	ProductImage,
	TotalPrince,
	TrashImage,
} from './styles';
import TrashIcon from '../../assets/trash.svg';

export function CartItems() {
	const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
		useCart();

	console.log(cartProducts);
	return (
		<Table.Root>
			<Table.Header>
				<Table.Tr>
					<Table.Th></Table.Th>
					<Table.Th>Itens</Table.Th>
					<Table.Th>Preço</Table.Th>
					<Table.Th>Quantidade</Table.Th>
					<Table.Th>Total</Table.Th>
					<Table.Th></Table.Th>
				</Table.Tr>
			</Table.Header>
			<Table.Body>
				{cartProducts?.length ? (
					cartProducts
						.filter(product => product && product.price && product.quantity)
						.map(product => (
							<Table.Tr key={product.id}>
								<Table.Td>
									<ProductImage src={product.url} alt={product.name} />
								</Table.Td>
								<Table.Td>{product.name}</Table.Td>
								<Table.Td>{product.currencyValue}</Table.Td>
								<Table.Td>
									<ButtonGroup>
										<button
											type="button"
											onClick={() => decreaseProduct(product.id)}
										>
											-
										</button>
										{product.quantity}
										<button
											type="button"
											onClick={() => increaseProduct(product.id)}
										>
											+
										</button>
									</ButtonGroup>
								</Table.Td>
								<Table.Td>
									<TotalPrince>
										{formatPrice(product.quantity * product.price)}
									</TotalPrince>
								</Table.Td>
								<Table.Td>
									<TrashImage
										src={TrashIcon}
										alt="lixeira"
										onClick={() => deleteProduct(product.id)}
									></TrashImage>
								</Table.Td>
							</Table.Tr>
						))
				) : (
					<Table.Tr>
						<Table.Td colSpan={5}>
							<EmptyCart>Seu Carrinho está vazio!</EmptyCart>
						</Table.Td>
					</Table.Tr>
				)}
			</Table.Body>
		</Table.Root>
	);
}
