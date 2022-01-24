export const widgets = [
  {
    post_title: 'Image #1',
    visible: true,
    template: {
      id: 2,
      type: 'image',
    },
    widget_caption:
      'Donec ac dolor eget elit euismod efficitur ut eget mauris. Maecenas ut leo ac eros cursus posuere ut ac nulla.',
    widget_image: {
      url: 'http://mako2-gjtest.gjassets.com/content/uploads/2017/05/iStock_000000839277Small-default-widget-image-widget-image-3138.jpg',
    },
  },
  {
    post_title: 'Contact Us',
    visible: true,
    template: {
      id: 1,
      type: 'call_to_action',
    },
    widget_link_label: 'Online Form',
    widget_link_url: '/',
    widget_message:
      '<p>You can reach us at <a href="mailto:mystory@lawfirm.com">mystory@lawfirm.com</a>, by&nbsp;calling 1-800-255-5070, or completing our online form&nbsp;for a free case evaluation.</p>\n',
  },
  {
    post_title: 'Pullquote With Image #1',
    visible: true,
    template: {
      id: 1,
      type: 'pullquote_with_image',
    },
    widget_attribution: 'Lorem ipsum dolor',
    widget_attribution_title: 'Managing Director',
    widget_pullquote_image: {
      url: 'http://mako2-gjtest.gjassets.com/content/uploads/2017/08/cityscape-1-default-widget-pullquote-image-widget-pullquote-image-3172.jpg',
    },
    widget_quote:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n',
  },
  {
    post_title: 'Pullquote With Image #1',
    visible: true,
    template: {
      id: 1,
      type: 'key_contacts',
      name: 'Key Contacts',
    },
    widget_key_contacts: [
      {
        id: 3333,
        post_title: 'Daniel Wu',
        email: 'dwu@lawfirm.com',
        phone: '215.972.0811',
        slug: '/daniel-wu',
        thumbnail_teaser: {
          url: 'http://mako2-gjtest.gjassets.com/content/uploads/2018/03/TrzcinskiS-closeup-default-headshot-closeup-headshot-photo-333.jpg',
        },
      },
      {
        id: 3333,
        post_title: 'Daniel Wu',
        email: 'dwu@lawfirm.com',
        phone: '215.972.0811',
        slug: '/daniel-wu',
        thumbnail_teaser: {
          url: 'http://mako2-gjtest.gjassets.com/content/uploads/2018/03/TrzcinskiS-closeup-default-headshot-closeup-headshot-photo-333.jpg',
        },
      },
    ],
  },
];
