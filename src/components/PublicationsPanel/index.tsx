import MotionDiv from '@/Shared/MotionDiv';
import { AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import React, { useState } from 'react';
import DetailFrameNavigation from '../DetailFrameNavigation';
import DetailFrameInner from './DetailFrameInner';
import {
  detailFrameWrapperStyle,
} from './styles';

export const PublicationsPanel = ({ post, author, selectedPage}) => {
  const [[page, direction], setPage] = useState(selectedPage);
  const arrayIndex = wrap(0, post.length, page);

  return (
    <>
      <MotionDiv
        themes={detailFrameWrapperStyle}
        className="microsite-detail-frame"
      >
          <DetailFrameNavigation post_title={author} type="Publication" page={page} setPage={setPage} isEnd={page===(post.length-1)}/>
            <AnimatePresence initial={false} custom={direction}>
                <DetailFrameInner
                    post={post[arrayIndex]}
                    direction=''
                />
            </AnimatePresence>
            
      </MotionDiv>
    </>
  );
};
