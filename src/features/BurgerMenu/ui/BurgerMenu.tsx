import { FC } from "react";
import { BurgerBtn, BurgerBtnLine } from "./styled";

const BurgerMenu: FC = () => {
  return (
    <div>
      <BurgerBtn>
        <BurgerBtnLine />
        <BurgerBtnLine />
        <BurgerBtnLine />
      </BurgerBtn>
      <div>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
        <div></div>
      </div>
    </div>
  );
};

export default BurgerMenu;
