import React, { useRef, useEffect } from "react";
import {
  Box,
  Divider,
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
import KeyboardText from "./text/KeyboardText";

const Part2 = ({ answers, setAnswers, currentQuestion }) => {
  const possibleAnswers = ["A", "B", "C", "D", "E"];
  const possibleAnswers2 = [
    "i",
    "ii",
    "iii",
    "iv",
    "v",
    "vi",
    "vii",
    "viii",
    "ix",
    "x",
  ];
  const questionRefs = useRef(Array(14).fill(null));

  useEffect(() => {
    if (currentQuestion >= 15 && currentQuestion <= 28) {
      const index = currentQuestion - 15; // Index for this part's questions
      const element = questionRefs.current[index];
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

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const rightContent = (
    <Box>
      <Typography sx={{ ml: 4, fontSize: "1.1em", mb: 1 }}>
        <b>Part 2</b>
      </Typography>
      <Typography sx={{ mb: 1 }}>
        You should spend about 20 minutes on <b>Questions 15-28</b>.
      </Typography>

      <Typography sx={{ mt: 2, mb: 1 }}>
        <b>Questions 15 - 21</b>
      </Typography>
      <Typography sx={{ mb: 1 }}>
        The text (BENEFICIAL WORK PRACTICES...) has seven sections, <b>A-G</b>.
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Choose the correct heading for each section from the list below.
      </Typography>

      {Array.from({ length: 7 }).map((_, index) => (
        <FormControl
          key={index}
          ref={(el) => (questionRefs.current[index] = el)}
          sx={{ m: 1 }}
          size="small"
        >
          <InputLabel>{`${15 + index}`}</InputLabel>
          <Select
            sx={{ width: "10em" }}
            value={answers[14 + index] || ""}
            onChange={(e) => handleInputChange(14 + index, e.target.value)}
            label={`${15 + index}`}
          >
            {possibleAnswers2.map((answer) => (
              <MenuItem key={answer} value={answer}>
                {answer}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}

      <Box sx={{ border: "1px solid #ccc", p: 2, my: 2, borderRadius: 1 }}>
        <Typography variant="h6" gutterBottom>
          List of Headings
        </Typography>
        <List dense>
          {[
            "How can reflection problems be avoided?",
            "How long should I work without a break?",
            "What if I experience any problems?",
            "When is the best time to do filing chores?",
            "What makes a good seat?",
            "What are the common health problems?",
            "What is the best kind of lighting to have?",
            "What are the roles of management and workers?",
            "Why does a VDU create eye fatigue?",
            "Where should I place the documents?",
          ].map((h, i) => (
            <ListItem key={i} sx={{ py: 0.2 }}>
              <Typography>
                <b>{possibleAnswers2[i]}</b> &nbsp; {h}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography sx={{ mb: 1 }}>
        <b>Questions 22 - 28</b>
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Read the second text (Workplace dismissals) and answer.
      </Typography>

      <Typography sx={{ mb: 1 }}>
        <b>Questions 22 and 23</b>
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Choose <b>NO MORE THAN THREE WORDS</b> from the text.
      </Typography>

      <Box ref={(el) => (questionRefs.current[7] = el)} sx={{ my: 1.5 }}>
        <Typography sx={{ mt: 3 }}>
          22. If an employee receives a{" "}
          <TextField
            variant="standard"
            label="22"
            sx={{ width: "12em", mt: -2.5 }}
            value={answers[21] || ""}
            onChange={(e) => handleInputChange(21, e.target.value)}
          />
          , he will lose his job if his work does not get better.
        </Typography>
      </Box>
      <Box ref={(el) => (questionRefs.current[8] = el)} sx={{ my: 1.5 }}>
        <Typography>
          23. If an employee does not accept the reasons for his dismissal, a{" "}
          <TextField
            variant="standard"
            label="23"
            sx={{ width: "12em", mt: -2.5 }}
            value={answers[22] || ""}
            onChange={(e) => handleInputChange(22, e.target.value)}
          />{" "}
          can be arranged.
        </Typography>
      </Box>

      <Typography sx={{ mt: 2, mb: 1 }}>
        <b>Questions 24 - 28</b>
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Match each description with the correct term <b>A-E</b>.
      </Typography>

      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          my: 2,
          borderRadius: 1,
          width: "fit-content",
        }}
      >
        {[
          "Fair dismissal",
          "Summary dismissal",
          "Unfair dismissal",
          "Wrongful dismissal",
          "Constructive dismissal",
        ].map((term, i) => (
          <Typography key={i}>
            <b>{String.fromCharCode(65 + i)}</b> &nbsp; {term}
          </Typography>
        ))}
      </Box>

      {[
        "An employee is asked to leave work straight away because he has done something really bad.",
        "An employee is pressured to leave his job unless he accepts conditions that are very different from those agreed to in the beginning.",
        "An employer gets rid of an employee without keeping to conditions in the contract.",
        "The reason for an employee's dismissal is not considered good enough.",
        "The reasons for an employee's dismissal are acceptable by law and the terms of the employment contract.",
      ].map((desc, index) => (
        <Box
          key={index}
          ref={(el) => (questionRefs.current[9 + index] = el)}
          sx={{ display: "flex", alignItems: "center", my: 1.5 }}
        >
          <FormControl sx={{ mr: 2, minWidth: "120px" }} size="small">
            <InputLabel>{24 + index}</InputLabel>
            <Select
              value={answers[23 + index] || ""}
              onChange={(e) => handleInputChange(23 + index, e.target.value)}
              label={`${24 + index}`}
            >
              {possibleAnswers.map((answer) => (
                <MenuItem key={answer} value={answer}>
                  {answer}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="body2">{desc}</Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<KeyboardText />}
      rightContent={rightContent}
    />
  );
};

export default Part2;
