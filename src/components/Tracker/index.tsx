import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';
import * as S from './styles';

interface TrackerProps {
  children: ReactNode;
  setActiveId: (activeId: number) => void;
  childrenId: string;
}

function Tracker({ children, childrenId, setActiveId }: TrackerProps) {
  return (
    <InView delay={50} rootMargin={'-50% 0px'}>
      {({ inView, ref }) => {
        if (inView) {
          setActiveId(parseInt(childrenId));
        }

        return <S.Container ref={ref}>{children}</S.Container>;
      }}
    </InView>
  );
}

export default Tracker;
