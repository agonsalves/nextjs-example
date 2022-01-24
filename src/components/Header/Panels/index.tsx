import { usePanel } from '@/hooks/usePanel';
import Icon from '@/Shared/Icon';
import MotionDiv from '@/Shared/MotionDiv';
import Span from '@/Shared/Span';
import { timesLight } from '@/styles/variables/iconLibrary';
import { auto } from '@/utils/themer';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { headerMenuPanelStyle } from '../Menu/styles';
import * as S from './styles';

export interface Letter {
  letter: string;
  active: boolean;
}

export type Alphabet = Array<Letter>;

export const headerMenuPanelVariants = {
  closed: {
      translateX: 960,
      overflowY: auto,
      transition: {
          duration: .5,
          ease: [.22, .62, .13, 1.04]
      }
  },
  open: {
      translateX: 0,
      overflowY: 'scroll',
      transition: {
          duration: .5,
      },
  }
}

const variants2 = {
  closed: {
    translateX: -10000,
    transition: {
      duration: 1,
      ease: [0.22, 0.62, 0.13, 1.04],
    },
  },
  open: {
    translateX: 0,
    transition: {
      duration: 0.5
    },
  },
};

const Panels = () => {
  const { currentPanel, setPanel } = usePanel();
  useEffect(() => {
    if (currentPanel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [currentPanel]);

  if(currentPanel?.id === 'people-microsite') {
    return (
      <>
        {currentPanel && <S.BackgroundWrapper onClick={() => setPanel(null)} />}
        <AnimatePresence exitBeforeEnter>
          {currentPanel && (
            <S.ContentLeftWrapper
              key={currentPanel.id}
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants2}
            >
              {currentPanel.children}
            </S.ContentLeftWrapper>
          )}
        </AnimatePresence>
      </>
    )
  }

  return (
    <>
      {currentPanel && <S.BackgroundWrapper onClick={() => setPanel(null)} />}
      <AnimatePresence exitBeforeEnter>
        {currentPanel && (
          <MotionDiv
            themes={headerMenuPanelStyle}
            variants={headerMenuPanelVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <Span
              themes={headerMenuPanelStyle.closeButton}
              onClick={() => {
                  setPanel(null)
                }}>
                <Icon icon={timesLight} themes={headerMenuPanelStyle.closeButtonIcon}/>
            </Span>
            {currentPanel.children}
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Panels;
