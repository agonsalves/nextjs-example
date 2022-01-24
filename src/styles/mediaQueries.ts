import { breakpointUpperLimit } from './globalStyles';

export const device = {
  mobile: `(max-width: ${breakpointUpperLimit.mobile})`,
  tablet: `(max-width: ${breakpointUpperLimit.tablet})`,
  desktop: `(max-width: ${breakpointUpperLimit.desktop})`,
  small: `(max-width: ${breakpointUpperLimit.small})`,
  large: `(max-width: ${breakpointUpperLimit.large})`,
};

// Usage
// import {device} from '@/styles/mediaQueries';
// @media ${device.mobile} {}
