import { PeopleData } from './PeoplesWidget/types';
import { PracticeAreaData } from './PracticeAreaWidget/types';
import { WidgetData } from './Widget/types';


export interface AsideContentProps {
  widgets?: WidgetData[];
  people?: PeopleData[];
  practice_area?: PracticeAreaData[];
}
