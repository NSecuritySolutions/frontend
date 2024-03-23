import colors from 'src/shared/constants/colors';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const SliderContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 900px;
  width: 100%;
  background-color: #f6f6f6;
`;
const ReviewsContainer = styled.article`
  display: flex !important;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  padding: 25px;
  max-width: 280px;
  width: 100%;
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
  line-height: 1.2;
`;

const CustomDot = styled.div<{ $active?: boolean }>`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  margin-top: 10px;
  background-color: ${props => (props.$active ? '#fcc12d' : 'gray')};
`;

export {
  ReviewsContainer,
  SliderContainer,
  ReviewsTitle,
  ReviewsParagraph,
  ReviewsText,
  CustomDot
};
