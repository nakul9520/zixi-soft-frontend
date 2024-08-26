import HomeLayout from "@/Layout/HomeLayout";
import HireYourTeam from "@/pages/HireYourTeam";
import Home from "@/pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "/", element: <Home />, index: true },
        { path: "/hire-team", element: <HireYourTeam /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
