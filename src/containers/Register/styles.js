import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${Background}');
  background-color: #1E1E1E;

 p {
 color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  a {
   color: #FFF;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  }
 }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  color: #9758a6;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: 100%; /* 40px */

`;

export const Form = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

`;

export const InputContainer = styled.div`
font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  label {
    color: #FFF;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
  }

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    background: #FFF;
    padding: 0 16px;
  }

  p {
    color: #cf3057;
    height: 10px;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
  }
`;

export const Link = styled(ReactLink)`
  color: #FFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
