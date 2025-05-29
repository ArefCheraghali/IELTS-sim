"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Task1 from "./Task1";
import Task2 from "./Task2";
import ExamLayout from "app/components/ExamLayout";
import { useTimer } from "app/contexts/TimerContext";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import { TEST_DURATIONS } from "app/config/testDurations";

const TEST_DURATION_MINUTES = TEST_DURATIONS.test3ac.writing;

export default function Test() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState(Array(2).fill(""));
  const [openDialog, setOpenDialog] = useState(false);

  const router = useRouter();
  const answersRef = useRef(answers);

  // Update the timer hook to include timeLeft and resetTimer
  const { timeLeft, startTimer, resetTimer } = useTimer();

  // Add auto-submit effect after the existing useEffect hooks
  useEffect(() => {
    let autoSubmitTimeout;
    if (timeLeft === 0) {
      autoSubmitTimeout = setTimeout(() => {
        handleAutoSubmit();
      }, 100);
    }
    return () => clearTimeout(autoSubmitTimeout);
  }, [timeLeft]);

  // Add handleAutoSubmit function before handleSubmit
  const handleAutoSubmit = () => {
    console.log("Time is up! Test submitted automatically.");
    handleSubmit();
  };

  useEffect(() => {
    startTimer(TEST_DURATION_MINUTES);
  }, [startTimer]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  const handleSubmit = () => {
    const writingAnswers = answersRef.current;

    localStorage.setItem(`writingAnswers`, JSON.stringify(writingAnswers));

    router.push("/testResult");
  };

  const handleConfirmSubmit = () => {
    setOpenDialog(false);
    handleSubmit();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSectionChange = (event, newValue) => {
    setCurrentSection(newValue);
  };

  return (
    <ExamLayout sectionName="Writing" onSubmit={() => setOpenDialog(true)}>
      <Box sx={{ height: "100%", overflow: "hidden" }}>
        {currentSection === 0 ? (
          <Task1 answers={answers} setAnswers={setAnswers} />
        ) : (
          <Task2 answers={answers} setAnswers={setAnswers} />
        )}

        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
          }}
          elevation={3}
        >
          <BottomNavigation
            value={currentSection}
            onChange={handleSectionChange}
            showLabels
          >
            <BottomNavigationAction label="Task 1" />
            <BottomNavigationAction label="Task 2" />
          </BottomNavigation>
        </Paper>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Submit Test</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to submit your test? This action cannot be
              undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleConfirmSubmit} autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ExamLayout>
  );
}
