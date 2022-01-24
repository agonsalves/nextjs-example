import SiteLogo from '@/components/SiteLogo';
import Div from '@/Shared/Div';
import React from 'react';
import { HeaderItemData } from '../types';
import { MobileHeaderMenu } from './MobileHeaderMenu';
import { mobileHeaderStyle, mobileLogoStyle } from './styles';
interface MobileHeaderProps {
  data: Array<HeaderItemData>;
  post?: any;
}

const MobileHeader = ({ data, post }: MobileHeaderProps) => {
  return (
    <Div as="header" className="header" themes={mobileHeaderStyle}>
        <Div themes={mobileHeaderStyle.inner}>
            <SiteLogo themes={mobileLogoStyle(post)}/>
            <MobileHeaderMenu data={data} post={post}/>
        </Div>
    </Div>
  );
};

export default MobileHeader;
