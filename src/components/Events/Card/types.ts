export interface Author {
  post_title: string;
}

export interface Event {
  id: number | string;
  slug: string;
  date: string;
  post_title: string;
  post_type: string;
  visible: boolean;
  where: string;
}
