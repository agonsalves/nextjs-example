import styled from 'styled-components';
import { PersonItemProps } from './types';

export const Wrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
  }

  &:hover {
    .informationWrapper {
      strong,
      span {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

type PersonImageProps = Pick<PersonItemProps, 'photo'>;

export const PersonImage = styled.img<PersonImageProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin-left: 0.5rem;

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.lightBlue};
  }

  span {
    font-weight: 100;
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
