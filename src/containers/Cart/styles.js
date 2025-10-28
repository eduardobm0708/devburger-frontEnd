import styled from 'styled-components';
import texture from '../../assets/texture.svg';
import background from '../../assets/background.svg';

export const Container = styled.div`
width: 100%;
background: linear-gradient(
  rgba(255, 255, 255, 0.6),
  rgba(255, 255, 255, 0.6)
), url(${background}) ;
min-height: 100vh;


`;

export const Banner = styled.div`
background: url(${texture}) no-repeat center;
background-color: #${props => props.theme.mainBlack};
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
position: relative;

height: 193px;

img {
  height: 130px;
}
`;

export const Title = styled.h2`
font-size: 32px;
font-weight: 800;
padding-bottom: 12px;
color: #${props => props.theme.gren};
text-align: center;
position: relative;
&::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 56px;
  height: 4px;
  background: ${props => props.theme.purple};
  transform: translateX(-50%);
}
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  margin-top: 32px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;
