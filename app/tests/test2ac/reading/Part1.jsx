"use client";
import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import CollectText from "./text/CollectText";

const trueFalseQuestionsData = [
  {
    number: 1,
    text: "Dr Maria Richter believes that people become interested in collecting in early childhood.",
  },
  {
    number: 2,
    text: "A form of collecting may have helped some ancient humans to survive.",
  },
  {
    number: 3,
    text: "Leonard Woolley expected to find the remains of a private collection at Ur.",
  },
  {
    number: 4,
    text: "Woolley found writing that identified some of the objects he discovered.",
  },
  {
    number: 5,
    text: "Princess Ennigaldi established her collection to show off her wealth.",
  },
  {
    number: 6,
    text: "Displaying artworks was the main purpose of Cabinets of Curiosities.",
  },
];

const noteCompletionQuestions = [
  {
    qNum: 7,
    textBefore: "The Medici family made their money from",
    textAfter: ".",
    answerIndex: 6,
  },
  {
    qNum: 8,
    textBefore:
      "At the Palazzo Medici there was a hidden ‘studio’ which had no",
    textAfter: ".",
    answerIndex: 7,
  },
  {
    qNum: 9,
    textBefore: "Ole Worm made an important",
    textAfter: "of a bird.",
    answerIndex: 8,
  },
  {
    qNum: 10,
    textBefore: "Lady Charlotte Guest created a collection of",
    textAfter: "which she left to a museum.",
    answerIndex: 9,
  },
  {
    qNum: 11,
    textBefore: "Joseph Mayer paid for",
    textAfter: "that are still given to the public today.",
    answerIndex: 10,
  },
  {
    qNum: 12,
    textBefore: "Beatrix Potter did not give away her collection of",
    textAfter: ".",
    answerIndex: 11,
  },
  {
    qNum: 13,
    textBefore:
      "Franklin D. Roosevelt believed collecting helped him deal with the",
    textAfter: "of his job.",
    answerIndex: 12,
  },
];

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(
    Array(13)
      .fill(null)
      .map(() => React.createRef())
  );

  useEffect(() => {
    if (currentQuestion >= 1 && currentQuestion <= 13) {
      const index = currentQuestion - 1;
      const element = questionRefs.current[index]?.current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          const input = element.querySelector('input, [role="button"]');
          if (input) {
            input.focus();
            if (input.tagName === "INPUT") input.select();
          }
        }, 200);
      }
    }
  }, [currentQuestion]);

  const possibleAnswers = ["TRUE", "FALSE", "NOT GIVEN"];

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
        You should spend about 20 minutes on <b>Questions 1-13</b>.
      </Typography>

      <Typography
        variant="h6"
        component="h3"
        sx={{ mb: 1, fontSize: "1rem", fontWeight: "bold" }}
      >
        Questions 1 - 6
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Do the following statements agree with the information in the passage?
      </Typography>
      <List dense sx={{ pl: 2, mb: 2 }}>
        <ListItem>
          <Typography>
            <b>TRUE </b> if the statement agrees with the information
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>FALSE </b> if the statement contradicts the information
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>NOT GIVEN </b> if there is no information on this
          </Typography>
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
              {possibleAnswers.map((answer) => (
                <MenuItem key={answer} value={answer}>
                  {answer}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="body2">{q.text}</Typography>
        </Box>
      ))}

      <Typography
        variant="h6"
        component="h3"
        sx={{ mb: 1, mt: 3, fontSize: "1rem", fontWeight: "bold" }}
      >
        Questions 7 - 13
      </Typography>
      <Typography>Complete the notes below.</Typography>
      <Typography>
        Write <b>ONE WORD ONLY</b> from the passage for each answer.
      </Typography>
      <Box sx={{ mt: 2, p: 2, border: "1px solid #ccc", borderRadius: 1 }}>
        <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
          Some significant private collections
        </Typography>
        <List sx={{ listStyleType: "circle", pl: 2 }}>
          {noteCompletionQuestions.map((q, index) => (
            <ListItem
              key={q.qNum}
              ref={questionRefs.current[q.answerIndex]}
              sx={{ display: "list-item", py: 1 }}
            >
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                {q.textBefore}
                <TextField
                  sx={{ mx: 0.5, width: "8em" }}
                  label={q.qNum}
                  variant="standard"
                  size="small"
                  autoComplete="off"
                  value={answers[q.answerIndex] || ""}
                  onChange={(e) =>
                    handleInputChange(q.answerIndex, e.target.value)
                  }
                />
                {q.textAfter}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<CollectText />}
      rightContent={rightContent}
    />
  );
};

export default Part1;
