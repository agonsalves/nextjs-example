import * as S from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

interface ViewAllItemProps {
  title: string;
  slug: string;
}

const ViewAllItem = ({ title, slug }: ViewAllItemProps) => {
  return (
    <S.Wrapper>
      <span>{title}</span>
      <S.IconWrapper>
        <AiOutlineSearch size={20} />
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default ViewAllItem;
