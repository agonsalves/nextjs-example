import styled from 'styled-components';
import {
  absolute,
  center,
  flex,
  hidden,
  none,
  normal,
  pointer,
  relative,
  spaceBetween,
  uppercase,
  white
}                from 'utils/themer'
import {globals} from 'styles/globalStyles'

export const mobileMenuHeaderBackgroundStyle = {
  mobile: {
      height: globals.style.mobileHeaderHeight,
      width: '100%',
      background: white
  }
}
export const mobileMenuWrapperStyle = {
  position: absolute,
  font: globals.fonts.heading,
  right: 0,
  width: '100%',
  margin: 0,
  left: 0,
  top: 0,
  zIndex: -1
}
export const mobileMenuStyle = {
  font: globals.fonts.body,
  backgroundColor: white,
  listStyle: none,
  top: 0,
  margin: 0,
  position: relative,
  width: '100%',
  left: 0,
  padding: '33px 0',
  overflow: hidden,
  overflowY: 'scroll',
  height: '100vh',
  transition: 'height 350ms',
  zIndex: globals.zIndex.overlay + 1,
  empty: {
      display: none
  },
  child: [
      {
          selector: '> li',
          lastOfType: {
              child: {
                  selector: '> span',
                  mobile: {
                      paddingBottom: 22,
                  }
              }
          }
      },
  ],
}

export const mobileMenuLinkStyle = {
  display: flex,
  justifyContent: spaceBetween,
  alignItems: center,
  textDecoration: none,
  fontWeight: normal,
  cursor: pointer,
  paddingLeft: 25,
  color: globals.colors.headingColor,
  textTransform: uppercase,
  hover: {
      color: globals.colors.linkHoverColor,
  },
  mobile: {
      fontSize: 20,
      lineHeight: 40,
      padding: '0 0 15px 25px',
  },
  class: {
      name: 'active',
      color: globals.colors.linkActiveColor,
      hover: {
          color: globals.colors.linkActiveColor
      }
  }
}

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 77px;
  left: 0;
  padding: 33px 30px;

  li {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 20px;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;
