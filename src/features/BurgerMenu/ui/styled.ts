import styled from "styled-components";
import colors from "src/shared/constants/colors";

const BurgerBtn = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;
const BurgerBtnLine = styled.span`
  width: 100%;
  height: 5px;
  background-color: ${colors.darkPrimary};
  border-radius: 5px;
`;

export { BurgerBtn, BurgerBtnLine };
