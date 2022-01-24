import ArrowButton from '@/components/ArrowButton';
import { device } from '@/styles/mediaQueries';
import NukaCarousel from 'nuka-carousel';
import useMedia from 'use-media';
import CarouselCard from './Card';
import { FirmHighlightData } from './Card/types';
import * as S from './styles';

interface CarouselProps {
  highlights: FirmHighlightData[];
}

const hideDefaultControls = {
  pagingDotsStyle: { display: 'none' },
  nextButtonStyle: { display: 'none ' },
  prevButtonStyle: { display: 'none' },
};

function Carousel({ highlights }: CarouselProps) {
  const isMobile = useMedia(device.mobile);

  return (
    <NukaCarousel
      width="100%"
      slideWidth={1}
      slidesToShow={isMobile ? 1 : 4}
      cellSpacing={8}
      wrapAround={true}
      heightMode="max"
      autoplay={false}
      dragging={false}
      enableKeyboardControls={true}
      easing="easePolyOut"
      cellAlign="left"
      defaultControlsConfig={hideDefaultControls}
      renderTopRightControls={({ nextSlide, previousSlide }) => (
        <S.ArrowsContainer
          style={{ position: 'absolute', right: 0, top: '-7.25rem' }}
        >
          <ArrowButton onClick={previousSlide} direction="left" size={32} />
          <ArrowButton onClick={nextSlide} direction="right" size={32} />
        </S.ArrowsContainer>
      )}
      renderBottomCenterControls={null}
    >
      {highlights.map(highlight => (
        <CarouselCard item={highlight} key={highlight.id} />
      ))}
    </NukaCarousel>
  );
}
export default Carousel;
