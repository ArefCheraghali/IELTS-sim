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
import TwoColumnLayout from "@/components/TwoColumnLayout";
import M32Text from "./text/M32Text";

// Data array for questions
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
  const questionRefs = useRef(
    Array(14)
      .fill(null)
      .map(() => React.createRef())
  );
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (currentQuestion >= 1 && currentQuestion <= 14) {
      const index = currentQuestion - 1;
      const element = questionRefs.current[index]?.current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          const input = element.querySelector('input, [role="button"]');
          if (input) input.focus();
        }, 300);
      }
    }
  }, [currentQuestion]);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const rightContent = (
    <Box>
      <Typography sx={{ fontSize: "1.1em", mb: 1, fontWeight: "bold" }}>
        READING PASSAGE 1
      </Typography>
      <Typography sx={{ mb: 2 }}>
        You should spend about 20 minutes on <b>Questions 1-14</b>.
      </Typography>

      <Typography
        variant="h6"
        component="h3"
        sx={{ mb: 1, fontSize: "1rem", fontWeight: "bold" }}
      >
        Questions 1 - 7
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Do the following statements agree with the information in Reading
        Passage 1?
      </Typography>
      <List dense sx={{ pl: 2, mb: 2 }}>
        <ListItem>
          <b>TRUE</b> if the statement agrees with the information
        </ListItem>
        <ListItem>
          <b>FALSE</b> if the statement contradicts the information
        </ListItem>
        <ListItem>
          <b>NOT GIVEN</b> if there is no information on this
        </ListItem>
      </List>

      {trueFalseQuestionsData.map((q, index) => (
        <Box
          key={q.number}
          ref={questionRefs.current[index]}
          sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
        >
          <FormControl sx={{ mr: 2, minWidth: "140px" }} size="small">
            <InputLabel>{q.number}</InputLabel>
            <Select
              value={answers[q.number - 1] || ""}
              onChange={(e) => handleInputChange(q.number - 1, e.target.value)}
              label={`${q.number}`}
            >
              <MenuItem value="TRUE">TRUE</MenuItem>
              <MenuItem value="FALSE">FALSE</MenuItem>
              <MenuItem value="NOT GIVEN">NOT GIVEN</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="body2">{q.text}</Typography>
        </Box>
      ))}

      <Typography
        variant="h6"
        component="h3"
        sx={{ mt: 3, mb: 1, fontSize: "1rem", fontWeight: "bold" }}
      >
        Questions 8 - 14
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Look at the seven descriptions of events <b>A-G</b>.
      </Typography>
      <Typography sx={{ mb: 2 }}>
        For which events are the following statements true? Pick the correct
        letter in boxes 8-14.
      </Typography>

      {matchingEventsQuestionsData.map((q, index) => (
        <Box
          key={q.number}
          ref={questionRefs.current[index + 7]}
          sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
        >
          <FormControl sx={{ mr: 2, minWidth: "100px" }} size="small">
            <InputLabel>{q.number}</InputLabel>
            <Select
              value={answers[q.number - 1] || ""}
              onChange={(e) => handleInputChange(q.number - 1, e.target.value)}
              label={`${q.number}`}
            >
              {["A", "B", "C", "D", "E", "F", "G"].map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="body2">{q.text}</Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <TwoColumnLayout leftContent={<M32Text />} rightContent={rightContent} />
  );
};
export default Part1;
