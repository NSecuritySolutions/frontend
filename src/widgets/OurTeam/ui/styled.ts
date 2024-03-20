import colors from 'src/shared/constants/colors';

import styled from 'styled-components';

const Section = styled.section`
  background-color: ${colors.backgroundBase2};
  padding: 60px 0;

  @media (max-width: 1300px) {
    padding: 0 20px;
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
  border-radius: 20px;
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  background: ${colors.backgroundPrimary};
  @media (max-width: 1300px) {
    flex-direction: row;
    max-width: 880px;
    width: 100%;
    gap: 120px;
  }

  @media (max-width: 940px) {
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 504px) {
  }
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

  @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
    align-self: center;
  }

  @media (max-width: 619px) {
    max-width: 268px;
    width: 100%;
    align-self: center;
  }
`;
const ColumnWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, minmax(120px, 400px) minmax(120px, 580px));
  column-gap: 20px;
  gap: 40px;

  @media (max-width: 1300px) {
  }

  @media (max-width: 504px) {
  }
`;

const Column = styled.div`
  @media (max-width: 940px) {
    width: 100%;
  }

  @media (max-width: 619px) {
    flex-direction: row;
  }
`;

const StageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 940px) {
    white-space: initial;
  }

  @media (max-width: 619px) {
    flex-direction: column;
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

  @media (max-width: 940px) {
    white-space: initial;
  }
`;

const StageLine = styled.div`
  border-color: rgba(16, 16, 16, 1);
  border-style: solid;
  border-width: 1px;
  background-color: ${colors.darkPrimary};
  width: 175px;
  height: 1px;
  margin: auto 0;

  @media (max-width: 619px) {
    border-style: solid;
    border-width: 1px;
    align-self: center;
    margin-top: 22.5px;
    width: 1px;
    height: 50px;
    margin: 0;
  }
`;
const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 619px) {
    justify-content: center;
    align-self: start;
    font-size: 16px;
    padding: 0 0 0 12px;
  }
`;

const StageTitle = styled.h4`
  font-family: Manrope, sans-serif;
  font-weight: 700;
  margin-top: 16px;
  font-size: 16px;
  display: flex;

  @media (max-width: 619px) {
    margin-top: 0;
  }
`;

const StageParagraph = styled.p`
  font-family: Manrope, sans-serif;
  max-width: 400px;
  width: 100%;
  font-weight: 400;
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.5px;
`;
export {
  Section,
  SectionWrapper,
  ColumnWrapper,
  Column,
  StageWrapper,
  StageNumber,
  StageLine,
  ColumnTitle,
  TextWrapper,
  StageTitle,
  StageParagraph
};
