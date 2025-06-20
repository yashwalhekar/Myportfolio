// src/components/Projects.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Tooltip,
  Link,
} from "@mui/material";
import hms from "../components/images/hms.png";
import petcare from "../components/images/petcare.png";

const developmentProjects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack MERN e-commerce site with payment integration.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Hotel Management System",
    description:
      "Inventory and booking system for resort using Firebase.Technologies used are React js ",
    image: hms,
  },
];

const designProjects = [
  {
    title: "Pet Care App UI",
    description: "Mobile UI for a pet care app with vibrant visuals.",
    image: petcare,
    projectLink: "https://www.behance.net/gallery/228103127/Pets-Crae",
  },
  {
    title: "Portfolio Website",
    description: "Figma-based design for a modern developer portfolio.",
    image: "https://via.placeholder.com/300x200",
  },
];

const Projects = ({ sectionStyle }) => {
  const [tab, setTab] = useState(0);

  return (
    <Box id="projects" sx={{ ...sectionStyle }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontFamily: "Koh Santepheap",
          background: "linear-gradient(0deg, #EF0FAF, #BE272C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          fontSize: 64,
          letterSpacing: 2,
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
        }}
      >
        Projects
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          mt: 2,
          fontSize: 25,
          fontWeight: "regular",
          color: "white",
          fontFamily: "koHo",
          m: 5,
        }}
      >
        Dive into my world of development and design! These projects showcase
        real-world solutions, thoughtful UI, and modern tech in action.
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={10}
        sx={{
          border: "2px solid ",
          maxWidth: "70%",
          bgcolor: "#212121",
          mx: "auto",
          borderRadius: 6,
        }}
      >
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          centered
          textColor="inherit"
          indicatorColor="secondary"
          sx={{ mt: 4, gap: 10, p: 2 }}
        >
          <Tab
            sx={{
              fontWeight: "bold",
              fontFamily: "Koh Santepheap",
              background: "linear-gradient(0deg, #EF0FAF, #BE272C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: 24,
              mx: 5,
            }}
            label="Development"
          />
          <Tab
            sx={{
              fontWeight: "bold",
              fontFamily: "Koh Santepheap",
              background: "linear-gradient(0deg, #EF0FAF, #BE272C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: 24,
              mx: 7,
            }}
            label="Design"
          />
        </Tabs>
      </Box>

      <Grid container spacing={3} sx={{ mt: 4, justifyContent: "center" }}>
        {(tab === 0 ? developmentProjects : designProjects).map(
          (project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ height: "100%" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  backgroundColor: "#212121",
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="white"
                    sx={{ opacity: "80%" }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "white", opacity: "80%" }}
                  >
                    {project.description}
                  </Typography>
                  <Typography>
                    <Link
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      color="primary"
                    >
                      {project.projectLink}
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};

export default Projects;
