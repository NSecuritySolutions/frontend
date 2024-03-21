import colors from 'src/shared/constants/colors';

import styled from 'styled-components';

const Section = styled.section`
  border-radius: 20px;
  box-shadow: 2px 2px 25px 0px rgba(16, 16, 16, 0.05);
  background-color: var(--base-01, #fff);
  display: flex;
  flex-direction: column;
  padding: 76px 80px 8px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  margin-left: 13px;
  width: 539px;
  max-width: 100%;
`;

const ColumnWrapper = styled.div`
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

  width: 85%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div4 = styled.div`
  display: flex;
  margin-top: 14px;
  flex-grow: 1;
  flex-direction: column;
  color: var(--text-01, #101010);
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 34px;
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

const Div7 = styled.div`
  align-self: center;
  margin-top: 36px;
  width: 100%;
  max-width: 894px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div8 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 29%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
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

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 71%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div10 = styled.div`
  display: flex;
  margin-top: 12px;
  flex-grow: 1;
  flex-direction: column;
  font-size: 300px;
  color: #ededed;
  font-weight: 800;
  white-space: nowrap;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
    white-space: initial;
  }
`;

const Div11 = styled.div`
  leading-trim: both;
  text-edge: cap;
  z-index: 0;
  text-shadow:
    -1px -1px 2px rgba(178, 178, 178, 0.5),
    1px 1px 2px rgba(255, 255, 255, 0.3);
  font-family: Manrope, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: fit;
  object-position: center;
  max-width: 556px;
  width: 100%;
  max-height: 415px;
  align-self: center;
  max-width: 100%;
  z-index: 3;
`;

export {
  Section,
  Div2,
  ColumnWrapper,
  Div4,
  ErrorName,
  Div6,
  Div7,
  Div8,
  Div10,
  ErrorButton,
  Div11,
  Img,
  Img2,
  Column,
  Column2,
  Column3,
  Column4
};
