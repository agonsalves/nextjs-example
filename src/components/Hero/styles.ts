import styled, {css} from 'styled-components';

interface ContainerProps {
  backgroundImg: string;
  isErrorPage: boolean;
  isPerson?: boolean;
}

interface ContentProps {
  isErrorPage: boolean;
  isPerson?: boolean;
}

interface PersonAttributeProps {
  isEmail?: boolean;
}

export const Wrapper = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  position: relative;
  justify-content: center;
  align-items: center;

  background-size: ${({ isPerson }) => isPerson ? 'auto' : 'cover'};
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImg }) => backgroundImg});

  height: 100%;
  ${({ isPerson }) => !isPerson && css`
    min-height: ${({ theme }) => theme.style.marqueeHeight}px;
  `}
  padding: ${({ isErrorPage }) =>
    isErrorPage ? '8rem 0' : '8.5rem 0 12.5rem'};
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div<ContentProps>`
  max-width: 60vw;
  padding-left: ${({ isErrorPage }) => isErrorPage ? '0' : '8.5rem 0 12.5rem'};
  ${({ isPerson }) => isPerson && css`
    max-width: 100vw;
    display: flex;
    justify-content: flex-end;
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
`;

export const Description = styled.div`
  font-size: 1.75rem;
  font-weight: 300;
  margin-top: 2rem;
  max-width: inherit;

  p {
    margin-bottom: 3.25rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 3.25rem;
`;

export const PositionWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;
export const PositionText = styled.p`
  font-size: 1.125rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
`;

export const PersonAttributeWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

export const PersonAttributeIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const PersonAttributeText = styled.a<PersonAttributeProps>`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: ${({ isEmail }) => isEmail ? 'underline' : 'none'};

  :hover{
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: ${({ isEmail }) => isEmail ? 'underline' : 'none'};
  }
`;
