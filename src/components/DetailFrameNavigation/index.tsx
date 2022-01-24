import React                from 'react'
import Div                  from 'Shared/Div'
import Icon                 from 'Shared/Icon'
import Span                 from 'Shared/Span'

import { usePanel } from '@/hooks/usePanel';

import {
    longArrowAltLeft,
    longArrowAltRight,
    timesLight
}                           from 'styles/variables/iconLibrary'
import {
    micrositeDetailNavStyle,
    micrositeDetailTopBarStyle
}                           from './styles'
import LinkSwitch from '@/Shared/LinkSwitch';

interface DetailFrameNavigationProps {
    post_title: string;
    type: string;
    page?: number;
    setPage?: any;
    isEnd?: boolean;
}

const DetailFrameNavigation = ({post_title, type, page, setPage, isEnd}: DetailFrameNavigationProps) => {
    const {setPanel} = usePanel()

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };
    return (
        <Div themes={micrositeDetailTopBarStyle}>
            <Div themes={micrositeDetailTopBarStyle.title}>
                <Span themes={micrositeDetailTopBarStyle.name}>
                    {`${post_title}`}
                </Span>
                <Span themes={micrositeDetailTopBarStyle.type}>
                    {`/ ${type}`}
                </Span>
            </Div>
            <Div themes={micrositeDetailNavStyle}>
                {type === "Publication" && (
                    <>
                    <LinkSwitch
                        themes={micrositeDetailNavStyle.prev('ghsg')}
                        onClick={() => {
                            page !== 0 && paginate(-1)
                        }}
                        disabled={page===0}
                    >
                        <Icon
                            icon={longArrowAltLeft}
                            themes={micrositeDetailNavStyle.prevIcon('prev')}
                        />
                        <span>Prev</span>
                    </LinkSwitch>
                    <LinkSwitch
                        themes={micrositeDetailNavStyle.next('nexasat')}
                        onClick={() => {
                            (!isEnd) && paginate(1)
                        }}
                        disabled={isEnd}
                    >
                        <span>Next</span>
                        <Icon
                            icon={longArrowAltRight}
                            themes={micrositeDetailNavStyle.nextIcon('asasa')}
                        />
                    </LinkSwitch>
                </>
                )}
            </Div>
            <Span themes={micrositeDetailTopBarStyle.close} onClick={() => setPanel(null)}>
                <Icon icon={timesLight} themes={micrositeDetailTopBarStyle.closeIcon}/>
            </Span>
        </Div>
    )
}

export default DetailFrameNavigation
