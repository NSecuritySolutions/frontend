import { Outlet } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

import AppStyles from './styled';

const App = () => {
  return (
    <StyleSheetManager enableVendorPrefixes>
      <>
        <AppStyles />
        <main>
          <Outlet />
        </main>
      </>
    </StyleSheetManager>
  );
};

export default App;
