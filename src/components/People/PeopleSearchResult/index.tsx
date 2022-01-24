import PersonListing from '../../PersonListing';
import ProfilesFound from '../ProfilesFound';
import { ResultItem } from './types';
import * as S from './styles';

interface PeopleSearchResultProps {
  results: Array<ResultItem>;
}

const PeopleSearchResult = ({ results }: PeopleSearchResultProps) => {
  return (
    <S.Wrapper>
      <S.Title>Search Results</S.Title>
      <ProfilesFound letter="A" quantity={1} />
      <S.ResultsWrapper>
        {results?.map(({ _id, _source }) => (
          <PersonListing
            key={_id}
            email={_source.email}
            name={_source.post_title}
            phoneNumber={_source.alternate_phone_1}
            position={_source.position[0].term}
            url={_source.slug}
            headshotUrl={_source.headshot_photo?.url}
          />
        ))}
      </S.ResultsWrapper>
    </S.Wrapper>
  );
};

export default PeopleSearchResult;
