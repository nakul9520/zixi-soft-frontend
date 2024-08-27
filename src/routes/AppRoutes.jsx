import HomeLayout from "@/Layout/HomeLayout";
import ForDeveloper from "@/pages/ForDeveloper";
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
        { path: "/for-developer", element: <ForDeveloper /> },
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
