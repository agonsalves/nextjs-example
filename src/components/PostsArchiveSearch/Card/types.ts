export interface Author {
  post_title: string;
}

interface Type {
  id: number;
  term: string;
}

export interface Post {
  id?: number | string;
  slug?: string;
  date?: string;
  full_content?: string;
  post_title?: string;
  post_type?: string;
  visible?: boolean;
  thumbnail_teaser?: {
    width?: string;
    height?: string;
    url: string;
  };
  //   Publication
  byline?: string;
  publication_type?: Type[];
  display_date?: string;
  //   Blog Post
  bp_authors?: Author[];
  bp_guest_authors?: Author[];
}
