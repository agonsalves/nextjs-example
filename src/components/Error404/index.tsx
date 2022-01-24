import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';
import * as S from './styles';
function Error404() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>The page that you are looking for was not found.</S.Title>
        <S.Text>
          It's possible your entered the address incorrectly or are looking for
          a page that has moved.
        </S.Text>
        <S.ButtonWrapper>
          <Link href={'/'}>
            <S.ActionButton>
              Return to Homepage
              <BsChevronRight size={12} />
            </S.ActionButton>
          </Link>
        </S.ButtonWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

export default Error404;
