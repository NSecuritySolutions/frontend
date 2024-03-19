import { Outlet } from 'react-router-dom';
import AppStyles from './styled';

const App = () => {
  return (
    <>
      <AppStyles />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
