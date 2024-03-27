import { FC } from "react";
import {
  TheHeader,
  HeaderWrapper,
  HeaderNav,
  HeaderList,
  HeaderNavItem,
  HeaderNavLink,
  HeaderTop,
  HeaderTopItem,
  HeaderText,
  HeaderTel,
  HeaderBtnWrapper,
  HeaderBurgerMenuWrapper,
} from "./styles";
import { Logo } from "src/shared/components/Logo";

import ProjectLogo from "src/assets/icons/new-logo.svg";
import { BtnLink } from "src/shared/components/BtnLink";
import colors from "src/shared/constants/colors/index.ts";
import { BurgerMenu } from "../../../features/BurgerMenu";

type THeaderProps = {
  navLinks: { label: string; to: string }[];
};

const Header: FC<THeaderProps> = ({ navLinks }) => {
  return (
    <TheHeader>
      <HeaderWrapper>
        <HeaderTop>
          <HeaderTopItem>
            <Logo imageUrl={ProjectLogo} />
            <HeaderText>Безопастность вашего дома и бизнеса</HeaderText>
          </HeaderTopItem>
          <HeaderTopItem>
            <HeaderTel>+7 (913) 011-06-45</HeaderTel>
            <HeaderBtnWrapper>
              <BtnLink
                color={colors.darkPrimary}
                text="Оставить заявку"
                link="#"
                width="100%"
                height="100%"
              />
            </HeaderBtnWrapper>
          </HeaderTopItem>
          <HeaderBurgerMenuWrapper>
            <BurgerMenu />
          </HeaderBurgerMenuWrapper>
        </HeaderTop>
        <HeaderNav>
          <HeaderList>
            {navLinks.map(({ label, to }, index) => (
              <HeaderNavItem key={index}>
                <HeaderNavLink to={to}>{label}</HeaderNavLink>
              </HeaderNavItem>
            ))}
          </HeaderList>
        </HeaderNav>
      </HeaderWrapper>
    </TheHeader>
  );
};

export default Header;
