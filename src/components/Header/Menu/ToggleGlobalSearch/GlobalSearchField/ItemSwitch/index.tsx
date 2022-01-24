import PersonItem from '../PersonItem';
import ViewAllItem from '../ViewAllItem';
import PracticeItem from '../PracticeItem';
import { Suggestion } from '../types';

interface ItemSwitchProps {
  suggestion: Suggestion;
}

const ItemSwitch = ({ suggestion, ...props }: ItemSwitchProps) => {
  if (suggestion.postType == 'person') {
    return (
      <PersonItem
        name={suggestion.title}
        photo={suggestion.photo}
        position={suggestion.position}
        slug={suggestion.slug}
        {...props}
      />
    );
  }

  if (suggestion.postType == null) {
    return <ViewAllItem title={suggestion.title} slug={suggestion.slug} />;
  }

  return <PracticeItem name={suggestion.title} />;
};

export default ItemSwitch;
