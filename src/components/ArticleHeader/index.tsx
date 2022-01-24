import React from 'react';

import * as S from './styles';
import { format, parseISO } from 'date-fns';

interface ArticleHeaderProps {
  displayDate: string;
  publicationType: string;
  postTitle: string;
  thumbnailTeaser: string;
}

function ArticleHeader({
  displayDate,
  publicationType,
  postTitle,
  thumbnailTeaser,
}: ArticleHeaderProps) {
  const formattedDate = format(parseISO(displayDate), 'MMMM d, yyyy');
  return (
    <S.Header>
      <S.HeaderInfo>
        <S.PublicationType>{publicationType}</S.PublicationType>
        <S.Title>{postTitle}</S.Title>
        <S.Date>
          {publicationType === 'Video' ? displayDate : formattedDate}
        </S.Date>
      </S.HeaderInfo>
      <S.Cover src={thumbnailTeaser} type={publicationType} />
    </S.Header>
  );
}

export default ArticleHeader;
