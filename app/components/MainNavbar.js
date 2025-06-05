"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton, // For hamburger icon
  Menu, // For dropdown menu
  MenuItem, // For items in the menu
  Box, // For layout adjustments
  useMediaQuery, // To detect screen size
} from "@mui/material";
import { useTheme } from "@mui/material/styles"; // To access theme breakpoints
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger menu icon
import HomeIcon from "@mui/icons-material/Home"; // Optional: for menu item
import LogoutIcon from "@mui/icons-material/Logout"; // Optional: for menu item
import { useRouter } from "next/navigation";

export default function MainNavbar() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for small screens (e.g., < 600px)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("role"); // Also remove role on logout
    localStorage.removeItem("user"); // Assuming you store user phone here
    handleMenuClose(); // Close menu if open
    router.push("/");
  };

  const handleHomepage = () => {
    handleMenuClose(); // Close menu if open
    router.push("/");
  };

  const buttonSx = {
    fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Smaller font size for buttons
    padding: { xs: "4px 8px", sm: "6px 12px" }, // Smaller padding
    minWidth: "auto", // Allow buttons to be smaller
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#31393C" }}>
      <Toolbar>
        <Typography
          variant={isMobile ? "subtitle1" : "h6"} // Adjust variant on mobile
          component="div"
          sx={{
            flexGrow: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis", // Prevent very long titles from breaking layout
            mr: 1, // Margin to give space before buttons/menu icon
          }}
        >
          Shayegan The Test Helper IELTS Simulator
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: "#31393C", // Match AppBar color for menu background
                  color: "white",
                },
              }}
            >
              <MenuItem onClick={handleHomepage} sx={{ fontSize: "0.875rem" }}>
                <HomeIcon sx={{ mr: 1, fontSize: "1.1rem" }} /> Homepage
              </MenuItem>
              <MenuItem onClick={handleLogout} sx={{ fontSize: "0.875rem" }}>
                <LogoutIcon sx={{ mr: 1, fontSize: "1.1rem" }} /> Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box>
            <Button color="inherit" onClick={handleHomepage} sx={buttonSx}>
              Homepage
            </Button>
            <Button
              color="inherit"
              onClick={handleLogout}
              sx={{ ...buttonSx, ml: 1 }}
            >
              {" "}
              {/* Added ml for spacing */}
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
