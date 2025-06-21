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
  Link,
} from "@mui/material";
import hms from "../components/images/hms.png";
import petcare from "../components/images/petcare.png";
import ecommerce from "../components/images/Ecommerce.jpg";
import portfolio from "../components/images/portfolio.png";

const developmentProjects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack MERN e-commerce site with payment integration.",
    image: ecommerce,
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
    image: portfolio,
  },
];

const Projects = ({ sectionStyle }) => {
  const [tab, setTab] = useState(0);

  return (
    <Box id="projects" sx={{ ...sectionStyle }}>
      {/* Section Title */}
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
        Projects
      </Typography>

      {/* Subheading */}
      <Typography
        sx={{
          textAlign: "center",
          mt: 2,
          fontSize: { xs: 16, sm: 20, md: 25 },
          fontWeight: "regular",
          color: "white",
          fontFamily: "koHo",
          mx: "auto",
          maxWidth: 800,
          px: { xs: 2, sm: 0, lg: 0 },
        }}
      >
        Dive into my world of development and design! These projects showcase
        real-world solutions, thoughtful UI, and modern tech in action.
      </Typography>

      {/* Tabs */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{
          border: "2px solid",
          maxWidth: { xs: "95%", sm: "80%", md: "80%" },
          bgcolor: "#212121",
          mx: "auto",
          borderRadius: { xs: 6, lg: 5 },
          mt: 4,
        }}
      >
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          centered
          textColor="inherit"
          indicatorColor="secondary"
          variant="fullWidth"
        >
          <Tab
            sx={{
              fontWeight: "bold",
              fontFamily: "Koh Santepheap",
              background: "linear-gradient(0deg, #EF0FAF, #BE272C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: 16, sm: 20, md: 20 },
              mx: 3,
              p: 3,
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
              fontSize: { xs: 16, sm: 20, md: 20 },
              textDecoration: "none",
              mx: 3,
            }}
            label="Design"
          />
        </Tabs>
      </Box>

      {/* Project Cards */}
      <Grid
        container
        spacing={3}
        sx={{ mt: 4, justifyContent: "center", px: 2 }}
      >
        {(tab === 0 ? developmentProjects : designProjects).map(
          (project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: "cover" }}
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

                  {project.projectLink && (
                    <Typography sx={{ mt: 1 }}>
                      <Link
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        color="primary"
                      >
                        View
                      </Link>
                    </Typography>
                  )}
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
