import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  button {
    border: none;
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 2.2rem;
    border-radius: 2rem;
    font-size: 0.9rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightBlue};
    }
  }
`;

export const InputWrapper = styled.div`
  width: 200px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  margin-right: 1.5rem;
  position: relative;
  margin-bottom: 0.3rem;

  input {
    border: none;
    position: absolute;
    left: 1rem;
    bottom: 0.2rem;
    width: 100%;
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.blue};
  }
`;
