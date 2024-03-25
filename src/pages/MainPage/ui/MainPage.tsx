import { OurTeam } from 'src/widgets/OurTeam';
import { OurClients } from 'src/widgets/OurClients';
import { ProjectStage } from 'src/widgets/ProjectStage';

const MainPage = () => {
  return (
    <>
      <ProjectStage />
      <OurTeam></OurTeam>
      <OurClients />
    </>
  );
};

export default MainPage;
