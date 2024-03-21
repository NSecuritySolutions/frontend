import { FC } from 'react';
import {
  Section,
  Div2,
  ColumnWrapper,
  Div4,
  ErrorName,
  Div6,
  Div7,
  Div8,
  Div10,
  ErrorButton,
  Div11,
  Img,
  Img2,
  Column,
  Column2,
  Column3,
  Column4
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
      <Div2>
        <ColumnWrapper>
          <Column>
            <Img loading="lazy" srcSet={warningImg} />
          </Column>
          <Column2>
            <ErrorName>{errorMessage}</ErrorName>
            <Div6>{errorText}</Div6>
            <ErrorButton href="/">На главную</ErrorButton>
          </Column2>
        </ColumnWrapper>
      </Div2>
      <Div7>
        <Div8>
          <Column3></Column3>
          <Column4>
            <Div10>
              <Div11>
                {/* {errorCode} */}
                <Img2 loading="lazy" srcSet={errorImg} />
              </Div11>
            </Div10>
          </Column4>
        </Div8>
      </Div7>
    </Section>
  );
};

export default Error;
