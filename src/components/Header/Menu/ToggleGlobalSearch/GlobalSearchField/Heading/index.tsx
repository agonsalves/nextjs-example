import * as S from './styles';

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  if (!title) {
    return null;
  }
  return <S.Wrapper>{title}</S.Wrapper>;
};

export default Heading;
