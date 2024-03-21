import colors from 'src/shared/constants/colors';

import styled from 'styled-components';

const Section = styled.section`
  padding-top: 118px;
  padding-bottom: 170px;
  background-color: ${colors.backgroundBase2};
`;

const ColumnConatiner = styled.div`
  position: relative;

  margin: 0 auto;
  border-radius: 20px;
  max-width: 1180px;
  width: 100%;
  height: 700px;
  box-shadow: 2px 2px 25px 0px rgba(16, 16, 16, 0.05);
  background-color: var(--base-01, #fff);
  display: flex;
  flex-direction: column;
  padding: 90px 80px 8px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ColumnWrapper = styled.div`
  max-width: 539px;
  width: 100%;
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 15%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 80px;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-top: 14px;
  gap: 24px;
  width: 100%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ErrorName = styled.div`
  font:
    700 36px Manrope,
    sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  font:
    400 16px Manrope,
    sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ErrorButton = styled.a`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  background-color: var(--primary, #fcc12d);
  color: var(--text-01, #101010);
  max-width: 160px;
  width: 100%;
  min-height: 56px;
  padding: 18px 6px;
  font:
    800 15px/133% Manrope,
    sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Img2 = styled.img`
  position: absolute;
  top: 250px;
  left: 522px;
  max-width: 556px;
  width: 100%;
  max-height: 415px;
  align-self: center;
`;

export {
  Section,
  ColumnConatiner,
  ColumnWrapper,
  ErrorName,
  Div6,
  ErrorButton,
  Img,
  Img2,
  Column,
  Column2
};
