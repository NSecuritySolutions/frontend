import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from 'src/pages/ErrorPage';
import { MainPage } from 'src/pages/MainPage';
import { Error } from 'src/pages/Error';
import { error404 } from 'src/shared/constants/texts/error-404.ts';

import App from '../ui/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/*',
        element: (
          <Error
            errorCode={error404.errorCode}
            errorText={error404.errorText}
            errorImg={error404.errorImg}
            warningImg={error404.warningImg}
            errorMessage={error404.errorMessage}
          />
        )
      }
    ]
  }
]);

export { router };
