"use client";
import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import DragDrop from "@/components/DragDrop";
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion";

const initialQuestions = [
  { id: "q11", text: "11 Superheroes", answerId: null },
  { id: "q12", text: "12 Just do it", answerId: null },
  { id: "q13", text: "13 Count on me", answerId: null },
  { id: "q14", text: "14 Speak up", answerId: null },
  { id: "q15", text: "15 Jump for joy", answerId: null },
  { id: "q16", text: "16 Sticks and stones", answerId: null },
];

const initialAnswers = [
  { id: "A", text: "A) involves painting and drawing" },
  { id: "B", text: "B) will be led by a prize-winning author" },
  { id: "C", text: "C) is aimed at children with a disability" },
  { id: "D", text: "D) involves a drama activity" },
  { id: "E", text: "E) focuses on new relationships" },
  { id: "F", text: "F) is aimed at a specific age group" },
  { id: "G", text: "G) explores an unhappy feeling" },
  { id: "H", text: "H) raises awareness of a particular culture" },
];

const Part2 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(
    Array(10)
      .fill(null)
      .map(() => React.createRef())
  );

  useEffect(() => {
    if (currentQuestion >= 11 && currentQuestion <= 20) {
      const index = currentQuestion - 11;
      const element = questionRefs.current[index]?.current;
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [currentQuestion]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "60rem",
        margin: "0 auto",
        padding: "0 1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Part 2
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 11-20
        </Typography>
      </Box>

      <Typography>
        <b>Questions 11-16</b>
      </Typography>
      <Typography>
        What information is given about each of the following festival
        workshops?
      </Typography>
      <Typography>
        Choose <b>SIX</b> answers from the box and write the correct letter,{" "}
        <b>A-H</b>, next to questions 11-16.
      </Typography>

      <DragDrop
        initialQuestions={initialQuestions}
        initialAnswers={initialAnswers}
        setAnswers={setAnswers}
        answers={answers}
        currentQuestion={currentQuestion}
        title="Festival workshops"
        infoTitle="Information"
        questionRefs={questionRefs}
        startIndex={10} // Corrected: Q11 is at index 10 of the main answers array
        startQuestionNumber={11}
      />

      <Box sx={{ width: "100%", mt: 3, textAlign: "left" }}>
        <Typography>
          <b>Questions 17 and 18</b>
        </Typography>
        <Typography>
          Choose <b>TWO</b> letters, <b>A-E</b>.
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Which TWO things can volunteers help with at the festival?
        </Typography>
        <Box ref={questionRefs.current[6]}>
          <MultipleChoiceQuestion
            options={[
              { label: "issuing tickets", value: "A" },
              { label: "taking photographs", value: "B" },
              { label: "selling souvenirs", value: "C" },
              { label: "directing traffic", value: "D" },
              { label: "checking venues", value: "E" },
            ]}
            questionIndexes={[16, 17]}
            answers={answers}
            setAnswers={setAnswers}
            currentQuestion={currentQuestion}
          />
        </Box>
      </Box>

      <Box sx={{ width: "100%", mt: 3, textAlign: "left" }}>
        <Typography>
          <b>Questions 19 and 20</b>
        </Typography>
        <Typography>
          Choose <b>TWO</b> letters, <b>A-E</b>.
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Which TWO things must volunteers have?
        </Typography>
        <Box ref={questionRefs.current[8]}>
          <MultipleChoiceQuestion
            options={[
              { label: "their financial situation", value: "A" },
              { label: "their level of commitment", value: "B" },
              { label: "their work experience", value: "C" },
              { label: "their ambition", value: "D" },
              { label: "their availability", value: "E" },
            ]}
            questionIndexes={[18, 19]}
            answers={answers}
            setAnswers={setAnswers}
            currentQuestion={currentQuestion}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Part2;
