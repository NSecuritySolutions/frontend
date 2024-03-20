import {
  FooterBottom,
  FooterBottomContainer,
  FooterDeveloperInfoBox,
  FooterDeveloperLink,
  FooterRights,
  FooterRightsText,
  FooterTop,
  FooterTopGridContainer,
  FooterWrapper,
} from './styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterTopGridContainer>FooterTop</FooterTopGridContainer>
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
