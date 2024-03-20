import { Logo } from 'src/shared/components/Logo';
import {
  FooterBottom,
  FooterBottomContainer,
  FooterDeveloperInfoBox,
  FooterDeveloperLink,
  FooterRights,
  FooterRightsText,
  FooterSocialContainer,
  FooterTop,
  FooterTopGridContainer,
  FooterWrapper,
} from './styled';

import ProjectLogo from 'src/assets/icons/new-logo.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterTopGridContainer>
          <FooterSocialContainer>
            <Logo imageUrl={ProjectLogo} />
          </FooterSocialContainer>
        </FooterTopGridContainer>
      </FooterTop>
      <FooterBottom>
        <FooterBottomContainer>
          <FooterRights>
            <FooterRightsText>
              © 2020-2024 Интернет-компания{' '}
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
                Сайт разработан командой{' '}
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
