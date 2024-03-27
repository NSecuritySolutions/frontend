import { FC } from "react";

import { BtnLink } from "src/shared/components/BtnLink";
import colors from "src/shared/constants/colors/index.ts";
import {
  ContentWrapper,
  InfoBtnWrapper,
  Section,
  SectionWrapper,
  Title,
  Text,
  HistoryWrapper,
  HistoryItem,
  YearsText,
  AchievementsText,
  Banner,
} from "./styled";

import bannerImg from "src/assets/images/banner/png/banner-image.png";

const Info: FC = () => {
  return (
    <Section>
      <SectionWrapper>
        <ContentWrapper>
          <Title>
            Установка систем безопасности в Новосибирске и Новосибирской области
            для дома и Вашего бизнеса
          </Title>
          <Text>
            Наша компания предоставляет специалистов высокой квалификации,
            которые быстро и качественно установят все необходимое оборудование.{" "}
          </Text>
          <InfoBtnWrapper>
            <BtnLink
              text="Подробнее"
              width="100%"
              height="100%"
              link="#"
              color={colors.darkPrimary}
            />
          </InfoBtnWrapper>
          <HistoryWrapper>
            <HistoryItem>
              <YearsText>10+</YearsText>
              <AchievementsText>лет на рынке</AchievementsText>
            </HistoryItem>
            <HistoryItem>
              <YearsText>1000+</YearsText>
              <AchievementsText>выполненых проектов</AchievementsText>
            </HistoryItem>
          </HistoryWrapper>
        </ContentWrapper>
        <Banner $imgUrl={bannerImg} alt="Баннер" />
      </SectionWrapper>
    </Section>
  );
};

export default Info;
