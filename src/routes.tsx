import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import DevPage from "./pages/DevPage";
import ArtPage from "./pages/ArtPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/dev", element: <DevPage /> },
      { path: "/art", element: <ArtPage /> },
    ],
  },
]);
export default router;
