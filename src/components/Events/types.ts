import { Event as EventData } from './Card/types';

export interface EventsProps {
  section: {
    id?: string;
    page_template: string;
    post_title: string;
    related_posts: EventData[];
    visible?: boolean;
    post_name: string;
    slug: string;
  };
}
