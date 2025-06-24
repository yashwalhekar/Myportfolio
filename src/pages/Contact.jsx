import { Box, Typography } from "@mui/material";
import React from "react";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Contact = ({ sectionStyle }) => {
  return (
    <Box
      id="contact"
      sx={{ ...sectionStyle, border: "1px solid ", bgcolor: "#212121", p: 2 }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontFamily: "Koh Santepheap",
          background: "linear-gradient(0deg, #EF0FAF, #BE272C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          fontSize: { xs: 36, sm: 48, md: 64 },
          letterSpacing: 2,
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
        }}
      >
        Contact
      </Typography>

      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          mt: 2,
          fontSize: { xs: 16, sm: 18, md: 24 },
          fontFamily: "koHo",
          opacity: 0.7,
        }}
      >
        "I'm currently seeking exciting opportunities to contribute and grow as
        a developer. Feel free to reach out for roles, collaborations, or just
        to connect!"
      </Typography>

      <Box sx={{ mt: 4, textAlign: "center", color: "white" }}>
        <Box
          display="flex"
          fontFamily={"koHo"}
          justifyContent="center"
          alignItems="center"
          gap={1}
          my={2}
          sx={{ opacity: 0.8, fontSize: { xs: 14, sm: 18, md: 20 } }}
        >
          <Email /> yashwalhekar371@gmail.com
        </Box>
        <Box
          display="flex"
          fontSize={20}
          justifyContent="center"
          alignItems="center"
          gap={2}
          my={2}
          sx={{ opacity: 0.8, fontSize: { xs: 14, sm: 18, md: 20 } }}
        >
          <Phone />
          +91 7350304508
        </Box>
        <Box
          display="flex"
          fontFamily={"koHo"}
          justifyContent="center"
          alignItems="center"
          fontSize={20}
          sx={{ opacity: 0.8, fontSize: { xs: 14, sm: 18, md: 20 } }}
          gap={3}
        >
          <LocationOn /> Pune, India
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" gap={3} mt={3}>
        <a
          href="https://github.com/yashwalhekar?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ color: "white", fontSize: { xs: 30, lg: 48 } }} />
        </a>
        <a
          href="https://www.linkedin.com/in/yash-walhekar-82a343227/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn sx={{ color: "white", fontSize: { xs: 30, lg: 48 } }} />
        </a>
      </Box>
    </Box>
  );
};

export default Contact;
