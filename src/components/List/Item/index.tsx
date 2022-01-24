import { formatDate } from '@/utils/format';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import * as S from './styles';
import { ItemProps } from './types';

export interface ListItemProps {
  item: ItemProps;
  index: number;
}

function Item({ item, index }: ListItemProps) {
  const {
    news_item_type: typeArray,
    thumbnail_teaser,
    date,
    post_title,
    full_content,
    post_type,
    slug,
  } = item;
  const type = typeArray && typeArray[0];
  const createMarkup = () => ({ __html: full_content });
  const isFirstItem = index === 0 && post_type !== 'case-study';

  return (
    <S.Wrapper isFirstItem={isFirstItem}>
      <S.Container>
        {type && <span>{type.term}</span>}
        <S.Title isFirstItem={isFirstItem}>{post_title}</S.Title>
        {date && <time>{formatDate(date)}</time>}
        {isFirstItem && post_type !== 'case-study' && (
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        )}
        {!type && (
          <Link href={slug}>
            <button>
              <span>Read more</span>
              <BsArrowRight size={24} />
            </button>
          </Link>
        )}
      </S.Container>
      {thumbnail_teaser && (
        <S.ImageContainer>
          <img src={thumbnail_teaser.url} alt="Thumbnail" />
        </S.ImageContainer>
      )}
    </S.Wrapper>
  );
}

export default Item;
