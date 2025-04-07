"use client";
import React from "react";
import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styled button for the question numbers
const QuestionButton = styled(Button)(({ theme, active, completed }) => ({
  minWidth: "30px",
  height: "20px",
  padding: "0px",
  margin: "0 2px",
  borderRadius: "0",
  fontSize: "0.875rem",
  color: active ? "white" : "black",
  backgroundColor: active ? "#007bff" : completed ? "#a2fac8" : "transparent",
  border: "1px solid #ccc",
  "&:hover": {
    backgroundColor: active ? "#0069d9" : "#f0f0f0",
  },
}));

// Custom styled button for the part navigation
const PartButton = styled(Button)(({ theme, active }) => ({
  padding: "4px 16px",
  borderRadius: "0",
  color: active ? "black" : "#666",
  fontWeight: active ? "bold" : "normal",
  borderBottom: active ? "3px solid #007bff" : "none",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
    color: "black",
  },
}));

// Navigation button (left/right arrows)
const NavArrowButton = styled(Button)(({ theme }) => ({
  minWidth: "40px",
  height: "40px",
  borderRadius: "50%",
  padding: 0,
  backgroundColor: "#000",
  color: "white",
  "&:hover": {
    backgroundColor: "#333",
  },
}));

const TestBottomNavigation = ({
  currentSection,
  setCurrentSection,
  currentQuestion,
  setCurrentQuestion,
  answers,
  totalSections = 4,
  partQuestions = {
    0: { start: 1, end: 10 },
    1: { start: 11, end: 20 },
    2: { start: 21, end: 30 },
    3: { start: 31, end: 40 },
  },
}) => {

  // Handle part selection
  const handlePartClick = (partIndex) => {
    setCurrentSection(partIndex);
    // Set the current question to the first question of the selected part
    setCurrentQuestion(partQuestions[partIndex].start);
  };

  // Handle question selection
  const handleQuestionClick = (questionNumber) => {
    setCurrentQuestion(questionNumber);
    // Also set the correct section based on the question number
    for (let i = 0; i < totalSections; i++) {
      if (
        questionNumber >= partQuestions[i].start &&
        questionNumber <= partQuestions[i].end
      ) {
        setCurrentSection(i);
        break;
      }
    }
  };

  // Generate question buttons for the current section
  const renderQuestionButtons = () => {
    const { start, end } = partQuestions[currentSection];
    const buttons = [];

    for (let i = start; i <= end; i++) {
      // Check if this question has been answered
      const isAnswered = answers[i - 1] !== "" && answers[i - 1] !== undefined;

      buttons.push(
        <QuestionButton
          key={i}
          active={i === currentQuestion}
          completed={isAnswered}
          onClick={() => handleQuestionClick(i)}
        >
          {i}
        </QuestionButton>
      );
    }

    return buttons;
  };

  // Calculate completed questions for each part
  const getCompletedCount = (partIndex) => {
    const { start, end } = partQuestions[partIndex];
    let completed = 0;

    for (let i = start; i <= end; i++) {
      if (answers[i - 1] !== "" && answers[i - 1] !== undefined) {
        completed++;
      }
    }

    return completed;
  };

  // Handle navigation to previous/next question
  const navigateToPrevQuestion = () => {
    if (currentQuestion > 1) {
      const newQuestion = currentQuestion - 1;
      handleQuestionClick(newQuestion);
    }
  };

  const navigateToNextQuestion = () => {
    if (currentQuestion < 40) {
      const newQuestion = currentQuestion + 1;
      handleQuestionClick(newQuestion);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "white",
        borderTop: "1px solid #e0e0e0",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Main navigation bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1,
        }}
      >
        {/* Left navigation arrow */}
        <NavArrowButton onClick={navigateToPrevQuestion}>←</NavArrowButton>

        {/* Center content - parts and questions */}
        <Box
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1, mx: 2 }}
        >
          {/* Part selection buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px solid #eee",
            }}
          >
            {Array.from({ length: totalSections }, (_, i) => (
              <PartButton
                key={i}
                active={currentSection === i}
                onClick={() => handlePartClick(i)}
              >
                Part {i + 1}
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "0.75rem",
                    color: "#666",
                  }}
                >
                  {getCompletedCount(i)} of{" "}
                  {partQuestions[i].end - partQuestions[i].start + 1}
                </span>
              </PartButton>
            ))}
          </Box>

          {/* Question number buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 1,
            }}
          >
            {renderQuestionButtons()}
          </Box>
        </Box>

        {/* Right navigation arrow */}
        <NavArrowButton onClick={navigateToNextQuestion}>→</NavArrowButton>
      </Box>
    </Box>
  );
};

export default TestBottomNavigation;
