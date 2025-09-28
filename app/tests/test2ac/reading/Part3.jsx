"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  Typography,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import JellyfishText from "./text/JellyfishText";
import DragDrop from "../../../components/DragDrop";

const yesNoQuestionsData = [
  {
    number: 27,
    text: "It is surprising that many people have negative views of jellyfish.",
  },
  {
    number: 28,
    text: "In the 20th century, scientists should have conducted more studies of jellyfish.",
  },
  {
    number: 29,
    text: "Some jellyfish species that used to live in shallow water may be moving to deep water.",
  },
  {
    number: 30,
    text: "Dr Karen Hansen’s views about jellyfish need to be confirmed by additional research.",
  },
  {
    number: 31,
    text: "It is possible to reverse the consequences of climate change.",
  },
  {
    number: 32,
    text: "The research findings of Paul Dewar have been accepted by other academics.",
  },
];

const radioQuestionsData = [
  {
    qNum: 33,
    questionText: "What is the writer doing in the fourth paragraph?",
    options: [
      { value: "A", label: "comparing several different types of jellyfish" },
      { value: "B", label: "dismissing some common ideas about jellyfish" },
      {
        value: "C",
        label: "contrasting various early theories about jellyfish",
      },
      {
        value: "D",
        label: "rejecting some scientific findings regarding jellyfish",
      },
    ],
  },
  {
    qNum: 34,
    questionText: "What does the writer conclude in the fifth paragraph?",
    options: [
      {
        value: "A",
        label: "Jellyfish have advantages and disadvantages for humans.",
      },
      {
        value: "B",
        label: "Humans have had a serious negative impact on jellyfish.",
      },
      {
        value: "C",
        label: "Jellyfish will cause problems for humans in the future.",
      },
      { value: "D", label: "Humans and jellyfish are fundamentally similar." },
    ],
  },
  {
    qNum: 35,
    questionText: "What is the writer’s main point in the sixth paragraph?",
    options: [
      { value: "A", label: "Jellyfish may once have inhabited dry land." },
      { value: "B", label: "Jellyfish improve the environment they live in." },
      { value: "C", label: "Jellyfish have proved able to survive over time." },
      {
        value: "D",
        label: "Jellyfish have caused other species to become endangered.",
      },
    ],
  },
  {
    qNum: 36,
    questionText: "The writer refers to the ‘scyphozoa’ in order to",
    options: [
      { value: "A", label: "exemplify the great size of some jellyfish." },
      {
        value: "B",
        label: "illustrate that jellyfish are biologically complex.",
      },
      {
        value: "C",
        label: "explain why certain jellyfish may become extinct.",
      },
      {
        value: "D",
        label: "suggest that scientists still misunderstand jellyfish.",
      },
    ],
  },
];

const initialDragQuestions = [
  {
    id: "q37",
    text: "37. Researchers working in Norway and the Arctic have shown that",
    answerId: null,
  },
  {
    id: "q38",
    text: "38. The use of DNA sequencing and isotope analysis has proved that",
    answerId: null,
  },
  {
    id: "q39",
    text: "39. Research into ‘upside-down jellyfish’ showed that",
    answerId: null,
  },
  {
    id: "q40",
    text: "40. Following research in the Mediterranean Sea, it has been claimed that",
    answerId: null,
  },
];

const initialDragAnswers = [
  { id: "A", text: "A) it was wrong to assume that jellyfish do not sleep." },
  {
    id: "B",
    text: "B) certain species of jellyfish have changed their usual diet.",
  },
  {
    id: "C",
    text: "C) jellyfish can be observed and tracked in ways that do not injure them.",
  },
  {
    id: "D",
    text: "D) one particular type of jellyfish may be able to live forever.",
  },
  {
    id: "E",
    text: "E) there are more types of jellyfish than previously realised.",
  },
  {
    id: "F",
    text: "F) some jellyfish are more dangerous to humans than once thought.",
  },
];

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(
    Array(14)
      .fill(null)
      .map(() => React.createRef())
  );
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (currentQuestion >= 27 && currentQuestion <= 40) {
      const index = currentQuestion - 27;
      const targetRef = questionRefs.current[index];
      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setTimeout(() => {
          setExpandedAccordion(`panel${currentQuestion}`);
          const input = targetRef.current.querySelector(
            'input, [role="button"]'
          );
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
      <Typography sx={{ mb: 1 }}>
        You should spend about 20 minutes on <b>Questions 27-40</b>.
      </Typography>

      <Typography
        variant="h6"
        component="h3"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 2, mb: 1 }}
      >
        Questions 27 - 32
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Do the following statements agree with the claims of the writer?
      </Typography>

      {yesNoQuestionsData.map((q, index) => (
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
              <MenuItem value="YES">YES</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
              <MenuItem value="NOT GIVEN">NOT GIVEN</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="body2">{q.text}</Typography>
        </Box>
      ))}

      <Typography
        variant="h6"
        component="h3"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3, mb: 1 }}
      >
        Questions 33 - 36
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Choose the correct letter, <b>A, B, C</b> or <b>D</b>.
      </Typography>

      {radioQuestionsData.map((item, index) => (
        <Accordion
          key={item.qNum}
          ref={questionRefs.current[index + 6]}
          sx={{ bgcolor: "grey.100", mb: 1 }}
          expanded={expandedAccordion === `panel${item.qNum}`}
          onChange={(e, isExpanded) =>
            setExpandedAccordion(isExpanded ? `panel${item.qNum}` : false)
          }
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <b>{item.qNum}</b> {item.questionText}
            </Typography>
          </AccordionSummary>
          <RadioGroup
            sx={{ pl: "2em", py: 1 }}
            value={answers[item.qNum - 1] || ""}
            onChange={(e) => handleInputChange(item.qNum - 1, e.target.value)}
          >
            {item.options.map((opt) => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio size="small" />}
                label={`${opt.value}) ${opt.label}`}
              />
            ))}
          </RadioGroup>
        </Accordion>
      ))}

      <Typography
        variant="h6"
        component="h3"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3, mb: 1 }}
      >
        Questions 37 - 40
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Complete each sentence with the correct ending, <b>A-F</b>.
      </Typography>

      <DragDrop
        initialQuestions={initialDragQuestions}
        initialAnswers={initialDragAnswers}
        setAnswers={setAnswers}
        answers={answers}
        questionRefs={questionRefs}
        startIndex={36}
        refStartIndex={10} // Corrected: Start assigning refs from index 10
        startQuestionNumber={37}
      />
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<JellyfishText />}
      rightContent={rightContent}
    />
  );
};

export default Part3;
