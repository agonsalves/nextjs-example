import React from 'react';
import Div from '@/Shared/Div';
import H2 from '@/Shared/H2';
import { singular } from '@/utils/helpers';
import PracticeSearchBar from './PracticeSearchBar';
import { splitAlphaList } from '@/utils/splitArray';
import { serviceMenuPanelStyle } from './styles';
import { headerMenuPanelStyle } from '../../Menu/styles';
import { industriesMenuPanelStyle } from './PracticeSearchBar/styles';
import { MenuPanelServiceItem } from './MenuPanelServiceItem';
interface ObjectData {
  slug: string;
  term_id: number;
  title: string;
}
export interface ServiceData {
  children?: ObjectData[] | string;
  title: string;
  object: ObjectData;
  type?: string;
  data?: string[];
}

interface ServicesPanelProps {
  services: ServiceData[];
}

const ServicesPanel = ({ services }: ServicesPanelProps) => {
  return (
    <Div themes={{display: 'flex', flexDirection: 'column'}}>
        <Div themes={serviceMenuPanelStyle.search}>
            <H2 themes={headerMenuPanelStyle.heading}>Find a {singular('practice-area')}</H2>
            <PracticeSearchBar theme={serviceMenuPanelStyle.searchBar}/>
        </Div>
        {services && (
            <>
                <Div themes={serviceMenuPanelStyle.list}>
                    {splitAlphaList(services).map((serviceColumn, i) =>
                        <Div themes={industriesMenuPanelStyle.column} key={i}>
                            {serviceColumn.map((service) =>
                                <MenuPanelServiceItem
                                    service={service}
                                    key={service.object.slug}
                                />
                            )}
                        </Div>
                    )}
                </Div>
            </>
        )}
    </Div>
  );
};

export default ServicesPanel;
