import Error404 from '@/components/Error404';
import Layout from '@/components/Layout';
import { getHomeData } from '@/services/homeApi';
import { filterBackground } from '@/utils/filter';
import { formatFirmFacts } from '@/utils/format';
import { GetStaticProps } from 'next';
import { useQuery } from 'react-query';
import { DefaultProps } from '.';

export default function Custom404({
  mobileLocations,
  desktopLocations,
  peopleAlphabet,
  services,
  industries,
  firmHighlightsData,
  heroData,
  footerData,
  pageTitle,
  post,
  datalist
}: DefaultProps) {
  useQuery('home', getHomeData);

  const headerData = {
    peopleAlphabet,
    mobileLocations,
    desktopLocations,
    services,
    industries,
  };
  heroData = {
    ...heroData,
    hasButton: false,
    buttonDirection: null,
    buttonText: null,
  };

  return (
    <>
      <Layout
        pageTitle={'Page Not Found'}
        headerData={headerData}
        heroData={heroData}
        firmHighlightsData={firmHighlightsData}
        footerData={footerData}
        datalist={datalist}
        post={post}
        isErrorPage
      >
        <Error404 />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps<DefaultProps> = async () => {
  const { data } = await getHomeData();

  const {
    menu: { locations, menu_panels },
    content,
    config,
    datalist
  } = data;

  const {
    services: { hierarchy },
    industries,
  } = menu_panels;

  const {_source} = content[0]

  // Hero
  const { post_type, post_name } =
    content[0]._source;

  const backgroundImg = filterBackground({ post_type, post_name });

  const firmFactsData = formatFirmFacts(content[0]._source);

  return {
    props: {
      desktopLocations: locations['header-menu'],
      mobileLocations: locations['mobile-header-menu'],
      peopleAlphabet: config.person.alphabet,
      services: hierarchy,
      industries,
      firmFactsData,
      firmHighlightsData: config.firm_highlights,
      heroData: {
        title: 'Page Not Found',
        backgroundImg,
      },
      footerData: {
        locations: locations['footer-menu'],
        social_urls: config.social_urls,
      },
      pageTitle: config.company_name,
      post: _source || null,
      datalist: datalist || null,
    },
  };
};
