import Link from 'next/link';
import React from 'react';
import * as S from './styles';
import { PracticeAreaData } from './types';

function PracticeAreaWidget ({practices}) {
    return(
        <S.Container>
            {practices &&
                <S.PracticeArea>
                    <h3>Related Services /<br/>
                        Industries
                    </h3>
                    {practices.map((practic: PracticeAreaData) => {
                        return(
                            <li>
                                <Link href={practic.slug}>
                                    {practic.post_title}
                                </Link>
                            </li>
                        )
                    })}
                </S.PracticeArea>
            }
        </S.Container>
    );
}

export default PracticeAreaWidget;