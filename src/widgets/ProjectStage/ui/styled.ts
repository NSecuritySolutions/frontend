import colors from 'src/shared/constants/colors';

import styled from 'styled-components';

const Section = styled.section`
  background-color: ${colors.backgroundBase2};
  @media (max-width: 991px) {
    padding: 0 20px;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  @media (max-width: 1180px) {
    flex-direction: row;
    max-width: 880px;
    width: 100%;
    gap: 120px;
  }
  @media (max-width: 991px) {
  }
`;

const SectionTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  flex-direction: row;
  font:
    700 24px Manrope,
    sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const ColumnWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  aligh-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 1920px) {
    margin: 0 auto;
    padding: 0;
    max-width: 580px;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  max-width: 280px;
  width: 100%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StageWrapper = styled.div`
  display: flex;
  gap: 20px;
  white-space: nowrap;
  text-align: center;

  max-width: @media (max-width: 991px) {
    white-space: initial;
  }
`;
const StageNumber = styled.div`
  font-family: Manrope, sans-serif;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 25px 0px rgba(16, 16, 16, 0.05);
  background-color: ${colors.backgroundPrimary};
  padding: 10px;
  border-radius: 500px;
  width: 45px;
  height: 45px;
  padding: 10px;
  font-size: 18px;
  font-weight: 800;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const StageLine = styled.div`
  border-color: rgba(16, 16, 16, 1);
  border-style: solid;
  border-width: 1px;
  background-color: ${colors.darkPrimary};
  width: 215px;
  height: 1px;
  margin: auto 0;
`;

const StageTitle = styled.h4`
  font-family: Manrope, sans-serif;
  font-weight: 700;
  margin-top: 16px;
  font-size: 16px;
`;

const StageParagraph = styled.p`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  margin-top: 12px;
  font-size: 16px;
`;
export {
  Section,
  SectionWrapper,
  ColumnWrapper,
  Column,
  StageWrapper,
  StageNumber,
  StageLine,
  SectionTitle,
  StageTitle,
  StageParagraph
};
