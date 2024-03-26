import { OurTeam } from 'src/widgets/OurTeam';
import { OurClients } from 'src/widgets/OurClients';
import { ProjectStage } from 'src/widgets/ProjectStage';
import { Footer } from 'src/widgets/Footer';
import { ReviewsBlock } from 'src/widgets/ReviewsBlock';

const MainPage = () => {
  return (
    <>
      <ProjectStage />
      <OurTeam />
      <ReviewsBlock />
      <Footer />
    </>
  );
};

export default MainPage;
