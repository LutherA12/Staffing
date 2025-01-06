import "./App.scss";
import { InfoForm, Errorpage, WriteSome } from "./components/exports";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fragment } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InfoForm />,
    errorElement: <Errorpage />,
  },
  {
    path: "/WriteSome",
    element: <WriteSome />,
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
