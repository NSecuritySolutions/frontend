import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();
  const errorMessage =
    typeof error === 'string' || error instanceof Error
      ? error.toString()
      : 'An unexpected error occurred';

  return (
    <div>
      <div id="error-page">
        <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{errorMessage}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
