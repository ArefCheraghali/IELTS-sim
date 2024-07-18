import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Shayegan The Test Helper IELTS Simulator
              </Typography>
              {/* <Link href="/" passHref>
                <Typography variant="button" color="white" sx={{ mx: 2 }}>
                  Home
                </Typography>
              </Link>
              <Link href="/tests" passHref>
                <Typography variant="button" color="white" sx={{ mx: 2 }}>
                  About Us
                </Typography>
              </Link> */}
            </Toolbar>
          </AppBar>
          <Container sx={{ my: 4 }}>{children}</Container>
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
              Shayegan The Test Helper © 2024
            </Typography>
          </Box>
        </>
      </body>
    </html>
  );
}
