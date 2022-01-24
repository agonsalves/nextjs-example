export interface LinkData {
  db_id: string;
  title: string;
  type: string;
  url: string;
}

export interface FooterProps {
  locations: LinkData[];
  social_urls: {
    facebook: string;
    linkedin: string;
    twitter: string;
  };
}
