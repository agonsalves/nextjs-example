import styled from 'styled-components';
import {
  center,
  flex,
  none,
  pointer,
  relative
}                     from 'utils/themer'
import {colorPalette} from 'styles/globalStyles'

export const mobileMenuToggleStyle = {
  border: none,
  cursor: pointer,
  display: flex,
  justifyContent: center,
  alignItems: center
}

export const mobileMenuToggleIconStyle = {
  mobile: {
      position: relative,
      size: 26,
      color: colorPalette.blue,
      transition: 'transform all .5s'
  }
}

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
`;
