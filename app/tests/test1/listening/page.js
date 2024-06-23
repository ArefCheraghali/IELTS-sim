"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { Box, Button, Typography } from "@mui/material";

const listeningAudio = "/audio/listening.mp3";

export default function Test() {
  const [isReady, setIsReady] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState(Array(40).fill(""));

  useEffect(() => {
    let audioTimeout;
    if (isReady) {
      const audio = new Audio(listeningAudio);
      audio.play();
      audioTimeout = setTimeout(() => {
        setShowQuestions(true);
      }, 3000);
    }
    return () => clearTimeout(audioTimeout);
  }, [isReady]);

  const onSubmit = () => {
    console.log("User Answers:", answers);
    // Save answers for assessment
  };

  const handleNavigation = (direction) => {
    if (direction === "next" && currentSection < 4) {
      setCurrentSection(currentSection + 1);
    } else if (direction === "prev" && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      {!showQuestions ? (
        <Typography variant="h4" gutterBottom>
          Listening Test
        </Typography>
      ) : null}
      {!isReady && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsReady(true)}
        >
          I'm Ready
        </Button>
      )}
      {isReady && !showQuestions && (
        <Typography variant="h6" sx={{ mt: 4 }}>
          Audio Started...
        </Typography>
      )}
      {showQuestions && (
        <Box sx={{ mt: 4 }}>
          {currentSection === 0 && (
            <Section1 answers={answers} setAnswers={setAnswers} />
          )}
          {currentSection === 1 && (
            <Section2 answers={answers} setAnswers={setAnswers} />
          )}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleNavigation("prev")}
              disabled={currentSection === 0}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleNavigation("next")}
              disabled={currentSection === 4}
            >
              Next
            </Button>
          </Box>
          {currentSection === 4 && (
            <Button
              onClick={onSubmit}
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
}
