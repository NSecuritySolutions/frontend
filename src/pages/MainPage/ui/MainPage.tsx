import { OurTeam } from 'src/widgets/OurTeam';
import { OurClients } from 'src/widgets/OurClients';
import { ProjectStage } from 'src/widgets/ProjectStage';
import { Footer } from 'src/widgets/Footer';
import { ReviewsBlock } from 'src/widgets/ReviewsBlock';
import { WorkExamplesSlider } from 'src/widgets/WorkExamplesSlider';

const MainPage = () => {
  return (
    <>
      <ProjectStage />
      <OurTeam />
      <OurClients/>
      <ReviewsBlock />
      <WorkExamplesSlider />
      <Footer />
    </>
  );
};

export default MainPage;
