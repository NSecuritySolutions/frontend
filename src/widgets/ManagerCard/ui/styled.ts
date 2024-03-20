import colors from 'src/shared/constants/colors';

import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 180px;
  width: 100%;
  color: ${colors.darkPrimary};
  font-weight: 400;
  font-size: 16px;s
`;

const CardImg = styled.div<{ $imgUrl?: string }>`
  border-radius: 500px;
  background-color: ${colors.backgroundCardBl};
  min-height: 180px;
  width: 100%;
  height: 180px;
  background: ${props => `url(${props.$imgUrl}) no-repeat center`};
  background-size: cover;
`;

const CardName = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  max-width: 180px;
  margin-top: 6px;
  width: 100%;
  justify-content: center;
  text-wrap: wrap;
  text-align: center;
  font:
    800 18px Manrope,
    sans-serif;
`;

const CardPosition = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 180px;
  width: 100%;
  font-family: Manrope, sans-serif;
  justify-content: center;
  margin-top: 6px;
  text-align: center;
`;

const CardTel = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 180px;
  width: 100%;
  font-family: Manrope, sans-serif;
  justify-content: center;
  margin-top: 6px;
  text-wrap: wrap;
  text-align: center;
`;

export { CardContainer, CardImg, CardName, CardPosition, CardTel };
