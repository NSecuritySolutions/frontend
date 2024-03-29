import { Outlet } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

import AppStyles from './styled';
//@TODO - прижать футер к низу страницы
// import { Footer } from 'src/widgets/Footer';

const App = () => {
  return (
    <StyleSheetManager enableVendorPrefixes>
      <>
        <AppStyles />
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </>
    </StyleSheetManager>
  );
};

export default App;
