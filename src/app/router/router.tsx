import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from 'src/pages/ErrorPage';
import { MainPage } from 'src/pages/MainPage';
import { Error } from 'src/pages/Error';
import { error404 } from 'src/shared/constants/texts/error-404.ts';
import { error505 } from 'src/shared/constants/texts/error-505.ts';

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
      },
      {
        path: '/505',
        element: (
          <Error
            errorCode={error505.errorCode}
            errorText={error505.errorText}
            errorImg={error505.errorImg}
            warningImg={error505.warningImg}
            errorMessage={error505.errorMessage}
          />
        )
      }
    ]
  }
]);

export { router };
