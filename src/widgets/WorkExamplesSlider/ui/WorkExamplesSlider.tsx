import { useState } from 'react';
import colors from 'src/shared/constants/colors';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  TEXT_LIMIT,
  TITLE_LIMIT,
  workExamples
} from 'src/shared/constants/texts/work-examples.ts';
import {
  ReviewsContainer,
  SliderContainer,
  ReviewsTitle,
  ReviewsText,
  CustomDot,
  ReviewsLink,
  ColumnTitle,
  ButtonWrapper,
  ReviewsImg
} from './styled.ts';
import { BtnLink } from 'src/shared/components/BtnLink/index.ts';

const WorkExamplesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const handleAfterChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const settings = {
    className: 'reviews-slider',
    dots: true,
    infinite: false,
    speed: 100,
    arrows: false,
    rows: 2,
    slidesPerRow: 2,

    appendDots: (dots: boolean) => <div>{dots}</div>,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          rows: 1,
          slidesPerRow: 1
        }
      }
    ],
    customPaging: function (i: number) {
      let activePage = 0;
      if (window.innerWidth >= 1280) {
        activePage = Math.ceil(currentSlide / 2);
      }

      return <CustomDot $active={i === activePage} />;
    }
  };

  function truncate(str: string, maxlength: number) {
    if (str.length > maxlength) {
      return str.substring(0, maxlength - 3) + '...';
    } else {
      return str;
    }
  }

  return (
    <SliderContainer className="slider-container">
      <ColumnTitle>Примеры наших работ</ColumnTitle>
      <Slider {...settings} afterChange={handleAfterChange}>
        {workExamples.map((item, i) => (
          <ReviewsContainer className="slick-slide" key={i}>
            <ReviewsTitle>
              {truncate(item.cardTitle, TITLE_LIMIT)}{' '}
            </ReviewsTitle>

            <ReviewsText>{truncate(item.cardText, TEXT_LIMIT)}</ReviewsText>
            <ReviewsLink href={item.cardLink}>Читать</ReviewsLink>
            {item?.cardSectionButton && item?.cardSectionLink && (
              <BtnLink
                size="13px"
                width="170px"
                height="24px"
                color={colors.darkPrimary}
                text={item?.cardSectionButton}
                link={item?.cardSectionLink}></BtnLink>
            )}
            <ReviewsImg
              src={item.cardImage}
              $width={item.width}
              $top={item.top}
              $left={item.left}
              $right={item.right}></ReviewsImg>
          </ReviewsContainer>
        ))}
      </Slider>
      <ButtonWrapper>
        <BtnLink
          size="15px"
          width="130px"
          height="44px"
          color={colors.darkPrimary}
          text="Все статьи"
          link="#"></BtnLink>
      </ButtonWrapper>
    </SliderContainer>
  );
};

export default WorkExamplesSlider;
