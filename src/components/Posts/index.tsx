import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import ArrowButton from '../ArrowButton';
import Card from './Card';
import * as S from './styles';
import { PostsProps } from './types';

function Posts({ section }: PostsProps) {
  const {
    page_template: template,
    post_title: title,
    related_posts: posts,
    visible,
    post_name,
    slug,
    pageTitle
  } = section;
  const { colors } = useTheme();
  const [visibleItems, setVisibleItems] = useState(3);

  return (
    <S.Wrapper visible={visible} id={post_name}>
      <S.Heading>
        <h2>{title}</h2>
        <S.Button template={template}>
          <span>Go to full blog</span>
          <BsArrowRight size={24} />
        </S.Button>
      </S.Heading>
      <S.Container>
        {posts?.slice(0, visibleItems).map((post, index) => (
          <Card key={post.id} post={post} dataList={posts} author={pageTitle} cardIndex={index}/>
        ))}
      </S.Container>
      <S.Footer>
        {posts?.length > 3 && visibleItems === 3 && (
          <ArrowButton
            direction="down"
            onClick={() => setVisibleItems(posts.length)}
            size={24}
            text={`More ${title.split(' ')[0]}`}
            hasHoverAnimation={false}
            iconBackground={colors.yellow}
            padding={0.1}
            textColor={colors.blue}
            textHoverColor={colors.yellow}
          />
        )}
        {posts?.length > 3 && visibleItems > 3 && (
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
        )}
      </S.Footer>
    </S.Wrapper>
  );
}

export default Posts;
