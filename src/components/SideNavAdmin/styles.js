import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.aside`
  width: 260px;
  min-width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: linear-gradient(180deg, ${props => props.theme.black} 0%, #2d2d2f 100%);
  color: ${props => props.theme.white};
  box-shadow: 2px 0 12px rgba(15, 15, 20, 0.35);
  padding: 24px 16px;
  left: 0;
  top: 0;

  transition: width 220ms ease;

  img {
    width: 140px;
    margin: 6px auto 24px;
    display: block;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.35));
  }

  &::after {
    content: "  ";
    display: block;
    height: 1px;
    background: rgba(255,255,255,0.04);
    margin: 16px 0 8px;
  }

  /* responsive: collapse to icons-only on small screens */
  @media (max-width: 900px) {
    width: 72px;
    min-width: 72px;
    padding: 18px 8px;

    img {
      width: 44px;
      margin: 0 auto 18px;
    }
  }
`;

export const NavLinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 4px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.08) transparent;

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.06);
    border-radius: 8px;
  }
`;

/* usa o NavLink do react-router para receber estado "ativo" automaticamente */
export const NavLink = styled(RouterNavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: ${props => props.theme.white};
  font-weight: 600;
  font-size: 14px;
  transition: background-color 180ms ease, transform 120ms ease;
  position: relative;

  svg {
    flex-shrink: 0;
    color: ${props => props.theme.lightGray || '#cfcfd6'};
    width: 18px;
    height: 18px;
    opacity: 0.95;
  }

  &:hover {
    background: rgba(83, 58, 255, 0.12);
    transform: translateX(4px);
    color: ${props => props.theme.white};
  }

  /* aplica também quando react-router adiciona aria-current="page" ou classe "active" */
  &.active,
  &[aria-current='page'],
  &[data-active='true'] {
    background: linear-gradient(90deg, rgba(83,58,255,0.18), rgba(83,58,255,0.06));
    box-shadow: inset 4px 0 0 0 ${props => props.theme.purple || '#533afd'};
    color: ${props => props.theme.white};
  }

  span {
    display: inline-block;
    white-space: nowrap;
  }

  /* responsive adjustments for the link */
  @media (max-width: 900px) {
    justify-content: center;
    padding: 10px;

    span {
      display: none;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid rgba(255,255,255,0.03);

  a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 8px;
    color: ${props => props.theme.white};
    text-decoration: none;
    transition: background 160ms ease;
  }

  a:hover {
    background: rgba(255, 75, 75, 0.07);
  }

  a .signout {
    color: #ff6b6b;
  }
`;
