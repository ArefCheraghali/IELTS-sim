import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";

const sentenceCompletionQuestions = [
  {
    qNum: 11,
    textBefore: "To enjoy the day, make sure you",
    textAfter: "it first.",
    answerIndex: 10,
  },
  {
    qNum: 12,
    textBefore: "Travel",
    textAfter: "within the city centre.",
    answerIndex: 11,
  },
  { qNum: 13, textBefore: "Wear", textAfter: "on the day.", answerIndex: 12 },
  {
    qNum: 14,
    textBefore: "Check the",
    textAfter: "the night before the marathon.",
    answerIndex: 13,
  },
  {
    qNum: 15,
    textBefore: "Let the",
    textAfter: "give drinks to runners.",
    answerIndex: 14,
  },
  {
    qNum: 16,
    textBefore: "Stay on one side of the road to avoid",
    textAfter: ".",
    answerIndex: 15,
  },
  {
    qNum: 17,
    textBefore: "Don't arrange to meet runners near the",
    textAfter: ".",
    answerIndex: 16,
  },
];

const matchingQuestions = [
  { qNum: 18, transport: "taxis" },
  { qNum: 19, transport: "trams" },
  { qNum: 20, transport: "buses" },
];

const Part2 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(
    Array(10)
      .fill(null)
      .map(() => React.createRef())
  );
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (currentQuestion >= 11 && currentQuestion <= 20) {
      const index = currentQuestion - 11;
      const element = questionRefs.current[index]?.current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          const input = element.querySelector('input, [role="button"]');
          if (input) {
            input.focus();
            if (input.type === "text") input.select();
          }
        }, 300);
      }
    }
  }, [currentQuestion]);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <Box sx={{ maxWidth: "60rem", mx: "auto", px: 2, textAlign: "left" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Typography variant="h5">Part 2</Typography>
        <Typography variant="h6">Questions 11-20</Typography>
      </Box>

      <Typography sx={{ mt: 2 }}>
        <b>Questions 11-17</b>
      </Typography>
      <Typography>Complete the sentences below.</Typography>
      <Typography>
        Write <b>NO MORE THAN TWO WORDS</b> for each answer.
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        Marathon – tips for spectators
      </Typography>

      {sentenceCompletionQuestions.map((q, index) => (
        <Box key={q.qNum} ref={questionRefs.current[index]} sx={{ my: 2.5 }}>
          <Typography
            component="div"
            sx={{ display: "flex", alignItems: "baseline" }}
          >
            <b>{q.qNum}</b>. {q.textBefore}
            <TextField
              variant="standard"
              sx={{ mx: 1, width: "12em" }}
              value={answers[q.answerIndex] || ""}
              onChange={(e) => handleInputChange(q.answerIndex, e.target.value)}
            />
            {q.textAfter}
          </Typography>
        </Box>
      ))}

      <Typography sx={{ mt: 3 }}>
        <b>Questions 18-20</b>
      </Typography>
      <Typography>
        What does the speaker say about the following forms of transport?
      </Typography>
      <Typography>
        Write the correct letter, <b>A, B, C, D</b> or <b>E</b>, next to
        questions 18-20.
      </Typography>

      <Paper sx={{ p: 2, my: 2, bgcolor: "#f5f5f5", fontSize: "18px" }}>
        <List dense>
          <ListItem>
            <b>A- </b> will take more passengers than usual
          </ListItem>
          <ListItem>
            <b>B- </b> will suit people who want to see the start of the race
          </ListItem>
          <ListItem>
            <b>C- </b> waiting times will be longer than usual
          </ListItem>
          <ListItem>
            <b>D- </b> will have fewer staff than usual
          </ListItem>
          <ListItem>
            <b>E- </b> some work schedules will change
          </ListItem>
        </List>
      </Paper>

      {matchingQuestions.map((q, index) => (
        <Box
          key={q.qNum}
          ref={questionRefs.current[index + 7]}
          sx={{ display: "flex", alignItems: "center", my: 1.5 }}
        >
          <Typography sx={{ minWidth: "6em" }}>
            <b>{q.qNum}</b> {q.transport}
          </Typography>
          <FormControl size="small" sx={{ minWidth: "80px" }}>
            <Select
              value={answers[q.qNum - 1] || ""}
              onChange={(e) => handleInputChange(q.qNum - 1, e.target.value)}
            >
              {["A", "B", "C", "D", "E"].map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      ))}
    </Box>
  );
};

export default Part2;
