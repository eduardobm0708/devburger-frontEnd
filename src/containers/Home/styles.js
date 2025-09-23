import styled from 'styled-components';

import BannerHome from '../../assets/banner-home.svg';
import BackGround from '../../assets/background.svg';

export const Banner = styled.div`
background: url(${BannerHome});
background-position: center;
background-size: cover;
height: 457px;

h1 {
  font-family: "Road Rage";
  font-size: 80px;
  color: #f4f4f4;
  position: absolute;
  right: 20%;
  top: 10%;
}
`;

export const Container = styled.section`
background: linear-gradient(
  rgba(255, 255, 255, 0.6),
  rgba(255, 255, 255, 0.6)
), url(${BackGround});
height: 500px;
`;

export const Content = styled.div`

`;
