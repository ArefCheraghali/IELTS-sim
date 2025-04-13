"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import ExamLayout from "../../../components/ExamLayout";
import { useTimer } from "../../../contexts/TimerContext";
import TestBottomNavigation from "../../../components/TestBottomNavigation";
import { TEST_DURATIONS } from "../../../config/testDurations";
import { HighlightProvider } from "app/contexts/HighlightContext";
import useTextHighlight from "app/hooks/useTextHighlight";
import HighlightContextMenu from "app/components/HighlightContextMenu";

const TEST_DURATION_MINUTES = TEST_DURATIONS.test1ac.reading;

export default function Test() {
  const [isReady, setIsReady] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [openDialog, setOpenDialog] = useState(false);
  const answersRef = useRef(answers);
  const router = useRouter();
  const { startTimer, timeLeft, resetTimer } = useTimer();

  const handleStart = () => {
    setIsReady(true);
    startTimer(TEST_DURATION_MINUTES);
  };

  useEffect(() => {
    handleStart(); // Auto-start the reading test
  }, []);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  // Auto-submit when time is up
  useEffect(() => {
    let autoSubmitTimeout;
    if (timeLeft === 0 && isReady) {
      // Add a small delay to ensure state updates are complete
      autoSubmitTimeout = setTimeout(() => {
        onSubmit();
      }, 100);
    }
    return () => clearTimeout(autoSubmitTimeout);
  }, [timeLeft, isReady]);

  const handleQuestionChange = (questionNumber) => {
    setCurrentQuestion(questionNumber);
    // Update the section based on the question number
    if (questionNumber <= 13) {
      setCurrentSection(0);
    } else if (questionNumber <= 26) {
      setCurrentSection(1);
    } else {
      setCurrentSection(2);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const onSubmit = () => {
    if (!isReady) return; // Don't submit if test hasn't started

    localStorage.setItem("readingAnswers", JSON.stringify(answersRef.current));
    handleCloseDialog();
    resetTimer();
    router.push("/tests/writing-intro");
  };

  const {
    anchorEl,
    menuPosition,
    textRef,
    handleContextMenu,
    handleHighlight,
    handleClearHighlights,
    handleClose,
  } = useTextHighlight();

  return (
    <HighlightProvider>
      <ExamLayout sectionName="Reading" onSubmit={handleOpenDialog}>
        <Box
          ref={textRef}
          onContextMenu={handleContextMenu}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
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

          <HighlightContextMenu
            anchorEl={anchorEl}
            menuPosition={menuPosition}
            handleHighlight={handleHighlight}
            handleClearHighlights={handleClearHighlights}
            handleClose={handleClose}
          />
          <TestBottomNavigation
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            currentQuestion={currentQuestion}
            setCurrentQuestion={handleQuestionChange}
            answers={answers}
            totalSections={3}
            partQuestions={{
              0: { start: 1, end: 13 },
              1: { start: 14, end: 26 },
              2: { start: 27, end: 40 },
            }}
          />
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
      </ExamLayout>
    </HighlightProvider>
  );
}
