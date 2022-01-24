import * as S from './styles';

const SmartInput = props => {
  return (
    <S.Wrapper>
      <S.InputWrapper {...props}>
        <input type="text" />
      </S.InputWrapper>
      <button>Search</button>
    </S.Wrapper>
  );
};

export default SmartInput;
