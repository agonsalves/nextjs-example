import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 14rem;
  margin-top: -3px;
  margin-left: -2px;

  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-bottom: none;
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: 1rem;
`;
