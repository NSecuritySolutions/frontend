export type TProjectMilestones = {
  id: number;
  title: string;
  text: string;
};
export type TProjectReviews = {
  id: number;
  name: string;
  product: string;
  review: string;
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
