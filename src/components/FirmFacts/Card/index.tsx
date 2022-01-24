import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import * as S from './styles';
import { FirmFactCardData } from './types';

interface CardProps extends FirmFactCardData {
  style?: object;
}

function Card({
  style,
  description,
  headline,
  image,
  link_text,
  link_url,
}: CardProps) {
  const containerAnimation = {
    y: [24, 0],
    opacity: [0, 1],
  };

  const { url, height, width } = image;

  return (
    <S.Container
      style={style}
      animate={containerAnimation}
      transition={{ duration: 1 }}
    >
      <Image layout="responsive" width={width} height={height} src={url} />
      <S.TextContainer>
        <S.CardTitle>{headline}</S.CardTitle>
        <S.CardDescription>{description}</S.CardDescription>
        <S.ReadMoreButton>
          <span>{link_text}</span>
          <BsArrowRight style={{ margin: '0 0.75rem' }} />
        </S.ReadMoreButton>
      </S.TextContainer>
    </S.Container>
  );
}

export default Card;
