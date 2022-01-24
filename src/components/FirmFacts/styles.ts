import { device } from '@/styles/mediaQueries';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  padding-bottom: 7.5rem;
  margin-bottom: 7.5rem;

  grid-template-columns: 46% 46%;
  column-gap: 8%;
  row-gap: 8%;

  @media ${device.tablet} {
    grid-template-columns: 100%;
    row-gap: 4%;
  }
`;
