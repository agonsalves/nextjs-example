import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '@/styles/mediaQueries';

export const Container = styled(motion.div)`
  cursor: pointer;

  &:hover {
    h1 {
      color: ${({ theme }) => theme.colors.highlight};
    }

    div {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const TextContainer = styled.div`
  padding: 2.75rem 7.75rem 0 5rem;

  @media ${device.tablet} {
    padding: 2.75rem 7.75rem 0 2.5rem;
  }
`;

export const CardTitle = styled.h1`
  font-weight: 700;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.heading};

  transition: color 0.5s ease;
`;

export const CardDescription = styled.p`
  margin-top: 1.25rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.lightBlue};
  letter-spacing: 0.4px;
  font-weight: 300;
`;

export const ReadMoreButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.yellow};

  transition: color 0.5s ease;

  font-size: 1.125rem;
  font-weight: 500;
`;
