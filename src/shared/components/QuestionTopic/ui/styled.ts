import colors from 'src/shared/constants/colors';

import styled from 'styled-components';

const CardContainer = styled.article<{ $chosen?: boolean; }>`
  background: ${props => props.$chosen ? `${colors.backgroundCardBl}` : '#FFFFFF'};
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 90px;
  padding: 12px 20px;
  border-radius: 20px;
  color: ${colors.darkPrimary};
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  //background: #FFFFFF;
  font-weight: 400;
  font-size: 16px;
  gap: 20px;
  align-items: center;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.7s;
  }

  @media (max-width: 1300px) {
    width: 90px;
  }

  @media (max-width: 940px) {
    width: 280px;
  }

  @media (max-width: 640px) {
    width: 90px;
  }
`;

const CardImg = styled.div<{ $imgUrl?: string; alt?: string; $chosen?: boolean;}>`
  border-radius: 50%;
  background: ${props => `url(${props.$imgUrl}) no-repeat center`};
  background-color: ${props => props.$chosen ? '#FFFFFF' : `${colors.backgroundCardBl}` };
  width: 48px;
  height: 48px;
  flex-shrink: 0;
`;

const CardName = styled.h2`

  align-self: center;
  margin: 0;
  text-wrap: wrap;
  max-width: 190px;

  font:
    700 16px Manrope,
    sans-serif;

  @media (max-width: 1300px) {
    display: none;
  }

  @media (max-width: 940px) {
    display: block;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export { CardContainer, CardImg, CardName };
