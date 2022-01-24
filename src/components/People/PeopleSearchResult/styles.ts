import styled from 'styled-components';
import { device } from '@/styles/mediaQueries';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 2rem;

  @media ${device.mobile} {
    padding: 0;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 2rem;
  font-family: '"kepler-std"';
  margin-bottom: 1rem;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  column-gap: 3rem;
  row-gap: 2rem;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;
