import { FC } from 'react';
import {
  Section,
  ColumnConatiner,
  ColumnWrapper,
  ErrorName,
  Div6,
  ErrorButton,
  Img,
  Img2,
  Column,
  Column2
} from './styled.ts';

type TError = {
  errorCode: string;
  errorText: string;
  errorImg: string;
  warningImg: string;
  errorMessage: string;
};
const Error: FC<TError> = ({
  errorCode,
  errorText,
  errorImg,
  warningImg,
  errorMessage
}) => {
  return (
    <Section>
      <ColumnConatiner>
        <ColumnWrapper>
          <Column>
            <Img loading="lazy" srcSet={warningImg} />
          </Column>
          <Column2>
            <ErrorName>{errorMessage}</ErrorName>
            <Div6>{errorText}</Div6>
            <ErrorButton href="/">На главную</ErrorButton>
          </Column2>
          <Img2 loading="lazy" srcSet={errorImg} />
        </ColumnWrapper>
      </ColumnConatiner>
    </Section>
  );
};

export default Error;
