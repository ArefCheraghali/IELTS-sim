"use client";
import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingSpinner = ({ 
  message = "Loading...", 
  size = 40, 
  fullScreen = false 
}) => {
  const containerSx = fullScreen
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(255, 255, 255, 0.9)",
        zIndex: 9999,
      }
    : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      };

  return (
    <Box sx={containerSx}>
      <CircularProgress size={size} />
      {message && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LoadingSpinner;
