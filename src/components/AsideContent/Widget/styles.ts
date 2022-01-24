import styled from 'styled-components';

interface BannerProps {
  type: string;
}

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div<BannerProps>`
  display: flex;
  flex-direction: column;

  p {
    font-family: ${({ theme, type }) =>
      type !== 'image' && theme.fonts.heading};
    color: ${({ theme, type }) =>
      type === 'image' ? theme.colors.lightBlue : theme.colors.blue};
    font-style: ${({ type }) => type !== 'image' && 'italic'};
    font-size: ${({ type }) => (type === 'image' ? 1 : 2)}rem;
    line-height: ${({ type }) => (type === 'image' ? 1.125 : 2.5)}rem;
    letter-spacing: 0.5px;
    font-weight: 500;
    margin-top: 2.25rem;
  }

  span {
    font-size: 1.125rem;
    line-height: 1.5rem;
    letter-spacing: 0.4px;
    margin-top: 1.625rem;
    color: ${({ theme }) => theme.colors.yellow};
  }

  h3 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.blue};
  }

  span + span {
    color: ${({ theme }) => theme.colors.offBlue};
    margin-top: 0.75rem;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2.5rem;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};

  h4 {
    font-size: 1.875rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.heading};

    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 2rem;
  }

  div {
    margin-bottom: 2.5rem;
  }

  div:last-child {
    margin: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  cursor: pointer;

  img {
    width: 4.25rem;
    height: 4.25rem;
    border-radius: 50%;
    margin-right: 1.25rem;
  }

  section {
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;

    a {
      font-size: 1rem;
      line-height: 1.275rem;
      letter-spacing: 0.4px;
      color: ${({ theme }) => theme.colors.lightBlue};
    }

    a:last-child {
      line-height: 1rem;
      letter-spacing: 0.45px;
      text-decoration: underline;
    }

    span {
      font-size: 1.125rem;
      line-height: 1.5rem;
      transition: color 0.25s;
      letter-spacing: 0.5px;
      color: ${({ theme }) => theme.colors.blue};
    }

    a,
    span {
      :hover {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
  }
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2.5rem;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};

  h3 {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.875rem;
    line-height: 1.875rem;
    margin-bottom: 1.25rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  p {
    color: ${({ theme }) => theme.colors.lightBlue};
    font-size: 1rem;
    line-height: 1.875rem;
    letter-spacing: 0.4px;

    a {
      color: inherit;
      text-decoration: none;

      :hover {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
  }
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.yellow};
  width: fit-content;

  font-size: 1rem;
  line-height: 1.125rem;

  margin-top: 1.5rem;

  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.lightBlue};
  }

  svg {
    margin-left: 1.75rem;
  }
`;

export const VideoBanner = styled.div`
  display: flex;
  flex-direction: column;

  .image-wrapper {
    position: relative;

    :hover {
      filter: brightness(1.1)
    }
  }

  .play-icon {
    position: absolute;
    bottom: 0;
    left: 0;
    justify-self: flex-start;
    padding: 1.5rem 1.7rem;
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  img {
    display: block;
  }

  p {
    position: relative;
    font-size: 1rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
