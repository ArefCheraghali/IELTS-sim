"use client";
import React, { useEffect, useRef } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import M32Text from "./text/M32Text";

// Define question data for easier mapping
const trueFalseQuestionsData = [
  {
    number: 1,
    text: "Stage 3 of the development was made public as soon as it was approved.",
  },
  {
    number: 2,
    text: "The developers responded to public complaints about Zone 1.",
  },
  {
    number: 3,
    text: "The meeting will be led by a representative from the Parents Association.",
  },
  { number: 4, text: "There is a plan to safely relocate animals in Zone 2." },
  {
    number: 5,
    text: "Packers Road currently has more traffic problems than Bradford Street.",
  },
  {
    number: 6,
    text: "The developers produced a document about the effects of the development on nature in the area.",
  },
  {
    number: 7,
    text: "Children will be affected by the construction activities.",
  },
];

const matchingEventsQuestionsData = [
  { number: 8, text: "You can see a presentation about preparing food." },
  { number: 9, text: "You can watch a group of young people dancing." },
  { number: 10, text: "Children can draw with the help of an expert." },
  { number: 11, text: "You can listen to local singers." },
  { number: 12, text: "There are prizes for children." },
  { number: 13, text: "There are activities for pets." },
  { number: 14, text: "There is a place to take a rest." },
];

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  const possibleAnswersTFNG = ["TRUE", "FALSE", "NOT GIVEN"];
  const possibleAnswersMatching = ["A", "B", "C", "D", "E", "F", "G"];

  const questionRefs = React.useRef(Array(14).fill(null));
  const prevCurrentQuestionRef = useRef(); // To store the previous currentQuestion

  useEffect(() => {
    const isQuestionInThisPart = currentQuestion >= 1 && currentQuestion <= 14;

    if (
      isQuestionInThisPart &&
      prevCurrentQuestionRef.current !== undefined &&
      prevCurrentQuestionRef.current !== currentQuestion
    ) {
      const index = currentQuestion - 1; // 0-indexed ref array
      if (questionRefs.current[index]) {
        questionRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
    prevCurrentQuestionRef.current = currentQuestion;
  }, [currentQuestion]);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 120px - 26px )",
      }}
    >
      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 2,
          borderRight: "1px solid #ccc",
        }}
      >
        <M32Text />
      </Box>
      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 2,
        }}
      >
        <Typography sx={{ fontSize: "1.1em", mb: 1, fontWeight: "bold" }}>
          READING PASSAGE 1
        </Typography>
        <Typography sx={{ mb: 2 }}>
          You should spend about 20 minutes on <b>Questions 1-14</b>, which are
          based on Reading Passage 1.
        </Typography>

        {/* Questions 1 - 7: TRUE/FALSE/NOT GIVEN */}
        <Typography
          variant="h6"
          component="h3"
          sx={{ mb: 1, fontSize: "1rem", fontWeight: "bold" }}
        >
          Questions 1 - 7
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Do the following statements agree with the information given in
          Reading Passage 1?
        </Typography>
        <Typography sx={{ mb: 1 }}>In boxes 1-7 below, select:</Typography>
        <List
          dense
          sx={{ pl: 2, mb: 2, listStyleType: "none", paddingLeft: 0 }}
        >
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "row",
              py: 0.2,
              alignItems: "baseline",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "bold",
                minWidth: "90px",
                textAlign: "left",
                mr: 3, // Added margin for spacing
              }}
            >
              TRUE
            </Typography>
            <Typography component="span" sx={{ fontSize: "0.9rem" }}>
              if the statement agrees with the information
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "row",
              py: 0.2,
              alignItems: "baseline",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "bold",
                minWidth: "90px",
                textAlign: "left",
                mr: 3, // Added margin for spacing
              }}
            >
              FALSE
            </Typography>
            <Typography component="span" sx={{ fontSize: "0.9rem" }}>
              if the statement contradicts the information
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "row",
              py: 0.2,
              alignItems: "baseline",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "bold",
                minWidth: "90px",
                textAlign: "left",
                mr: 3, // Added margin for spacing
              }}
            >
              NOT GIVEN
            </Typography>
            <Typography component="span" sx={{ fontSize: "0.9rem" }}>
              if there is no information on this
            </Typography>
          </ListItem>
        </List>

        {trueFalseQuestionsData.map((q) => (
          <Box
            key={q.number}
            ref={(el) => (questionRefs.current[q.number - 1] = el)}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1.5,
              width: "100%",
            }}
          >
            <FormControl
              sx={{ mr: 2, minWidth: { xs: "100px", sm: "160px" } }}
              size="small"
            >
              <InputLabel id={`q${q.number}-label`}>{q.number}</InputLabel>
              <Select
                labelId={`q${q.number}-label`}
                label={`${q.number}`}
                value={answers[q.number - 1] || ""}
                onChange={(e) =>
                  handleInputChange(q.number - 1, e.target.value)
                }
              >
                {possibleAnswersTFNG.map((answerOption) => (
                  <MenuItem key={answerOption} value={answerOption}>
                    {answerOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography
              variant="body2"
              sx={{ flexGrow: 1, textAlign: "left", fontSize: "1em" }}
            >
              {q.text}
            </Typography>
          </Box>
        ))}

        {/* Questions 8 - 14: Matching Events */}
        <Typography
          variant="h6"
          component="h3"
          sx={{ mt: 3, mb: 1, fontSize: "1rem", fontWeight: "bold" }}
        >
          Questions 8 - 14
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Look at the seven descriptions of events <b>A-G</b> (in the reading
          passage).
        </Typography>
        <Typography sx={{ mb: 1 }}>
          For which events are the following statements true? Pick the correct
          letter in boxes 8-14.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          <b>NB</b> You may use any letter more than once.
        </Typography>

        {matchingEventsQuestionsData.map((q) => (
          <Box
            key={q.number}
            ref={(el) => (questionRefs.current[q.number - 1] = el)}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1.5,
              width: "100%",
            }}
          >
            <FormControl
              sx={{ mr: 2, minWidth: { xs: "80px", sm: "100px" } }}
              size="small"
            >
              <InputLabel id={`q${q.number}-label`}>{q.number}</InputLabel>
              <Select
                labelId={`q${q.number}-label`}
                label={`${q.number}`}
                value={answers[q.number - 1] || ""}
                onChange={(e) =>
                  handleInputChange(q.number - 1, e.target.value)
                }
              >
                {possibleAnswersMatching.map((answerOption) => (
                  <MenuItem key={answerOption} value={answerOption}>
                    {answerOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography
              variant="body2"
              sx={{ flexGrow: 1, textAlign: "left", fontSize: "1em" }}
            >
              {q.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Part1;
