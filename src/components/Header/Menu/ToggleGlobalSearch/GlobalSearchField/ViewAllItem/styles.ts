import styled from 'styled-components';

export const Wrapper = styled.a`
  display: block;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.4rem 0.8rem;

  span {
    font-size: 1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  margin-top: 1rem;
`;
