export interface Contact {
  id: number | string;
  post_title: string;
  phone: string;
  email: string;
  slug: string;
  thumbnail_teaser?: {
    height?: string;
    width?: string;
    url: string;
  };
}

export interface Image {
  height?: string;
  url?: string;
  width?: string;
}

export interface WidgetData {
  post_title: string;
  visible: boolean;
  template: {
    id: string | number;
    name?: string;
    type: string;
  };
  //   Image
  widget_caption?: string;
  widget_image?: Image;
  //   Key Contacts
  widget_key_contacts?: Contact[];
  //   Pullquote
  widget_quote?: string;
  widget_pullquote_image?: Image;
  widget_attribution?: string;
  widget_attribution_title?: string;
  //  Call To Action
  widget_link_label?: string;
  widget_link_url?: string;
  widget_message?: string;

  // Video
  widget_name?: string;
  widget_video_image?: {
    height?: string;
    width?: string;
    url?: string;
  }
  widget_show_play?: string;
  widget_video_url?: string
}
