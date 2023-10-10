import { Box } from "@mui/material";

export const Footer = () => {
   return (
      <Box
         sx={{
            display: "flex",
            width: "100%",
            height: "100px",
            bgcolor: "teal",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            position: "fixed",
            bottom: "0"
         }}>
         INI FOOTER
      </Box>
   );
};
