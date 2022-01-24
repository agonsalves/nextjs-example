import { formatDate } from '@/utils/format';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as S from './styles';
import { Author, Post } from './types';

interface CardProps {
  post?: Post;
  isFirst?: boolean;
}

function Card({ post, isFirst }: CardProps) {
  const {
    date,
    full_content: content,
    post_title,
    post_type,
    slug,
    visible,
    byline,
    display_date,
  } = post;

  const createMarkup = () => ({ __html: content });

  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const { bp_authors, bp_guest_authors } = post;

    if (bp_authors) {
      return setAuthors(bp_authors.concat(bp_guest_authors));
    }

    if (!bp_authors && bp_guest_authors) {
      return setAuthors(bp_guest_authors);
    }
  }, [setAuthors]);

  if (!visible) {
    return null;
  }

  return (
    <Link href={slug}>
      <S.Wrapper isFirst={isFirst}>
        <S.Container type={post_type} isFirst={isFirst}>
          {post.publication_type?.map(({ id, term }) => (
            <span key={id}>{term}</span>
          ))}
          <h4>{post_title}</h4>
          <S.Description>
            {/* {content && !post.thumbnail_teaser && (
              <div dangerouslySetInnerHTML={createMarkup()}></div>
            )} */}
            {display_date ? (
              <time>{display_date}</time>
            ) : (
              <time>{formatDate(date)}</time>
            )}
            {authors.length ? (
              <p>{authors.map(({ post_title }) => post_title).join(', ')}</p>
            ) : (
              <p>{byline}</p>
            )}
          </S.Description>
        </S.Container>
        {post?.thumbnail_teaser && (
          <S.ImageContainer>
            <img src={post.thumbnail_teaser.url} alt="thumbnail" />
          </S.ImageContainer>
        )}
      </S.Wrapper>
    </Link>
  );
}

export default Card;
