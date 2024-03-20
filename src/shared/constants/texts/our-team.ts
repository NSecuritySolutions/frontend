import firstTeamMember from 'src/assets/images/feedback//webp/feedback-image-1.webp';
import secondTeamMember from 'src/assets/images/feedback/webp/feedback-image-2.webp';
import thirdTeamMember from 'src/assets/images/feedback/webp/feedback-image-3.webp';

type TTeamContacts = {
  id: number;
  name: string;
  position: string;
  tel: string;
  image: string;
};

export const teamContacts: TTeamContacts[] = [
  {
    id: 1,
    name: 'Рамиль Джамалов',
    position: 'Ведущий инженер',
    tel: '+7-999-999-99-99',
    image: secondTeamMember
  },
  {
    id: 2,
    name: 'Павел Барков',
    position: 'Техник-инженер',
    tel: '+7-999-999-99-99',
    image: firstTeamMember
  },
  {
    id: 3,
    name: 'Евгений Учайкин',
    position: 'Менеджер',
    tel: '+7-999-999-99-99',
    image: thirdTeamMember
  }
];
