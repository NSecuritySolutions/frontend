import { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projectReviews } from '../../../constants/texts/reviews.ts';
import {
  ReviewsContainer,
  SliderContainer,
  ReviewsTitle,
  ReviewsParagraph,
  ReviewsText,
  CustomDot
} from './styled.ts';

const ReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  // Добавляем обработчик события после смены слайда
  const handleAfterChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const settings = {
    className: 'reviews-slider',
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,

    appendDots: (dots: boolean) => <div>{dots}</div>,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 619,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    customPaging: function (i: number) {
      let activePage = 0;
      if (window.innerWidth >= 1300) {
        activePage = Math.floor(currentSlide / 3);
      } else if (window.innerWidth >= 900) {
        activePage = Math.floor(currentSlide / 2);
      } else {
        activePage = currentSlide;
      }
      return <CustomDot $active={i === activePage} />;
    }
  };

  return (
    <SliderContainer className="slider-container">
      <Slider {...settings} afterChange={handleAfterChange}>
        {projectReviews.map((item, i) => (
          <ReviewsContainer className="slick-slide" key={i}>
            <ReviewsTitle>{item.name}</ReviewsTitle>
            <ReviewsParagraph>{item.product}</ReviewsParagraph>
            <ReviewsText>{item.review}</ReviewsText>
          </ReviewsContainer>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ReviewsCarousel;
