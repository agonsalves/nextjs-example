import React from 'react';
import AsideContent from '../AsideContent';
import { WidgetData } from '../AsideContent/Widget/types';
import NavigationMenu from '../NavigationMenu';
import * as S from './styles';
import { useRouter } from 'next/router';
import { PeopleData } from '../AsideContent/PeoplesWidget/types';
import { PracticeAreaData } from '../AsideContent/PracticeAreaWidget/types';
import JobsFilters from '@/components/JobsFilters';
import JobOpenings from '../JobOpenings';

import { JobOportunitiesData } from '../JobsFilters/types';
import { Accordion } from '../Header/Panels/ServicesPanel/Accordion';
import { AccordionWrapper } from '../Header/Panels/ServicesPanel/Accordion/styles';

export interface OverviewProps {
  post_title?: string;
  post_type?: string;
  post_name: string;
  content: string;
  widgets?: WidgetData[];
  people?: PeopleData[];
  practice_area?: PracticeAreaData[];
  personResume?: {
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
  job_openings?: JobOportunitiesData[];
}

function Overview({
  content,
  widgets,
  post_name,
  post_title,
  post_type,
  personResume,
  people,
  practice_area,
  job_openings,
}: OverviewProps) {
  const router = useRouter();
  const { slug } = router.query;
  const createMarkup = () => ({ __html: content });
  const barMembershipChildren = [];
  const educationFieldsetChildren = [];

  personResume?.barMembershipsFieldset?.forEach(item => {
    barMembershipChildren.push(item.bar_admission[0].term);
  });

  personResume?.educationFieldset?.forEach(item => {
    educationFieldsetChildren.push(
      `${item.school[0].term} (${item.degree[0].term})`,
    );
  });

  return (
    <>
      {slug === 'about-the-firm' && <NavigationMenu />}
      <S.Wrapper id={post_name} isCustom={!!post_title}>
        {post_title && <h2>{post_title}</h2>}
        <S.Container>
          <S.Content
            isCustom={!!post_title}
            dangerouslySetInnerHTML={createMarkup()}
          ></S.Content>
          {widgets && (
            <AsideContent
              widgets={widgets}
              people={people}
              practice_area={practice_area}
            />
          )}
        </S.Container>
        <S.Content>
          {post_type === 'person' && (
            <AccordionWrapper type="person">
              <Accordion
                type="person"
                title="Education"
                object={null}
                data={educationFieldsetChildren}
              ></Accordion>
              <Accordion
                type="person"
                title="Bar Admissions"
                object={null}
                data={barMembershipChildren}
              ></Accordion>
              <Accordion
                type="person"
                title="Memberships"
                object={null}
                children={personResume.professionalAffiliations}
              ></Accordion>
              <Accordion
                type="person"
                title="Recognition"
                object={null}
                children={personResume.specialHonors}
              ></Accordion>
            </AccordionWrapper>
          )}
          {job_openings && (
            <S.JobsContainer>
              <JobsFilters job_openings={job_openings} />
              <JobOpenings job_openings={job_openings} />
            </S.JobsContainer>
          )}
        </S.Content>
      </S.Wrapper>
    </>
  );
}

export default Overview;
