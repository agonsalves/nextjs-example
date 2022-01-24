import { Alphabet } from '@/components/Header/Panels';
import Div from '@/Shared/Div';
import H2 from '@/Shared/H2';
import Icon from '@/Shared/Icon';
import Span from '@/Shared/Span';
import React, { useState } from 'react';
import PeopleSearchAlphabet from './SearchAlphabet';
import {
  minus,
  plus
}                             from 'styles/variables/iconLibrary'
import { singular } from '@/utils/helpers';
import { peopleMenuPanelStyle } from './styles';
import { headerMenuPanelStyle } from '../../Menu/styles';
import PeopleSearchForm from '@/Shared/PeopleSearchForm';
interface PeoplePanelProps {
  alphabet: Alphabet;
  post: any;
  datalist?: any;
}

const MenuPanelPeople = ({ post, alphabet, datalist }: PeoplePanelProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <H2 themes={headerMenuPanelStyle.heading}>Find a {singular('person')}</H2>
            <Div themes={peopleMenuPanelStyle.search}>
                <PeopleSearchForm
                    query={post?.search?.query}
                    themes={peopleMenuPanelStyle.searchForm}
                    isAdvanced={isExpanded}
                    datalist={datalist}
                />
                <Div themes={{display: 'flex', justifyContent: 'space-between'}}>
                    <Span
                        onClick={() => setIsExpanded(!isExpanded)}
                        themes={peopleMenuPanelStyle.advancedSearch}>
                        <Icon
                            icon={!isExpanded ? plus : minus}
                            themes={peopleMenuPanelStyle.advancedSearchIcon}
                        />
                        {`${isExpanded ? 'Basic' : 'Advanced'} search`}
                    </Span>
                </Div>
            </Div>
      <PeopleSearchAlphabet alphabet={alphabet} theme={peopleMenuPanelStyle.alphabet}/>
    </div>
  );
};

export default MenuPanelPeople;
