import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`

.carousel-item {
  padding-right: 40px;
}
padding-left: 40px;

  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
  }

  .react-multiple-carousel__arrow--right {
    top: 10px;
    right: 95px;
  }
`;

export const Title = styled.h2`
color: ${props => props.theme.purple};
font-size: 32px;
padding-bottom: 12px;
position: relative;
text-align: center;
font-weight: 700;
margin-bottom: 40px;
margin-top: 20px;

&::after {
  content: '';
  position: absolute;
  bottom: 0;

  width: 54px;
  height: 4px;
  background-color: ${props => props.theme.purple};
  left: calc(50% - 28px);
}
`;

export const ContainerItems = styled.div`
  background: url(${props => props.$imageUrl}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 90%;
  height: 260px;


`;

export const CategoryButton = styled(Link)`
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 6.5px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 50px;
    font-weight: 500px;
    text-decoration: none;

    &:hover
      {background-color: ${props => props.theme.purple};}
`;
