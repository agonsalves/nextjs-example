import { Alphabet } from '@/components/Header/Panels';
import Div from '@/Shared/Div';
import Icon from '@/Shared/Icon';
import LinkSwitch from '@/Shared/LinkSwitch';
import Router from 'next/router';
import React from 'react';
import {longArrowAltRight}   from 'styles/variables/iconLibrary'
import {alphabetFilterStyle} from './styles'

interface SearchAlphabetProps {
  alphabet: Alphabet;
  theme?: any;
}

const handleButtonClick = () => {
  Router.push('/people?search[post_type]=person');
};

const SearchAlphabet = ({ alphabet, theme }: SearchAlphabetProps) => {
  return (
    <Div themes={{ ...alphabetFilterStyle, ...theme }}>
      <Div themes={{ ...alphabetFilterStyle.inner}}>
        {alphabet.map(item => (
          <LinkSwitch
            themes={{ ...alphabetFilterStyle.letter}}
            key={item.letter}
            url={
              (item.active &&
                `/people?search[post_type]=person&search[letter]=${item.letter}`) ||
              null
            }
            children={item.letter}
          />
        ))}
        <LinkSwitch
          themes={{
            ...alphabetFilterStyle.viewAllLetter
          }}
          url={`/people?search[post_type]=person`}
        >
          View All
        </LinkSwitch>
      </Div>
      <LinkSwitch
        themes={{ ...alphabetFilterStyle.viewAll}}
        url={`/people?search[post_type]=person`}
      >
        View All
        <Icon
          icon={longArrowAltRight}
          themes={{ ...alphabetFilterStyle.viewAllIcon}}
        />
      </LinkSwitch>
    </Div>
  );
};

export default SearchAlphabet;
