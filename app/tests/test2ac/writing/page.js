"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
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
import Task1 from "./Task1";
import Task2 from "./Task2";
import ExamLayout from "../../../components/ExamLayout";
import { useExam } from "../../../contexts/ExamContext";

export default function Test() {
  const [currentTask, setCurrentTask] = useState(0);
  const [answers, setAnswers] = useState(Array(2).fill(""));
  const [openDialog, setOpenDialog] = useState(false);
  const answersRef = useRef(answers);
  const router = useRouter();
  const { startTimer, timeLeft } = useExam();

  useEffect(() => {
    // Start 60-minute timer when component mounts
    startTimer(60);
  }, [startTimer]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  // Auto-submit when time is up
  useEffect(() => {
    if (timeLeft === 0) {
      onSubmit();
    }
  }, [timeLeft]);

  const handleNavigation = (direction) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (direction === "next" && currentTask < 1) {
      setCurrentTask(currentTask + 1);
    } else if (direction === "prev" && currentTask > 0) {
      setCurrentTask(currentTask - 1);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const onSubmit = () => {
    localStorage.setItem("writingAnswers", JSON.stringify(answersRef.current));
    handleCloseDialog();
    router.push("/tests"); // Return to test selection
  };

  const content = (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Box sx={{ mt: 4 }}>
        {currentTask === 0 && (
          <Task1 answers={answers} setAnswers={setAnswers} />
        )}
        {currentTask === 1 && (
          <Task2 answers={answers} setAnswers={setAnswers} />
        )}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleNavigation("prev")}
            disabled={currentTask === 0}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleNavigation("next")}
            disabled={currentTask === 1}
          >
            Next
          </Button>
        </Box>
        {currentTask === 1 && (
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

  return <ExamLayout sectionName="Writing Test">{content}</ExamLayout>;
}
