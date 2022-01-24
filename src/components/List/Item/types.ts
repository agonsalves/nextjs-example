export interface TypeProps {
  id: number | string;
  term?: string;
}

export interface ItemProps {
  id: number | string;
  type?: TypeProps[];
  date?: string;
  post_title?: string;
  post_type?: string;
  full_content?: string;
  slug?: string;
  thumbnail_teaser?: {
    url?: string;
  };
  // News
  news_item_type?: TypeProps[];
}
