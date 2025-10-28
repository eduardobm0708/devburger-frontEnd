import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';

export function UserLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
