import * as S from './styles';
import { PersonItemProps } from './types';

const PersonItem = ({ name, photo, position, slug }: PersonItemProps) => {
  return (
    <S.Wrapper>
      <div>
        <S.PersonImage photo={photo} src={photo.url} />
      </div>
      <S.InformationWrapper className="informationWrapper">
        <strong>{name}</strong>
        <span>{position}</span>
      </S.InformationWrapper>
    </S.Wrapper>
  );
};

export default PersonItem;
