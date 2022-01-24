import styled from 'styled-components';

interface WrapperProps {
  iconBackground?: string;
  hasHoverAnimation?: boolean;
  textHoverColor?: string;
}

interface IconContainerProps {
  size: number;
  padding?: number;
}

interface HelperTextProps {
  color?: string;
}

export const Wrapper = styled.button<WrapperProps>`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;

  div {
    color: ${({ theme }) => theme.colors?.white};
    background-color: ${({ iconBackground }) =>
      iconBackground ? iconBackground : 'rgba(255, 255, 255, 0.125)'};
  }
  &:hover {
    div {
      color: ${({ theme, hasHoverAnimation }) =>
        hasHoverAnimation && theme.colors.yellow};
      background-color: ${({ theme, hasHoverAnimation }) =>
        hasHoverAnimation && theme.colors.white};
    }
    span {
      color: ${({ textHoverColor }) => textHoverColor};
    }
  }
`;

export const IconContainer = styled.div<IconContainerProps>`
  padding: ${({ padding }) => (padding ? padding : '0.5rem')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size / 16 + 1}rem;
  height: ${({ size }) => size / 16 + 1}rem;
  transition: background-color 0.2s;
`;

export const HelperText = styled.span<HelperTextProps>`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.125rem;
  color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  margin-left: 0.85rem;
`;
