import styled from 'styled-components';

export const Container = styled.div`

.carousel-item {
  padding-right: 40px;
}
padding-left: 40px;
`;

export const Title = styled.h2`
color: #9758a6;
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
  background-color: #9758a6;
  left: calc(50% - 28px);
}
`;

export const ContainerItems = styled.div`
  background: url(${props => props.imageUrl}), no-repeat ;
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 90%;
  height: 260px;

  p {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 6.5px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 50px;
  }
`;
