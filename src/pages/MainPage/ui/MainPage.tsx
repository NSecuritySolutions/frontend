import ReviewsCarousel from 'src/shared/components/ReviewsCarousel/ui/ReviewsCarousel';
import { OurTeam } from 'src/widgets/OurTeam';
import { ProjectStage } from 'src/widgets/ProjectStage';
import { Footer } from 'src/widgets/Footer';

const MainPage = () => {
  return (
    <>
      <ProjectStage />
      <OurTeam />
      <ReviewsCarousel />
      <Footer />
    </>
  );
};

export default MainPage;
