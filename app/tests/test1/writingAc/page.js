"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Task1 from "./Task1";
import Task2 from "./Task2";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function Test() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState(Array(2).fill(""));
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [openDialog, setOpenDialog] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let timerInterval;

    timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          handleAutoSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const handleAutoSubmit = () => {
    console.log("Time is up! Test submitted automatically.");
    onSubmit();
  };

  const onSubmit = () => {
    console.log("User Answers:", answers);
    localStorage.setItem("writings", JSON.stringify(answers));
    handleCloseDialog();
    router.push("/tests/test1/writingAc");
  };

  const handleNavigation = (direction) => {
    if (direction === "next" && currentSection < 2) {
      setCurrentSection(currentSection + 1);
    } else if (direction === "prev" && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Box sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Writing Test
          </Typography>
          <Typography variant="h6" gutterBottom>
            Time Left: {formatTime(timeLeft)}
          </Typography>
        </Box>
        {currentSection === 0 && (
          <Task1 answers={answers} setAnswers={setAnswers} />
        )}
        {currentSection === 1 && (
          <Task2 answers={answers} setAnswers={setAnswers} />
        )}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleNavigation("prev")}
            disabled={currentSection === 0}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleNavigation("next")}
            disabled={currentSection === 1}
          >
            Next
          </Button>
        </Box>
        {currentSection === 1 && (
          <Button
            onClick={handleOpenDialog}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        )}
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{"Submit Answers?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to submit your answers? You will not be able
            to change them after submission.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
