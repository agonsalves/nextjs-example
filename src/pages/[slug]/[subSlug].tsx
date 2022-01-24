import { PeopleData } from '@/components/AsideContent/PeoplesWidget/types';
import { PracticeAreaData } from '@/components/AsideContent/PracticeAreaWidget/types';
import { WidgetData } from '@/components/AsideContent/Widget/types';
import AsideMenu from '@/components/AsideMenu';
import Attorneys, { RelatedPeople } from '@/components/Attorneys';
import Events from '@/components/Events';
import { JobOportunitiesData } from '@/components/JobsFilters/types';
import Layout from '@/components/Layout';
import List from '@/components/List';
import Overview from '@/components/Overview';
import Posts from '@/components/Posts';
import Tracker from '@/components/Tracker';
import Publication from '@/components/Publication';
import { api } from '@/services/api';
import { getTemplateData } from '@/services/templateApi';
import { Main } from '@/styles/global';
import { filterBackground } from '@/utils/filter';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { DefaultProps } from '..';

interface Microsite {
  id: string;
  page_template: string;
  post_title: string;
  post_name: string;
  visible: boolean;
  microsite?: string;
  slug?: string;
  // Attorneys
  related_people?: RelatedPeople[];
  // Case Studies
  related_posts?: Array<any>;
  // Custom
  full_content?: string;
  widgets?: WidgetData[];
}

interface SlugProps extends DefaultProps {
  widgets?: WidgetData[];
  microsites?: Microsite[];
  slug?: string;
  content?: string;
  post_type?: string;
  people?: PeopleData[];
  practice_area?: PracticeAreaData[];
  jobOpenings?: JobOportunitiesData[];
  displayDate?: string;
  publicationType?: string;
  postTitle?: string;
  thumbnailTeaser?: string;
  subSlug?: any;
}

