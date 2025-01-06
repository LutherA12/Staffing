import "./App.scss";
import { InfoForm, Errorpage, FAQs } from "./components/exports";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fragment } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InfoForm />,
    errorElement: <Errorpage />,
  },
  {
    path: "/FAQs",
    element: <FAQs />,
    errorElement: <Errorpage />,
  },
]);

export default function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}
