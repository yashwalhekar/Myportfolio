// src/components/AboutMe.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import myimg from "../components/images/myimg2.jpg";

const skills = [
  { name: "Html", value: 100 },
  { name: "Css", value: 95 },
  { name: "JS", value: 95 },
  { name: "React", value: 90 },
  { name: "SQL", value: 85 },
  { name: "Uiux", value: 90 },
];

const AboutMe = ({ sectionStyle }) => {
  return (
    <Box id="about" sx={{ ...sectionStyle }}>
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
        About Me
      </Typography>

      {/* Image and Text as Independent Boxes */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 6,
          position: "relative",
        }}
      >
        {/* Left - Image Box */}
        <Box
          sx={{
            width: 600,
            height: 750,
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
            left: "-60px",
            top: "150px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            flexShrink: 0,
          }}
        >
          <img
            src={myimg}
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Right - Text Box */}
        <Box
          sx={{
            color: "white",
            // maxWidth: 700,
            zIndex: 1,
            mt: 10,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "regular",
              fontFamily: "KoHo",
              opacity: 0.8,
            }}
          >
            I'm a Frontend and MERN Stack Developer who loves crafting
            beautiful, responsive, and efficient web experiences. With a blend
            of creativity and logic, I build user-friendly web applications
            using modern technologies.
          </Typography>

          {/* Education Section */}
          <Typography
            sx={{
              mt: 5,
              fontSize: 30,
              fontFamily: "koHo",
              background: "linear-gradient(0deg, #DB2799, #751552)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            Education
          </Typography>

          <Box sx={{ mt: 2 }} display="flex" flexDirection="column" gap={3}>
            {/* Graduation */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, opacity: 0.9 }}>
                Graduation in BSc Computer Science
                <Box component="span" sx={{ ml: 6 }}>
                  2022
                </Box>
              </Typography>
              <Typography sx={{ ml: 3, fontSize: 20 }}>
                Modern College Ganeshkhind, Pune
              </Typography>
            </Box>

            {/* Post Graduation */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, opacity: 0.9 }}>
                Post Graduation in MSc Computer Application
                <Box component="span" sx={{ ml: 6 }}>
                  2024
                </Box>
              </Typography>
              <Typography sx={{ ml: 3, fontSize: 20 }}>
                Modern College Ganeshkhind, Pune
              </Typography>
            </Box>
          </Box>

          {/* Skills Section */}
          <Box
            sx={{
              px: 3,
              mt: 3,
              py: 2,
              bgcolor: "#212121",
              borderRadius: 5,
              m: 5,
              mr: 10,
            }}
          >
            <Typography
              sx={{
                mt: 5,
                fontSize: 30,
                fontFamily: "koHo",
                background: "linear-gradient(0deg, #DB2799, #751552)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              Skills
            </Typography>

            <Box sx={{ mt: 3 }}>
              {skills.map((skill, idx) => (
                <Box key={idx} sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "500",
                      fontFamily: "koHo",
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Box
                    sx={{
                      position: "relative",
                      height: 8,
                      borderRadius: 5,
                      backgroundColor: "white",
                      mt: 1,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: `${skill.value}%`,
                        borderRadius: 5,
                        background: "linear-gradient(90deg, #ff0080, #00ff87)",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "right",
                      color: "white",
                      fontSize: 14,
                      mt: 0.5,
                    }}
                  >
                    {skill.value}%
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
