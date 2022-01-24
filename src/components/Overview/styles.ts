import { device } from '@/styles/mediaQueries';
import styled from 'styled-components';

interface CustomProps {
  isCustom?: boolean;
}

export const Wrapper = styled.div<CustomProps>`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;

  max-width: ${({ isCustom }) => (isCustom ? 80.3 : 101.3)}rem;
  margin-bottom: 2.75rem;
  padding-top: 3rem;
  margin-left: ${({ isCustom }) => (isCustom ? 5.3 : 0)}rem;

  > div {
    display: flex;
  }

  h2 {
    font-size: 2.37rem;
    line-height: 2.5rem;
    width: 100%;
    padding-bottom: 2.5rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.blue};
    border-bottom: 3px solid ${({ theme }) => theme.colors.blue};
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div<CustomProps>`
  padding-left: ${({ isCustom }) => (isCustom ? 0 : 4)}rem;

  .alignright {
    float: right;
    margin: 1.25rem 1.25rem 1.25rem;
  }

  .alignleft {
    float: left;
    margin: 1.25rem 1.25rem 1.25rem 0;
  }

  ul {
    list-style: disc;
    color: ${({ theme }) => theme.colors.lightBlue};
    font-size: 1.2rem;

    li {
      padding: 0.25rem 1.25rem;
      list-style: disc;
      margin-left: 1.25rem;
      margin-bottom: 0.25rem;
    }
  }

  img {
    display: block;
  }

  p {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.lightBlue};
    margin-bottom: 2.25rem;
    letter-spacing: 0.4px;

    :first-child {
      font-size: 1.57rem;
      color: ${({ theme }) => theme.colors.blue};
      margin-bottom: 1.75rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.blue};
    margin: 3.75rem 0 1.25rem;
    font-weight: 600;

    @media ${device.tablet} {
      font-weight: 500;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.lightBlue};
    text-decoration: underline;

    :hover {
      color: ${({ theme }) => theme.colors.highlight};
      text-decoration: underline;
    }
  }
`;

export const JobsContainer = styled.section`
  display: flex;
  flex-direction: column;
`
