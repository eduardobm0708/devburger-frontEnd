import styled from 'styled-components';

export const Container = styled.div`
height: 50px;
background-color: ${props => props.theme.darkPurple};
width: 100vw;
display: flex;
align-items: center;
justify-content: center;


p {
  color: #fff;
  font-size: 14px;
  font-weight: lighter;
}
`;
