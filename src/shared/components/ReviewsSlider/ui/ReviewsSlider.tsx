import { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  TEXT_LIMIT,
  TITLE_LIMIT,
  projectReviews
} from 'src/shared/constants/texts/reviews.ts';
import {
  ReviewsContainer,
  SliderContainer,
  ReviewsTitle,
  ReviewsParagraph,
  ReviewsText,
  CustomDot,
  ReviewsLink
} from './styled.ts';

const ReviewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1180,
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
        activePage = Math.ceil(currentSlide / 3);
      } else if (window.innerWidth >= 619) {
        activePage = Math.ceil(currentSlide / 2);
      } else {
        activePage = currentSlide;
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
      <Slider {...settings} afterChange={handleAfterChange}>
        {projectReviews.map((item, i) => (
          <ReviewsContainer className="slick-slide" key={i}>
            <ReviewsTitle>{truncate(item.name, TITLE_LIMIT)} </ReviewsTitle>
            <ReviewsParagraph>
              {truncate(item.product, TITLE_LIMIT)}
            </ReviewsParagraph>
            <ReviewsText>
              {truncate(item.review, TEXT_LIMIT)}
              {item.review.length >= TEXT_LIMIT && (
                <ReviewsLink href={item.link}>(Читать далее)</ReviewsLink>
              )}
            </ReviewsText>
          </ReviewsContainer>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ReviewsSlider;
