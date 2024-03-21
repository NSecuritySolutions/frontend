import { FC } from 'react';
import {
  Div,
  Div2,
  Div3,
  Div4,
  Div5,
  Div6,
  Div7,
  Div8,
  Div10,
  Div9,
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
    <Div>
      <Div2>
        <Div3>
          <Column>
            <Img loading="lazy" srcSet={warningImg} />
          </Column>
          <Column2>
            <Div4>
              <Div5>{errorMessage}</Div5>
              <Div6>{errorText}</Div6>
              <Div9>На главную</Div9>
            </Div4>
          </Column2>
        </Div3>
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
    </Div>
  );
};

export default Error;
