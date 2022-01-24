import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const PracticeArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2.5rem;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};

  h3 {
    font-weight: 400;
    margin-top: 0px;
    color: rgb(1, 58, 81);
    font-family: kepler-std, serif;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  li {
    display: flex;
    position: relative;
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 0.8rem;

    a {
      color: rgb(75, 115, 131);
      text-decoration: underline;
    }
  }
`