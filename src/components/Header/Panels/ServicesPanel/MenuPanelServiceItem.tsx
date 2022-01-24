import React, {useState}          from 'react'
import Div                        from 'Shared/Div'
import Icon                       from 'Shared/Icon'
import MotionDiv                  from 'Shared/MotionDiv'
import LinkSwitch                 from 'Shared/LinkSwitch'
import {decodeEntities}           from 'utils/helpers'
import {
    chevronCircleDown,
    chevronCircleUp
}                                 from 'styles/variables/iconLibrary'
import { serviceMenuPanelStyle } from './styles'
import MenuPanelServiceSubItem from './MenuPanelServiceSubItem'

interface MenuPanelServiceItemProps {
    service?: any;
    pathname?: any;
}

export const MenuPanelServiceItem = ({service, pathname}: MenuPanelServiceItemProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const isExpandable = service?.children.length > 1

    const serviceMenuPanelVariants = {
        initial: {
            height: 0,
            marginTop: 0
        },
        expanded: {
            height: 'auto',
            marginTop: 18
        }
    }

    return (
        <Div themes={serviceMenuPanelStyle.listItem}>
            <LinkSwitch
                themes={serviceMenuPanelStyle.title(isExpanded)}
                onClick={() =>
                    isExpandable ? setIsExpanded(flag => !flag) : null
                }
                url={!isExpandable ? service.children[0].slug : null}
            >
                {decodeEntities(service.title)}
                {isExpandable && (
                    <Icon
                        icon={isExpanded ? chevronCircleUp : chevronCircleDown}
                        themes={serviceMenuPanelStyle.titleIcon}
                    />
                )}
            </LinkSwitch>
            {isExpandable && service.children && (
                <MotionDiv
                    themes={serviceMenuPanelStyle.subList}
                    variants={serviceMenuPanelVariants}
                    initial="initial"
                    animate={isExpanded ? 'expanded' : 'initial'}
                >
                    {service.children.map((child) =>
                        <MenuPanelServiceSubItem
                            key={child.slug}
                            child={child}
                            pathname={pathname}
                        />
                    )}
                </MotionDiv>
            )}
        </Div>
    )
}