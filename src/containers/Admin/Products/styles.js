import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding: 12px;
	box-sizing: border-box;
`;

/* Desktop table wrapper */
export const TableWrapper = styled.div`
	width: 100%;
	border-radius: 12px;
	overflow: hidden;
	background: ${p => (p.theme.mode === 'dark' ? '#0b0b0b' : '#fff')};
	box-shadow: 0 6px 18px ${p => (p.theme.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(16,24,40,0.06)')};
`;

export const ProductImage = styled.img`
	width: 64px;
	height: 64px;
	max-height: 64px;
	max-width: 96px;
	object-fit: contain;
	background: ${p => (p.theme.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)')};
	padding: 4px;
	border-radius: 8px;
	display: block;
	transition: transform 180ms ease, box-shadow 180ms ease;
`;

export const EditButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	border-radius: 8px;
	background: transparent;
	border: 1px solid ${p => (p.theme.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(16,24,40,0.06)')};
	color: ${p => p.theme.text};
	cursor: pointer;
	transition: transform 140ms ease, box-shadow 140ms ease, background 140ms ease;

	&:hover{
		transform: translateY(-3px);
		box-shadow: 0 6px 18px ${p => (p.theme.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(16,24,40,0.08)')};
		background: ${p => (p.theme.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)')};
	}

	&:focus-visible{
		outline: none;
		box-shadow: 0 0 0 4px ${p => (p.theme.purple ? `${p.theme.purple}33` : '#7c3aed33')};
	}
`;

/* Mobile card layout for small screens */
export const CardList = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 12px;

	@media(min-width: 760px){
		display: none;
	}
`;

export const Card = styled.article`
	display: flex;
	gap: 12px;
	align-items: center;
	padding: 12px;
	border-radius: 12px;
	background: ${p => (p.theme.mode === 'dark' ? '#070707' : '#fff')};
	box-shadow: 0 4px 14px ${p => (p.theme.mode === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(16,24,40,0.04)')};
	transition: transform 160ms ease, box-shadow 160ms ease;

	&:hover{
		transform: translateY(-4px);
		box-shadow: 0 10px 30px ${p => (p.theme.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(16,24,40,0.08)')};
	}

	.meta{
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
`;

/* Desktop-only table tweaks */
export const DesktopOnly = styled.div`
	display: none;

	@media(min-width: 760px){
		display: block;
	}
`;

/* Zebra rows styling for MUI TableCells handled via sx in component, but keep helpers */
export const VisuallyHidden = styled.span`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`;
