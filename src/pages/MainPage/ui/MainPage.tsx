import { OurTeam } from 'src/widgets/OurTeam';
import { ProjectStage } from 'src/widgets/ProjectStage';
import { error404 } from 'src/shared/constants/texts/error-404.ts';
import { error505 } from 'src/shared/constants/texts/error-505.ts';

import { Error } from 'src/widgets/Error/index.ts';

const MainPage = () => {
  return (
    <>
      <ProjectStage />
      <OurTeam></OurTeam>
      <Error
        errorCode={error404.errorCode}
        errorText={error404.errorText}
        errorImg={error404.errorImg}
        warningImg={error404.warningImg}
        errorMessage={error404.errorMessage}></Error>

      <Error
        errorCode={error505.errorCode}
        errorText={error505.errorText}
        errorImg={error505.errorImg}
        warningImg={error505.warningImg}
        errorMessage={error505.errorMessage}></Error>
    </>
  );
};

export default MainPage;
