import { FC } from 'react';
import {
  Section,
  ColumnConatiner,
  ColumnWrapper,
  ErrorName,
  ErrorText,
  ErrorButton,
  Img,
  ErrorImg,
  ImgColumn,
  TextColumn,
  ErrorImgHidden
} from './styled.ts';

type TError = {
  errorCode: string;
  errorText: string;
  errorImg: string;
  warningImg: string;
  errorMessage: string;
};
const Error: FC<TError> = ({
  errorText,
  errorImg,
  warningImg,
  errorMessage,
  errorCode
}) => {
  return (
    <Section>
      <ColumnConatiner>
        <ColumnWrapper>
          <ImgColumn>
            <Img loading="lazy" srcSet={warningImg} />
          </ImgColumn>
          <TextColumn>
            <ErrorName>{errorMessage}</ErrorName>
            <ErrorImgHidden
              loading="lazy"
              srcSet={errorImg}
              alt={`Ошибка ${errorCode} - ${errorMessage}`}
            />
            <ErrorText>{errorText}</ErrorText>
            <ErrorButton href="/">На главную</ErrorButton>
          </TextColumn>
          <ErrorImg
            loading="lazy"
            srcSet={errorImg}
            alt={`Ошибка ${errorCode} - ${errorMessage}`}
          />
        </ColumnWrapper>
      </ColumnConatiner>
    </Section>
  );
};

export default Error;
