import styled from 'styled-components';
import { device } from '@/styles/mediaQueries';

export const Wrapper = styled.div`
  padding: 2rem 7rem 6rem 1rem;
  min-width: 80%;

  @media ${device.tablet} {
    padding: 3rem 1rem;
    min-width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  row-gap: 0.75rem;
  flex-direction: column;
  padding-top: 4rem;

  @media ${device.tablet} {
    padding-top: 2rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.17rem;
  line-height: 1.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
`;

export const Text = styled.p`
  font-size: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  width: fit-content;
  padding: 1rem 1.5rem;
  border-radius: 25px;

  font-size: 1rem;
  line-height: 1.125rem;

  margin-top: 1.5rem;

  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }

  svg {
    margin-left: 1rem;
  }
`;
