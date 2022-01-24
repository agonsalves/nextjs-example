import { device } from '@/styles/mediaQueries';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 4.5rem 9.5rem;
  height: 100%;

  font-size: 1.125rem;
  line-height: 2.25rem;
  font-weight: 400;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const Copyright = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  letter-spacing: 0.025rem;

  color: ${({ theme }) => theme.colors.lightBlue};
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    gap: 0.5rem;
  }
`;

export const Internal = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.blue};

  a {
    transition: color 0.5s;

    :hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  a + a {
    margin-left: 2.5rem;
  }

  @media ${device.tablet} {
    flex-direction: column;

    a + a {
      margin-left: 0;
    }
  }
`;

export const External = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;

  @media ${device.tablet} {
    align-self: flex-start;
  }

  svg {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    width: 2rem;
    color: ${({ theme }) => theme.colors.blue};
    transition: color 0.5s;

    :hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  svg + div {
    margin: 0 0.75rem;
  }
`;

export const Bar = styled.div`
  display: flex;
  height: 2rem;
  width: 0.1rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  transform: rotate(20deg);
`;
