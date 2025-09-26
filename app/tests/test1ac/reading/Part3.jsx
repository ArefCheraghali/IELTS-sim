"use client";
import React, { useRef, useEffect } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import TwoColumnLayout from "@/app/components/TwoColumnLayout";
import WritingText from "./text/WritingText";

// Data for questions to make mapping easier
const radioQuestions = [
  {
    num: 27,
    question:
      "The researchers at the symposium regarded the story of the King of Uruk as ridiculous because",
    options: [
      {
        value: "A",
        label: "writing probably developed independently of speech.",
      },
      { value: "B", label: "clay tablets had not been invented at that time." },
      {
        value: "C",
        label: "the distant ruler would have spoken another language.",
      },
      {
        value: "D",
        label:
          "evidence of writing has been discovered from an earlier period.",
      },
    ],
  },
  {
    num: 28,
    question: "According to the writer, the story of the King of Uruk",
    options: [
      {
        value: "A",
        label: "is a probable explanation of the origins of writing.",
      },
      {
        value: "B",
        label:
          "proves that early writing had a different function to writing today.",
      },
      { value: "C", label: "provides an example of symbolic writing." },
      {
        value: "D",
        label:
          "shows some awareness amongst Sumerians of the purpose of writing.",
      },
    ],
  },
  {
    num: 29,
    question:
      "There was disagreement among the researchers at the symposium about",
    options: [
      { value: "A", label: "the area where writing began." },
      { value: "B", label: "the nature of early writing materials." },
      { value: "C", label: "the writing began." },
      { value: "D", label: "the meaning of certain abstract images." },
    ],
  },
  {
    num: 30,
    question:
      "The opponents of the theory that writing developed from tokens believe that it",
    options: [
      { value: "A", label: "grew out of accountancy." },
      { value: "B", label: "evolved from pictures." },
      { value: "C", label: "was initially intended as decoration." },
      {
        value: "D",
        label: "was unlikely to have been connected with commerce.",
      },
    ],
  },
];

