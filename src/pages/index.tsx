import FirmFacts from '@/components/FirmFacts';
import { FirmFactCardData } from '@/components/FirmFacts/Card/types';
import { FooterProps } from '@/components/Footer/types';
import { Alphabet } from '@/components/Header/Panels';
import { HeroProps } from '@/components/Hero/types';
import Layout from '@/components/Layout';
import { getHomeData } from '@/services/homeApi';
import { filterBackground } from '@/utils/filter';
import { formatFirmFacts } from '@/utils/format';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';

export interface DefaultProps {
  mobileLocations?: Array<any>;
  desktopLocations?: Array<any>;
  peopleAlphabet?: Alphabet;
  services?: Array<any>;
  industries?: Array<any>;
  firmHighlightsData?: Array<any>;
  heroData?: HeroProps;
  firmFactsData?: Array<any>;
  footerData?: FooterProps;
  pageTitle?: string;
  post?: any;
  datalist?: any;
}

interface HomeProps extends DefaultProps {
  firmFactsData: FirmFactCardData[];
  post?: any;
  datalist?: any;
}

export default function Home({
  firmFactsData,
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
  datalist,
}: HomeProps) {
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
    hasButton: true,
    buttonDirection: 'down',
    buttonText: 'View Case Studies',
  };

  return (
    <>
      <Layout
        pageTitle={pageTitle}
        headerData={headerData}
        heroData={heroData}
        firmHighlightsData={firmHighlightsData}
        footerData={footerData}
        post={post}
        datalist={datalist}
      >
        <FirmFacts data={firmFactsData} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
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

  // Hero
  const { home_headline, home_description, post_type, post_name } =
    content[0]._source;

  const { _source } = content[0]

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
        title: home_headline,
        description: home_description,
        backgroundImg,
        firmName: config.company_name
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
