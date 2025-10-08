import {
	Container,
	HeaderLink,
	LinkContainer,
	Logout,
	Navigation,
	Options,
	Profile,
	Content,
} from './styles';

import { UserCircle, ShoppingCart } from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

export function Header() {
	const navigate = useNavigate();
	const { logout, userInfo } = useUser();

	const { pathname } = useResolvedPath();

	function LogoutUser() {
		logout();
		navigate('/login');
	}

	return (
		<Container>
			<Content>
				<Navigation>
					<div>
						<HeaderLink to="/" $isActive={pathname === '/'}>
							Home
						</HeaderLink>
						<hr></hr>
						<HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
							Cardápio
						</HeaderLink>
					</div>
				</Navigation>
				<Options>
					<Profile>
						<UserCircle color="#333" size={24} />
						<div>
							<p>
								Olá, <span>{userInfo?.name}</span>
							</p>
							<Logout onClick={LogoutUser}>Sair</Logout>
						</div>
					</Profile>

					<LinkContainer to="/carrinho">
						<ShoppingCart color="#333" size={24} />
						<HeaderLink to="/carrinho" $isActive={pathname === '/carrinho'}>
							Carrinho
						</HeaderLink>
					</LinkContainer>
				</Options>
			</Content>
		</Container>
	);
}
