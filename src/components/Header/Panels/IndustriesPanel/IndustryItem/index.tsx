import React from 'react';
import Img from 'Shared/Img';
import LinkSwitch from 'Shared/LinkSwitch';
import Span from 'Shared/Span';
import { industriesMenuPanelStyle } from '../../ServicesPanel/PracticeSearchBar/styles';

const IndustryItem = ({ industry, post }) => {
    return (
    <LinkSwitch
      url={industry.slug}
      themes={industriesMenuPanelStyle.industry(
        post?.post_title === industry.post_title,
      )}
    >
      <Img
        themes={industriesMenuPanelStyle.industryThumb}
        src={industry.thumbnail_teaser.url}
      />
      <Span themes={industriesMenuPanelStyle.industryTitle}>
        {industry.post_title}
      </Span>
    </LinkSwitch>
  );
};

export default IndustryItem;
