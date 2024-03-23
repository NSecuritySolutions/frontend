import { ReviewsSlider } from 'src/shared/components/ReviewsSlider/index.ts';
import { projectReviews } from 'src/shared/constants/texts/reviews.ts';

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

import yandexLogo from 'src/assets/images/yandex/png/yandex.png';
import { YANDEX_URL } from 'src/shared/constants/url/url.ts';

const ReviewsBlock = () => {
  const imageArray = projectReviews.filter(obj =>
    Object.keys(obj).some(el => el === 'img')
  );
  return (
    <Section>
      <SectionWrapper>
        <ColumnWrapper>
          <Column>
            <TextWrapper>
              <ColumnTitle>О нас говорят</ColumnTitle>
              <ImageWrapper>
                {imageArray.slice(0, 3).map(item => (
                  <CardImg key={item.id} $imgUrl={item?.img} />
                ))}
              </ImageWrapper>
              <a href={YANDEX_URL}>
                <ColumnImage src={yandexLogo} />
              </a>
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
