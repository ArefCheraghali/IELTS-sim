"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
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
import useTextHighlight from "app/hooks/useTextHighlight";
import HighlightContextMenu from "app/components/HighlightContextMenu";
import ExamLayout from "../../../components/ExamLayout";
import { useVolume } from "../../../contexts/VolumeContext";
import { useTimer } from "../../../contexts/TimerContext";
import TestBottomNavigation from "../../../components/TestBottomNavigation";
import { TEST_DURATIONS } from "../../../config/testDurations";

const listeningAudio = "/audio/Listening1.mp3";
const TEST_DURATION_MINUTES = TEST_DURATIONS.test1ac.listening;
const QUESTIONS_DELAY_MS = 27000; // Time before showing questions (27 seconds)

export default function Test() {
  const [isReady, setIsReady] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [openDialog, setOpenDialog] = useState(false);

  const router = useRouter();
  const audioRef = useRef(null);
  const answersRef = useRef(answers);
  const { volume } = useVolume();
  const { timeLeft, startTimer, resetTimer } = useTimer();

  const {
    anchorEl,
    menuPosition,
    textRef,
    handleContextMenu,
    handleHighlight,
    handleClearHighlights,
    handleClose,
  } = useTextHighlight();

  // Initialize audio
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(listeningAudio);
      if (audioRef.current) {
        audioRef.current.volume = volume;
      }
    }

    // Cleanup function to stop and remove audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []); // Initialize audio only once

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle test start
  const handleStart = () => {
    setIsReady(true);
    startTimer(TEST_DURATION_MINUTES);

    // Play audio
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }
    }

    // Show questions after intro
    setTimeout(() => {
      setShowQuestions(true);
    }, QUESTIONS_DELAY_MS);
  };

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  // Auto-submit when time is up
  useEffect(() => {
    let autoSubmitTimeout;
    if (timeLeft === 0 && isReady) {
      // Add a small delay to ensure state updates are complete
      autoSubmitTimeout = setTimeout(() => {
        handleAutoSubmit();
      }, 100);
    }
    return () => clearTimeout(autoSubmitTimeout);
  }, [timeLeft, isReady]);

  const handleAutoSubmit = () => {
    console.log("Time is up! Test submitted automatically.");
    // Stop audio if it's still playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
    onSubmit();
  };

  const onSubmit = () => {
    if (!isReady) return; // Don't submit if test hasn't started

    // Stop audio before saving answers and navigating
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }

    console.log("User Answers:", answersRef.current);
    localStorage.setItem(
      "listeningAnswers",
      JSON.stringify(answersRef.current)
    );
    handleCloseDialog();
    resetTimer();
    router.push("/tests/reading-intro");
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <ExamLayout sectionName="Listening" onSubmit={() => setOpenDialog(true)}>
      <Box
        sx={{
          height: "100%",
          overflow: "hidden",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          pb: 5,
        }}
      >
        <Box
          onContextMenu={handleContextMenu}
          ref={textRef}
          sx={{ userSelect: "text" }}
        >
          <HighlightContextMenu
            anchorEl={anchorEl}
            menuPosition={menuPosition}
            handleClose={handleClose}
            handleHighlight={handleHighlight}
            handleClearHighlights={handleClearHighlights}
          />
          {!showQuestions ? (
            <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
              Click start when you are ready to take the Test.
            </Typography>
          ) : null}
          {!isReady && (
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: "20rem" }}
              onClick={handleStart}
            >
              Start
            </Button>
          )}
          {isReady && !showQuestions && (
            <Typography variant="h6" sx={{ mt: 4 }}>
              Audio Started, please wait...
            </Typography>
          )}
          {isReady && showQuestions && (
            <Box sx={{ mt: 4, pb: 8 }}>
              {currentSection === 0 && (
                <Part1
                  answers={answers}
                  setAnswers={setAnswers}
                  currentQuestion={currentQuestion}
                />
              )}
              {currentSection === 1 && (
                <Part2
                  answers={answers}
                  setAnswers={setAnswers}
                  currentQuestion={currentQuestion}
                />
              )}
              {currentSection === 2 && (
                <Part3
                  answers={answers}
                  setAnswers={setAnswers}
                  currentQuestion={currentQuestion}
                />
              )}
              {currentSection === 3 && (
                <Part4
                  answers={answers}
                  setAnswers={setAnswers}
                  currentQuestion={currentQuestion}
                />
              )}
            </Box>
          )}
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>{"Submit Answers?"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to submit your answers? You will not be
                able to change them after submission.
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
      </Box>
      {isReady && showQuestions && (
        <TestBottomNavigation
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          answers={answers}
        />
      )}
    </ExamLayout>
  );
}
