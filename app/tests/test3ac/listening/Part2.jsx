import React, { useRef, useEffect } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

const radioQuestionsData = [
  {
    qNum: 11,
    text: "The September Celebration day is held ...",
    options: [
      { val: "A", label: "five times a year to honour the city" },
      { val: "B", label: "on the park's important birthday" },
      { val: "C", label: "to remember the history of the park" },
    ],
  },
  {
    qNum: 12,
    text: "The park was first built in ...",
    options: [
      { val: "A", label: "1955" },
      { val: "B", label: "1979" },
      { val: "C", label: "the 1990s" },
    ],
  },
  {
    qNum: 13,
    text: "The park still uses ...",
    options: [
      { val: "A", label: "a children's play area" },
      { val: "B", label: "a petting zoo" },
      { val: "C", label: "two of the early rides" },
    ],
  },
  {
    qNum: 14,
    text: "The Hurricane roller-coaster is ...",
    options: [
      { val: "A", label: "tall and made of wood" },
      { val: "B", label: "designed for smaller children" },
      { val: "C", label: "very fast and exciting" },
    ],
  },
  {
    qNum: 15,
    text: "The rides with a height limit are coded ...",
    options: [
      { val: "A", label: "yellow" },
      { val: "B", label: "blue" },
      { val: "C", label: "black" },
    ],
  },
];

const noteCompletionQuestions = [
  { qNum: 16, textBefore: "hamburgers, sandwiches, etc. at", textAfter: "" },
  { qNum: 17, textBefore: "On the", textAfter: "" },
  { qNum: 18, textBefore: "Theme:", textAfter: "" },
  { qNum: 19, textBefore: "Ten", textAfter: "centers in the park" },
  { qNum: 20, textBefore: "Ask security team at the", textAfter: "" },
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
          const input = element.querySelector("input");
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
        <b>Questions 11-15</b>
      </Typography>
      <Typography>
        Choose the correct letter, <b>A, B</b> or <b>C</b>.
      </Typography>
      {radioQuestionsData.map((q, index) => (
        <FormControl
          key={q.qNum}
          sx={{ my: 1.5, width: "100%" }}
          ref={questionRefs.current[index]}
        >
          <Typography>
            <b>{q.qNum}</b> {q.text}
          </Typography>
          <RadioGroup
            sx={{ ml: 4 }}
            value={answers[q.qNum - 1] || ""}
            onChange={(e) => handleInputChange(q.qNum - 1, e.target.value)}
          >
            {q.options.map((opt) => (
              <FormControlLabel
                key={opt.val}
                value={opt.val}
                control={<Radio />}
                label={`${opt.val}) ${opt.label}`}
              />
            ))}
          </RadioGroup>
        </FormControl>
      ))}

      <Typography sx={{ mt: 3 }}>
        <b>Questions 16-20</b>
      </Typography>
      <Typography>Complete the notes below.</Typography>
      <Typography>
        Write <b>NO MORE THAN TWO WORDS</b> for each answer.
      </Typography>

      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: 1,
          p: 2,
          mt: 2,
          fontSize: "19px",
        }}
      >
        <List>
          <ListItem>
            <b>Food options:</b> Italian, Chinese, etc. at the Food Court
          </ListItem>
          <ListItem ref={questionRefs.current[5]}>
            {noteCompletionQuestions[0].textBefore}
            <TextField
              variant="outlined"
              label="16"
              sx={{ mx: 1 }}
              value={answers[15] || ""}
              onChange={(e) => handleInputChange(15, e.target.value)}
            />
          </ListItem>
          <ListItem sx={{ mt: 2 }}>
            <b>Special Events:</b>
          </ListItem>
          <ListItem>
            <b>Parade:</b> Starts at noon, run by final year high school
            students
          </ListItem>
          <ListItem ref={questionRefs.current[6]}>
            {noteCompletionQuestions[1].textBefore}
            <TextField
              variant="outlined"
              label="17"
              sx={{ mx: 1 }}
              value={answers[16] || ""}
              onChange={(e) => handleInputChange(16, e.target.value)}
            />
          </ListItem>
          <ListItem sx={{ mt: 2 }}>
            <b>Concert:</b> At the amphitheatre, starts at 7:00
          </ListItem>
          <ListItem ref={questionRefs.current[7]}>
            {noteCompletionQuestions[2].textBefore}
            <TextField
              variant="outlined"
              label="18"
              sx={{ mx: 1 }}
              value={answers[17] || ""}
              onChange={(e) => handleInputChange(17, e.target.value)}
            />
          </ListItem>
          <ListItem sx={{ mt: 2 }}>
            <b>Safety and Security:</b>
          </ListItem>
          <ListItem ref={questionRefs.current[8]}>
            {noteCompletionQuestions[3].textBefore}
            <TextField
              variant="outlined"
              label="19"
              sx={{ mx: 1 }}
              value={answers[18] || ""}
              onChange={(e) => handleInputChange(18, e.target.value)}
            />{" "}
            {noteCompletionQuestions[3].textAfter}
          </ListItem>
          <ListItem>Children ask any staff member for help</ListItem>
          <ListItem ref={questionRefs.current[9]}>
            {noteCompletionQuestions[4].textBefore}
            <TextField
              variant="outlined"
              label="20"
              sx={{ mx: 1 }}
              value={answers[19] || ""}
              onChange={(e) => handleInputChange(19, e.target.value)}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Part2;
