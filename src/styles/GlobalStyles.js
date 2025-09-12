import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

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
