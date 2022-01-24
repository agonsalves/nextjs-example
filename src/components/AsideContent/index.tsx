import { peoples } from '@/mocks/peoples';
import React from 'react';
import PeoplesWidget from './PeoplesWidget';
import PracticeAreaWidget from './PracticeAreaWidget';
import * as S from './styles';
import { AsideContentProps } from './types';
import Widget from './Widget';

function AsideContent({ widgets, people, practice_area }: AsideContentProps) {
  return (
    <S.Wrapper>
      {widgets?.map(widget => (
        <Widget key={widget.post_title} widget={widget} />
      ))}
      {people && <PeoplesWidget peoples={people}/>}
      {practice_area && <PracticeAreaWidget practices={practice_area}/>}
    </S.Wrapper>
  );
}

export default AsideContent;
