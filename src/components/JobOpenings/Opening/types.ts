interface Location {
  id: number | string;
  post_title: string;
}

export interface OpeningData {
  applyUrl: string;
  category: string;
  contactEmail: string;
  continued?: string;
  description: string;
  locations: Location[];
  title: string;
  post: {
    id: number | string;
    slug: string;
  };
  post_title?: string;
  office_locations?: any;
  full_content?: string;
}
