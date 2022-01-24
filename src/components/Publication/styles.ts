import { device } from '@/styles/mediaQueries';
import styled from 'styled-components';

interface PublicationProps {
  type?: string;
}

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  max-width: 101.3rem;
  margin-bottom: 2.75rem;
  padding-top: 3rem;
`;

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
// here comes the style when we create the rest of the publications
`;

export const PublicationContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: -10rem;
  width: 75%;
`;
