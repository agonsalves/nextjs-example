import styled from 'styled-components';

interface PublicationProps {
  type?: string;
}

export const Header = styled.div`
  display: flex;
  height: auto;
`;

export const Cover = styled.img<PublicationProps>`
  display: ${({type}) => type === 'Presentation' ? 'none' : 'block'};
  min-width: 50%;
`

export const HeaderInfo = styled.div`
  padding: 2rem;
  row-gap: 1rem;
  padding-bottom: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 2.25rem;
`;
export const PublicationType = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 0.8125rem;
  font-weight: 500;
  text-transform: uppercase;
`;
export const Date = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 0.875rem;
`;
