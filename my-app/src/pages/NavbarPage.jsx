import { Box } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
export const NavbarPage = () => {
   return (
      <Box>
         <Navbar />
         <Outlet />
         <Footer />
      </Box>
   );
};
