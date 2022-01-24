export interface HeroProps {
  title: string;
  description?: string;
  hasButton?: boolean;
  buttonText?: string;
  buttonDirection?: 'up' | 'down' | 'left' | 'right';
  backgroundImg?: string;
  post_type?: string;
  isErrorPage?: boolean;
  email?: string;
  alternatePhone1?: string;
  alternatePhone1Label?: string;
  position?: { id: number; term: string }[];
  officeLocation?:
    {
      id?:number,
      slug?: string,
      post_title?: string,
      post_name?: string,
      post_type?: string,
      office_id?: string,
      office_phone?: string,
      street_address?: string,
      address_locality?: string,
      address_region?: string,
      postal_code?: string
    }[];
  firmName?: string;
  archivePostType?: string;
  slug?: any;
  siteUrl?: string;
  dataList?: any;
}
