import { TQuestionType } from 'src/shared/constants/texts/types.ts';
import {
  CardContainer,
  CardImg,
  QuestionText, 
  AnswerText,
} from './styled.ts';

const AnswerCard = (item: TQuestionType) => {
  return (
    <>
      <CardContainer >
        <QuestionText>
          {item.question}
        </QuestionText>
        <AnswerText>
          {item.answer}
        </AnswerText>
      </CardContainer>
    </>
  );
};

export default AnswerCard;
