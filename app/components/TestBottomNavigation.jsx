"use client";
import React from "react";
import { Box, Button, Checkbox, FormControlLabel } from "@mui/material"; // Checkbox, FormControlLabel seem unused here
import { styled } from "@mui/material/styles";

// Custom styled button for the question numbers
const QuestionButton = styled(Button)(({ theme, active, completed }) => ({
  minWidth: "30px",
  height: "20px",
  padding: "0px",
  margin: "0 2px",
  borderRadius: "0",
  fontSize: "0.875rem",
  color: active ? "white" : "black", // Text color for active button remains white
  backgroundColor: active
    ? "#000000" // 1. Active button background changed to black
    : completed
    ? "#ADD8E6" // 2. Completed button background changed to light blue (e.g., LightBlue hex code)
    : "transparent",
  border: "1px solid #ccc",
  "&:hover": {
    backgroundColor: active
      ? "#333333" // Darker grey for hover on active black button
      : completed
      ? "#9BC4D4" // Slightly darker light blue on hover for completed
      : "#f0f0f0", // Default hover for non-active, non-completed
  },
}));

// Custom styled button for the part navigation
const PartButton = styled(Button)(({ theme, active }) => ({
  padding: "4px 16px",
  borderRadius: "0",
  color: active ? "black" : "#666",
  fontWeight: active ? "bold" : "normal",
  borderBottom: active ? "3px solid #007bff" : "none", // Active part underline is still blue
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
  totalSections = 4, // Default can be adjusted based on typical test structure
  partQuestions = {
    // Example: IELTS AC Reading has 3 parts, 40 Qs
    0: { start: 1, end: 13 }, // Part 1 example
    1: { start: 14, end: 26 }, // Part 2 example
    2: { start: 27, end: 40 }, // Part 3 example
    // Ensure totalSections matches the number of parts defined here if using default
  },
}) => {
  // Handle part selection
  const handlePartClick = (partIndex) => {
    setCurrentSection(partIndex);
    // Set the current question to the first question of the selected part
    if (partQuestions[partIndex]) {
      setCurrentQuestion(partQuestions[partIndex].start);
    }
  };

  // Handle question selection
  const handleQuestionClick = (questionNumber) => {
    setCurrentQuestion(questionNumber);
    // Also set the correct section based on the question number
    for (let i = 0; i < totalSections; i++) {
      if (
        partQuestions[i] && // Check if partQuestions[i] exists
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
    if (!partQuestions[currentSection]) return null; // Guard clause if currentSection is invalid

    const { start, end } = partQuestions[currentSection];
    const buttons = [];

    for (let i = start; i <= end; i++) {
      // Check if this question has been answered (ensure answers is an array)
      const isAnswered =
        Array.isArray(answers) &&
        answers[i - 1] !== "" &&
        answers[i - 1] !== undefined &&
        answers[i - 1] !== null;

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
    if (!partQuestions[partIndex]) return 0; // Guard clause

    const { start, end } = partQuestions[partIndex];
    let completed = 0;

    if (!Array.isArray(answers)) return 0; // Guard if answers is not an array

    for (let i = start; i <= end; i++) {
      if (
        answers[i - 1] !== "" &&
        answers[i - 1] !== undefined &&
        answers[i - 1] !== null
      ) {
        completed++;
      }
    }
    return completed;
  };

  // Determine the total number of questions dynamically
  const getLastQuestionNumber = () => {
    const lastPartIndex = totalSections - 1;
    if (partQuestions[lastPartIndex]) {
      return partQuestions[lastPartIndex].end;
    }
    return 40; // Fallback, adjust as needed
  };
  const totalNumberOfQuestions = getLastQuestionNumber();

  // Handle navigation to previous/next question
  const navigateToPrevQuestion = () => {
    if (currentQuestion > 1) {
      const newQuestion = currentQuestion - 1;
      handleQuestionClick(newQuestion);
    }
  };

  const navigateToNextQuestion = () => {
    // Use the dynamically determined total number of questions
    if (currentQuestion < totalNumberOfQuestions) {
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
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it's above drawers if any
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
          px: { xs: 1, sm: 2 }, // Responsive padding
          py: 1,
        }}
      >
        {/* Left navigation arrow */}
        <NavArrowButton
          onClick={navigateToPrevQuestion}
          disabled={currentQuestion === 1}
        >
          ←
        </NavArrowButton>

        {/* Center content - parts and questions */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            mx: { xs: 1, sm: 2 }, // Responsive margin
            overflow: "hidden", // Prevents center content from pushing arrows out
          }}
        >
          {/* Part selection buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around", // Distributes space evenly
              borderBottom: "1px solid #eee",
              width: "100%", // Ensures it takes full width of its container
              overflowX: "auto", // Allows horizontal scroll if parts don't fit
              WebkitOverflowScrolling: "touch", // Smooth scrolling on touch devices
              "& > button": {
                // Target PartButton for consistent spacing
                flexShrink: 0, // Prevent buttons from shrinking
              },
            }}
          >
            {Array.from({ length: totalSections }, (_, i) => {
              if (!partQuestions[i]) return null; // Skip if part definition is missing
              return (
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
                      whiteSpace: "nowrap", // Prevent count from wrapping
                    }}
                  >
                    {getCompletedCount(i)} of{" "}
                    {partQuestions[i].end - partQuestions[i].start + 1}
                  </span>
                </PartButton>
              );
            })}
          </Box>

          {/* Question number buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 1,
              overflowX: "auto", // Allows horizontal scroll for question buttons
              WebkitOverflowScrolling: "touch",
              maxWidth: "100%", // Ensure it doesn't overflow parent
            }}
          >
            {renderQuestionButtons()}
          </Box>
        </Box>

        {/* Right navigation arrow */}
        <NavArrowButton
          onClick={navigateToNextQuestion}
          disabled={currentQuestion === totalNumberOfQuestions}
        >
          →
        </NavArrowButton>
      </Box>
    </Box>
  );
};

export default TestBottomNavigation;
