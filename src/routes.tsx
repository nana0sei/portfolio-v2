import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import DevPage from "./pages/DevPage";
import ArtPage from "./pages/ArtPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/dev", element: <DevPage /> },
      { path: "/art", element: <ArtPage /> },
    ],
  },
]);
export default router;
