import { device } from '@/styles/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5.3rem;
  max-width: 80.5rem;
  padding: 3.5rem 0;

  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: 2.75rem;
    line-height: 2.5rem;
    font-family: ${({ theme }) => theme.fonts.heading};

    width: 100%;
    padding-bottom: 2.5rem;
    margin-bottom: 3rem;

    color: ${({ theme }) => theme.colors.blue};

    border-bottom: 3px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 2%;
  row-gap: 0.5rem;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const Buttons = styled.div`
  margin-top: 2rem;
`;
