import Card from './Card';
import { FirmFactCardData } from './Card/types';

import * as S from './styles';

export interface FirmFactsProps {
  data: FirmFactCardData[];
}

function FirmFacts({ data }: FirmFactsProps) {
  return (
    <S.Container>
      {data.map(({ headline, description, image, link_text, link_url }) => (
        <Card
          key={image.url}
          headline={headline}
          description={description}
          image={image}
          link_text={link_text}
          link_url={link_url}
        />
      ))}
    </S.Container>
  );
}

export default FirmFacts;
