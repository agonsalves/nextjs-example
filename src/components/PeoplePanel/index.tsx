import Div from '@/Shared/Div';
import MotionDiv from '@/Shared/MotionDiv';
import React from 'react';
import DetailFrameNavigation from '../DetailFrameNavigation';
import PersonListing from '../PersonListing';
import {
  detailFramePeopleWrapperStyle,
  detailFrameWrapperStyle,
  detailFrameStyle
} from './styles';

export const PeoplePanel = ({ attorneys, post_title }) => {
  return (
    <>
      <MotionDiv
        themes={detailFrameWrapperStyle}
        className="microsite-detail-frame"
      >
          <DetailFrameNavigation post_title={post_title} type="People" />
          <Div themes={detailFramePeopleWrapperStyle}>
            {attorneys.map((item, index) => (
              <PersonListing
                key={index}
                url={item.slug}
                headshotUrl={item.thumbnail_teaser?.url}
                name={item.post_title}
                position={item.position[0].term}
                phone={item.phone}
                email={item.email}
              />
            ))}
          </Div>
      </MotionDiv>
    </>
  );
};
