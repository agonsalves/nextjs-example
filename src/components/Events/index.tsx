import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import ArrowButton from '../ArrowButton';
import Card from './Card';
import * as S from './styles';
import { EventsProps } from './types';

function Events({ section }: EventsProps) {
  const { post_title, related_posts, visible, post_name, slug } = section;
  const { colors } = useTheme();
  const [visibleItems, setVisibleItems] = useState(2);

  if (!visible) {
    return null;
  }

  return (
    <S.Wrapper id={post_name}>
      <h2>{post_title}</h2>
      <S.Container>
        {related_posts && related_posts.slice(0, visibleItems).map(event => (
          <Card key={event.id} event={event} />
        ))}
      </S.Container>
      <S.Buttons>
        {(related_posts && related_posts.length > 2) && visibleItems === 2 && (
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
        )}
        {(related_posts && related_posts.length > 2) && visibleItems > 2 && (
          <Link href={`/${slug}#${post_name}`}>
            <ArrowButton
              direction="up"
              onClick={() => setVisibleItems(2)}
              size={24}
              text={`Less ${post_title}`}
              hasHoverAnimation={false}
              iconBackground={colors.yellow}
              padding={0.1}
              textColor={colors.blue}
              textHoverColor={colors.yellow}
            />
          </Link>
        )}
      </S.Buttons>
    </S.Wrapper>
  );
}

export default Events;
