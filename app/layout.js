"use client";
import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import MainNavbar from "./components/MainNavbar";
import styles from "./layout.module.css";
import { VolumeProvider } from "./contexts/VolumeContext";
import { TimerProvider } from "./contexts/TimerContext";
import { isExamRoute } from "./utils/routeHelpers";

export default function Layout({ children }) {
  const pathname = usePathname();
  const isExam = isExamRoute(pathname);

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>IELTS Mock Test</title>
      </head>
      <body>
        <VolumeProvider>
          <TimerProvider>
            {!isExam && <MainNavbar />}
            <Container className={styles.container} data-exam={isExam}>{children}</Container>
            <Box component="footer" className={styles.footer}>
              <Typography variant="body2" color="textSecondary">
                Shayegan The Test Helper © 2025 LTD
              </Typography>
            </Box>
          </TimerProvider>
        </VolumeProvider>
      </body>
    </html>
  );
}
