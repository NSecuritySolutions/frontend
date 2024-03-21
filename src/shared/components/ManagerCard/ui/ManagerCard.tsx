import { teamContacts } from 'src/shared/constants/texts/our-team.ts';
import {
  CardContainer,
  CardImg,
  CardName,
  CardPosition,
  CardTel
} from './styled.ts';

const ManagerCard = () => {
  return (
    <>
      {teamContacts.map(item => (
        <CardContainer key={item.id}>
          <CardImg $imgUrl={item.image} alt="Фотография сотрудника" />
          <CardName>{item.name}</CardName>
          <CardPosition>{item.position}</CardPosition>
          <CardTel>{item.tel}</CardTel>
        </CardContainer>
      ))}
    </>
  );
};

export default ManagerCard;
