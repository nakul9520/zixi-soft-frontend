import Techstack from "@/components/common/home/Techstack";
import HomeLayout from "@/Layout/HomeLayout";
import Home from "@/pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [{ path: "/", element: <Home />, index: true }],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
