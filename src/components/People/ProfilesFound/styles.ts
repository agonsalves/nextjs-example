import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
`;

export const ProfileFounds = styled.span`
  color: ${({ theme }) => theme.colors.lightBlue};

  b {
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const ReviseSearchWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors.lightBlue};
  }

  &:hover {
    b,
    svg {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  b {
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.colors.lightBlue};
    margin-right: 0.5rem;
    font-weight: 600;
  }

  svg {
    margin-top: 1px;
  }
`;
