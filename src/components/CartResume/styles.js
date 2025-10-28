import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  padding: 32px 32px 24px 32px;
  width: 370px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 0;

  .container-top {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 18px;

    .title {
      font-size: 20px;
      font-weight: 700;
      color: #${props => props.theme.secondBlack};
      background: #${props => props.theme.secondBlack};
      color: #fff;
      border-radius: 10px 10px 0 0;
      padding: 12px 0 12px 24px;
      margin: -32px -32px 0 -32px;
      letter-spacing: 0.5px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      color: #${props => props.theme.secondBlack};
      padding: 0 0 0 0;
    }

    .row:last-child {
      margin-bottom: 0;
    }
  }

  .container-bottom {
    border-top: 1px solid #e0e0e0;
    padding-top: 18px;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .total-label {
      font-size: 18px;
      font-weight: 700;
      color: #${props => props.theme.secondBlack};
    }

    .total-price {
      font-size: 22px;
      color: #${props => props.theme.secondBlack};
      font-weight: 900;
      letter-spacing: 0.5px;
    }
  }

  .resume-btn {
    margin-top: 28px;
    width: 100%;
    background: #a259c6;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    border-radius: 0 0 10px 10px;
    padding: 16px 0;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #8d3fae;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    min-width: unset;
    padding: 24px 8px 16px 8px;
    .title {
      padding-left: 12px;
      margin-left: -8px;
      margin-right: -8px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center; /* Centraliza o conjunto no meio da tela */
  align-items: flex-start;
  gap: 48px; /* Espaço entre tabela e resumo */
  margin-top: 32px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Root = styled.table`
  width: 700px;
  border-collapse: separate;
  border-spacing: 0;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: #fff;
  background-color: #${props => props.theme.secondBlack};
  border-bottom: 1px solid #${props => props.theme.lightGray};
  font-size: 16px;
  font-weight: 700;

  &:first-child {
    border-top-left-radius: 20px;
  }
  &:last-child {
    border-top-right-radius: 20px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: #1b1b1b;
  font-weight: 500;
  line-height: 115%;
  font-size: 16px;
`;

export const Body = styled.tbody`
  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
  tr:hover {
    background-color: #e0e0e0;
  }
`;