const matchQuestions = [
  {
    num: 31,
    text: "There is no proof that early writing is connected to decorated household objects.",
  },
  { num: 32, text: "As writing developed, it came to represent speech." },
  {
    num: 33,
    text: "Sumerian writing developed into means of political control.",
  },
  {
    num: 34,
    text: "Early writing did not represent the grammatical features of speech.",
  },
  {
    num: 35,
    text: "There is no convincing proof that tokens and signs are connected.",
  },
  {
    num: 36,
    text: "The uses of cuneiform writing were narrow at first, and later widened.",
  },
];

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef([]);

  // Effect to scroll to and focus the current question
  useEffect(() => {
    // Questions 27-40, ref index 0-13
    const questionIndex = currentQuestion - 27;
    if (questionIndex >= 0 && questionIndex < 14) {
      const element = questionRefs.current[questionIndex];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(() => {
          // For accordions, focus the button to expand it
          if (questionIndex < 4) {
            const accordionButton = element.querySelector('[role="button"]');
            if (accordionButton) accordionButton.focus();
          } else {
            // For other inputs, find the first focusable element
            const input = element.querySelector('input, [role="button"]');
            if (input) {
              input.focus();
              if (input.tagName === "INPUT") input.select();
            }
          }
        }, 300);
      }
    }
  }, [currentQuestion]);

  const possibleAnswers = ["A", "B", "C", "D", "E"];

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const rightContent = (
    <Box>
      <Typography sx={{ ml: 3, fontSize: "1.1em", mb: 1 }}>
        <b>READING PASSAGE 3</b>
      </Typography>
      <Typography sx={{ ml: 1, mb: 1 }}>
        You should spend about 20 minutes on <b>Questions 27-40</b>, which are
        based on Reading Passage 3.
      </Typography>

      {/* Questions 27-30 */}
      <Typography sx={{ ml: 1, mb: 1, mt: 2 }}>Questions 27 - 30</Typography>
      <Typography sx={{ ml: 1, mb: 1 }}>
        Choose the correct letter, <b>A, B, C</b> or <b>D</b>.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "60rem",
          gap: 1,
        }}
      >
        {radioQuestions.map((q, index) => (
          <Accordion
            key={q.num}
            ref={(el) => (questionRefs.current[index] = el)}
            sx={{ bgcolor: "lightgray", textAlign: "left" }}
          >
            <AccordionSummary>
              <Typography>
                <b>{q.num}</b>
              </Typography>
              <Typography sx={{ ml: 2 }}>{q.question}</Typography>
            </AccordionSummary>
            <RadioGroup
              sx={{ ml: "1em" }}
              value={answers[q.num - 1] || ""}
              onChange={(e) => handleInputChange(q.num - 1, e.target.value)}
            >
              {q.options.map((opt) => (
                <FormControlLabel
                  key={opt.value}
                  value={opt.value}
                  control={<Radio />}
                  label={opt.label}
                />
              ))}
            </RadioGroup>
          </Accordion>
        ))}
      </Box>

      {/* Questions 31-36 */}
      <br />
      <Typography sx={{ ml: 2, mb: 1 }}>Questions 31 - 36</Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        Look at the following statements and the list of people below.
      </Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        Match each statement with the correct person, <b>A-E</b>.
      </Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        <b>NB</b> You may use any letter more than once.
      </Typography>

      {matchQuestions.map((q, index) => (
        <Typography key={q.num} sx={{ ml: 2, mb: 1 }}>
          <b>{q.num}</b> {q.text}
        </Typography>
      ))}

      <Box
        sx={{
          border: "1px solid black",
          p: 1,
          mt: 1,
          mb: 1,
          ml: 5,
          width: "fit-content",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
          List of People
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, auto)",
            gap: "0 2rem",
          }}
        >
          <Box>
            <Typography>A) Robert Barton</Typography>
            <Typography>B) Denise Schmandt-Besserat</Typography>
            <Typography>C) Piotr Michalowski</Typography>
          </Box>
          <Box>
            <Typography>D) Andrew Robinson</Typography>
            <Typography>E) Holly Pittman</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <FormControl
            ref={(el) => (questionRefs.current[4 + index] = el)}
            sx={{ mt: 2, margin: "3px" }}
            key={index}
          >
            <InputLabel>{`${31 + index}`}</InputLabel>
            <Select
              sx={{ width: "6em" }}
              value={answers[30 + index] || ""}
              onChange={(e) => handleInputChange(30 + index, e.target.value)}
              label={`${31 + index}`}
            >
              {possibleAnswers.map((answer) => (
                <MenuItem key={answer} value={answer}>
                  {answer}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Box>

      {/* Questions 37-40 */}
      <br />
      <Typography sx={{ ml: 2, mb: 1 }}>Questions 37 - 40</Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        Complete the summary using the list of words, <b>A-N</b>, below.
      </Typography>
      <Typography sx={{ fontSize: "1.1em", ml: 20, mt: 1 }}>
        <b>The earliest form of writing</b>
      </Typography>
      <Box sx={{ textAlign: "left", lineHeight: 2.5 }}>
        Most archeological evidence shows that the people of
        <Box
          ref={(el) => (questionRefs.current[10] = el)}
          sx={{ display: "inline-block", verticalAlign: "bottom" }}
        >
          <TextField
            sx={{ mt: -2.5, ml: 1, mr: 1, width: "9em" }}
            label="37"
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(36, e.target.value)}
            value={answers[36] || ""}
          />
        </Box>
        invented writing in around 3,300 BC. Their script was written on
        <Box
          ref={(el) => (questionRefs.current[11] = el)}
          sx={{ display: "inline-block", verticalAlign: "bottom" }}
        >
          <TextField
            sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
            label="38"
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(37, e.target.value)}
            value={answers[37] || ""}
          />
        </Box>
        and was called
        <Box
          ref={(el) => (questionRefs.current[12] = el)}
          sx={{ display: "inline-block", verticalAlign: "bottom" }}
        >
          <TextField
            sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
            label="39"
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(38, e.target.value)}
            value={answers[38] || ""}
          />
        </Box>
        . Their script originally showed images related to political power and
        business, and later developed to become more
        <Box
          ref={(el) => (questionRefs.current[13] = el)}
          sx={{ display: "inline-block", verticalAlign: "bottom" }}
        >
          <TextField
            sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
            label="40"
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(39, e.target.value)}
            value={answers[39] || ""}
          />
        </Box>
        .
      </Box>
      <Box sx={{ border: "1px solid black", p: 1, mt: 2, width: "100%" }}>
        <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
          List of Words
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 2rem" }}>
          <Typography>A) abstract</Typography>
          <Typography>B) clay tablets</Typography>
          <Typography>C) cuneiform</Typography>
          <Typography>D) decorative</Typography>
          <Typography>E) Egypt</Typography>
          <Typography>F) grammatical</Typography>
          <Typography>G) Mesopotamia</Typography>
          <Typography>H) narrative</Typography>
          <Typography>I) numerical</Typography>
          <Typography>J) parchment</Typography>
          <Typography>K) personal</Typography>
          <Typography>L) pictograms</Typography>
          <Typography>M) simple</Typography>
          <Typography>N) Sumerians</Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<WritingText />}
      rightContent={rightContent}
    />
  );
};

export default Part3;
