import { WidgetData } from '@/components/AsideContent/Widget/types';
import AsideMenu from '@/components/AsideMenu';
import Attorneys, { RelatedPeople } from '@/components/Attorneys';
import Events from '@/components/Events';
import Layout from '@/components/Layout';
import List from '@/components/List';
import Overview from '@/components/Overview';
import Posts from '@/components/Posts';
import { Publications } from '@/components/PublicationsList';
import Tracker from '@/components/Tracker';
import { api } from '@/services/api';
import { getTemplateData } from '@/services/templateApi';
import { Main } from '@/styles/global';
import { filterBackground } from '@/utils/filter';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { DefaultProps } from '../';

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
  personResume: {
    barMembershipsFieldset: {
      bar_admission: {
        id: number;
        term: string;
      }[];
    }[];
    professionalAffiliations: string;
    specialHonors: string;
    educationFieldset: {
      degree: {
        id: number;
        term: string;
      }[];
      law_school: string;
      school: {
        id: number;
        term: string;
      }[];
    }[];
  };
  relatedPosts: any;
  hits?: any;
  postName?: string;
  post: any;
  datalist?: any;
}

export default function Slug({
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
  personResume,
  relatedPosts,
  hits,
  postName,
  post,
  datalist,
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
        {microsites && (<AsideMenu
          activeId={activeId}
          setActiveId={setActiveId}
          items={menuItems}
          slug={slug}
        />)}
        <Main>
          {content && (
            <Tracker childrenId={'1'} setActiveId={setActiveId}>
              <Overview
                content={content}
                widgets={widgets}
                post_type={post_type}
                personResume={personResume}
                post_name="overview"
              />
            </Tracker>
          )}
          {slug === 'publications' && (
            <Publications hits={hits} relatedPosts={relatedPosts} slug={slug} setActiveId={setActiveId}/>
          )         
          }
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
                    <Tracker childrenId={id} key={id} setActiveId={setActiveId}>
                      <Attorneys
                        section={{
                          attorneys: related_people,
                          post_title: pageTitle,
                          postName,
                          microsite: props.microsite,
                          slug: props.slug,
                        }}
                      />
                    </Tracker>
                  );
                case 'blog-posts':
                case 'publications':
                return (
                  <Tracker childrenId={id} key={id} setActiveId={setActiveId}>

                    <Posts
                      section={{
                        id,
                        page_template,
                        post_title: props.post_title,
                        related_posts: props.related_posts,
                        visible,
                        post_name,
                        slug,
                        pageTitle
                      }}
                    />
                  </Tracker>
                );
                case 'case-studies':
                case 'news-items':
                  return (
                    <Tracker childrenId={id} key={id} setActiveId={setActiveId}>
                      <List
                        section={{
                          post_title: props.post_title,
                          related_posts: props.related_posts,
                          post_name,
                          slug,
                        }}
                      />
                    </Tracker>
                  );
                case 'events':
                  return (
                    <Tracker childrenId={id} key={id} setActiveId={setActiveId}>
                      <Events
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
                    <Tracker childrenId={id} key={id} setActiveId={setActiveId}>
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
  query
}) => {
  const { slug } = params;
  const { data, queryData, status } = await getTemplateData(slug, query);

  if (status === 404) {
    return {
      notFound: true,
    };
  }

  if(!!queryData?.content.hits) {
    const {
      menu: { locations, menu_panels },
      config,
      content,
      datalist
    } = data;
  
    const {
      services: { hierarchy },
      industries,
    } = menu_panels;

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
      photo,
      email,
      alternate_phone_1,
      alternate_phone_1_label,
      position,
      office_location,
      education_fieldset,
      bar_memberships_fieldset,
      professional_affiliations,
      special_honors,
      related_posts,
      archive_post_type
    } = content[0]?._source;
  
    const backgroundImg = filterBackground({
      post_type,
      post_name,
      designate_as_industry,
      industry_marquee,
    });

    const hits = queryData?.content?.hits[archive_post_type]?.hits

    return {
      props: {
        desktopLocations: locations['header-menu'],
        mobileLocations: locations['mobile-header-menu'],
        peopleAlphabet: config.person.alphabet,
        services: hierarchy,
        firmHighlightsData: config.firm_highlights,
        microsites: microsite_pages || null,
        widgets: widgets || null,
        heroData: {
          title: post_title,
          backgroundImg: (photo && photo.url) || backgroundImg || '',
          email: email || null,
          alternatePhone1: alternate_phone_1 || null,
          alternatePhone1Label: alternate_phone_1_label || null,
          position: position || null,
          officeLocation: office_location || null,
          firmName: config.company_name || null,
          siteUrl: config.frontend_domain,
          slug,
          archivePostType: archive_post_type || null,
          dataList: datalist || null
        },
        footerData: {
          locations: locations['footer-menu'],
          social_urls: config.social_urls,
        },
        personResume: {
          educationFieldset: education_fieldset || [],
          barMembershipsFieldset: bar_memberships_fieldset || [],
          professionalAffiliations: professional_affiliations || null,
          specialHonors: special_honors || null,
        },
        pageTitle: post_title,
        slug: `${slug}`,
        content: full_content || null,
        industries,
        post_type,
        relatedPosts: related_posts || null,
        hits: hits || null,
        postName: post_name || null,
        datalist: datalist || null,
        post: _source || null,
      },
    };
  }

  const {
    menu: { locations, menu_panels },
    config,
    content,
    datalist
  } = data;

  const {
    services: { hierarchy },
    industries,
  } = menu_panels;

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
    photo,
    email,
    alternate_phone_1,
    alternate_phone_1_label,
    position,
    office_location,
    education_fieldset,
    bar_memberships_fieldset,
    professional_affiliations,
    special_honors,
    related_posts,
    archive_post_type
  } = content[0]?._source;

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
      microsites: microsite_pages || null,
      widgets: widgets || null,
      heroData: {
        title: post_title,
        backgroundImg: (photo && photo.url) || backgroundImg || '',
        email: email || null,
        alternatePhone1: alternate_phone_1 || null,
        alternatePhone1Label: alternate_phone_1_label || null,
        position: position || null,
        officeLocation: office_location || null,
        firmName: config.company_name || null,
        siteUrl: config.frontend_domain,
        slug,
        archivePostType: archive_post_type || null,
        dataList: datalist || null
      },
      footerData: {
        locations: locations['footer-menu'],
        social_urls: config.social_urls,
      },
      personResume: {
        educationFieldset: education_fieldset || [],
        barMembershipsFieldset: bar_memberships_fieldset || [],
        professionalAffiliations: professional_affiliations || null,
        specialHonors: special_honors || null,
      },
      pageTitle: post_title,
      slug: `${slug}`,
      content: full_content || null,
      industries,
      post_type,
      relatedPosts: related_posts || null,
      postName: post_name || null,
      datalist: datalist || null,
      post: _source || null,
    },
  };
};
