import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.colors.lightBlue};

  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};

  h3 {
    margin-bottom: 0.125rem;
    margin-top: 2.75rem;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Location = styled.p`
  line-height: 1.875rem;
  letter-spacing: 0.4px;
  margin-bottom: 0.5rem;
`;

export const Description = styled.div`
  margin-bottom: 2.25rem;
`;

export const Container = styled.div`
  p {
    margin-bottom: 2.25rem;
  }

  ul {
    list-style: disc;
    color: ${({ theme }) => theme.colors.lightBlue};
    font-size: 1.2rem;
    margin-bottom: 1.875rem;

    li {
      padding: 0.25rem 1.25rem;
      list-style: disc;
      margin-left: 1.25rem;
      margin-bottom: 0.25rem;
    }
  }

  a {
    text-decoration: underline;

    :hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export const ReadMoreButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.highlight};

  transition: color 0.5s ease;

  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  background: none;
  border: none;
`;
