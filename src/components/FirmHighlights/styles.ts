import { device } from '@/styles/mediaQueries';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 8.5rem 9.5rem 7.5rem;
  background-color: ${({ theme }) => theme.colors.blue};

  @media ${device.tablet} {
    padding: 5.5rem 4.5rem 4.5rem;
  }

  @media ${device.mobile} {
    padding: 2.5rem 0.75rem 2.5rem;
  }

  h1 {
    font-size: 2.7rem;
    line-height: 2.5rem;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.white};

    padding-bottom: 2rem;
    margin-bottom: 2.5rem;

    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

export const Container = styled(motion.div)``;
