import React from 'react';
import LinkSwitch from '@/Shared/LinkSwitch';
import Img from '@/Shared/Img';
import {logoStyle}   from './styles'

interface SiteLogoProps {
  themes?: any;
}

const SiteLogo = ({themes}: SiteLogoProps) => (
  <LinkSwitch url="/" themes={{...logoStyle, ...themes}}>
  <canvas height="47" width="105"/>
  <Img
      themes={{...logoStyle.image, ...themes?.image}}
      src="/assets/logo.svg"
      alt={`Mako's logo`}
  />
</LinkSwitch>
);
export default SiteLogo;
