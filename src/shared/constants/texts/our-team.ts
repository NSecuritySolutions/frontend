import firstTeamMember from 'src/assets/images/team/team-image-1.png';
import secondTeamMember from 'src/assets/images/team/team-image-2.png';
import thirdTeamMember from 'src/assets/images/team/team-image-3.png';

import { TTeamContacts } from './types';

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
