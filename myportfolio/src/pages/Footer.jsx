// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        textAlign: "center",
        py: 4,
        mt: 5,
        borderTop: "1px solid #333",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Koh Santepheap",
          fontWeight: "bold",
          background: "linear-gradient(0deg,rgb(223, 102, 144), #dd2476)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: 24,
          mb: 1,
        }}
      >
        ✨ Thank You for Visiting My Portfolio ✨
      </Typography>

      <Typography variant="body2" sx={{ fontFamily: "koHo", opacity: 0.8 }}>
        © {new Date().getFullYear()} Yash Walhekar. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
