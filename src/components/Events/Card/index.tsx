import { format, isBefore, parseISO } from 'date-fns';
import Link from 'next/link';
import { IoCalendarClearOutline, IoLocationSharp } from 'react-icons/io5';
import * as S from './styles';
import { Event } from './types';

// Export for storybook
export interface CardProps {
  event: Event;
}

function Card({ event }: CardProps) {
  const { date, post_title, slug, visible, where } = event;

  const relative_time = isBefore(parseISO(date), new Date()) ? 'past' : 'soon';

  if (!visible) {
    return null;
  }

  return (
    <S.Wrapper>
      <Link href={slug}>
        <S.Container>
          <span>{relative_time}</span>
          <S.Title>{post_title}</S.Title>
          <S.Footer>
            <S.FooterLeft>
              <span>
                <IoCalendarClearOutline size={24} />
                {format(parseISO(date), 'MMM')}
              </span>
              <span>
                <time>{format(parseISO(date), 'dd')}</time>
              </span>
            </S.FooterLeft>
            <S.FooterRight>
              <IoLocationSharp size={24} />
              <p>{where}</p>
            </S.FooterRight>
          </S.Footer>
        </S.Container>
      </Link>
    </S.Wrapper>
  );
}

export default Card;
