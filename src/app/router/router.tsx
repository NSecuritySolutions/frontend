import { createBrowserRouter } from "react-router-dom";
import App from "../ui/App";
import { MainPage } from "../../pages/MainPage";
import { ErrorPage } from "../../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

export { router };
