import { FC } from "react";

import { Logo } from "src/shared/components/Logo";
import { navColumnLists, contacts } from "./temporaryConsts.ts";
import { NavColumn } from "src/shared/components/NavColumn/index.ts";
import { BtnLink } from "src/shared/components/BtnLink/index.ts";
import colors from "src/shared/constants/colors/index.ts";

import {
  FooterBottom,
  FooterBottomContainer,
  FooterContactContainer,
  FooterContactLink,
  FooterContactLogo,
  FooterContactsContainer,
  FooterDeveloperInfoBox,
  FooterDeveloperLink,
  FooterRights,
  FooterRightsText,
  FooterSocialContainer,
  FooterSocialIcon,
  FooterSocialIconLink,
  FooterSocialIconsContainer,
  FooterTop,
  FooterTopContainer,
  FooterWrapper,
  FooterBtnWrapper,
  FooterContactsContentWrapper,
} from "./styled";

import ProjectLogo from "src/assets/icons/new-logo.svg";
import SvgLogoTelegram from "src/assets/icons/telegram.svg";
import SvgLogoWhatsapp from "src/assets/icons/whatsapp.svg";

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterTopContainer>
          <FooterSocialContainer>
            <Logo imageUrl={ProjectLogo} />
            <FooterSocialIconsContainer>
              <FooterSocialIconLink href="#" target="_blank">
                <FooterSocialIcon src={SvgLogoTelegram} alt="Лого" />
              </FooterSocialIconLink>
              <FooterSocialIconLink href="#" target="_blank">
                <FooterSocialIcon src={SvgLogoWhatsapp} alt="Лого" />
              </FooterSocialIconLink>
            </FooterSocialIconsContainer>
          </FooterSocialContainer>
          <NavColumn lists={navColumnLists} />
          <FooterContactsContainer>
            <FooterContactsContentWrapper>
              {contacts.map((contact, index) => (
                <FooterContactContainer key={index}>
                  <FooterContactLogo src={contact.icon} />
                  <FooterContactLink href={contact.link}>
                    {contact.text}
                  </FooterContactLink>
                </FooterContactContainer>
              ))}
            </FooterContactsContentWrapper>

            <FooterBtnWrapper>
              <BtnLink
                width="100%"
                height="56px"
                color={colors.darkPrimary}
                text="Оставить заявку"
                link="#"
              />
            </FooterBtnWrapper>
          </FooterContactsContainer>
        </FooterTopContainer>
      </FooterTop>
      <FooterBottom>
        <FooterBottomContainer>
          <FooterRights>
            <FooterRightsText>
              © 2020-2024 Интернет-компания{" "}
              <FooterDeveloperLink href="#" target="_blank">
                ХХХ
              </FooterDeveloperLink>
            </FooterRightsText>
            <FooterRightsText>
              Информация на сайте не является публичной офертой
            </FooterRightsText>
            <FooterRightsText>
              Актуальные цены уточняйте у менеджеров
            </FooterRightsText>
            <FooterDeveloperInfoBox>
              <FooterRightsText>
                Сайт разработан командой{" "}
                <FooterDeveloperLink href="#" target="_blank">
                  ХХХ Studio
                </FooterDeveloperLink>
                . 2024
              </FooterRightsText>
            </FooterDeveloperInfoBox>
          </FooterRights>
        </FooterBottomContainer>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
