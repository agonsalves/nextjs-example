import { headerMenuVariants } from '@/animations/HeaderAnimations/headerMenuAnimations';
import { headerMenuPanelContext } from '@/controllers/HeaderMenuPanelController';
import Div from '@/Shared/Div';
import MotionDiv from '@/Shared/MotionDiv';
import Overlay from '@/Shared/Overlay';
import { breakpointUpperLimit } from '@/styles/globalStyles';
import { isBlog } from '@/utils/flags';
import { useAnimation } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import useMedia from 'use-media';
import { Alphabet } from '../Panels';
import { HeaderItemData } from '../types';
import Item from './Item';
import { headerMenuStyle, underlineAnimationStyle } from './styles';
import ToggleGlobalSearch from './ToggleGlobalSearch';

interface MenuProps {
  locations: Array<any>;
  alphabet: Alphabet;
  services: Array<any>;
  industries?: Array<any>;
  post?: any;
  datalist?: any;
}

const Menu = ({ locations, alphabet, services, industries, post, datalist }: MenuProps) => {
  const [measurements, setMeasurements] = useState({})
  const underlineAnimation = useAnimation()
  const isTablet = useMedia({ maxWidth: breakpointUpperLimit.tablet });
  const {isGlobalSearchOpen} = useContext(headerMenuPanelContext)
  
  useEffect(() => {
    if (Object.keys(measurements).length === locations.length) {
        let target = locations.findIndex(item => measurements[item.ID]?.isActive)
        if (target >= 0) {
            let shortenedArray = locations.slice(0, target)
            let highlightedItem = measurements[locations[target].ID]
            let barLength = highlightedItem?.inner
            let startDistance = 0
            shortenedArray.forEach(item => startDistance += measurements[item.ID]?.outer)
            startDistance += (highlightedItem.outer - highlightedItem.inner) / 2

            underlineAnimation.start({width: barLength, x: startDistance, transition: {ease: 'easeInOut'}})
        } else {
            underlineAnimation.start({width: 0, x: 0, transition: {ease: 'easeInOut'}})
        }
    }
  }, [underlineAnimation, measurements, locations])
  
  return (
    <Div themes={headerMenuStyle} as="nav" aria-label="Main Site">
      {(!isBlog(post) && (
          <>
            <MotionDiv
                themes={{overflow: 'hidden'}}
                animate={isTablet && isGlobalSearchOpen ? 'animate' : 'initial'}
                variants={headerMenuVariants}
            >
                <MotionDiv 
                  animate={underlineAnimation}
                  themes={underlineAnimationStyle(isTablet && isGlobalSearchOpen)}
                />
                <Div themes={headerMenuStyle.menu}>
                  {locations.map((item, i) => (
                      <Item
                        key={i}
                        item={item}
                        alphabet={alphabet}
                        services={services}
                        industries={industries}
                        post={post}
                        datalist={datalist}
                        locations={locations}
                        indexToId={i}
                        setMeasurements={setMeasurements}
                      />
                    ))}
                </Div>
              </MotionDiv>
            <ToggleGlobalSearch post={post}/>
            <Overlay isOpen={isGlobalSearchOpen} theme={headerMenuStyle.overlay}/>
          </>
      ))}
    </Div>
  );
};

export default Menu;
