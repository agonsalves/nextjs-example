import { useState } from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import * as S from './styles';
import { OpeningData } from './types';

export interface OpeningProps {
  item: OpeningData;
}

function Opening({ item }: OpeningProps) {
  const { post_title, office_locations, full_content } = item;
  const [showContinued, setShowContinued] = useState(false);

  const createDescription = () => ({ __html: full_content });
  const createContinued = () => ({ __html: item.continued });

  return (
    <S.Wrapper>
      <h3>{post_title}</h3>
      {office_locations.map(({ post_title }) => (
        <S.Location>{post_title}</S.Location>
      ))}
      <S.Description
        dangerouslySetInnerHTML={createDescription()}
      ></S.Description>
      {showContinued && (
        <S.Container dangerouslySetInnerHTML={createContinued()}></S.Container>
      )}
      <S.ReadMoreButton
        onClick={() => setShowContinued(!showContinued)}
        style={{ bottom: 0 }}
      >
        <span>Read {showContinued ? 'Less' : 'More'}</span>
        {showContinued ? (
          <BsArrowUp style={{ margin: '0 0.75rem' }} />
        ) : (
          <BsArrowDown size={20} style={{ margin: '0 0.75rem' }} />
        )}
      </S.ReadMoreButton>
    </S.Wrapper>
  );
}

export default Opening;
