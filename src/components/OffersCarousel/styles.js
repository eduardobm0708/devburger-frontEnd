import styled from 'styled-components';

export const Container = styled.div`
  /* Garante que o container seja a referência de posição para as setas */
  position: relative;

  padding-left: 40px;
  padding-bottom: 40px;

  .carousel-item {
    padding-right: 40px;
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
  }

  .react-multiple-carousel__arrow--right {
    top: 10px;
  }

`;

export const Title = styled.h2`
  color: #${props => props.theme.gren};
  font-size: 32px;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  font-weight: 700;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 54px;
    height: 4px;
    background-color: #${props => props.theme.gren};
    left: calc(50% - 28px);
  }
`;
