import ReviewsCarousel from 'src/shared/components/ReviewsCarousel/ui/ReviewsCarousel';
import { OurTeam } from 'src/widgets/OurTeam';
import { ProjectStage } from 'src/widgets/ProjectStage';

const MainPage = () => {
  return (
    <>
      <ProjectStage />
      <OurTeam />
      <ReviewsCarousel />
    </>
  );
};

export default MainPage;
