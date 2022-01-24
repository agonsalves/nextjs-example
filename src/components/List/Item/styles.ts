import styled from 'styled-components';

interface WrapperProps {
  isFirstItem?: boolean;
}

interface TitleProps extends WrapperProps {}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: ${({ isFirstItem }) => (isFirstItem ? '25rem' : '12.5rem')};

  :hover {
    main {
      background-color: ${({ theme }) => theme.colors.yellow};

      span,
      time,
      button {
        color: ${({ theme }) => theme.colors.white};
      }

      p {
        color: ${({ theme }) => theme.colors.blue};
      }
    }

    img {
      opacity: 0.7;
    }
  }
`;

export const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  transition: background-color 0.2s;
  padding: 0 2.5rem;

  > span {
    font-family: ${({ theme }) => theme.fonts.body};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.yellow};
    font-weight: 600;
    font-size: 0.75rem;
    letter-spacing: 2px;
    line-height: 1.875rem;
  }

  button {
    display: flex;
    max-width: max-content;
    align-items: center;
    border: 0;
    color: ${({ theme }) => theme.colors.yellow};
    background: none;

    span {
      font-size: 1rem;
      margin-right: 0.75rem;
      font-weight: 600;
    }
  }

  time {
    color: ${({ theme }) => theme.colors.offBlue};
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  div {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.lightBlue};
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  max-width: 40%;
  background-color: ${({ theme }) => theme.colors.white};

  img {
    height: 100%;
  }
`;

export const Title = styled.h3<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ isFirstItem }) => (isFirstItem ? '2.125rem' : '1.625rem')};
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 1rem;
`;
