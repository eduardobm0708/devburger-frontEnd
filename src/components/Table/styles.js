import styled from 'styled-components';

export const Root = styled.table`
  width: 840px;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: #fff;
  background-color: #${props => props.theme.secondBlack};
  border-bottom: ${props => (props.$isActiveCategory ? `4px solid ${props.theme.purple}` : 'none')};

  &:last-child {
    border-top-right-radius: 20px;
  }

  &:first-child {
    border-top-left-radius: 20px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: #1b1b1b;
  font-weight: 500;
  line-height: 115%;
`;

export const Body = styled.tbody`
  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
  tr:hover {
    background-color: #e0e0e0;
  }
`;
