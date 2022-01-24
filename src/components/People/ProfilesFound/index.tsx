import { BsChevronRight } from 'react-icons/bs';
import * as S from './styles';

interface ProfilesFoundProps {
  quantity: number;
  letter: string;
}

const ProfileFound = ({ quantity, letter }: ProfilesFoundProps) => {
  return (
    <S.Wrapper>
      <S.ProfileFounds>
        {quantity} {quantity > 1 ? 'profiles' : 'profile'} found for:{' '}
        <b>{letter}</b>
      </S.ProfileFounds>

      <S.ReviseSearchWrapper>
        <b>Revise search</b>
        <BsChevronRight size={10} />
      </S.ReviseSearchWrapper>
    </S.Wrapper>
  );
};

export default ProfileFound;
