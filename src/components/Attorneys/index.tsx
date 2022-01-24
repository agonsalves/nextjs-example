import { usePanel } from '@/hooks/usePanel';
import { useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { TypeProps } from '../List/Item/types';
import { PeoplePanel } from '../PeoplePanel';
import PersonListing from '../PersonListing';
import * as S from './styles';

export interface RelatedPeople {
  id: number | string;
  email: string;
  phone: string;
  position: TypeProps[];
  post_title: string;
  slug: string;
  thumbnail_teaser: {
    url: string;
  };
}

export interface AttorneysProps {
  section: {
    post_title: string;
    attorneys: RelatedPeople[];
    postName?: string;
    microsite?: string;
    subSlug?: string;
    sectionTitle?: string;
    slug?: string;
  };
}

function Attorneys({ section }: AttorneysProps) {
  const { 
    attorneys,
    postName,
    post_title,
    sectionTitle,
    subSlug
  } = section;
  const { setPanel } = usePanel();

  const handlePeoplePanel = () => {
    setPanel({
      children: <PeoplePanel 
      attorneys={attorneys}
      post_title={post_title}
      />,
      id: 'people-microsite'
    });
  }

  useEffect(() => {
    if(subSlug === 'people'){
      setPanel({
        children: <PeoplePanel 
        attorneys={attorneys}
        post_title={post_title}
        />,
        id: 'people-microsite'
      });
    }
  }, [subSlug])

  return (
    <S.Wrapper id={postName}>
      <h2>{sectionTitle}</h2>
      <S.Container>
        {attorneys
          .slice(0, 8)
          .map(
            ({
              email,
              post_title,
              phone,
              position,
              slug,
              id,
              thumbnail_teaser,
            }) => {
              return (
                <PersonListing
                  key={id}
                  email={email}
                  headshotUrl={thumbnail_teaser && thumbnail_teaser.url}
                  name={post_title}
                  phone={phone}
                  position={position[0].term}
                  url={slug}
                />
              );
            },
          )}
      </S.Container>
      {attorneys.length > 8 && (
        <S.Footer>
            <S.SeeAllButton
              onClick={() => {
                handlePeoplePanel()
              }}
            >
              <div>
                <BsArrowRight size={24} />                            
              </div>
              <span>All People</span>
            </S.SeeAllButton>
        </S.Footer>
      )}
    </S.Wrapper>
  );
}

export default Attorneys;
