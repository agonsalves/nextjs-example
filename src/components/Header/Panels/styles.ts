import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

export const ContentWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  justify-content: start;

  width: 48%;
  height: 100%;

  background: ${({ theme }) => theme.colors.white};
  padding: 12.5rem 3.75rem 0 7.5rem;
  overflow-y: auto;
  ::-webkit-scrollbar { 
    display: none; 
  }
  z-index: 4;
`;

export const ContentLeftWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;

  width: 77%;
  height: 100%;

  background: ${({ theme }) => theme.colors.white};
  /* padding: 7rem 3rem 0 5rem; */

  ::-webkit-scrollbar { 
    display: none; 
  }
  z-index: 4;
`;

export const CloseButton = styled.span`
  height: 4rem;
  width: 4rem;
  background-color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 250ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`;

export const PanelTitle = styled.h2`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 800;
  font-size: 4.5rem;
  margin-bottom: 2.1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;
