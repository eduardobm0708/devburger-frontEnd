import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;

}

button {
  cursor: pointer;
}

`;

export default GlobalStyle;
