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
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import ExamLayout from "../../../components/ExamLayout";
import { useExam } from "../../../contexts/ExamContext";
import useTextHighlight from "app/hooks/useTextHighlight";
import HighlightContextMenu from "app/components/HighlightContextMenu";

export default function Test() {
  const [currentPart, setCurrentPart] = useState(0);
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [openDialog, setOpenDialog] = useState(false);
  const answersRef = useRef(answers);
  const router = useRouter();
  const { startTimer, timeLeft } = useExam();

  const {
    anchorEl,
    menuPosition,
    textRef,
    handleContextMenu,
    handleHighlight,
    handleClearHighlights,
    handleClose,
  } = useTextHighlight();

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
    if (direction === "next" && currentPart < 2) {
      setCurrentPart(currentPart + 1);
    } else if (direction === "prev" && currentPart > 0) {
      setCurrentPart(currentPart - 1);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const onSubmit = () => {
    localStorage.setItem("readingAnswers", JSON.stringify(answersRef.current));
    handleCloseDialog();
    router.push("/tests/test2ac/writing");
  };

  const content = (
    <Box sx={{ textAlign: "center", mt: 4, userSelect: "text" }}>
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
        <Box sx={{ mt: 4 }}>
          {currentPart === 0 && (
            <Part1 answers={answers} setAnswers={setAnswers} />
          )}
          {currentPart === 1 && (
            <Part2 answers={answers} setAnswers={setAnswers} />
          )}
          {currentPart === 2 && (
            <Part3 answers={answers} setAnswers={setAnswers} />
          )}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleNavigation("prev")}
              disabled={currentPart === 0}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleNavigation("next")}
              disabled={currentPart === 2}
            >
              Next
            </Button>
          </Box>
          {currentPart === 2 && (
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
    </Box>
  );

  return <ExamLayout sectionName="Reading Test">{content}</ExamLayout>;
}
