import styled from 'styled-components';

interface ContainerProps {
  type: string;
}

export const Wrapper = styled.article`
  flex: 1 0 25%;
  display: flex;
  flex-direction: column;
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
  padding-bottom: 2.5rem;
  transition: background-color 0.25s;
  background-color: ${({ theme }) => theme.colors.gray};

  &:nth-child(3n) {
    margin-right: 0;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.yellow};

    p,
    span,
    time {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  img {
    width: 100%;
    height: 100%;
    transition: opacity 0.25s;

    :hover {
      opacity: 0.7;
    }
  }
`;

export const Container = styled.div<ContainerProps>`
  padding: 1rem 2.5rem 0;

  span {
    color: ${({ theme }) => theme.colors.yellow};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin-top: 1rem;
    transition: color 0.25s;
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.625rem;
    color: ${({ theme }) => theme.colors.blue};
    margin: ${({ type }) =>
      type === 'publication' ? '0.5rem 0 2rem' : '0 0 0.75rem'};
    font-weight: 500;
  }
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  line-height: 1.4rem;
  max-height: 12.5rem;

  div {
    margin-bottom: 2.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    p {
      color: ${({ theme }) => theme.colors.lightBlue};
      transition: color 0.25s;
    }
  }

  time {
    margin-bottom: 0.25rem;
    color: ${({ theme }) => theme.colors.offBlue};
    transition: color 0.25s;
  }

  p {
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.colors.offBlue};
    transition: color 0.25s;
  }
`;
