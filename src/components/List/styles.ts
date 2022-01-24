import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  max-width: 80.5rem;
  padding: 3.5rem 0;
  margin-left: 5.3rem;

  h2 {
    font-size: 2.75rem;
    line-height: 2.5rem;
    width: 100%;
    padding-bottom: 2.5rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.blue};
    border-bottom: 3px solid ${({ theme }) => theme.colors.blue};
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  div + div {
    margin-top: 1rem;
  }

  > div:last-child {
    margin-top: 2rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 1.625rem 1.25rem;
  height: 4rem;
  max-width: 14rem;
  border: none;
  border-radius: 3.75rem;
  cursor: pointer;
  transition: background-color 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }

  svg {
    margin-left: 1rem;
  }
`;

export const ExpandedButtons = styled.div`
  display: flex;
  align-items: center;
  height: 4.5rem;

  button:nth-child(2) {
    position: absolute;
    right: 0;
  }
`;
