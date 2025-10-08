import styled from "styled-components";
import texture from '../../assets/texture.svg'
import background from '../../assets/background.svg'

export const Container = styled.div `
width: 100%;
background: linear-gradient(
  rgba(255, 255, 255, 0.6),
  rgba(255, 255, 255, 0.6)
), url(${background}) ;
min-height: 100vh;


`

export const Banner = styled.div `
background: url(${texture}) no-repeat center;
background-color: #1f1f1f;
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
`

export const Title = styled.h2 `
font-size: 32px;
font-weight: 800;
padding-bottom: 12px;
color: #61a120;
text-align: center;
position: relative;
&::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 56px;
  height: 4px;
  background: #9758A6;
  transform: translateX(-50%);
}
`

export const Content = styled.div `
display: grid;
grid-template-columns: 1fr 20%;
gap: 32px;
width: 100%;
max-width: 1120px;
padding: 0 auto;
`
