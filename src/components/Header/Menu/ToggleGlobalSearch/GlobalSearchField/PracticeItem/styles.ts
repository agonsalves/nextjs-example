import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightBlue};
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 100;

  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
  }
`;
