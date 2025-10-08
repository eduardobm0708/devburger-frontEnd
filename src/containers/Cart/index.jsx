import Logo from '../../assets/Logo.svg'
import { Container, Banner, Content, Title } from "./styles";

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
{/* <CartItem} /> */}
{/* <CartResume} /> */}
      </Content>
    </Container>
  )
}
