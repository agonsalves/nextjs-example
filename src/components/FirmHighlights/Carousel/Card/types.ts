export interface FirmHighlightData {
  id: string;
  people: Array<object>;
  post_name: string;
  post_title: string;
  post_type: string;
  slug: string;
  visible: boolean;
  full_content: string;
  thumbnail_teaser: {
    width: string;
    height: string;
    url: string;
  };
}
