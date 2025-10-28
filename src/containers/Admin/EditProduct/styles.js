import styled from 'styled-components';
import ReactSelect from 'react-select';
import { Button } from '../../../components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;

`;

export const Form = styled.form`
border-radius: 20px;
background-color: ${props => props.theme.black};
padding: 32px;
width: 100%;
max-width: 480px;
display: flex;
flex-direction: column;
box-shadow: 0 4px 12px ${props => (props.theme.mode === 'dark' ? '#00000080' : '#00000020')};
gap: 12px;
`;

export const InputGroup = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`;

export const Label = styled.label`
color: ${props => props.theme.white};
font-size: 14px;

`;

export const Input = styled.input`
width: 100%;
height: 48px;
border-radius: 8px;
padding: 0 16px;
border: none;
`;

export const LabelUpload = styled.label`
cursor: pointer;
border: 1px dashed ${props => props.theme.white};
border-radius: 8px;
padding: 10px;
display: flex;
color: ${props => props.theme.white};
margin: 20px 0;

> svg {
  width: 24px;
  height: 24px;
  fill: ${props => props.theme.white};
  margin-right: 10px;
}

input {
  display: none;
}
`;

export const Select = styled(ReactSelect)``;

export const SubmitButton = styled(Button)`
margin-top: 35px;
`;

export const ErrorMessage = styled.span`
color: ${props => props.theme.darkRed};
font-size: 13px;
font-weight: 500;
margin-top: 4px;
`;

export const ContainerCheckBox = styled.div`
cursor: pointer;
	display: flex;
	align-items: center;
	gap: 8px;

  input {
    cursor: pointer;
  }
`;
