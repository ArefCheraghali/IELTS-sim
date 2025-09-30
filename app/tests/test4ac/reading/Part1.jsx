"use client";
import React, { useRef, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import FoliesBarText from "./text/FoliesBarText";

const paragraphMatchingQuestions = [
  { qNum: 1, text: "a description of how Manet created the painting" },
  {
    qNum: 2,
    text: "aspects of the painting that scholars are most interested in",
  },
  {
    qNum: 3,
    text: "the writer's view of the idea that Manet wants to communicate",
  },
  { qNum: 4, text: "examples to show why the bar scene is unrealistic" },
  { qNum: 5, text: "a statement about the popularity of the painting" },
];

const shortAnswerQuestions = [
  {
    qNum: 6,
    text: "Who was the first owner of A Bar at the Folies?",
    answerIndex: 5,
  },
  { qNum: 7, text: "What is the barmaid wearing?", answerIndex: 6 },
  {
    qNum: 8,
    text: "Which room is seen at the back of the painting?",
    answerIndex: 7,
  },
  { qNum: 9, text: "Who is performing for the audience?", answerIndex: 8 },
  {
    qNum: 10,
    text: "Where did most of the work on the painting take place?",
    answerIndex: 9,
  },
];

const sentenceCompletionOptions = [
  {
    value: "A",
    text: "wanted to find out if the painting's perspective was realistic",
  },
  {
    value: "B",
    text: "felt they had to work very hard at boring and difficult jobs",
  },
  {
    value: "C",
    text: "wanted to understand the lives of ordinary people at the time",
  },
  { value: "D", text: "felt like they had to become different people" },
  { value: "E", text: "wanted to manipulate our sense of reality" },
  { value: "F", text: "wanted to focus on the detail in the painting" },
];

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(
    Array(13)
      .fill(null)
      .map(() => React.createRef())
  );
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (currentQuestion >= 1 && currentQuestion <= 13) {
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
        You should spend about 20 minutes on <b>Questions 1-13</b>.
      </Typography>

      <Typography
        variant="h6"
        component="h3"
        sx={{ mb: 1, fontSize: "1rem", fontWeight: "bold" }}
      >
        Questions 1-5
      </Typography>
      <Typography>Reading Passage 1 has six paragraphs, A-F.</Typography>
      <Typography sx={{ mb: 2 }}>
        Which paragraph contains the following information?
      </Typography>

      {paragraphMatchingQuestions.map((q, index) => (
        <Box
          key={q.qNum}
          ref={questionRefs.current[index]}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1.5,
          }}
        >
          <Typography sx={{ mr: 2 }}>
            <b>{q.qNum}</b>
          </Typography>
          <Typography variant="body2" sx={{ flexGrow: 1, fontSize: "16px" }}>
            {q.text}
          </Typography>
          <FormControl size="small" sx={{ minWidth: "5em" }}>
            <InputLabel>{q.qNum}</InputLabel>
            <Select
              label={`${q.qNum}`}
              value={answers[q.qNum - 1] || ""}
              onChange={(e) => handleInputChange(q.qNum - 1, e.target.value)}
            >
              {["A", "B", "C", "D", "E", "F"].map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      ))}

      <Typography
        variant="h6"
        component="h3"
        sx={{ mb: 1, mt: 3, fontSize: "1rem", fontWeight: "bold" }}
      >
        Questions 6-10
      </Typography>
      <Typography>Answer the questions below.</Typography>
      <Typography>
        Choose <b>NO MORE THAN THREE WORDS</b> from the passage for each answer.
      </Typography>

      {shortAnswerQuestions.map((q) => (
        <Box
          key={q.qNum}
          ref={questionRefs.current[q.answerIndex]}
          sx={{ my: 2 }}
        >
          <Typography>
            <b>{q.qNum}</b> - {q.text}
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ mt: 1, width: "100%" }}
            value={answers[q.answerIndex] || ""}
            onChange={(e) => handleInputChange(q.answerIndex, e.target.value)}
          />
        </Box>
      ))}

      <Typography
        variant="h6"
        component="h3"
        sx={{ mb: 1, mt: 3, fontSize: "1rem", fontWeight: "bold" }}
      >
        Questions 11-13
      </Typography>
      <Typography>
        Complete each sentence with the correct ending, A-F, below.
      </Typography>

      <List sx={{ mt: 2 }}>
        <ListItem ref={questionRefs.current[10]}>
          <Typography>
            <b>11</b> Manet misrepresents the images in the mirror because he
          </Typography>
          <FormControl size="small" sx={{ minWidth: "120px", ml: 1 }}>
            <InputLabel>11</InputLabel>
            <Select
              value={answers[10] || ""}
              onChange={(e) => handleInputChange(10, e.target.value)}
              label="11"
            >
              {sentenceCompletionOptions.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        <ListItem ref={questionRefs.current[11]}>
          <Typography>
            <b>12</b> Manet felt modern workers were alienated because they
          </Typography>
          <FormControl size="small" sx={{ minWidth: "120px", ml: 1 }}>
            <InputLabel>12</InputLabel>
            <Select
              value={answers[11] || ""}
              onChange={(e) => handleInputChange(11, e.target.value)}
              label="12"
            >
              {sentenceCompletionOptions.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        <ListItem ref={questionRefs.current[12]}>
          <Typography>
            <b>13</b> Academics have re-constructed the painting in real life
            because they
          </Typography>
          <FormControl size="small" sx={{ minWidth: "120px", ml: 1 }}>
            <InputLabel>13</InputLabel>
            <Select
              value={answers[12] || ""}
              onChange={(e) => handleInputChange(12, e.target.value)}
              label="13"
            >
              {sentenceCompletionOptions.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
      </List>

      <Box
        sx={{
          p: 2,
          border: "1px solid #ccc",
          borderRadius: 1,
          bgcolor: "#f5f5f5",
        }}
      >
        {sentenceCompletionOptions.map((opt) => (
          <Typography key={opt.value}>
            <b>{opt.value}</b> {opt.text}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}
      ></Box>
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<FoliesBarText />}
      rightContent={rightContent}
    />
  );
};
export default Part1;
