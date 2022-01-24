import styled from 'styled-components';

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 49%;
  min-height: 22.5rem;
  padding: 1.75rem 3.25rem 2.5rem 2.5rem;

  display: flex;
  flex-direction: column;
  transition: background-color 0.25s ease, color 0.25s;
  border-color: ${({ theme }) => theme.colors.offGray};
  font-family: ${({ theme }) => theme.fonts.body};

  :hover {
    background-color: ${({ theme }) => theme.colors.yellow};

    span,
    svg {
      color: ${({ theme }) => theme.colors.white};
    }

    p {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    display: flex;
    align-items: center;

    margin-top: 0;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.yellow};

    font-weight: 600;
    font-size: 0.75rem;
    letter-spacing: 2px;
    line-height: 1.875rem;
    text-transform: uppercase;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 3rem;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue};

  max-height: 9.5rem;
  min-height: 9rem;
  height: auto;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  margin: 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const Footer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 7.75rem;

  span {
    font-size: 1.125rem;
    line-height: 2.875rem;
    font-weight: 400;

    display: flex;
    align-items: center;
    letter-spacing: 0.2px;

    svg {
      margin-right: 1rem;
    }

    time {
      font-size: 4rem;
      line-height: 3.5rem;
    }
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-left: 2.5rem;
  height: max-content;

  svg {
    margin-top: 0.25rem;
    margin-bottom: 0.625rem;
  }

  p {
    letter-spacing: 0.2px;
    font-size: 1.125rem;
    margin-left: 0.25rem;
  }
`;
