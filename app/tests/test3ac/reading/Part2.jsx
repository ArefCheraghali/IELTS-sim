"use client";
import React, { useRef, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import HumanLaughterText from "./text/HumanLaughterText";
import DragDrop from "../../../components/DragDrop";

const paragraphMatchingQuestions = [
  {
    qNum: 14,
    text: "the claim that it is very hard for people to pretend to laugh",
  },
  {
    qNum: 15,
    text: "a reference to research showing that people do not know how often they laugh",
  },
  {
    qNum: 16,
    text: "the reason why people can sometimes stop themselves laughing",
  },
  {
    qNum: 17,
    text: "an outline of the health benefits experienced by people when laughing",
  },
  {
    qNum: 18,
    text: "a reference to a medical condition that stops some people making a noise when laughing",
  },
];

const initialDragQuestions = [
  {
    id: "q19",
    text: "19. Research has confirmed personal experience by identifying the wide range of subjects and situations that people find funny.",
    answerId: null,
  },
  {
    id: "q20",
    text: "20. Ideas about what is amusing have changed considerably over time.",
    answerId: null,
  },
  {
    id: "q21",
    text: "21. To intentionally make other people laugh requires an unusual combination of skills and characteristics.",
    answerId: null,
  },
  {
    id: "q22",
    text: "22. The reasons why we laugh are sometimes misunderstood by ordinary people.",
    answerId: null,
  },
];

const initialDragAnswers = [
  { id: "A", text: "A) Dr Peter Shrimpton" },
  { id: "B", text: "B) Jocelyn Barnes" },
  { id: "C", text: "C) Heinrich Ahrends" },
  { id: "D", text: "D) David Mackenzie" },
  { id: "E", text: "E) Jake Gottlieb" },
];

const summaryCompletionQuestions = [
  {
    qNum: 23,
    answerIndex: 22,
    textBefore:
      ". The French neurologist Guillaume Duchenne showed that if a smile is fake, the skin around a person’s",
    textAfter: "does not change shape.",
  },
  {
    qNum: 24,
    answerIndex: 23,
    textBefore: ". A",
    textAfter:
      "that was produced in ancient Rome contains early examples of attempts to be funny.",
  },
  {
    qNum: 25,
    answerIndex: 24,
    textBefore:
      ". In January 1962, an outbreak of mass laughter caused problems in a",
    textAfter: "in Tanzania.",
  },
  {
    qNum: 26,
    answerIndex: 25,
    textBefore: ". Neurologist Nikki Sokolov is investigating why",
    textAfter: "is possible even when a person finds something funny.",
  },
];

const Part2 = ({ answers, setAnswers, currentQuestion }) => {
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
    if (currentQuestion >= 14 && currentQuestion <= 26) {
      const index = currentQuestion - 14;
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
        READING PASSAGE 2
      </Typography>
      <Typography sx={{ mb: 2 }}>
        You should spend about 20 minutes on <b>Questions 14-26</b>.
      </Typography>

      <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Questions 14 - 18
      </Typography>
      <Typography>
        Reading Passage 2 has five paragraphs, <b>A-E</b>.
      </Typography>
      <Typography>
        Which paragraph contains the following information?
      </Typography>
      <Typography>
        <b>NB</b> You may use any letter more than once.
      </Typography>

      {paragraphMatchingQuestions.map((q, index) => (
        <Box
          key={q.qNum}
          ref={questionRefs.current[index]}
          sx={{ display: "flex", alignItems: "center", my: 1.5 }}
        >
          <FormControl size="small" sx={{ mr: 2, minWidth: "80px" }}>
            <InputLabel>{q.qNum}</InputLabel>
            <Select
              value={answers[q.qNum - 1] || ""}
              onChange={(e) => handleInputChange(q.qNum - 1, e.target.value)}
              label={`${q.qNum}`}
            >
              {["A", "B", "C", "D", "E"].map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="body2">{q.text}</Typography>
        </Box>
      ))}

      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3 }}
      >
        Questions 19 - 22
      </Typography>
      <Typography>
        Match each statement with the correct person, A-E.
      </Typography>
      <DragDrop
        initialQuestions={initialDragQuestions}
        initialAnswers={initialDragAnswers}
        setAnswers={setAnswers}
        answers={answers}
        questionRefs={questionRefs}
        startIndex={18}
        refStartIndex={5}
        startQuestionNumber={19}
      />

      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3 }}
      >
        Questions 23 - 26
      </Typography>
      <Typography>Complete the sentences below.</Typography>
      <Typography>
        Choose <b>ONE WORD ONLY</b> from the text for each answer.
      </Typography>

      {summaryCompletionQuestions.map((q, index) => (
        <Box
          key={q.qNum}
          ref={questionRefs.current[index + 9]}
          sx={{ my: 2.5 }}
        >
          <Typography component="div">
            <b>{q.qNum}</b>
            {q.textBefore}
            <TextField
              variant="standard"
              sx={{ mx: 1, width: "12em", verticalAlign: "baseline" }}
              value={answers[q.answerIndex] || ""}
              onChange={(e) => handleInputChange(q.answerIndex, e.target.value)}
            />
            {q.textAfter}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<HumanLaughterText />}
      rightContent={rightContent}
    />
  );
};

export default Part2;
