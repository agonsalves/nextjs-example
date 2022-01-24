import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import ArrowButton from '../ArrowButton';
import { PeopleData } from '../AsideContent/PeoplesWidget/types';
import { PracticeAreaData } from '../AsideContent/PracticeAreaWidget/types';
import Item from './Item';
import { ItemProps } from './Item/types';
import * as S from './styles';

export interface ListProps {
  section: {
    post_title: string;
    related_posts: ItemProps[];
    post_name: string;
    slug: string;
    people?: PeopleData[],
    practice_area?: PracticeAreaData[];
  };
}

function List({ section }: ListProps) {
  const { post_title, related_posts, post_name, slug } = section;
  const [visibleItems, setVisibleItems] = useState(3);
  const { colors } = useTheme();

  return (
    <S.Container id={post_name}>
      <h2>{post_title}</h2>
      {related_posts.slice(0, visibleItems).map((item, index) => (
        <Item key={item.id} item={item} index={index} />
      ))}
      {related_posts.length > 3 && visibleItems === 3 && (
        <div>
          <ArrowButton
            direction="down"
            onClick={() => setVisibleItems(related_posts.length)}
            size={24}
            text={`More ${post_title}`}
            hasHoverAnimation={false}
            iconBackground={colors.yellow}
            padding={0.1}
            textColor={colors.blue}
            textHoverColor={colors.yellow}
          />
        </div>
      )}
      {related_posts.length > 3 && visibleItems > 3 && (
        <Link href={`/${slug}#${post_name}`}>
          <S.ExpandedButtons>
            <ArrowButton
              direction="up"
              onClick={() => setVisibleItems(3)}
              size={24}
              text={`Less ${post_title}`}
              hasHoverAnimation={false}
              iconBackground={colors.yellow}
              padding={0.1}
              textColor={colors.blue}
              textHoverColor={colors.yellow}
            />
            <S.Button>
              <span>All {post_title}</span>
              <BsArrowRight size={24} />
            </S.Button>
          </S.ExpandedButtons>
        </Link>
      )}
    </S.Container>
  );
}

export default List;
