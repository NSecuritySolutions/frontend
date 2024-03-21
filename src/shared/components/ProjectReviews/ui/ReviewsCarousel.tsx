import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projectReviews } from '../../../constants/texts/reviews.ts';
import {
  ReviewsContainer,
  SliderContainer,
  ReviewsTitle,
  ReviewsParagraph,
  ReviewsText
} from './styled.ts';

const ReviewsCarousel = () => {
  const settings = {
    className: 'slide555',
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: true,
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
    ]
  };
  return (
    <SliderContainer className="slider-container">
      <Slider {...settings}>
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
