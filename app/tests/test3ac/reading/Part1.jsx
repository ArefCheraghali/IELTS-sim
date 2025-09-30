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
import AmericanDanceText from "./text/AmericanDanceText";

const trueFalseQuestions = [
  {
    qNum: 1,
    text: "Dance historians agree about the development of modern American dance.",
  },
  {
    qNum: 2,
    text: "Dancers in the early 1900s tended to copy the styles of earlier dancers.",
  },
  { qNum: 3, text: "Loie Fuller preferred to dance alone on stage." },
  { qNum: 4, text: "Isadora Duncan wore complicated clothing when dancing." },
  {
    qNum: 5,
    text: "Some dancers criticized Isadora Duncan for her choice of music.",
  },
  {
    qNum: 6,
    text: "Ruth St Denis wished to educate others in her style of dancing.",
  },
];

const shortAnswerQuestions = [
  {
    qNum: 11,
    text: "When Pearl Primus gave up dancing, what did she focus on doing?",
    answerIndex: 10,
  },
  {
    qNum: 12,
    text: "What was an important influence for Mark Morris's The Hard Nut?",
    answerIndex: 11,
  },
  {
    qNum: 13,
    text: "Dancers working with Ohad Naharin practise without using what?",
    answerIndex: 12,
  },
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
          if (input) {
            input.focus();
            if (input.tagName === "INPUT") input.select();
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
        Do the following statements agree with the information given in Reading
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

      {trueFalseQuestions.map((q, index) => (
        <Box
          key={q.qNum}
          ref={questionRefs.current[index]}
          sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
        >
          <FormControl sx={{ mr: 2, minWidth: "140px" }} size="small">
            <InputLabel>{q.qNum}</InputLabel>
            <Select
              value={answers[q.qNum - 1] || ""}
              onChange={(e) => handleInputChange(q.qNum - 1, e.target.value)}
              label={`${q.qNum}`}
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
        sx={{ mb: 1, mt: 3, fontSize: "1rem", fontWeight: "bold" }}
      >
        Questions 7 - 10
      </Typography>
      <Typography>Complete the notes below.</Typography>
      <Typography>
        Write <b>ONE WORD ONLY</b> from the passage for each answer.
      </Typography>
      <Box
        sx={{
          mt: 2,
          p: 2,
          border: "1px solid #ccc",
          borderRadius: 1,
          fontSize: "19px",
        }}
      >
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          Developments in Modern American Dance
        </Typography>
        <List sx={{ listStyleType: "disc", ml: "2em" }}>
          <Typography>
            <b>1920s-1940s</b>
          </Typography>
          <ListItem
            sx={{ display: "list-item", py: 1 }}
            ref={questionRefs.current[6]}
          >
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              breathing and
              <TextField
                sx={{ mx: 1, width: "10em" }}
                label="7"
                variant="standard"
                autoComplete="off"
                value={answers[6] || ""}
                onChange={(e) => handleInputChange(6, e.target.value)}
              />
              .
            </Box>
          </ListItem>
          <ListItem
            sx={{ display: "list-item", py: 1 }}
            ref={questionRefs.current[7]}
          >
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              Doris Humphrey wrote an important
              <TextField
                sx={{ mx: 1, width: "10em" }}
                label="8"
                variant="standard"
                autoComplete="off"
                value={answers[7] || ""}
                onChange={(e) => handleInputChange(7, e.target.value)}
              />
              about her ideas.
            </Box>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Dance became a respectable subject to study at university.
          </ListItem>
          <ListItem
            sx={{ display: "list-item", py: 1 }}
            ref={questionRefs.current[8]}
          >
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              Hanya Holm introduced
              <TextField
                sx={{ mx: 1, width: "10em" }}
                label="9"
                variant="standard"
                autoComplete="off"
                value={answers[8] || ""}
                onChange={(e) => handleInputChange(8, e.target.value)}
              />
              into dance and musicals.
            </Box>
          </ListItem>
          <Typography sx={{ mt: 1 }}>
            <b>1950s-1970s</b>
          </Typography>
          <ListItem sx={{ display: "list-item" }}>
            Eric Hawkins and Merce Cunningham reintroduced some ballet
            techniques.
          </ListItem>
          <ListItem
            sx={{ display: "list-item", py: 1 }}
            ref={questionRefs.current[9]}
          >
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              An influential
              <TextField
                sx={{ mx: 1, width: "10em" }}
                label="10"
                variant="standard"
                autoComplete="off"
                value={answers[9] || ""}
                onChange={(e) => handleInputChange(9, e.target.value)}
              />
              outlined the working life of Paul Taylor.
            </Box>
          </ListItem>
        </List>
      </Box>

      <Typography
        variant="h6"
        component="h3"
        sx={{ mb: 1, mt: 3, fontSize: "1rem", fontWeight: "bold" }}
      >
        Questions 11 - 13
      </Typography>
      <Typography>Answer the questions below.</Typography>
      <Typography>
        Write <b>ONE WORD ONLY</b> from the passage for each answer.
      </Typography>
      {shortAnswerQuestions.map((q) => (
        <Box
          key={q.qNum}
          ref={questionRefs.current[q.answerIndex]}
          sx={{ my: 2, textAlign: "left" }}
        >
          <Typography>
            <b>{q.qNum} - </b>
            {q.text}
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ mt: 1, width: "15em" }}
            label={`${q.qNum}`}
            value={answers[q.answerIndex] || ""}
            onChange={(e) => handleInputChange(q.answerIndex, e.target.value)}
          />
        </Box>
      ))}
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<AmericanDanceText />}
      rightContent={rightContent}
    />
  );
};

export default Part1;
