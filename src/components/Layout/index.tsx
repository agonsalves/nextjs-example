import { PageTransition } from '@/animations/PageTransition';
import Div from '@/Shared/Div';
import Head from 'next/head';
import { ReactNode } from 'react';
import FirmHighlights from '../FirmHighlights';
import Footer from '../Footer';
import { FooterProps } from '../Footer/types';
import Header from '../Header';
import { HeaderProps } from '../Header/types';
import Hero from '../Hero';
import { HeroProps } from '../Hero/types';
import * as S from './styles';
import { pageFrameStyle } from './styles';

interface LayoutProps {
  children: ReactNode;
  heroData: HeroProps;
  headerData: HeaderProps;
  firmHighlightsData: Array<any>;
  footerData: FooterProps;
  pageTitle: string;
  post_type?: string;
  isErrorPage?: boolean;
  post?: any;
  datalist?: any;
}

function Layout({
  children,
  headerData,
  heroData,
  firmHighlightsData,
  footerData,
  pageTitle,
  post_type = 'default',
  isErrorPage = false,
  post,
  datalist
}: LayoutProps) {
  const {
    peopleAlphabet,
    desktopLocations,
    mobileLocations,
    services,
    industries,
  } = headerData;

  const {
    title,
    description,
    hasButton,
    buttonText,
    buttonDirection,
    backgroundImg,
    email,
    alternatePhone1,
    alternatePhone1Label,
    position,
    officeLocation,
    firmName,
    slug,
    siteUrl,
    archivePostType,
    dataList
  } = heroData;

  const { locations, social_urls } = footerData;

  return (
    <>
    <Div themes={pageFrameStyle} >
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header
        peopleAlphabet={peopleAlphabet}
        desktopLocations={desktopLocations}
        mobileLocations={mobileLocations}
        services={services}
        industries={industries}
        themes={pageFrameStyle.header}
        post={post}
        datalist={datalist}
      />
      <Hero
        isErrorPage={isErrorPage}
        title={title}
        description={description}
        hasButton={hasButton}
        buttonText={buttonText}
        buttonDirection={buttonDirection}
        backgroundImg={backgroundImg}
        post_type={post_type}
        email={email}
        alternatePhone1={alternatePhone1}
        alternatePhone1Label={alternatePhone1Label}
        position={position}
        officeLocation={officeLocation}
        firmName={firmName}
        slug={slug}
        siteUrl={siteUrl}
        archivePostType={archivePostType}
        dataList={dataList}
      />
      <S.Container type={post_type}>
        <S.Child>{children}</S.Child>
      </S.Container>
      <FirmHighlights data={firmHighlightsData} />
      <Footer locations={locations} social_urls={social_urls} />
    </Div>
    <PageTransition slug={slug}/>
    </>
  );
}

export default Layout;
