import { Alphabet } from './Panels';

export interface HeaderItemData {
  id: string;
  title: string;
  classes: Array<string>;
}

export interface HeaderProps {
  desktopLocations: Array<HeaderItemData>;
  mobileLocations: Array<HeaderItemData>;
  peopleAlphabet: Alphabet;
  services: Array<any>;
  industries: Array<any>;
  post?: any;
  themes?: any;
  datalist?: any;
}
