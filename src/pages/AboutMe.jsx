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
          fontSize: { xs: 36, sm: 48, md: 64 },
          letterSpacing: 2,
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
        }}
      >
        About Me
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 8, lg: 12 },
          mt: { xs: 4, md: 10 },
          px: { xs: 2, md: 8, lg: 16 },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: 250, sm: 300, md: 400, lg: 500 },
            height: { xs: 250, sm: 350, md: 550, lg: 650 },
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            flexShrink: 0,
            position: { md: "absolute", lg: "absolute" }, // Only absolute on large screens
            left: { md: "-60px", lg: "-40px" }, // Move half outside screen
            top: { lg: "150%", md: "190%" },
          }}
        >
          <img
            src={myimg}
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            color: "white",
            maxWidth: { xs: "100%", lg: "60%" },
            px: { xs: 2, sm: 3 },
            mt: { xs: 2, md: 0 },
            ml: { md: "300px" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "KoHo",
              opacity: 0.8,
              fontSize: { xs: 16, sm: 18, md: 20, lg: 24 },
              textAlign: { xs: "center", lg: "start", md: "start" },
            }}
          >
            I'm a Frontend and MERN Stack Developer who loves crafting
            beautiful, responsive, and efficient web experiences. With a strong
            foundation in JavaScript, React.js, Node.js, Express, and MongoDB, I
            bring both creativity and logic to every project. With 1 year of
            hands-on experience, I've built and contributed to real-world
            applications that are both user-friendly and performance-optimized.
            I’m passionate about clean code, modern UI/UX practices, and
            continuously improving my skills to stay updated with the latest web
            development trends.
          </Typography>

          {/* Education */}
          <Typography
            sx={{
              mt: 5,
              fontSize: { xs: 24, md: 25 },
              fontFamily: "koHo",
              background: "linear-gradient(0deg, #DB2799, #751552)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              textAlign: { xs: "center", lg: "start", md: "start" },
            }}
          >
            Education
          </Typography>

          <Box sx={{ mt: 2 }} display="flex" flexDirection="column" gap={3}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  opacity: 0.8,
                  fontSize: { xs: 14, md: 16, lg: 24 },
                }}
              >
                Graduation in BSc Computer Science
                <Box component="span" sx={{ ml: 2 }}>
                  2022
                </Box>
              </Typography>
              <Typography
                sx={{
                  ml: 2,
                  fontSize: { xs: 14, md: 14, lg: 16 },
                  opacity: 0.8,
                }}
              >
                Modern College Ganeshkhind, Pune
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  opacity: 0.8,
                  fontSize: { xs: 14, md: 16, lg: 24 },
                }}
              >
                Post Graduation in MSc Computer Application
                <Box component="span" sx={{ ml: 2 }}>
                  2024
                </Box>
              </Typography>
              <Typography
                sx={{
                  ml: 2,
                  fontSize: { xs: 14, md: 14, lg: 16 },
                  opacity: 0.8,
                }}
              >
                Modern College Ganeshkhind, Pune
              </Typography>
            </Box>
          </Box>

          {/* Skills */}
          <Box
            sx={{
              px: 2,
              mt: 4,
              py: 2,
              bgcolor: "#212121",
              borderRadius: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 24, md: 30 },
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
                      fontWeight: 500,
                      fontSize: 14,
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