export default function SubSlug({
  mobileLocations,
  desktopLocations,
  peopleAlphabet,
  services,
  firmHighlightsData,
  heroData,
  footerData,
  pageTitle,
  slug,
  content,
  microsites,
  post_type,
  widgets,
  industries,
  people,
  practice_area,
  jobOpenings,
  displayDate,
  publicationType,
  postTitle,
  thumbnailTeaser,
  subSlug,
  post,
  datalist
}: SlugProps) {
  const [menuItems, setMenuItems] = useState([
    { id: '1', post_title: 'Overview', post_name: 'overview' },
  ]);

  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    api.get(slug, {
      headers: {
        'x-init': 'true',
      },
    });
  }, []);

  useEffect(() => {
    if (!microsites) {
      setMenuItems(null);
      return;
    }

    const mapped = microsites?.map(({ post_title, id, post_name }) => ({
      id,
      post_title,
      post_name,
    }));

    setMenuItems(prevItems => prevItems.concat(mapped));
  }, [setMenuItems, microsites]);

  const headerData = {
    peopleAlphabet,
    mobileLocations,
    desktopLocations,
    services,
    industries,
  };

  const publicationHeaderData = {
    displayDate,
    publicationType,
    postTitle,
    thumbnailTeaser,
  };

  const isHiddenToPublication = post_type === 'publication';

  return (
    <>
      <Layout
        pageTitle={pageTitle}
        headerData={headerData}
        heroData={heroData}
        firmHighlightsData={firmHighlightsData}
        footerData={footerData}
        post_type={post_type}
        post={post}
        datalist={datalist}
      >
        {menuItems && (
          <AsideMenu
            activeId={activeId}
            setActiveId={setActiveId}
            items={menuItems}
            slug={slug}
            isHidden={isHiddenToPublication}
          />
        )}
        {post_type === 'publication' && (
          <Tracker childrenId={'1'} setActiveId={setActiveId}>
            <Publication
              headerData={publicationHeaderData}
              postName="publication"
            />
          </Tracker>
        )}
        <Main>
          {content && (
            <Tracker childrenId={'1'} setActiveId={setActiveId}>
              <Overview
                content={content}
                widgets={widgets}
                people={people}
                practice_area={practice_area}
                post_name="overview"
                post_title={pageTitle || null}
                job_openings={jobOpenings}
              />
            </Tracker>
          )}
          {microsites &&
            microsites.map(({ page_template, post_name, ...props }) => {
              const { visible, id } = props;
              if (!visible) {
                return null;
              }

              switch (page_template) {
                case 'people':
                  const { related_people } = props;
                  return (
                    <Tracker childrenId={id} setActiveId={setActiveId}>
                      <Attorneys
                        key={id}
                        section={{
                          attorneys: related_people,
                          post_title: pageTitle,
                          postName: post_name,
                          microsite: props.microsite,
                          sectionTitle: props.post_title,
                          slug: props.slug,
                          subSlug
                        }}
                      />
                    </Tracker>
                  );
                case 'blog_posts':
                case 'publications':
                  return (
                    <Tracker childrenId={id} setActiveId={setActiveId}>
                      <Posts
                        key={id}
                        section={{
                          id,
                          page_template,
                          post_title: props.post_title,
                          related_posts: props.related_posts,
                          visible,
                          post_name,
                          slug,
                        }}
                      />
                    </Tracker>
                  );
                case 'case-studies':
                case 'news-items':
                  return (
                    <Tracker childrenId={id} setActiveId={setActiveId}>
                      <List
                        key={id}
                        section={{
                          post_title: props.post_title,
                          related_posts: props.related_posts,
                          post_name,
                          slug,
                          people,
                          practice_area,
                        }}
                      />
                    </Tracker>
                  );
                case 'events':
                  return (
                    <Tracker childrenId={id} setActiveId={setActiveId}>
                      <Events
                        key={id}
                        section={{
                          page_template,
                          post_title: props.post_title,
                          related_posts: props.related_posts,
                          visible,
                          post_name,
                          slug,
                        }}
                      />
                    </Tracker>
                  );
                case 'custom':
                  return (
                    <Tracker childrenId={id} setActiveId={setActiveId}>
                      <Overview
                        content={props.full_content}
                        post_name={post_name}
                        widgets={props.widgets}
                        post_title={props.post_title}
                      />
                    </Tracker>
                  );
                default:
                  return null;
              }
            })}
        </Main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<SlugProps> = async ({
  params,
}) => {
  const { slug, subSlug, query } = params;
  const { data, status } = await getTemplateData(`${slug}/${subSlug}`, query);
  if (status === 404) {
    return {
      notFound: true,
    };
  }

  const { menu, config, content, datalist } = data;
  const { locations, menu_panels } = !!menu && menu;
  const { services, industries } = !!menu_panels && menu_panels;
  const { hierarchy } = !!services && services;


  const {_source} = content[0]

  // Hero
  const {
    post_title,
    microsite_pages,
    widgets,
    post_type,
    full_content,
    post_name,
    designate_as_industry,
    industry_marquee,
    job_openings,
    people,
    practice_area,
    display_date,
    publication_type,
    post_title: postTitle,
    post_type: postType,
    thumbnail_teaser,
    date,
  } = content[0]._source;

  const backgroundImg = filterBackground({
    post_type,
    post_name,
    designate_as_industry,
    industry_marquee,
  });

  return {
    props: {
      desktopLocations: locations['header-menu'],
      mobileLocations: locations['mobile-header-menu'],
      peopleAlphabet: config.person.alphabet,
      services: hierarchy,
      firmHighlightsData: config.firm_highlights,
      microsites: microsite_pages || [],
      widgets: widgets || null,
      heroData: {
        title: post_title,
        backgroundImg: backgroundImg || '',
        firmName: config.company_name
      },
      footerData: {
        locations: locations['footer-menu'],
        social_urls: config.social_urls,
      },
      pageTitle: post_title,
      slug: `${slug}/${subSlug}`,
      content: full_content || null,
      industries,
      post_type: postType || post_type || null,
      people: people || null,
      practice_area: practice_area || null,
      displayDate: display_date || date || null,
      publicationType: (publication_type && publication_type[0].term) || null,
      postTitle: postTitle || null,
      thumbnailTeaser: (!!thumbnail_teaser && thumbnail_teaser.url) || null,
      jobOpenings: job_openings || null,
      postName: post_name || null,
      subSlug,
      post: _source || null,
      datalist: datalist || null,
    },
  };
};
