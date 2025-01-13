"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Slider,
} from "@mui/material";

export const VolumeContext = React.createContext();

export default function Layout({ children }) {
  const [volume, setVolume] = useState(1); // Default volume

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <VolumeContext.Provider value={volume}>
          <>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "#f8f9fa",
                color: "#343a40",
                border: "2px solid #856404",
              }}
            >
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div">
                  Shayegan The Test Helper IELTS Simulator
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1" sx={{ marginRight: 2 }}>
                    Volume:
                  </Typography>
                  <Slider
                    value={volume}
                    onChange={handleVolumeChange}
                    aria-labelledby="volume-slider"
                    min={0}
                    max={1}
                    step={0.01}
                    sx={{
                      width: 150,
                    }}
                  />
                </Box>
              </Toolbar>
            </AppBar>
            <Container sx={{ my: 4, minWidth: "1300px" }}>{children}</Container>
            <Box
              component="footer"
              sx={{
                py: 3,
                textAlign: "center",
                mt: 4,
                borderTop: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="body2" color="textSecondary">
                Shayegan The Test Helper © 2025 LTD
              </Typography>
            </Box>
          </>
        </VolumeContext.Provider>
      </body>
    </html>
  );
}
