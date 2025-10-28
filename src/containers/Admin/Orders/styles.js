import Select from 'react-select';
import styled from 'styled-components';

export const SelectStatus = styled(Select)`
width: 240px;
`;

export const FilterOption = styled.button`
cursor: pointer;
background: transparent;
border: none;
color: ${props => props.theme.darkGray};
position: relative;
padding: 10px 12px;
font-size: 15px;
line-height: 20px;
border-radius: 8px;
transition: color 180ms ease, background 180ms ease, transform 180ms ease;
display: inline-flex;
align-items: center;
gap: 8px;
font-weight: ${props => (props.$isActiveStatus ? 600 : 500)};
padding-bottom: 14px; /* space for animated underline */

&:hover{
	color: ${props => props.theme.text || props.theme.darkGray};
	background: ${props => (props.theme.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)')};
	transform: translateY(-1px);
}

/* animated underline */
&::after{
	content: '';
	position: absolute;
	left: 12px;
	right: 12px;
	bottom: 6px;
	height: 3px;
	border-radius: 4px;
	background: ${props => (props.$isActiveStatus ? props.theme.purple : 'transparent')};
	transform-origin: left center;
	transform: scaleX(${props => (props.$isActiveStatus ? 1 : 0)});
	transition: transform 260ms cubic-bezier(.2,.9,.2,1), background 260ms ease;
}

/* subtle focus ring for accessibility */
&:focus{
	outline: none;
	box-shadow: 0 0 0 4px ${props => (props.$isActiveStatus ? `${props.theme.purple}33` : `${props.theme.purple}22`)};
}
`;

export const Filter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 20px 36px;
margin: 28px 0;
padding: 8px 12px;
background: ${props => (props.theme.mode === 'dark' ? 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)' : 'linear-gradient(180deg, rgba(0,0,0,0.02), transparent)')};
border-radius: 12px;
box-shadow: 0 6px 18px ${props => (props.theme.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(16,24,40,0.06)')};
width: 100%;


@media (max-width: 640px){
	gap: 12px 18px;
	padding: 6px 8px;
}
`;
