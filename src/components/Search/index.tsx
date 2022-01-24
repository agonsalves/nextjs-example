import * as S from './styles';
import { HiOutlineSearch } from 'react-icons/hi';
import { useState } from 'react';
import Router from 'next/router';

interface SearchProps {
  placeholder: string;
  url?: string;
  type?: string;
}

const Search = ({ placeholder, type }: SearchProps) => {
  const [keyword, setKeyword] = useState('');

  return (
    <S.Wrapper>
      <S.InputWrapper>
        {/* Need to change this for a label */}
        <input
          name="search"
          type="text"
          placeholder={placeholder}
          onChange={event => setKeyword(event.target.value)}
        />
      </S.InputWrapper>
      <button
        onClick={() => {
          switch (type) {
            case 'services':
              keyword ? Router.push(`/${keyword}`) : null;
              break;
            default:
              const url = '/people?search[post_type]=person';

              keyword
                ? Router.push(`${url}&search[keyword]=[${keyword}]`)
                : Router.push(url);
              break;
          }
        }}
      >
        <HiOutlineSearch size={20} />
        <span>Search</span>
      </button>
    </S.Wrapper>
  );
};

export default Search;
