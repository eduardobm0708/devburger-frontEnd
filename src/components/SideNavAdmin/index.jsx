import * as Icons from '@phosphor-icons/react';
import { Container, NavLinkContainer, NavLink, Footer } from './styles';
import { useUser } from '../../hooks/UserContext';
import Logo from '../../assets/logo.svg';
import { navLinks } from './navLinks';

// fallback para o ícone de logout
const SignOutIcon = Icons.SignOutSimple || Icons.SignOut || (() => null);

export function SideNavAdmin() {
	const { logout } = useUser();
	return (
		<Container>
			<img src={Logo} alt="Logo" />
			<NavLinkContainer>
				{navLinks.map(link => (
					<NavLink key={link.id} to={link.path}>
						{link.icon}
						<span>{link.label}</span>
					</NavLink>
				))}
			</NavLinkContainer>
			<Footer>
				<NavLink to="/login" onClick={logout}>
					<SignOutIcon size={20} weight="bold" />
					<span>Sair</span>
				</NavLink>
			</Footer>
		</Container>
	);
}
