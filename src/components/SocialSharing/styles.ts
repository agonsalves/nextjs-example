import styled from 'styled-components';
import Link from 'next/link';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const SocialButton = styled.button`
  padding: 0.6rem 0.7rem 0.5rem;
  border: none;
  font-size: 1.1rem;
  background: none;

  & + button {
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  }

  svg {
    padding: 0;
    margin: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.white};
  }
`;
