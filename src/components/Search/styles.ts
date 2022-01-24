import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  width: 100%;

  input {
    margin-right: 0.4rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font-size: 0.9rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    padding: 0.9rem 1.2rem;
    border-radius: 40px;
    outline: none;

    svg {
      margin-right: 8px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightBlue};
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.5rem;
  margin-right: 1.5rem;

  background: ${({ theme }) => theme.colors.gray};
  border-radius: 2.5rem;

  width: 100%;
  height: 4rem;

  input {
    border: none;
    background: none;
    width: 100%;
    color: ${({ theme }) => theme.colors.lightBlue};

    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.125rem;
    font-weight: 300;

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightBlue};
    }

    &:focus {
      border: none;
      outline: none;
    }
  }
`;
