import React, { useEffect } from "react";

import { QuestionTopic } from 'src/shared/components/QuestionTopic/index.ts';
import { AnswerCard } from 'src/shared/components/AnswerCard/index.ts';
import { QuestionCard } from 'src/shared/components/QuestionCard/index.ts';
import { tabs } from 'src/shared/constants/texts/questions.ts';
import { TTabs, TQuestionType } from 'src/shared/constants/texts/types.ts';

import {
  Section,
  SectionWrapper,
  SectionTitle,
  TopicsColumn,
  QuestionsColumn,
  ColumnWrapper
} from './styled.ts';

const Questions = () => {

  const [currentTab, setCurrentTab] =  React.useState<TTabs | null>(null);
  const [currentQuestion, setCurrentQuestion] =  React.useState<TQuestionType | null>(null);

  useEffect(() => {if (tabs[0] !== null && tabs[0].items)
    {
      setCurrentTab(tabs[0]);
      setCurrentQuestion(tabs[0].items[0])
    }
  }, []);

  function onTopickClick(item: TTabs) {
    setCurrentTab(item);
    setCurrentQuestion(item.items[0])
  }

  function onQuestionClick(item:TQuestionType) {
    setCurrentQuestion(item)
  }

  return (
    <Section>
      <SectionWrapper>
      <SectionTitle>Часто задаваемые вопросы</SectionTitle>
        <ColumnWrapper>
          <TopicsColumn>
            {tabs.map((item, index) => (
              <QuestionTopic 
                text={item.text} 
                icon={item.icon} 
                items={item.items} 
                key={index}
                onClick={onTopickClick}
                chosen={currentTab}/>
            ))}
          </TopicsColumn>
          <QuestionsColumn>
            {currentTab !== null && currentTab.items && currentTab.items.map((item, index) => (
              <QuestionCard 
                question={item.question}
                answer={item.answer}
                id={item.id} 
                key={index}
                onClick={onQuestionClick}
                chosen={currentQuestion}/>
            ))}
          </QuestionsColumn>
          {currentQuestion && currentQuestion.answer && 
            <AnswerCard 
              id={currentQuestion.id}
              question={currentQuestion.question}
              answer={currentQuestion.answer}/>
          }
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default Questions;