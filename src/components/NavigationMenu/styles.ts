import styled, { css } from 'styled-components';

interface ItemMenuProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  margin-bottom: 3rem;
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const ItemMenu = styled.li<ItemMenuProps>`
  float: left;
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 3px solid ${({ theme }) => theme.colors.yellow};
    `}

  a {
    :hover {
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }
`;

export const ItemMenuLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  text-decoration: none;

  :visited {
    color: ${({ theme }) => theme.colors.white};
  }
`;
