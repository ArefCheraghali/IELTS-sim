"use client";
import { Box, Typography } from "@mui/material";
import DragDrop from "../../../components/DragDrop";
import MultipleChoiceQuestion from "../../../components/MultipleChoiceQuestion";
import { useRef, useEffect } from "react";

const initialQuestions = [
  { id: "10", text: "11 Superheroes", answerId: null },
  { id: "11", text: "12 Just do it", answerId: null },
  { id: "12", text: "13 Count on me", answerId: null },
  { id: "13", text: "14 Speak up", answerId: null },
  { id: "14", text: "15 Jump for joy", answerId: null },
  { id: "15", text: "16 Sticks and stones", answerId: null },
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
  const questionRefs = useRef(Array(10).fill(null));
  const topOfPartRef = useRef(null); // Ref for the main container of this part

  // This new useEffect runs only once when the component mounts
  useEffect(() => {
    // Scroll to the top of the component's container
    if (topOfPartRef.current) {
      // This targets the top of this specific component
      topOfPartRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, []); // The empty dependency array [] ensures this runs only on mount

  // This useEffect handles scrolling to a specific question when currentQuestion changes
  useEffect(() => {
    // NOTE: We should prevent this from running on initial mount as well,
    // to avoid a conflict with the scroll-to-top effect.
    // However, since the parent effect scrolls to top instantly ('auto'),
    // this one will trigger on the first meaningful question change.
    if (currentQuestion >= 11 && currentQuestion <= 20) {
      const index = currentQuestion - 11;
      // Add a small delay to ensure the top-scroll has finished.
      setTimeout(() => {
        questionRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 50); // Small delay
    }
  }, [currentQuestion]);

  return (
    <Box
      ref={topOfPartRef} // Attach the ref to the main container
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
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "60rem",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Part 2
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 11-20
        </Typography>
      </Box>
      <Typography>Questions 11-16</Typography>
      <Typography>
        What information is given about each of the following festival
        workshops?
      </Typography>
      <Typography>
        Choose <b>SIX</b> answers from the box and write the correct letter,{" "}
        <b>A-I</b>, next to the questions 11-17.
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
        startIndex={0}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "60rem",
          mt: 3,
          mb: 3,
        }}
      >
        <Typography>Questions 17 and 18</Typography>
        <Typography>
          Choose <b>TWO</b> letters, <b>A-E</b>.
        </Typography>
        <Typography>
          Which <b>TWO</b> reasons does the speaker give for recommending{" "}
          <i>Alive and Kicking</i>?
        </Typography>
        <Box ref={(el) => (questionRefs.current[6] = el)}>
          <MultipleChoiceQuestion
            options={[
              { label: "their financial situation", value: "A" },
              { label: "their level of commitment", value: "B" },
              { label: "their work experience", value: "C" },
              { label: "their ambition", value: "D" },
              { label: "their availability", value: "E" },
            ]}
            questionIndexes={[16, 17]}
            answers={answers}
            setAnswers={setAnswers}
            currentQuestion={currentQuestion}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "60rem",
        }}
      >
        <Typography>Questions 19 and 20</Typography>
        <Typography>
          Choose <b>TWO</b> letters, <b>A-E</b>.
        </Typography>
        <Typography>
          Which <b>TWO</b> pieces of advice does the speaker give to parents
          about reading?
        </Typography>
        <Box ref={(el) => (questionRefs.current[8] = el)}>
          <MultipleChoiceQuestion
            options={[
              {
                label: "Encourage children to write down new vocabulary.",
                value: "A",
              },
              { label: "Allow children to listen to audio books.", value: "B" },
              { label: "Get reommendations from librarians.", value: "C" },
              {
                label: "Give children a choice about what they read.",
                value: "D",
              },
              {
                label:
                  "Only read aloud to children until they can read independently.",
                value: "E",
              },
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
