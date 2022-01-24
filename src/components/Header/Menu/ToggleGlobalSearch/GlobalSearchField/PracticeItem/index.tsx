import * as S from './styles';

interface PracticeItemProps {
  name: string;
}

const PracticeItem = ({ name }: PracticeItemProps) => {
  return <S.Wrapper>{name}</S.Wrapper>;
};

export default PracticeItem;
