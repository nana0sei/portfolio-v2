import { createBrowserRouter } from "react-router-dom";
import ArtPage from "./pages/ArtPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ArtPage /> },
      // { path: "/dev", element: <DevPage /> },
      // { path: "/art", element: <ArtPage /> },
    ],
  },
]);
export default router;
