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
import { TEST_DURATIONS } from "../../../config/testDurations";

export default function Test() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState(Array(2).fill(""));
  const [openDialog, setOpenDialog] = useState(false);

  const router = useRouter();
  const answersRef = useRef(answers);

  const { timeLeft, startTimer, resetTimer } = useTimer();

  useEffect(() => {
    // Determine test ID from localStorage or context if available
    // For now, assuming test1ac
    const testDuration = TEST_DURATIONS.test1ac.writing; // Use specific duration
    startTimer(testDuration);
  }, [startTimer]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  // Auto-submit when time is up
  useEffect(() => {
    let autoSubmitTimeout;
    if (timeLeft === 0) {
      autoSubmitTimeout = setTimeout(() => {
        console.log("Time is up! Submitting writing test automatically.");
        handleSubmit();
      }, 100);
    }
    return () => clearTimeout(autoSubmitTimeout);
  }, [timeLeft]);

  const handleSubmit = () => {
    // Retrieve the selected test details from localStorage
    const testDataString = localStorage.getItem("selectedTest");
    let testId = "test1ac"; // Default or fallback
    if (testDataString) {
      try {
        const testData = JSON.parse(testDataString);
        testId = testData.testId; // Use the actual testId
      } catch (error) {
        console.error("Error parsing selectedTest from localStorage:", error);
      }
    }

    const writingAnswers = answersRef.current;

    // Retrieve existing answers for this test, or initialize if not present
    const existingAnswersString = localStorage.getItem(`test${testId}Answers`);
    let existingAnswers = {};
    if (existingAnswersString) {
      try {
        existingAnswers = JSON.parse(existingAnswersString);
      } catch (error) {
        console.error(
          `Error parsing test${testId}Answers from localStorage:`,
          error
        );
        existingAnswers = {}; // Reset if parsing fails
      }
    }

    // Merge writing answers into the structure
    const updatedAnswers = {
      ...existingAnswers,
      writing: writingAnswers,
    };

    // Save the updated answers back to localStorage
    localStorage.setItem(
      `test${testId}Answers`,
      JSON.stringify(updatedAnswers)
    );

    console.log(`Writing answers for ${testId} saved:`, writingAnswers);

    resetTimer(); // Reset timer before navigating
    router.push("/tests/completion"); // Navigate to completion page
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
      <Box
        sx={{
          height: "100%",
          overflow: "hidden",
          pb: 7 /* Add padding for BottomNavigation */,
        }}
      >
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
          <DialogTitle>Submit Writing Test</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to submit your writing test? This action
              cannot be undone.
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
