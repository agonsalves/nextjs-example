import { device } from '@/styles/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5.3rem;
  max-width: 80.5rem;
  padding: 2.75rem 0;

  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: 2.37rem;
    line-height: 2.5rem;
    font-family: ${({ theme }) => theme.fonts.heading};

    width: 100%;
    padding-bottom: 2.5rem;
    margin-bottom: 3.125rem;

    color: ${({ theme }) => theme.colors.blue};

    border-bottom: 3px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const SeeAllButton = styled.div`
  display: flex;
  align-items: center;
  max-width: max-content;

  :hover {
    span {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;

    margin-right: 1rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.yellow};

    svg {
      color: ${({ theme }) => theme.colors.white};
      transition: color 0.2s;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 0.875rem;
  }
`;

export const Footer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
