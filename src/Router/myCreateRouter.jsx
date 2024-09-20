import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ContactUs from "../pages/ContactUs/ContactUs";
import DropSolderTshirt from "../pages/DropSolderTshirt/DropSolderTshirt";
import Home from "../pages/Home/Home";
import JeansPants from "../pages/JeansPants/JeansPants";
import ManShirt from "../pages/ManShirt/ManShirt";
import Panjabi from "../pages/Panjabi/Panjabi";
import Tshirt from "../pages/TshirtPage/Tshirt";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/tshirt",
        element: <Tshirt></Tshirt>,
      },
      {
        path: "/manshirt",
        element: <ManShirt></ManShirt>,
      },
      {
        path: "/panjabi",
        element: <Panjabi></Panjabi>,
      },
      {
        path: "/jeans",
        element: <JeansPants></JeansPants>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/dropsolder",
        element: <DropSolderTshirt />,
      },
    ],
  },
]);

export default myCreateRouter;
