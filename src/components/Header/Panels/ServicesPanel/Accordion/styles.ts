import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { device } from '@/styles/mediaQueries';

interface ItemProps {
  expanded?: boolean;
  type?: string;
}

interface WrapperProps {
  type?: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 3.75rem;
  min-height: 100%;
  overflow-y: auto;
  min-width: 100%;

  div {
    flex: 1;

    div + div {
      margin-top: 1.5rem;
    }
  }
`;

export const AccordionWrapper = styled.div<WrapperProps>`
  ${({ type }) =>
    type === 'person' &&
    css`
      width: 70%;
      @media ${device.mobile} {
        width: 100%;
      }
    `}
`;

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  height: auto;
  color: ${({ theme, expanded }) =>
    expanded ? theme.colors.yellow : theme.colors.blue};
  cursor: pointer;
  transition: 0.2s;

  :hover {
    ${({ type, expanded }) =>
      type === 'person' &&
      css`
        background-color: ${({ theme }) => !expanded && theme.colors.yellow};
      `}
    span {
      color: ${({ theme }) => theme.colors.yellow};
      ${({ type, expanded, theme }) =>
        type === 'person' &&
        css`
          color: ${!expanded && theme.colors.white};
        `}
    }

    svg {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.yellow};
    }
  }

  svg {
    color: ${({ theme, expanded }) =>
      expanded ? theme.colors.white : theme.colors.blue};
    background-color: ${({ theme, expanded }) =>
      expanded ? theme.colors.yellow : theme.colors.lightGray};
    padding: 0.15rem;
    border-radius: 50%;
    margin-left: 0.5rem;
  }

  ${({ type, theme, expanded }) =>
    type === 'person' &&
    css`
      border-top: 1px solid ${theme.colors.gray};
      border-bottom: 1px solid ${theme.colors.gray};
      background-color: ${expanded && theme.colors.gray};
      justify-content: space-between;
      padding: 1.5rem 0.5rem;
    `}
`;

export const Dropdown = styled(motion.div)<ItemProps>`
  margin: 0 !important;
  ${({ type, theme }) =>
    type === 'person' &&
    css`
      background-color: ${theme.colors.gray};
    `}

  ul {
    margin-left: 2rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 400;
    padding: 0.5rem 0;

    ${({ type, theme }) =>
      type === 'person' &&
      css`
        p {
          color: ${theme.colors.black} !important;
          font-size: 0.875rem !important;
        }
      `}

    li {
      display: flex;
      align-items: center;
      ${({ type, theme }) =>
        type === 'person' &&
        css`
          color: ${theme.colors.blue} !important;
          font-size: 0.875rem !important;
        `}
      ::before {
        content: ' ';
        background-color: ${({ theme }) => theme.colors.lightBlue};
        height: 0.25rem;
        width: 0.25rem;
        margin-right: 0.75rem;
      }

      :hover {
        color: ${({ theme }) => theme.colors.yellow};

        ::before {
          background-color: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
  }
`;
