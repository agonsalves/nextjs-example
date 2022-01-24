import Div from '@/Shared/Div';
import H2 from '@/Shared/H2';
import { splitAlphaList } from '@/utils/splitArray';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { headerMenuPanelStyle } from '../../Menu/styles';
import { industriesMenuPanelStyle } from '../ServicesPanel/PracticeSearchBar/styles';
import IndustryItem from './IndustryItem';

interface IndustriesPanelProps {
  industries: Array<any>;
  post?: any;
}

const IndustriesPanel: React.FC<IndustriesPanelProps> = ({ industries, post }) => {
  const { push } = useRouter();
  
  const handleNavigation = useCallback(
    slug => {
      push(`/${slug}`);
    },
    [push],
  );

  return (
    <Div themes={{display: 'flex', flexDirection: 'column'}}>
      <Div>
          <H2 themes={headerMenuPanelStyle.heading}>Key Industries</H2>
      </Div>
      {industries && (
          <Div themes={industriesMenuPanelStyle}>
              {splitAlphaList(industries).map((industryColumn, i) =>
                  <Div themes={industriesMenuPanelStyle.column} key={i}>
                      {industryColumn.map((industry) =>
                          industry.thumbnail_teaser &&
                          <IndustryItem
                              industry={industry}
                              key={industry.slug}
                              post={post}
                          />
                      )}
                  </Div>
              )}
          </Div>
      )}
    </Div>
  );
};

export default IndustriesPanel;
