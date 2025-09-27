"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";
import ExamLayout from "./ExamLayout";
import TestBottomNavigation from "./TestBottomNavigation";
import HighlightContextMenu from "./HighlightContextMenu";
import { useExam } from "../contexts/ExamContext";

const TestPage = ({ testData }) => {
  const { testType, timeLimit, sections, partQuestions, audioSrc, audioDelay } =
    testData;

  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [openDialog, setOpenDialog] = useState(false);

  const [isReady, setIsReady] = useState(!audioSrc);
  const [showQuestions, setShowQuestions] = useState(!audioSrc);

  const {
    volume,
    timeLeft,
    startTimer,
    resetTimer,
    textRef,
    anchorEl,
    menuPosition,
    handleHighlight,
    handleClearHighlights,
    handleCloseHighlightMenu,
  } = useExam();

  const router = useRouter();
  const answersRef = useRef(answers);
  const audioRef = useRef(null);

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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleStartListeningTest = () => {
    setIsReady(true);
    startTimer(timeLimit);
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((e) => console.error("Audio play failed:", e));
      setTimeout(() => setShowQuestions(true), audioDelay || 0);
    }
  };

  useEffect(() => {
    // For non-listening tests, start the timer immediately
    if (!audioSrc) {
      startTimer(timeLimit);
    }
  }, [audioSrc, timeLimit, startTimer]);

  useEffect(() => {
    let autoSubmitTimeout;
    if (isReady && timeLeft === 0) {
      autoSubmitTimeout = setTimeout(() => {
        onSubmit();
      }, 100);
    }
    return () => clearTimeout(autoSubmitTimeout);
  }, [timeLeft, isReady]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  const onSubmit = () => {
    if (!isReady) return;

    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Save answers with a dynamic key based on the test type
    localStorage.setItem(
      `${testType.toLowerCase()}Answers`,
      JSON.stringify(answersRef.current)
    );
    handleCloseDialog();
    resetTimer();

    const nextPath =
      testType.toLowerCase() === "listening"
        ? "/tests/reading-intro"
        : testType.toLowerCase() === "reading"
        ? "/tests/writing-intro"
        : "/testResult";
    router.push(nextPath);
  };

  const handleQuestionChange = (questionNumber) => {
    setCurrentQuestion(questionNumber);
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
            onClick={handleStartListeningTest}
          >
            Start Test
          </Button>
        </Box>
      </ExamLayout>
    );
  }

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
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          pb: 12,
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
          handleClose={handleCloseHighlightMenu}
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
