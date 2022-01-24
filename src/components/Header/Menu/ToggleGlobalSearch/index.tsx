import Icon from '@/Shared/Icon';
import MotionDiv from '@/Shared/MotionDiv';
import {search} from 'styles/variables/iconLibrary'
import React, { useContext, useState } from 'react';
import {
  globalSearchIconVariants,
  globalSearchToggleVariants,
  globalSearchVariants,
} from './animations';
import GlobalSearchField from './GlobalSearchField';

import { globalSearchIconStyle, globalSearchToggleStyle } from './styles';
import { headerMenuPanelContext } from '@/controllers/HeaderMenuPanelController';

const ToggleGlobalSearch = ({post}) => {
  const {setGlobalSearchOpen, isGlobalSearchOpen} = useContext(headerMenuPanelContext)

  return (
    <MotionDiv
            themes={globalSearchToggleStyle}
            variants={globalSearchToggleVariants}
            initial="initial"
            animate={isGlobalSearchOpen ? 'expanded' : 'initial'}
            onClick={() => {
                setGlobalSearchOpen(true)
            }}
        >
            <MotionDiv
                themes={globalSearchIconStyle}
                variants={globalSearchIconVariants}
                initial="initial"
                animate={isGlobalSearchOpen ? 'expanded' : 'initial'}
                className="toggle-menu-panel"
            >
              <Icon themes ={{}} icon={search}/>
            </MotionDiv>
            <MotionDiv
                variants={globalSearchVariants}
                initial="initial"
                animate={isGlobalSearchOpen ? 'expanded' : 'initial'}
            >
                <GlobalSearchField isOpen={isGlobalSearchOpen} post={post}/>
            </MotionDiv>
        </MotionDiv>
  );
};

export default ToggleGlobalSearch;
