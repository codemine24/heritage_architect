"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Phone, Email, Menu as MenuIcon } from "@mui/icons-material";
import Image from "next/image";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const topBarContent = (
    <Box
      sx={{
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.875rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Phone sx={{ fontSize: 16 }} />
            <Typography variant="body2">(+880) 1682-791955</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Email sx={{ fontSize: 16 }} />
            <Typography variant="body2">
              heritagearchitect.bd@gmail.com
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );

  const navigationItems = [
    "Home",
    "Services",
    "Portfolio",
    "Products",
    "How we work",
    "About",
    "Contact",
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Heritage Architects
      </Typography>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Button
              fullWidth
              sx={{
                justifyContent: "center",
                color: "#333",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              <ListItemText primary={item} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Top Contact Bar */}
      {topBarContent}

      {/* Main Navigation */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "#333",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              py: 2,
            }}
          >
            {/* Logo/Brand */}
            <Box
              sx={{
                flexGrow: isMobile ? 1 : 0,
                ml: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/logo.jpeg" // Path to your logo in public folder
                alt="Heritage Architects Logo"
                width={150} // Adjust based on your logo dimensions
                height={40} // Adjust based on your logo dimensions
                style={{
                  objectFit: "contain",
                }}
                priority // Optional: if it's above the fold
              />
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1 }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "#333",
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: item === "Home" ? "bold" : "normal",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: "#333" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
