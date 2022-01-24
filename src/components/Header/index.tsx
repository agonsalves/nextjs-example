import Div from '@/Shared/Div';
import { breakpointUpperLimit } from '@/styles/globalStyles';
import React from 'react';
import useMedia from 'use-media';
import SiteLogo from '../SiteLogo';
import Menu from './Menu';
import MobileHeader from './MobileHeader';
import { headerContainerInnerStyle, headerContainerStyle } from './styles';
import { HeaderProps } from './types';

export default function Header({
  desktopLocations,
  mobileLocations,
  peopleAlphabet,
  services,
  industries,
  themes,
  post,
  datalist
}: HeaderProps) {
  const isMobile = useMedia({ maxWidth: breakpointUpperLimit.mobile });

  return (
    <Div 
      themes={{...themes, ...headerContainerStyle(post)}}
      className="header-container"
      as="header"
      data-nosnippet
    >
      <Div themes={headerContainerInnerStyle}>
        {isMobile ? (
          <MobileHeader data={mobileLocations} post={post}/>
        ) : (
          <>
          <SiteLogo />
          <Menu
            locations={desktopLocations}
            alphabet={peopleAlphabet}
            services={services}
            industries={industries}
            post={post}
            datalist={datalist}
          />
          </>
        )}
      </Div>
    </Div>
  );
}
