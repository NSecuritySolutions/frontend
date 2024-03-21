import colors from 'src/shared/constants/colors';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const SliderContainer = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: #f6f6f6;
`;
const ReviewsContainer = styled.article`
  border-radius: 20px;
  padding: 25px;
  max-width: 280px;
  width: 100%;
  height: 289px;
  background-color: #fff;
  font-family: Manrope, sans-serif;
`;

const ReviewsTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`;

const ReviewsParagraph = styled.span`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

const ReviewsText = styled.p`
  font-weight: 400;
  font-size: 16px;
`;

export {
  ReviewsContainer,
  SliderContainer,
  ReviewsTitle,
  ReviewsParagraph,
  ReviewsText
};
