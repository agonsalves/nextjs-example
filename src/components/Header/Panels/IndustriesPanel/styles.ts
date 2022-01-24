import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  margin-top: 3rem;
  overflow-y: auto;
  min-width: 100%;

  columns: 2;
`;

export const IndustryContainer = styled.div`
  display: grid;
  grid-column: 2;
  align-items: flex-start;

  gap: 0.8rem;

  cursor: pointer;

  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  p {
    color: ${({ theme }) => theme.colors.blue};
  }

  & + div {
    margin-top: 2rem;
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.colors.highlight};
    }

    img {
      opacity: 0.7;
    }
  }
`;
