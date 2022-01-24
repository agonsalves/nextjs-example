import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import ArrowButton from '../ArrowButton';
import Card from './Card';
import * as S from './styles';
import { PostsProps } from './types';

function Posts({ section, template, isFirst = false }: PostsProps) {
  const {
    post_title: title,
    related_posts: posts,
    visible,
    post_name,
    slug,
  } = section;

  const { colors } = useTheme();
  const [visibleItems, setVisibleItems] = useState(3);
  switch(template) {
    case 'publications':
      return (
        <S.Wrapper visible={visible} id={post_name}>
          <S.Container isFirst={isFirst}>
            <Card post={section} isFirst={isFirst}/>
          </S.Container>
        </S.Wrapper>
      )
    default:
      return(
        <S.Wrapper visible={visible} id={post_name}>
          <S.Heading>
            <h2>{title}</h2>
            <S.Button template={template}>
              <span>Go to full blog</span>
              <BsArrowRight size={24} />
            </S.Button>
          </S.Heading>
          <S.Container>
            <Card key={section.id} post={section} />
          </S.Container>
          <S.Footer>
            <ArrowButton
              direction="down"
              size={24}
              text={`More ${title.split(' ')[0]}`}
              hasHoverAnimation={false}
              iconBackground={colors.yellow}
              padding={0.1}
              textColor={colors.blue}
              textHoverColor={colors.yellow}
            />
            <Link href={`/${slug}#${post_name}`}>
              <ArrowButton
                direction="up"
                onClick={() => setVisibleItems(3)}
                size={24}
                text={`Less ${title.split(' ')[0]}`}
                hasHoverAnimation={false}
                iconBackground={colors.yellow}
                padding={0.1}
                textColor={colors.blue}
                textHoverColor={colors.yellow}
              />
            </Link>
          </S.Footer>
        </S.Wrapper>
      )
  }
}

export default Posts;
