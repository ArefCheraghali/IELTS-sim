import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import MultipleChoiceQuestion from "../../../components/MultipleChoiceQuestion";

const radioQuestionsData = [
  {
    qNum: 21,
    text: "What does Ahmed say about last week's seminar?",
    options: [
      { val: "A", label: "He wasn't able to get there on time." },
      { val: "B", label: "He didn't know all the students." },
      { val: "C", label: "He couldn't understand everything." },
    ],
  },
  {
    qNum: 22,
    text: "What does the tutor say about Ahmed's preparation for the seminar?",
    options: [
      { val: "A", label: "He was better prepared than some students." },
      { val: "B", label: "He completed some useful work." },
      { val: "C", label: "He read some useful articles." },
    ],
  },
  {
    qNum: 23,
    text: "What does Ahmed say about his participation in the seminar?",
    options: [
      { val: "A", label: "He tended to speak to his neighbour only." },
      { val: "B", label: "He spoke when other students were talking." },
      { val: "C", label: "He felt embarrassed when students looked at him." },
    ],
  },
  {
    qNum: 24,
    text: "What does Ahmed worry about most in seminars?",
    options: [
      { val: "A", label: "speaking at the right time" },
      { val: "B", label: "taking enough notes" },
      { val: "C", label: "staying focused" },
    ],
  },
  {
    qNum: 25,
    text: "What does Ahmed say about his role in the group?",
    options: [
      { val: "A", label: "He hasn't thought about it." },
      { val: "B", label: "He'd like to change it." },
      { val: "C", label: "He feels he is acting a part." },
    ],
  },
  {
    qNum: 26,
    text: "At the next seminar, Ahmed's tutor suggests that he should",
    options: [
      { val: "A", label: "give other students more help with their work." },
      { val: "B", label: "observe the behaviour of other students." },
      { val: "C", label: "ask other students for their views." },
    ],
  },
];

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
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
    if (currentQuestion >= 21 && currentQuestion <= 30) {
      const index = currentQuestion - 21;
      const element = questionRefs.current[index]?.current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          const input = element.querySelector("input");
          if (input) input.focus();
        }, 300);
      }
    }
  }, [currentQuestion]);

  return (
    <Box sx={{ maxWidth: "60rem", mx: "auto", px: 2, textAlign: "left" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Typography variant="h5">Part 3</Typography>
        <Typography variant="h6">Questions 21-30</Typography>
      </Box>

      <Typography sx={{ mt: 2 }}>
        <b>Questions 21-26</b>
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
            onChange={(e) =>
              setAnswers((prev) => {
                const next = [...prev];
                next[q.qNum - 1] = e.target.value;
                return next;
              })
            }
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

      <Box sx={{ mt: 3 }} ref={questionRefs.current[6]}>
        <Typography>
          <b>Questions 27 and 28</b>
        </Typography>
        <Typography>
          Choose <b>TWO</b> letters, <b>A-E</b>.
        </Typography>
        <Typography sx={{ mt: 1, fontWeight: "bold" }}>
          Which TWO strategies does the tutor suggest for the next seminar?
        </Typography>
        <MultipleChoiceQuestion
          options={[
            { label: "speak more frequently", value: "A" },
            { label: "behave in a confident manner", value: "B" },
            { label: "sit next to someone helpful", value: "C" },
            { label: "listen to what other people say", value: "D" },
            { label: "think of questions to ask", value: "E" },
          ]}
          questionIndexes={[26, 27]}
          answers={answers}
          setAnswers={setAnswers}
        />
      </Box>

      <Box sx={{ mt: 3 }} ref={questionRefs.current[8]}>
        <Typography>
          <b>Questions 29 and 30</b>
        </Typography>
        <Typography>
          Choose <b>TWO</b> letters, <b>A-E</b>.
        </Typography>
        <Typography sx={{ mt: 1, fontWeight: "bold" }}>
          Which TWO suggestions does the tutor make about taking notes?
        </Typography>
        <MultipleChoiceQuestion
          options={[
            { label: "plan them before the seminar", value: "A" },
            { label: "note down key words that people say", value: "B" },
            { label: "note points to say later", value: "C" },
            { label: "include self-analysis", value: "D" },
            { label: "rewrite them after the seminar", value: "E" },
          ]}
          questionIndexes={[28, 29]}
          answers={answers}
          setAnswers={setAnswers}
        />
      </Box>
    </Box>
  );
};

export default Part3;
