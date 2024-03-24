import colors from 'src/shared/constants/colors';

import styled from 'styled-components';

const ReviewsContainer = styled.article`
  display: flex !important;

  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  padding: 25px;
  max-width: 580px;
  width: 100%;
  height: 332px;
  background-color: ${colors.backgroundPrimary};
  font-family: Manrope, sans-serif;

  // @media (max-width: 940px) {
  //   margin-top: 30px;
  // }

  // @media (max-width: 619px) {
  //   margin-top: 30px;
  // }
`;
const SliderContainer = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};
  display: flex;
  flex-direction: column;
  column-gap: 20px !important;
  row-gap: 40px !important;
  min-height: 800px;
  max-width: 1180px;
  width: 100%;
  justify-items: space-between;
  & ${ReviewsContainer}:nth-child(even) {
    margin-bottom: 40px;
    margin-left: 20px;
  }

  // @media (max-width: 1300px) {
  //   max-width: 580px;
  // }

  // @media (max-width: 940px) {
  //   max-width: 580px;
  // }

  // @media (max-width: 619px) {
  //   max-width: 280px;
  // }
`;

const ReviewsTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  text-align: start;
`;

const ReviewsParagraph = styled.span`
  font-weight: 600;
  font-size: 16px;
  text-align: start;
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
  background-color: ${props =>
    props.$active ? `${colors.btnPrimary}` : '#d7d7d7'};
`;

const ReviewsLink = styled.a<{ $active?: boolean }>`
  cursor: poinetr;
  font-size: 14px;
  color: ${colors.darkPrimary};
  opacity: 0.5;
`;

const ColumnTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis;

  font:
    700 24px Manrope,
    sans-serif;

  // @media (max-width: 940px) {
  //   max-width: 580px;
  //   width: 100%;
  //   align-self: center;
  // }

  // @media (max-width: 619px) {
  //   max-width: 268px;
  //   width: 100%;
  //   align-self: center;
  // }
`;

export {
  ReviewsContainer,
  SliderContainer,
  ReviewsTitle,
  ReviewsParagraph,
  ReviewsText,
  CustomDot,
  ReviewsLink,
  ColumnTitle
};
