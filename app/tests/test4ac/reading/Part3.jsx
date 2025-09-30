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
} from "@mui/material";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import RockClimbingText from "./text/RockClimbingText";

const paragraphMatchingQuestions = [
  { qNum: 27, text: "examples of the impact of climbers on ecosystems" },
  { qNum: 28, text: "an account of how politics affected rock climbing" },
  { qNum: 29, text: "a less dangerous alternative to climbing rock faces" },
  { qNum: 30, text: "a recommendation for better regulation" },
  {
    qNum: 31,
    text: "a reference to a climber who did not use any tools or ropes for assistance",
  },
  {
    qNum: 32,
    text: "examples of different types of people who use the outdoors for recreation",
  },
];

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
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
    if (currentQuestion >= 27 && currentQuestion <= 40) {
      const index = currentQuestion - 27;
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
        READING PASSAGE 3
      </Typography>
      <Typography sx={{ mb: 2 }}>
        You should spend about 20 minutes on <b>Questions 27-40</b>.
      </Typography>

      <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Questions 27-32
      </Typography>
      <Typography>Reading Passage 3 has eight paragraphs, A-H.</Typography>
      <Typography>
        Which paragraph contains the following information?
      </Typography>

      {paragraphMatchingQuestions.map((q, index) => (
        <Box
          key={q.qNum}
          ref={questionRefs.current[index]}
          sx={{ display: "flex", alignItems: "center", my: 1.5 }}
        >
          <Typography sx={{ mr: 2, minWidth: "2em" }}>
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
              {["A", "B", "C", "D", "E", "F", "G", "H"].map((opt) => (
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
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3 }}
      >
        Questions 33-39
      </Typography>
      <Typography>Complete the flow chart below.</Typography>
      <Typography>
        Choose <b>NO MORE THAN THREE WORDS</b> from the passage for each answer.
      </Typography>

      <Box
        sx={{
          textAlign: "left",
          mt: 2,
          fontSize: "1em",
          border: "1px solid #ccc",
          p: 2,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
          A rock climbing time line
        </Typography>

        <Box sx={{ bgcolor: "#f5f5f5", p: 2, mb: 2, borderRadius: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Late 19th century
          </Typography>
          <Typography ref={questionRefs.current[6]}>
            - Some climbers discuss whether pitons and ropes should only be
            considered{" "}
            <TextField
              sx={{ width: "15em", mr: 1 }}
              label="33"
              variant="outlined"
              size="small"
              value={answers[32] || ""}
              onChange={(e) => handleInputChange(32, e.target.value)}
            />
            .
          </Typography>
          <Typography ref={questionRefs.current[7]} sx={{ mt: 2 }}>
            -
            <TextField
              sx={{ width: "15em", mx: 1, mt: -1 }}
              label="34"
              variant="outlined"
              size="small"
              value={answers[33] || ""}
              onChange={(e) => handleInputChange(33, e.target.value)}
            />{" "}
            calls for guidelines based on unwritten rules which discourage
            climbing aids.
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: "#f5f5f5",
            p: 2,
            mb: 2,
            borderRadius: 1,
            lineHeight: 3,
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            1940s
          </Typography>
          <Typography ref={questionRefs.current[8]}>
            - New equipment becomes controversial. Frank Smythe says that Mt
            Brussels is effectively{" "}
            <TextField
              sx={{ width: "15em", mr: 1 }}
              label="35"
              variant="outlined"
              size="small"
              value={answers[34] || ""}
              onChange={(e) => handleInputChange(34, e.target.value)}
            />{" "}
            because of the techniques that were used in order to scale the
            mountain.
          </Typography>
        </Box>

        <Box sx={{ bgcolor: "#f5f5f5", p: 2, mb: 2, borderRadius: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            1970s
          </Typography>
          <Typography ref={questionRefs.current[9]}>
            -
            <TextField
              sx={{ width: "15em", mx: 1, mt: -1 }}
              label="36"
              variant="outlined"
              size="small"
              value={answers[35] || ""}
              onChange={(e) => handleInputChange(35, e.target.value)}
            />{" "}
            is more environmentally friendly.
          </Typography>
          <Typography ref={questionRefs.current[10]} sx={{ mt: 2 }}>
            -
            <TextField
              sx={{ width: "15em", mx: 1, mt: -1 }}
              label="37"
              variant="outlined"
              size="small"
              value={answers[36] || ""}
              onChange={(e) => handleInputChange(36, e.target.value)}
            />{" "}
            are introduced as a climbing aid.
          </Typography>
        </Box>

        <Box sx={{ bgcolor: "#f5f5f5", p: 2, borderRadius: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            1980s – today
          </Typography>
          <Typography ref={questionRefs.current[11]}>
            - Climbers discuss the merits of new techniques for making hand
            holds, and also of{" "}
            <TextField
              sx={{ width: "15em", mx: 1 }}
              label="38"
              variant="outlined"
              size="small"
              value={answers[37] || ""}
              onChange={(e) => handleInputChange(37, e.target.value)}
            />
            .
          </Typography>
          <Typography ref={questionRefs.current[12]} sx={{ mt: 2 }}>
            - Many say that climbing is now a test of physical strength and{" "}
            <TextField
              sx={{ width: "15em", mx: 1 }}
              label="39"
              variant="outlined"
              size="small"
              value={answers[38] || ""}
              onChange={(e) => handleInputChange(38, e.target.value)}
            />
            , rather than of courage.
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3 }}
      >
        Question 40
      </Typography>
      <Typography>Choose the correct letter, A, B, C or D.</Typography>
      <FormControl fullWidth sx={{ mt: 1 }} ref={questionRefs.current[13]}>
        <Typography>
          <b>40</b> Choose the most appropriate title for the reading passage.
        </Typography>
        <RadioGroup
          value={answers[39] || ""}
          onChange={(e) => handleInputChange(39, e.target.value)}
          sx={{ ml: 2 }}
        >
          <FormControlLabel
            value="A"
            control={<Radio />}
            label="A) A history of rock climbing"
          />
          <FormControlLabel
            value="B"
            control={<Radio />}
            label="B) Ethics and issues in rock climbing"
          />
          <FormControlLabel
            value="C"
            control={<Radio />}
            label="C) Current trends in rock climbing"
          />
          <FormControlLabel
            value="D"
            control={<Radio />}
            label="D) Sport climbers versus traditional climbers"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<RockClimbingText />}
      rightContent={rightContent}
    />
  );
};
export default Part3;
