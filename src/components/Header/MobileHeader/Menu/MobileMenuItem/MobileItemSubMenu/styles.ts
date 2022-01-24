import styled from 'styled-components';
import {
  hidden,
  none
}                            from 'utils/themer'
import {globals}             from 'styles/globalStyles'
import { mobileMenuItemStyle } from '../styles';

export const mobileMenuSubMenuWrapperStyle = {
  overflow: hidden
}

export const mobileMenuSubMenuStyle = {
  mobile: {
      padding: '16px 0 0 28px',
  }
}

export const mobileMenuSubMenuItemStyle = {
  ...mobileMenuItemStyle,
}

export const mobileMenuSubMenuLinkStyle = {
  mobile: {
      size: 18,
      lineHeight: 22,
      textTransform: none,
      weight: 400,
      paddingBottom: 20
  },
  class: {
      name: 'active',
      color: globals.colors.linkActiveColor
  }
}

export const Wrapper = styled.ul`
  li {
    a {
      color: red;
      text-transform: none;
      font-size: 1.1rem;
      line-height: 1.3rem;
      margin: 0;
      padding: 0;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: none;
      margin-left: 1.1rem;
    }
  }
`;
