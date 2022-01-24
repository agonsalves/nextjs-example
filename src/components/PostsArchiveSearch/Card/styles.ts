import styled, {css} from 'styled-components';

interface ContainerProps {
  type: string;
  isFirst?: boolean;
}
interface WrapperProps {
  isFirst?: boolean;
}

export const Wrapper = styled.article<WrapperProps>`
  display: grid;
  grid-template-columns: ${({isFirst}) => isFirst ? '0.5fr 0.5fr' : '0.7fr 0.3fr'};
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
  transition: background-color 0.25s;
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  overflow: hidden;

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
  padding: 1rem 2.5rem 1rem;
  overflow: hidden;

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
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 500;
    font-size: 1.625rem;
    margin: ${({ type }) => type === 'publication' ? '0.5rem 0 2rem' : '0 0 0.75rem'};
    ${({isFirst}) => isFirst && css`
      font-size: 36px;
      line-height: 42px;
      margin-bottom: 41px;
      max-height: 125px;
      margin-top: 20px;
      font-weight: bold;
    `}
  }
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
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
