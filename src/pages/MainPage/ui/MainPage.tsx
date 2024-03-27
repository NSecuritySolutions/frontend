import { OurTeam } from 'src/widgets/OurTeam';
import { OurClients } from 'src/widgets/OurClients';
import { ProjectStage } from 'src/widgets/ProjectStage';
import { Footer } from 'src/widgets/Footer';
import { ReviewsBlock } from 'src/widgets/ReviewsBlock';
import { ExamplesSlider } from 'src/widgets/ExamplesSlider';

const MainPage = () => {
  return (
    <>
      <ProjectStage />
      <OurTeam />
      <OurClients />
      <ReviewsBlock />
      <ExamplesSlider />
      <Footer />
    </>
  );
};

export default MainPage;
