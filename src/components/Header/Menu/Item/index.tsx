import { Alphabet } from '@/components/Header/Panels';
import ServicesPanel from '@/components/Header/Panels/ServicesPanel';
import IndustriesPanel from '@/components/Header/Panels/IndustriesPanel';
import { HeaderItemData } from '@/components/Header/types';
import { usePanel } from '@/hooks/usePanel';
import React, { useEffect, useRef } from 'react';
import Div from '@/Shared/Div';
import LinkSwitch from '@/Shared/LinkSwitch';
import useMeasure from '@/utils/useMeasure';
import { headerMenuLinkStyle } from './styles';
import MenuPanelPeople from '@/components/Header/Panels/PeoplePanel';
import MenuPanelGeneric from '../../Panels/GenericPanel';
import { absoluteToRelativeUrl } from '@/utils/url';
import { isNavItemActive } from '@/utils/isNavItemActive';

interface ItemProps {
  item: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  alphabet: Alphabet;
  services: Array<any>;
  industries: Array<any>;
  post?: any;
  datalist?: any;
  locations?: any;
  indexToId?: number;
  setMeasurements?: any;
}

const Item = ({ 
  item,
  alphabet,
  services,
  industries,
  post,
  datalist,
  locations,
  indexToId,
  setMeasurements 
}: ItemProps) => {
  const { setPanel } = usePanel();
  const panelName = item.classes.filter(i => i.includes('menu-'))[0];
  const inner = useRef()
  const outer = useRef()
  const {width: innerWidth} = useMeasure(inner)
  const {width: outerWidth} = useMeasure(outer)

  let additionalProps = {}
    if (item.url)
        additionalProps = {
            type: 'nav',
            target: item.target,
            url: absoluteToRelativeUrl(item.url),
            isActive: isNavItemActive(item, post)
        }

    useEffect(() => {
        if (!!innerWidth && !!outerWidth)
            setMeasurements(current => ({
                ...current, [item.ID]: {
                    inner: innerWidth,
                    outer: outerWidth,
                    isActive: isNavItemActive(item, post)
                }
            }))

    }, [innerWidth, item.ID, outerWidth, setMeasurements, item, post])
  
  const handleOnClick = () => {
    switch (panelName) {
      case 'menu-panel-people':
        setPanel({
          children: <MenuPanelPeople alphabet={alphabet} post={post} datalist={datalist}/>,
          id: item.id,
        });
        break;
      case 'menu-panel-services':
        setPanel({
          children: <ServicesPanel services={services} />,
          id: item.id,
        });
        break;
      case 'menu-panel-industries':
        setPanel({
          children: <IndustriesPanel industries={industries} post={post}/>,
          id: item.id,
        });
        break;
      case 'menu-panel-generic':
        setPanel({
          children: <MenuPanelGeneric post={post} headerMenu={locations} id={locations[indexToId].ID}/>,
          id: item.id,
        });
        break;
      default:
        break;
    }
  };
  
  return (
    <Div themes={{display: 'flex'}} onClick={handleOnClick}>
      <span ref={outer}>
        <LinkSwitch
          themes={headerMenuLinkStyle}
          title={item.title}
          data={panelName}
          {...additionalProps}
        >
          <span ref={inner}>{item.title}</span>
        </LinkSwitch>
      </span>
    </Div>
  );
};

export default Item;
