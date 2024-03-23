import {
  Section,
  SectionWrapper,
  ColumnTitle,
  Column,
  ImageWrapper,
  TextWrapper,
  ColumnWrapper,
  ContactsWrapper,
  ColumnImage,
  CardImg
} from './styled.ts';

import { ReviewsSlider } from 'src/shared/components/ReviewsSlider/index.ts';

import yandexLogo from 'src/assets/images/yandex/png/yandex.png';

import { projectReviews } from 'src/shared/constants/texts/reviews.ts';

const ReviewsBlock = () => {
  return (
    <Section>
      <SectionWrapper>
        <ColumnWrapper>
          <Column>
            <TextWrapper>
              <ColumnTitle>О нас говорят</ColumnTitle>
              <ImageWrapper>
                {projectReviews.map(item => (
                  <CardImg key={item.id} $imgUrl={item?.img} alt="Аватар" />
                ))}
              </ImageWrapper>
              <ColumnImage src={yandexLogo}></ColumnImage>
            </TextWrapper>
          </Column>
          <ContactsWrapper>
            <ReviewsSlider />
          </ContactsWrapper>
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default ReviewsBlock;
