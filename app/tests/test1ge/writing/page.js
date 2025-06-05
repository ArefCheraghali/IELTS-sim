"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Task1 from "./Part1";
import Task2 from "./Part2";
import ExamLayout from "app/components/ExamLayout"; // Added
import { useTimer } from "app/contexts/TimerContext"; // Added
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  BottomNavigation, // Added
  BottomNavigationAction, // Added
  Paper, // Added
} from "@mui/material";
import { TEST_DURATIONS } from "app/config/testDurations";

const TEST_DURATION_MINUTES = TEST_DURATIONS.test1ge.writing;

export default function Test() {
  const [currentSection, setCurrentSection] = useState(0); // Task 1 is 0, Task 2 is 1
  const [answers, setAnswers] = useState(Array(2).fill(""));
  const [openDialog, setOpenDialog] = useState(false);

  const router = useRouter();
  const answersRef = useRef(answers);

  const { timeLeft, startTimer } = useTimer();

  useEffect(() => {
    startTimer(TEST_DURATION_MINUTES);
  }, [startTimer]);

  useEffect(() => {
    let autoSubmitTimeout;
    if (timeLeft === 0) {
      autoSubmitTimeout = setTimeout(() => {
        console.log("Time is up! Test submitted automatically.");
        handleSubmit();
      }, 100);
    }
    return () => clearTimeout(autoSubmitTimeout);
  }, [timeLeft]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  const handleSubmit = () => {
    console.log("Submitting answers:", answersRef.current);
    localStorage.setItem("writingAnswers", JSON.stringify(answersRef.current));
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
      <Box sx={{ height: "calc(100% - 56px)", overflowY: "auto" }}>
        {currentSection === 0 && (
          <Task1 answers={answers} setAnswers={setAnswers} />
        )}
        {currentSection === 1 && (
          <Task2 answers={answers} setAnswers={setAnswers} />
        )}
      </Box>

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
    </ExamLayout>
  );
}
