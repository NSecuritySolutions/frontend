import colors from 'src/shared/constants/colors';

import styled from 'styled-components';

const Title = styled.h1`
  color: ${colors.accentNegative};
`;

const Section = styled.section`
  background-color: var(--base-02, #f6f6f6);
  display: flex-block;
  padding: 60px 80px;

  @media (max-width: 991px) {
    padding: 0 20px;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const H2 = styled.h2`
  color: var(--text-01, #101010);
  font:
    700 24px Manrope,
    sans-serif;
  align-self: flex-start;
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
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div = styled.div`
  font-family: Manrope, sans-serif;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 25px 0px rgba(16, 16, 16, 0.05);
  background-color: var(--base-01, #fff);
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

const DivWrapper = styled.div`
  display: flex;
  gap: 20px;

  white-space: nowrap;
  text-align: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div8 = styled.div`
  border-color: rgba(16, 16, 16, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #101010;
  width: 215px;
  height: 1px;
  margin: auto 0;
`;

const H4 = styled.h4`
  font-family: Manrope, sans-serif;
  font-weight: 700;
  margin-top: 16px;
  font-size: 16px;
`;

const P = styled.p`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  margin-top: 12px;
  font-size: 16px;
`;
export {
  Title,
  Section,
  ColumnWrapper,
  Column,
  Div,
  DivWrapper,
  Div8,
  H2,
  H4,
  P
};
