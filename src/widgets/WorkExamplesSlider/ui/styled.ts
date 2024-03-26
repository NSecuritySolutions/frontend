import colors from 'src/shared/constants/colors';

import styled from 'styled-components';

const ReviewsContainer = styled.article`
  position: relative;
  display: flex !important;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
  padding: 40px 60px 30px;
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
  margin: 60px auto;
  background-color: ${colors.backgroundBase2};
  display: flex;
  flex-direction: column;
  min-height: 800px;
  max-width: 1180px;
  width: 100%;
  row-gap: 20px;

  .slick-list{
    margin-bottom: 40px;

  }
   .slick-slide{
    display: flex;
    flex-direction:column;
    justify-content: space-between;
     div { 
      display: flex;
      column-gap: 20px;

    }
    }

    .slick-initialized .slick-slide {
      row-gap: 40px;
      article {
        row-gap: 0px;
      }
  }

  .slick-dots {
    position: absolute;
    bottom: -25px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;

    li {

        display: inline-block;
        margin: 0 5px;
        width: 10px; 
        height: 10px;
        div {
            width: 10px;
            height: 10px;
            background-color: #ccc;
            border-radius: 50%;
        }

        &.slick-active div {
            background-color: ${colors.btnPrimary};
        }
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

const ColumnTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  margin-bottom: 30px;
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

const ReviewsTitle = styled.h3`
  max-width: 320px;
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  text-align: start;
`;

const ReviewsText = styled.p`
  max-width: 320px;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
`;

const CustomDot = styled.div<{ $active?: boolean }>`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${props =>
    props.$active ? `${colors.btnPrimary}` : '#d7d7d7'};
`;

const ReviewsLink = styled.a<{ $active?: boolean }>`
  cursor: poinetr;
  justify-content: center;
  border-radius: 12px;
  border-color: rgba(16, 16, 16, 0.32);
  border-style: solid;
  border-width: 1px;
  background-color: ${colors.backgroundPrimary};
  white-space: nowrap;
  padding: 12px 24px;
  width: 102px;
  font:
    800 15px/133% Manrope,
    sans-serif;
`;

const ButtonWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
`;

const ReviewsImg = styled.img<{
  $top: string | undefined;
  $left: string | undefined;
  $right: string | undefined;
  $width: string | undefined;
}>`
  position: absolute;
  z-index: 3;
  top: ${props => props.$top};
  left: ${props => props.$left};
  right: ${props => props.$right};
  width: ${props => props.$width};
`;
export {
  ReviewsContainer,
  SliderContainer,
  ReviewsTitle,
  ReviewsText,
  CustomDot,
  ReviewsLink,
  ColumnTitle,
  ButtonWrapper,
  ReviewsImg
};
