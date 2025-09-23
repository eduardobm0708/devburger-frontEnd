import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { Banner, Container, Content } from './styles';

export function Home() {
	return (
		<main>
			<Banner>
				<h1>Bem-vindo(a)!</h1>
			</Banner>
			<Container>
				<Content>
					<CategoriesCarousel />
					<div>Carrosel Produtos</div>
				</Content>
			</Container>
		</main>
	);
}
