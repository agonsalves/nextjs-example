import Layout from '@/components/Layout';
import PeopleSearchResult from '@/components/People/PeopleSearchResult';
import { ResultItem } from '@/components/People/PeopleSearchResult/types';
import { getPeopleData, searchPeople } from '@/services/peopleApi';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import { DefaultProps } from '.';

interface PeopleProps extends DefaultProps {
  peopleSearchResults: Array<ResultItem>;
  datalist?: any;
  post?: any;
}

export default function People({
  mobileLocations,
  desktopLocations,
  peopleAlphabet,
  services,
  industries,
  heroData,
  peopleSearchResults,
  firmHighlightsData,
  footerData,
  pageTitle,
  datalist,
  post
}: PeopleProps) {
  useQuery('people', getPeopleData);

  const headerData = {
    mobileLocations,
    desktopLocations,
    peopleAlphabet,
    services,
    industries,
  };
  heroData = {
    ...heroData,
    backgroundImg:
      'https://d372nmlv8kweuj.cloudfront.net/mako/marquee-generic.jpg',
  };

  return (
    <>
      <Layout
        headerData={headerData}
        heroData={heroData}
        firmHighlightsData={firmHighlightsData}
        footerData={footerData}
        pageTitle={pageTitle}
        datalist={datalist}
        post={post}
      >
        <PeopleSearchResult results={peopleSearchResults} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PeopleProps> = async props => {
  const { data } = await getPeopleData();

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

  const { post_title } = content[0]._source;

  const { _source } = content[0]

  const searchResult = await searchPeople(props.resolvedUrl);

  return {
    props: {
      desktopLocations: locations['header-menu'],
      mobileLocations: locations['mobile-header-menu'],
      peopleAlphabet: config.person.alphabet,
      services: hierarchy,
      industries,
      firmHighlightsData: config.firm_highlights,
      heroData: {
        title: post_title,
        firmName: config.company_name
      },
      footerData: {
        locations: locations['footer-menu'],
        social_urls: config.social_urls,
      },
      peopleSearchResults: searchResult || null,
      pageTitle: post_title,
      post: _source || null,
      datalist: datalist || null,
    },
  };
};
