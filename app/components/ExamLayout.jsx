"use client";
import React from "react";
import { Box } from "@mui/material";
import ExamNavbar from "./ExamNavbar";

const ExamLayout = ({ children, sectionName, onSubmit }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
      }}
    >
      <ExamNavbar sectionName={sectionName} onSubmit={onSubmit} />
      <Box
        component="main"
        sx={{
          flex: 1,
          p: 0,
          m: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          position: "relative",
          height: "calc(100vh - 64px - 120px)", // Adjusted to account for bottom navigation
          width: "100%",
          mx: 0,
          "& > *": {
            minHeight: "fit-content",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ExamLayout;
