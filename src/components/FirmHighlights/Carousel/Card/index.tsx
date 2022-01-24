import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import * as S from './styles';
import { FirmHighlightData } from './types';

interface CardProps {
  item: FirmHighlightData;
}

function Card({ item }: CardProps) {
  const { post_title, post_type, thumbnail_teaser, full_content } = item;

  return (
    <S.Wrapper>
      <S.Container>
        <span>{post_type}</span>
        {thumbnail_teaser && (
          <S.ImageContainer>
            <Image
              width={thumbnail_teaser.width}
              height={thumbnail_teaser.height}
              src={thumbnail_teaser.url}
              alt="Banner"
            />
          </S.ImageContainer>
        )}
        <h3>{post_title}</h3>
        {!thumbnail_teaser && (
          <S.Content
            dangerouslySetInnerHTML={{ __html: full_content }}
          ></S.Content>
        )}
      </S.Container>
      <S.ReadMoreButton style={{ bottom: 0 }}>
        <span>Read More</span>
        <BsArrowRight style={{ margin: '0 0.75rem' }} />
      </S.ReadMoreButton>
    </S.Wrapper>
  );
}

export default Card;
