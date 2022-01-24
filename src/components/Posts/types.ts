import { Post } from './Card/types';

export interface PostsProps {
  section: {
    id?: number | string;
    page_template?: string;
    post_title?: string;
    related_posts?: Post[];
    visible?: boolean;
    post_name?: string;
    slug?: string;
    pageTitle?: string;
  };
}
