import { OurTeam } from 'src/widgets/OurTeam';
import { ProjectStage } from 'src/widgets/ProjectStage';
import { Footer } from 'src/widgets/Footer';
import { ReviewsBlock } from 'src/widgets/ReviewsBlock';
import { WorkExamplesSlider } from 'src/shared/components/WorkExamplesSlider';

const MainPage = () => {
  return (
    <>
      <ProjectStage />
      <OurTeam />
      <ReviewsBlock />
      <WorkExamplesSlider />
      <Footer />
    </>
  );
};

export default MainPage;
