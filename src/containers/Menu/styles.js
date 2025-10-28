import styled from 'styled-components';
import BannerHamburguer from '../../assets/banner-cardapio.svg';
import BackGround from '../../assets/background.svg';
import { Link as link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #${props => props.theme.secondWhite};

background: linear-gradient(
  rgba(255, 255, 255, 0.6),
  rgba(255, 255, 255, 0.6)
), url(${BackGround});
`;

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 480px;
width: 100%;
position: relative;

background-image: url(${BannerHamburguer});
background-repeat: no-repeat;
background-color: ${props => props.theme.mainBlack};
background-position: center;
background-size: cover;
h1 {
  font-family: 'Road Rage', sans-serif;
  font-size: 80px;
  line-height: 65px;
  color: #fff;
  position: absolute;

  right: 20%;
  top: 30%;
}

span {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  position: absolute;
  right: 19%;
  top: 73%;

}
`;

export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 40px;
`;

export const CategoryButton = styled(link)`
  /* Espaçamento e Fonte */
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif; /* Adapte para a fonte do seu projeto */

  /* Borda e Aparência */
  border-radius: 8px;
  border: 2px solid var(--cor-principal);
  cursor: pointer;
  text-decoration: none;
  color: var(--cor-principal);
  background-color: #fff;
  border-bottom: ${props => (props.$isActiveCategory ? `4px solid ${props.theme.lightGray}` : 'none')};

  /* Sombra sutil para dar profundidade */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  /* Transição suave para todas as propriedades */
  transition: all 0.2s ease-in-out;


`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 62px;
  padding: 40px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;
`;

export const ButtonVoltar = styled(link)`
  display: inline-flex;
  align-items: center;

  gap: 8px;
  padding: 10px 22px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #fff;
  background-color: var(--cor-principal, ${props => props.theme.purple});
  border: none;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;

  &:hover {
    background-color: #${props => props.theme.secondBlack}ff;
  }

  &:active {
    background-color: #2c2c2cff;
  }

  &::before {
    content: '←';
    font-size: 18px;
    margin-right: 6px;
  }
`;
