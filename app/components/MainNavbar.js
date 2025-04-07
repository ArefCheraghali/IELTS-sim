"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function MainNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shayegan The Test Helper IELTS Simulator
        </Typography>
        <Button color="inherit" href="/">
          Homepage
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            /* Handle logout */
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
