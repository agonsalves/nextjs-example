import styled from 'styled-components';

interface ContainerProps {
  active?: boolean;
}

export const Wrapper = styled.div`
  max-width: 12.5rem;
  padding-top: 12.5rem;
  position: sticky;
  top: 0;
  height: fit-content;

  div:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  }

  div {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem 0.875rem 1.5rem;
  font-size: 1rem;

  background-color: ${({ theme, active }) => active && theme.colors.yellow};
  transition: background-color 0.25s;

  cursor: pointer;

  :hover {
    span {
      color: ${({ theme, active }) => !active && theme.colors.yellow};
    }
  }

  span {
    color: ${({ theme, active }) =>
      active ? theme.colors.white : theme.colors.blue};
  }
`;
