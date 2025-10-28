import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
background-color: ${props => props.theme.mainBlack};
width: 100%;
height: 72px;

box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
padding: 0 56px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  hr {
    height: 32px;
    border: 1px solid #333;
  }
`;

export const HeaderLink = styled(Link)`
color: ${props => (props.$isActive ? props => props.theme.purple : props => props.theme.white)};
border-bottom: ${props => (props.$isActive ? `2px solid ${props.theme.purple}` : 'none')};
font-size: 14px;
text-decoration: none;
transition: color 200ms;

&:hover {
    color: ${props => props.theme.purple};
}
`;

export const Options = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 48px;

`;

export const Profile = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
font-size: 14px;

p {
    color: #fff;
    line-height: 90%;
    font-weight: 300;

    span {
        font-weight: 700;
        color: ${props => props.theme.purple};
    }
}


`;

export const LinkContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

export const Logout = styled.button`
  color: ${props => props.theme.red};
  text-decoration: none;
  font-weight: 700;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0; /* Garante que não há preenchimento padrão */
`;
