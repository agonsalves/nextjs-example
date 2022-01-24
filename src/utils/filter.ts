export const filterBackground = ({
  post_type,
  post_name,
  designate_as_industry = 'none',
  industry_marquee = '',
}) => {
  const baseUrl = process.env.REACT_APP_CDN_LOCATION;

  if (designate_as_industry === 'checked') {
    return baseUrl + `marquee-industries/${industry_marquee}.jpg`;
  }

  if (post_type === 'page') {
    switch (post_name) {
      case 'home':
        return baseUrl + 'marquee-home.jpg';
      default:
        return baseUrl + 'marquee-generic.jpg';
    }
  }

  if (post_type === 'practice-area') {
    return baseUrl + 'marquee-services-placeholder.jpg';
  }
};
