import Carousel from './Carousel';
import { FirmHighlightData } from './Carousel/Card/types';
import * as S from './styles';

interface FirmHighlightsProps {
  data: FirmHighlightData[];
}

export default function FirmHighlights({ data }: FirmHighlightsProps) {
  return (
    <S.Wrapper>
      <h1>Firm Highlights</h1>
      <Carousel highlights={data} />
    </S.Wrapper>
  );
}
