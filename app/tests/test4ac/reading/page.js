"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import useTextHighlight from "app/hooks/useTextHighlight";
import HighlightContextMenu from "app/components/HighlightContextMenu";
import ExamLayout from "../../../components/ExamLayout";
import { useTimer } from "../../../contexts/TimerContext";
import TestBottomNavigation from "../../../components/TestBottomNavigation";
import { TEST_DURATIONS } from "../../../config/testDurations";

const TEST_DURATION_MINUTES = TEST_DURATIONS.test3ac.reading;

export default function Test() {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [openDialog, setOpenDialog] = useState(false);

  const { startTimer, resetTimer } = useTimer();

  const router = useRouter();
  const answersRef = useRef(answers);

  useEffect(() => {
    startTimer(TEST_DURATION_MINUTES);
  }, []);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  const onSubmit = () => {
    console.log("User Answers:", answersRef.current);
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

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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

  return (
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
  );
}
