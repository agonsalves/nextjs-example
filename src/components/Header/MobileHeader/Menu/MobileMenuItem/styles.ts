import styled from 'styled-components';
import {
  hidden,
  none
}                            from '../../../../../utils/themer'
import {globals}             from 'styles/globalStyles'

export const mobileMenuItemStyle = {
  padding: 0,
  margin: 0,
  listStyleType: none,
  firstChild: {
      border: none,
  },
  lastChild: {
      marginBottom: 70
  }
}
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


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubmenuWrapper = styled.div``;
