import { Outlet } from 'react-router-dom';

import AppStyles from './styled';
import { Footer } from 'src/widgets/Footer';

const App = () => {
  return (
    <>
      <AppStyles />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
