import { useState } from 'react';

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
  ColumnTitle
} from './styled.ts';

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
      // {
      //   breakpoint: 1300,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      // {
      //   breakpoint: 1180,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2
      //   }
      // },
      // {
      //   breakpoint: 619,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
    customPaging: function (i: number) {
      let activePage = 0;
      if (window.innerWidth >= 1300) {
        activePage = Math.ceil(currentSlide / 4);
      }
      // else if (window.innerWidth >= 619) {
      //   activePage = Math.ceil(currentSlide / 2);
      // } else {
      //   activePage = currentSlide;
      // }
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
            <ReviewsLink href={item.cardLink}>{item.cardButton}</ReviewsLink>
          </ReviewsContainer>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default WorkExamplesSlider;
