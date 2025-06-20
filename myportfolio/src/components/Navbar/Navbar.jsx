import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-scroll"; // 🔹 Import react-scroll Link

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const linkStyle = {
    fontFamily: "Jacques Francois",
    color: "inherit",
    cursor: "pointer",
    textTransform: "none",
    fontSize: "20px",
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#212121", borderBottomColor: "white" }}
    >
      <Toolbar sx={{ position: "relative" }}>
        <Typography
          variant="h6"
          sx={{
            flexShrink: 0,
            fontFamily: "Jacques Francois",
            fontSize: "30px",
          }}
        >
          YASH
        </Typography>

        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 2,
            }}
          >
            {/* Use Link from react-scroll */}
            <Link to="home" smooth={true} duration={500}>
              <Button sx={linkStyle}>Home</Button>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <Button sx={linkStyle}>About Me</Button>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <Button sx={linkStyle}>Projects</Button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <Button sx={linkStyle}>Contact</Button>
            </Link>
          </Box>
        )}

        {isMobile && (
          <IconButton color="inherit" sx={{ marginLeft: "auto" }}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
