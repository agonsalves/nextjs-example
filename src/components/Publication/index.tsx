import React from 'react';

import * as S from './styles';
import ArticleHeader from '../ArticleHeader';

interface PublicationHeaderProps {
  displayDate: string;
  publicationType: string;
  postTitle: string;
  thumbnailTeaser: string;
}

export interface PublicationProps {
  headerData: PublicationHeaderProps;
  postName: string;
}

function Publication({ headerData, postName }: PublicationProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.PublicationContent>
            <ArticleHeader {...headerData} />
          </S.PublicationContent>
        </S.Content>
        <S.Content></S.Content>
      </S.Container>
    </S.Wrapper>
  );
}

export default Publication;
