"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
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
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [timeLeft, setTimeLeft] = useState(61 * 60);
  const [openDialog, setOpenDialog] = useState(false);

  const router = useRouter();
  const answersRef = useRef(answers);

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

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  const handleAutoSubmit = () => {
    console.log("Time is up! Test submitted automatically.");
    onSubmit();
  };

  const onSubmit = () => {
    console.log("User Answers:", answersRef.current);
    localStorage.setItem("readingAnswers", JSON.stringify(answersRef.current));
    handleCloseDialog();
    router.push("/tests/test3ac/writing");
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
            Reading Test
          </Typography>
          <Typography variant="h6" gutterBottom>
            Time Left: {formatTime(timeLeft)}
          </Typography>
        </Box>
        {currentSection === 0 && (
          <Part1 answers={answers} setAnswers={setAnswers} />
        )}
        {currentSection === 1 && (
          <Part2 answers={answers} setAnswers={setAnswers} />
        )}
        {currentSection === 2 && (
          <Part3 answers={answers} setAnswers={setAnswers} />
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
            disabled={currentSection === 2}
          >
            Next
          </Button>
        </Box>
        {currentSection === 2 && (
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
