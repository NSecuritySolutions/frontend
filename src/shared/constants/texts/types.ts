export type TProjectMilestones = {
  id: number;
  title: string;
  text: string;
};

export type TTeamContacts = {
  id: number;
  name: string;
  position: string;
  tel: string;
  image: string;
};

export type TError505 = {
  id: number;
  errorCode: string;
  errorMessage: string;
  errorText: string;
  errorImg: string;
  warningImg: string;
};

export type TError404 = {
  id: number;
  errorCode: string;
  errorText: string;
  errorImg: string;
  warningImg: string;
  errorMessage: string;
};

export type TQuestionType = {
  id: number
  question: string;
  answer: string;
};

export type TTabs = {
  icon: string;
  text: string;
  items: Array<TQuestionType>;
};

export type TAnswer = {
  answer?: string;
}

export type TTopicProps = {
  icon: string;
  text: string;
  items: Array<TQuestionType>;
  onClick: (item: TTabs) => void;
  chosen: TTabs | null;
}

export type TAnswerProps = {
  id: number
  question: string;
  answer: string;
  onClick: (item: TQuestionType) => void;
  chosen: TQuestionType | null;
}