export interface Suggestion {
  id: string;
  title: string;
  photo?: {
    width: string;
    url: string;
    height: string;
  };
  position: string;
  postType: string;
  slug: string;
  heading?: string;
}
