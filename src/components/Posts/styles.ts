import { device } from '@/styles/mediaQueries';
import styled from 'styled-components';

interface WrapperProps {
  visible: boolean;
}

interface ButtonProps {
  template: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 80.5rem;
  padding: 3.5rem 0;
  margin-left: 5.3rem;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.5rem;
  width: 100%;
  margin-bottom: 3rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.blue};

  h2 {
    font-size: 2.75rem;
    line-height: 2.5rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.blue};
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

export const Button = styled.button<ButtonProps>`
  display: ${({ template }) => (template === 'blog_posts' ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;

  font-weight: 500;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};

  padding: 1.625rem 1.25rem;

  height: 4rem;
  width: 14rem;

  border: none;
  border-radius: 3.75rem;

  cursor: pointer;
  transition: background-color 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
`;
