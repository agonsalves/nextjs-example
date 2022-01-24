import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  max-width: 18rem;

  :hover {
    img {
      opacity: 0.7;
    }

    div {
      color: ${({ theme }) => theme.colors.highlight};

      p {
        color: ${({ theme }) => theme.colors.lightBlue};
        opacity: 1;
      }
    }

    h3 {
      text-decoration: underline;
    }
  }
`;

export const Container = styled.div`
  > span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.yellow};
    letter-spacing: 0.125rem;
    line-height: 1.875rem;
    text-transform: uppercase;
    padding-bottom: 0.25rem;
  }

  h3 {
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 400;
    line-height: 2rem;

    margin-bottom: 1rem;

    color: ${({ theme }) => theme.colors.white};

    transition: text-decoration 0.5s ease;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ImageContainer = styled.div`
  margin: 0.55rem 0 0.95rem;

  img {
    background: ${({ theme }) => theme.colors.white};
    transition: opacity 0.5s;
  }
`;

export const Content = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;

  p {
    color: rgba(255, 255, 255, 0.7);
    transition: color 0.5s ease, opacity 0.5s ease;
  }
`;

export const ReadMoreButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.lightBlue};

  transition: color 0.5s ease;

  font-size: 1rem;
  font-weight: 500;
`;
