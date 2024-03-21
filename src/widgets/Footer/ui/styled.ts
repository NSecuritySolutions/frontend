import styled from "styled-components";
import colors from "src/shared/constants/colors";

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${colors.backgroundBase2};
  color: ${colors.darkPrimary};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const FooterTop = styled.div``;

const FooterTopGridContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  border-top: 1px solid ${colors.darkSecondary};
  padding-top: 24px;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
`;

const FooterSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterSocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const FooterSocialIconLink = styled.a`
  cursor: pointer;
`;

const FooterSocialIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const FooterContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FooterContactContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const FooterContactLogo = styled.img`
  width: 24px;
  height: 24px;
`;

const FooterContactLink = styled.a`
  cursor: pointer;
  font-size: 16px;
  line-height: 136%;
  font-weight: 700;
  max-width: 162px;
`;

const FooterBottom = styled.div`
  width: 100%;
  background-color: ${colors.backgroundBase3};
`;

const FooterBottomContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px 0 24px 0;
`;

const FooterRights = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FooterDeveloperInfoBox = styled.div`
  padding-top: 16px;
`;

const FooterRightsText = styled.p`
  font-size: 16px;
  line-height: 136%;
  font-weight: 400;
`;

const FooterDeveloperLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.accentInfo};
  }
`;

export {
  FooterWrapper,
  FooterTop,
  FooterTopGridContainer,
  FooterBottom,
  FooterBottomContainer,
  FooterRights,
  FooterRightsText,
  FooterDeveloperInfoBox,
  FooterDeveloperLink,
  FooterSocialContainer,
  FooterContactsContainer,
  FooterContactContainer,
  FooterSocialIconsContainer,
  FooterSocialIconLink,
  FooterSocialIcon,
  FooterContactLogo,
  FooterContactLink,
};
