export interface ResultItem {
  _id: string;
  _source: {
    email: string;
    post_title: string;
    alternate_phone_1: string;
    position: Array<{
      id: number;
      term: string;
    }>;
    slug: string;
    headshot_photo: {
      url: string;
    };
  };
}
