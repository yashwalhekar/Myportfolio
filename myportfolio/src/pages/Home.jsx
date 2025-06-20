// src/Pages/Home.js

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import laptop from "../components/images/laptop.png";
import myimg from "../components/images/myimg2.jpg";
import { Button } from "@mui/material";
import { useState } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const sectionStyle = {
  minHeight: "100vh",
  padding: "100px 30px",
  //   backgroundColor: "#f0f0f0",
  scrollMarginTop: "80px", // helps avoid content hiding behind navbar
};

const Home = () => {
  return (
    <Stack sx={{ bgcolor: "black" }}>
      <Box
        id="home"
        sx={{
          ...sectionStyle,
          backgroundImage: `url(${laptop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center -84px",
          position: "relative",
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* Overlay with reduced opacity */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
        />

        {/* Typography */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontFamily: "Koh Santepheap",
            textAlign: "center",
            zIndex: 1,
            marginTop: "150px",
            fontSize: 40,
            color: "white",
            position: "relative",
          }}
        >
          <span
            style={{
              background: "linear-gradient(90deg, #ff512f, #dd2476)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            YASH WALHEKAR
          </span>
          , a passionate Software <br /> Developer from Pune with 5 months of
          hands-on experience.
          <br />
          <span style={{ fontSize: 25 }}>
            I build responsive, efficient, and user-friendly web applications
            with modern technologies.
          </span>
        </Typography>

        {/* Resume Button */}
        <Button
          variant="contained"
          disableElevation
          sx={{
            mt: 3,
            zIndex: 1,
            fontWeight: "bold",
            textTransform: "none",
            background: "linear-gradient(90deg, #ff512f, #dd2476) !important",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(90deg, #dd2476, #ff512f) !important",
            },
          }}
          href="/resume.pdf"
          target="_blank"
        >
          My Resume
        </Button>
      </Box>
      <Box>
        <AboutMe />
      </Box>
      <Box sx={{ my: "200px" }}>
        <Projects />
      </Box>
      <Box>
        <Contact />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Home;
