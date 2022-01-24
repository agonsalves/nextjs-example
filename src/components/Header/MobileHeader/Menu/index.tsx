import Div from '@/Shared/Div';
import Li from '@/Shared/Li';
import LinkSwitch from '@/Shared/LinkSwitch';
import MotionDiv from '@/Shared/MotionDiv';
import Ul from '@/Shared/Ul';
import { AnimatePresence, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { MobileMenuItem } from './MobileMenuItem';
import { mobileMenuItemStyle } from './MobileMenuItem/styles';
import { MobileMenuSearchItem } from './MobileMenuSearchItem';

import { mobileMenuHeaderBackgroundStyle, mobileMenuLinkStyle, mobileMenuStyle, mobileMenuWrapperStyle } from './styles';

const MobileMenu = ({ data, post, isOpen, setIsOpen }) => {
  // const mobileMenuAnimation = useAnimation()
  const [resetSubMenuToggle, setResetSubMenuToggle] = useState(true);
  const [searchToggle, setSearchToggle] = useState(false);

  // const mobileMenuVariants = {
  //   initial: {
  //     height: 0,
  //   },
  //   animate: {
  //     height: "100vh",
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  useEffect(() => {
    setResetSubMenuToggle(true);
  }, [post]);

  if(isOpen) {
    return (
    <Div
      themes={mobileMenuWrapperStyle}
      as="nav"
      aria-label="Main Site Navigation"
    >
          <Div themes={mobileMenuHeaderBackgroundStyle} />
          <Ul themes={mobileMenuStyle}>
            <Li themes={mobileMenuItemStyle}>
              <LinkSwitch url="/" themes={mobileMenuLinkStyle}>
                Home
              </LinkSwitch>
            </Li>
            <MobileMenuSearchItem
              setSearchToggle={setSearchToggle}
              searchToggle={searchToggle}
            />
            <Li themes={mobileMenuItemStyle}>
              <LinkSwitch url="/industries" themes={mobileMenuLinkStyle}>
                Industries
              </LinkSwitch>
            </Li>
            {data.map((item, key) => (
              <MobileMenuItem
                item={item}
                key={key}
                post={post}
                resetSubMenuToggle={resetSubMenuToggle}
              />
            ))}
          </Ul>
    </Div>
  );}
  return null
};

export default MobileMenu;
