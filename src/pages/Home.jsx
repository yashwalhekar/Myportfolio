import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import laptop from "../components/images/laptop.png";
import { Button } from "@mui/material";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const sectionStyle = {
  minHeight: { xs: "80vh", sm: "100vh", md: "70vh", lg: "70vh" },
  padding: "100px 20px",
  scrollMarginTop: "80px",
};

const Home = () => {
  return (
    <Stack sx={{ bgcolor: "black" }}>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          ...sectionStyle,
          backgroundImage: `url(${laptop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: {
            xs: "center -14px",
            sm: "center -25px",
            lg: "center 10px",
            md: "center 50px",
            xl: "center -30px",
          },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Dark Overlay */}
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

        {/* Main Text */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontFamily: "Koh Santepheap",
            textAlign: "center",
            zIndex: 1,
            mt: { xs: 10, sm: 18 },
            px: { xs: 0.5, sm: 0 },
            fontSize: { xs: 22, sm: 28, md: 36, lg: 40 },
            color: "white",
          }}
        >
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #ff512f, #dd2476)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            YASH WALHEKAR
          </Box>
          , a passionate Software <br /> Developer from Pune 1 year of hands-on
          of hands-on experience.
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 14, sm: 18, lg: 20 },
            textAlign: "center",
            zIndex: 1,
            mt: 2,
            color: "#ccc",
            px: { xs: 1, sm: 0 },
            maxWidth: "700px",
          }}
        >
          I build responsive, efficient, and user-friendly web applications
          using modern technologies.
        </Typography>

        {/* Resume Button */}
        <Button
          variant="contained"
          disableElevation
          sx={{
            mt: 4,
            zIndex: 1,
            fontWeight: "bold",
            textTransform: "none",
            background: "linear-gradient(90deg, #ff512f, #dd2476) !important",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(90deg, #dd2476, #ff512f) !important",
            },
            px: 4,
            py: { xs: 0.5, lg: 1 },
            fontSize: { xs: 10, sm: 16 },
          }}
          href="https://drive.google.com/file/d/1Of_EOUk-UfA2vehQNeuesVyugOD-5Cwm/view?usp=sharing"
          target="_blank"
        >
          My Resume
        </Button>
      </Box>

      {/* Other Sections */}
      <Box>
        <AboutMe sectionStyle={sectionStyle} />
      </Box>

      <Box sx={{ my: { xs: 8, md: 25 } }}>
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
