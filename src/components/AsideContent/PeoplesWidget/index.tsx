import Img from '@/Shared/Img';
import SquareHeadshot from '@/Shared/SquareHeadshot';
import Link from 'next/link';
import React from 'react';
import * as S from './styles';
import { personContactStyle } from './styles';
import { PeopleData } from './types';

function PeoplesWidget ({peoples}) {
    return(
        <S.Container>
            {peoples && 
                <S.Peoples>
                <h3>Related People</h3>
                {peoples.map((people: PeopleData) => {
                    return(
                        <li>
                            <SquareHeadshot
                                image={people.thumbnail_teaser}
                                name={people.post_title}
                                themes={{...personContactStyle.image}}
                            />
                            <Link href={people.slug}>
                                {people.post_title}
                            </Link>
                        </li>
                    )
                })}
                </S.Peoples>
            }
        </S.Container>
    );
}

export default PeoplesWidget;
