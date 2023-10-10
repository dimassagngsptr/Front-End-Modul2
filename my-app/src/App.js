import { NavbarPage } from "./pages/NavbarPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Detail } from "./pages/DetailPage";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
   const router = createBrowserRouter([
      {
         element: <NavbarPage />,
         children: [
            {
               path: "/",
               element: <HomePage />,
            },
            { path: "/details", element: <Detail /> },
         ],
      },
      { path: "*", element: <ErrorPage /> },
   ]);
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
