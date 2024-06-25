"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
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

const listeningAudio = "/audio/listening.mp3";

export default function Test() {
  const [isReady, setIsReady] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [timeLeft, setTimeLeft] = useState(27 * 60); // 27 minutes in seconds
  const [openDialog, setOpenDialog] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let audioTimeout;
    let timerInterval;

    if (isReady) {
      const audio = new Audio(listeningAudio);
      audio.play();
      audioTimeout = setTimeout(() => {
        setShowQuestions(true);
      }, 3000);

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
    }

    return () => {
      clearTimeout(audioTimeout);
      clearInterval(timerInterval);
    };
  }, [isReady]);

  const handleAutoSubmit = () => {
    console.log("Time is up! Test submitted automatically.");
    onSubmit();
  };

  const onSubmit = () => {
    console.log("User Answers:", answers);
    localStorage.setItem("listeningAnswers", JSON.stringify(answers));
    handleCloseDialog();
    router.push("/tests/test1/readingAc");
  };

  const handleNavigation = (direction) => {
    if (direction === "next" && currentSection < 3) {
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
      {!showQuestions ? (
        <Typography variant="h4" gutterBottom>
          Listening Test
        </Typography>
      ) : null}
      {!isReady && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsReady(true)}
        >
          I'm Ready
        </Button>
      )}
      {isReady && !showQuestions && (
        <Typography variant="h6" sx={{ mt: 4 }}>
          Audio Started...
        </Typography>
      )}
      {isReady && showQuestions && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Time Left: {formatTime(timeLeft)}
          </Typography>
          {currentSection === 0 && (
            <Section1 answers={answers} setAnswers={setAnswers} />
          )}
          {currentSection === 1 && (
            <Section2 answers={answers} setAnswers={setAnswers} />
          )}
          {currentSection === 2 && (
            <Section3 answers={answers} setAnswers={setAnswers} />
          )}
          {currentSection === 3 && (
            <Section4 answers={answers} setAnswers={setAnswers} />
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
              disabled={currentSection === 3}
            >
              Next
            </Button>
          </Box>
          {currentSection === 3 && (
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
      )}
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
