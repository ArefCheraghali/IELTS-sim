"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

const listeningAudio = "/audio/listening.mp3";

const questions = [
  {
    section: "SECTION 1 Questions 1-10",
    type: "fill-in-the-blank",
    questions: [
      "Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.",
      "Theatre Royal Plymouth",
      "Booking Form",
      "Date:",
      "Time:",
      "Tickets:",
      "Seats in:",
      "Seat row/number(s):",
      "Method of delivery:",
      "Total payment:",
      "Card details:",
      "Type:",
      "Number:",
      "Name:",
      "Address: Street,",
      "Additional requests: put on the mailing list",
    ],
  },
  {
    section: "SECTION 2 Questions 11-20",
    type: "dropdown",
    questions: [
      "Label the plan of the rock festival site below. Choose SEVEN answers from the box and write the correct letter, A-I, next to questions 11-17.",
      "To show you are an official visitor, you have to wear the ________ provided.",
      "Cars blocking paths could prevent access by ________ in an emergency.",
      "To reclaim items from storage, you must SHOW your ________.",
    ],
    options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  },
  {
    section: "SECTION 3 Questions 21-30",
    type: "multiple-choice",
    questions: [
      "Which THREE factors does Marco's tutor advise him to consider when selecting a course?",
      "Why does Marco’s tutor advise him to avoid the Team Management course?",
      "Why does Marco want to do a dissertation?",
      "What does Marco's tutor think about the dissertation outline?",
    ],
    options: [
      [
        "A. Possibility of specialisation",
        "B. Relevance to future career",
        "C. Personal interest",
        "D. Organisation of course",
        "E. Assessment methods",
        "F. Range of topics",
        "G. Reputation of lecturer",
      ],
      [
        "A. It will repeat work that Marco has already done.",
        "B. It is intended for students at a lower level than Marco.",
        "C. It may take too much time to do well.",
      ],
      [
        "A. He thinks it will help his future career.",
        "B. He would like to do a detailed study.",
        "C. He has already done some work for it.",
      ],
      [
        "A. The topic is too narrow to be useful.",
        "B. The available data may be insufficient.",
        "C. The approach is too simplistic.",
      ],
    ],
  },
];

export default function Test() {
  const [isReady, setIsReady] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const { handleSubmit, control } = useForm();

  useEffect(() => {
    let audioTimeout;
    if (isReady) {
      const audio = new Audio(listeningAudio);
      audio.play();
      audioTimeout = setTimeout(() => {
        setShowQuestions(true);
      }, 5000); // Show questions after 5 seconds
    }
    return () => clearTimeout(audioTimeout);
  }, [isReady]);

  const onSubmit = (data) => {
    console.log("User Answers:", data);
    // Save answers for assessment
  };

  const handleNavigation = (direction) => {
    if (direction === "next" && currentSection < questions.length - 1) {
      setCurrentSection(currentSection + 1);
    } else if (direction === "prev" && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Listening Test
      </Typography>
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
          Audio Playing...
        </Typography>
      )}
      {showQuestions && (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 4 }}>
          <Typography variant="h6">
            {questions[currentSection].section}
          </Typography>
          {questions[currentSection].questions.map((question, qIndex) => (
            <Grid container spacing={2} key={qIndex} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">{question}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                {questions[currentSection].type === "fill-in-the-blank" && (
                  <Controller
                    name={`section${currentSection + 1}_question${qIndex + 1}`}
                    control={control}
                    render={({ field }) => (
                      <TextField {...field} variant="outlined" fullWidth />
                    )}
                  />
                )}
                {questions[currentSection].type === "dropdown" && (
                  <Controller
                    name={`section${currentSection + 1}_question${qIndex + 1}`}
                    control={control}
                    render={({ field }) => (
                      <TextField {...field} select variant="outlined" fullWidth>
                        {questions[currentSection].options.map(
                          (option, oIndex) => (
                            <MenuItem key={oIndex} value={option}>
                              {option}
                            </MenuItem>
                          )
                        )}
                      </TextField>
                    )}
                  />
                )}
                {questions[currentSection].type === "multiple-choice" && (
                  <Controller
                    name={`section${currentSection + 1}_question${qIndex + 1}`}
                    control={control}
                    render={({ field }) => (
                      <FormControl component="fieldset">
                        <FormLabel component="legend">{question}</FormLabel>
                        <RadioGroup {...field}>
                          {questions[currentSection].options[qIndex].map(
                            (option, oIndex) => (
                              <FormControlLabel
                                key={oIndex}
                                value={option}
                                control={<Radio />}
                                label={option}
                              />
                            )
                          )}
                        </RadioGroup>
                      </FormControl>
                    )}
                  />
                )}
              </Grid>
            </Grid>
          ))}
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
              disabled={currentSection === questions.length - 1}
            >
              Next
            </Button>
          </Box>
          {currentSection === questions.length - 1 && (
            <Button
              type="submit"
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
