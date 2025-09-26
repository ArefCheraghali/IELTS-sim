// app/components/TestPage.jsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import ExamLayout from "./ExamLayout";
import TestBottomNavigation from "./TestBottomNavigation";
import HighlightContextMenu from "./HighlightContextMenu";
import { useTimer } from "../contexts/TimerContext";
import useTextHighlight from "../hooks/useTextHighlight";

const TestPage = ({ testData }) => {
  const {
    testName,
    testType,
    timeLimit,
    sections,
    partQuestions,
    audioSrc,
    audioDelay,
  } = testData;

  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [openDialog, setOpenDialog] = useState(false);

  // States for Listening Test
  const [isReady, setIsReady] = useState(false);
  const [showQuestions, setShowQuestions] = useState(!audioSrc); // Show questions immediately if not a listening test

  const { timeLeft, startTimer, resetTimer } = useTimer();
  const router = useRouter();
  const answersRef = useRef(answers);
  const audioRef = useRef(null);

  const {
    anchorEl,
    menuPosition,
    textRef,
    handleContextMenu,
    handleHighlight,
    handleClearHighlights,
    handleClose,
  } = useTextHighlight();

  // Effect to handle audio for listening tests
  useEffect(() => {
    if (audioSrc && typeof window !== "undefined") {
      audioRef.current = new Audio(audioSrc);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  // Effect to start timer and audio when ready
  useEffect(() => {
    if (isReady) {
      startTimer(timeLimit);
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((e) => console.error("Audio play failed:", e));
        setTimeout(() => setShowQuestions(true), audioDelay || 0);
      }
    }
  }, [isReady, timeLimit, startTimer, audioDelay]);

  // Effect to auto-submit when timer ends
  useEffect(() => {
    let autoSubmitTimeout;
    if (isReady && timeLeft === 0) {
      autoSubmitTimeout = setTimeout(() => {
        console.log("Time is up! Submitting automatically.");
        onSubmit();
      }, 100);
    }
    return () => clearTimeout(autoSubmitTimeout);
  }, [timeLeft, isReady]);

  // Keep a ref to the latest answers for submission
  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  const onSubmit = () => {
    if (!isReady) return;

    if (audioRef.current) {
      audioRef.current.pause();
    }

    localStorage.setItem(
      `${testType}Answers`,
      JSON.stringify(answersRef.current)
    );
    handleCloseDialog();
    resetTimer();

    // Determine next step (e.g., go to reading intro, or results)
    const nextPath =
      testType === "listening"
        ? "/tests/reading-intro"
        : testType === "reading"
        ? "/tests/writing-intro"
        : "/testResult";
    router.push(nextPath);
  };

  const handleQuestionChange = (questionNumber) => {
    setCurrentQuestion(questionNumber);
    // Find which section this question belongs to
    for (const sectionIndex in partQuestions) {
      const { start, end } = partQuestions[sectionIndex];
      if (questionNumber >= start && questionNumber <= end) {
        setCurrentSection(Number(sectionIndex));
        break;
      }
    }
  };

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const CurrentSectionComponent = sections[currentSection];

  // If it's a listening test and not ready, show the start button
  if (audioSrc && !isReady) {
    return (
      <ExamLayout sectionName={testType}>
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Ready to start the {testType} test?
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setIsReady(true)}
          >
            Start Test
          </Button>
        </Box>
      </ExamLayout>
    );
  }

  // If audio is playing but questions are not yet shown
  if (audioSrc && isReady && !showQuestions) {
    return (
      <ExamLayout sectionName={testType}>
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h5">
            The audio has started. The questions will appear shortly.
          </Typography>
        </Box>
      </ExamLayout>
    );
  }

  return (
    <ExamLayout sectionName={testType} onSubmit={handleOpenDialog}>
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
        <CurrentSectionComponent
          answers={answers}
          setAnswers={setAnswers}
          currentQuestion={currentQuestion}
        />

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
          totalSections={sections.length}
          partQuestions={partQuestions}
        />
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Submit Answers?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to submit your answers? You cannot change them
            after submission.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={onSubmit} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </ExamLayout>
  );
};

export default TestPage;
