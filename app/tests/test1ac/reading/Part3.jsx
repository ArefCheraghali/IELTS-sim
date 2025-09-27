// app/tests/test1ac/reading/Part3.jsx

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
  Typography,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import WritingText from "./text/WritingText";

const radioQuestions = [
  {
    num: 27,
    question:
      "The researchers at the symposium regarded the story of the King of Uruk as ridiculous because",
    options: [
      {
        value: "A",
        label: "A) writing probably developed independently of speech.",
      },
      {
        value: "B",
        label: "B) clay tablets had not been invented at that time.",
      },
      {
        value: "C",
        label: "C) the distant ruler would have spoken another language.",
      },
      {
        value: "D",
        label:
          "D) evidence of writing has been discovered from an earlier period.",
      },
    ],
  },
  {
    num: 28,
    question: "According to the writer, the story of the King of Uruk",
    options: [
      {
        value: "A",
        label: "A) is a probable explanation of the origins of writing.",
      },
      {
        value: "B",
        label:
          "B) proves that early writing had a different function to writing today.",
      },
      { value: "C", label: "C) provides an example of symbolic writing." },
      {
        value: "D",
        label:
          "D) shows some awareness amongst Sumerians of the purpose of writing.",
      },
    ],
  },
  {
    num: 29,
    question:
      "There was disagreement among the researchers at the symposium about",
    options: [
      { value: "A", label: "A) the area where writing began." },
      { value: "B", label: "B) the nature of early writing materials." },
      { value: "C", label: "C) the writing began." },
      { value: "D", label: "D) the meaning of certain abstract images." },
    ],
  },
  {
    num: 30,
    question:
      "The opponents of the theory that writing developed from tokens believe that it",
    options: [
      { value: "A", label: "A) grew out of accountancy." },
      { value: "B", label: "B) evolved from pictures." },
      { value: "C", label: "C) was initially intended as decoration." },
      {
        value: "D",
        label: "D) was unlikely to have been connected with commerce.",
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

// ✅ List of words for the new select inputs
const wordList = [
  "A) abstract",
  "B) clay tablets",
  "C) cuneiform",
  "D) decorative",
  "E) Egypt",
  "F) grammatical",
  "G) Mesopotamia",
  "H) narrative",
  "I) numerical",
  "J) parchment",
  "K) personal",
  "L) pictograms",
  "M) simple",
  "N) Sumerians",
];

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const questionIndex = currentQuestion - 27;
    if (questionIndex >= 0 && questionIndex < 14) {
      const element = questionRefs.current[questionIndex];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          const input = element.querySelector('input, [role="button"]');
          if (input) input.focus();
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

      <br />
      <Typography sx={{ ml: 2, mb: 1 }}>Questions 37 - 40</Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        Complete the summary using the list of words, <b>A-N</b>, below.
      </Typography>
      <Typography sx={{ fontSize: "1.1em", ml: 20, mt: 1 }}>
        <b>The earliest form of writing</b>
      </Typography>
      <Box sx={{ textAlign: "left", lineHeight: 3.5, fontSize: "18px" }}>
        Most archeological evidence shows that the people of
        <FormControl
          variant="outlined"
          sx={{ mx: 1, minWidth: 150, verticalAlign: "bottom" }}
          ref={(el) => (questionRefs.current[10] = el)}
        >
          <InputLabel>37</InputLabel>
          <Select
            value={answers[36] || ""}
            onChange={(e) => handleInputChange(36, e.target.value)}
            label="37"
          >
            {wordList.map((word, i) => (
              <MenuItem key={i} value={word}>
                {word}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        invented writing in around 3,300 BC. Their script was written on
        <FormControl
          variant="outlined"
          sx={{ mx: 1, minWidth: 150, verticalAlign: "bottom" }}
          ref={(el) => (questionRefs.current[11] = el)}
        >
          <InputLabel>38</InputLabel>
          <Select
            value={answers[37] || ""}
            onChange={(e) => handleInputChange(37, e.target.value)}
            label="38"
          >
            {wordList.map((word, i) => (
              <MenuItem key={i} value={word}>
                {word}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        and was called
        <FormControl
          variant="outlined"
          sx={{ mx: 1, minWidth: 150, verticalAlign: "bottom" }}
          ref={(el) => (questionRefs.current[12] = el)}
        >
          <InputLabel>39</InputLabel>
          <Select
            value={answers[38] || ""}
            onChange={(e) => handleInputChange(38, e.target.value)}
            label="39"
          >
            {wordList.map((word, i) => (
              <MenuItem key={i} value={word}>
                {word}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        . Their script originally showed images related to political power and
        business, and later developed to become more
        <FormControl
          variant="outlined"
          sx={{ mx: 1, minWidth: 150, verticalAlign: "bottom" }}
          ref={(el) => (questionRefs.current[13] = el)}
        >
          <InputLabel>40</InputLabel>
          <Select
            value={answers[39] || ""}
            onChange={(e) => handleInputChange(39, e.target.value)}
            label="40"
          >
            {wordList.map((word, i) => (
              <MenuItem key={i} value={word}>
                {word}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        .
      </Box>
      <Box sx={{ border: "1px solid black", p: 1, mt: 2, width: "95%" }}>
        <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
          List of Words
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 2rem" }}>
          {wordList.map((word, i) => (
            <Typography key={i}>{word}</Typography>
          ))}
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
