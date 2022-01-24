import React from 'react';
import {
  BsArrowDown,
  BsArrowLeft,
  BsArrowRight,
  BsArrowUp,
} from 'react-icons/bs';
import * as S from './styles';

interface ArrowButtonProps {
  size: number;
  direction: string;
  text?: string;
  onClick?: () => void;
  iconBackground?: string;
  padding?: number;
  hasHoverAnimation?: boolean;
  textColor?: string;
  textHoverColor?: string;
}

function ArrowButton({
  size,
  direction,
  text,
  onClick,
  padding,
  iconBackground,
  hasHoverAnimation = true,
  textColor,
  textHoverColor,
}: ArrowButtonProps) {
  return (
    <S.Wrapper
      onClick={onClick}
      iconBackground={iconBackground}
      hasHoverAnimation={hasHoverAnimation}
      textHoverColor={textHoverColor}
    >
      <S.IconContainer size={size} padding={padding}>
        {direction === 'down' && <BsArrowDown size={size} />}
        {direction === 'up' && <BsArrowUp size={size} />}
        {direction === 'left' && <BsArrowLeft size={size} />}
        {direction === 'right' && <BsArrowRight size={size} />}
      </S.IconContainer>
      {text && <S.HelperText color={textColor}>{text}</S.HelperText>}
    </S.Wrapper>
  );
}

export default ArrowButton;
