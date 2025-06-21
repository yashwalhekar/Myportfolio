import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const linkStyle = {
    fontFamily: "Jacques Francois",
    color: "inherit",
    cursor: "pointer",
    textTransform: "none",
    fontSize: "20px",
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "#212121", borderBottomColor: "white" }}
      >
        <Toolbar sx={{ position: "relative" }}>
          {/* Logo */}
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

          {/* Desktop Menu */}
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
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Button sx={linkStyle}>{item.label}</Button>
                  </motion.div>
                </Link>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              sx={{ marginLeft: "auto" }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250, bgcolor: "#212121", height: "100%" }}
          role="presentation"
        >
          <List>
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setDrawerOpen(false)} // ✅ only close drawer on item click
              >
                <ListItem button>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        color: "white",
                        fontFamily: "Jacques Francois",
                        fontSize: 18,
                      },
                    }}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
