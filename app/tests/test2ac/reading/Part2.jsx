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
import MakingDocumentaryFilmText from "./text/MakingDocumentaryFilmText";
import DragDrop from "../../../components/DragDrop";

const initialDragQuestions = [
  {
    id: "q20",
    text: "20. The creation of some new technologies did not change viewers’ attitudes towards documentaries as quickly as is sometimes proposed.",
    answerId: null,
  },
  {
    id: "q21",
    text: "21. One set of beliefs and techniques helped to make documentary films academically respectable.",
    answerId: null,
  },
  {
    id: "q22",
    text: "22. The action of putting material on film essentially changes the nature of the original material.",
    answerId: null,
  },
  {
    id: "q23",
    text: "23. Documentary filmmakers have an obligation to include their own opinions about and analysis of the real events that they show in their films.",
    answerId: null,
  },
];

const initialDragAnswers = [
  { id: "A", text: "A) Dr Helmut Fischer" },
  { id: "B", text: "B) Anthony Berwick" },
  { id: "C", text: "C) Paula Murphy" },
  { id: "D", text: "D) Maria Fiala" },
  { id: "E", text: "E) Josh Camberwell" },
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

  const possibleAnswers = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

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
        Questions 14 - 19
      </Typography>
      <Typography>
        Reading Passage 2 has six paragraphs, <b>A-F</b>.
      </Typography>
      <Typography>Choose the correct heading for each paragraph.</Typography>

      {Array.from({ length: 6 }).map((_, index) => (
        <FormControl
          key={index}
          sx={{ m: 1 }}
          size="small"
          ref={questionRefs.current[index]}
        >
          <InputLabel>{`Paragraph ${String.fromCharCode(65 + index)} (Q${
            14 + index
          })`}</InputLabel>
          <Select
            sx={{ width: "12em" }}
            value={answers[13 + index] || ""}
            onChange={(e) => handleInputChange(13 + index, e.target.value)}
            label={`Paragraph ${String.fromCharCode(65 + index)} (Q${
              14 + index
            })`}
          >
            {possibleAnswers.map((answer) => (
              <MenuItem key={answer} value={answer}>
                {answer}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}

      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          my: 2,
          borderRadius: 1,
          bgcolor: "#f5f5f5",
        }}
      >
        <Typography variant="h6" gutterBottom>
          List of Headings
        </Typography>
        <Typography>
          <b>i</b> A contrast between two historic approaches
        </Typography>
        <Typography>
          <b>ii</b> Disagreement between two filmmakers
        </Typography>
        <Typography>
          <b>iii</b> A range of opportunities to promote films
        </Typography>
        <Typography>
          <b>iv</b> Criticisms about all documentary filmmaking
        </Typography>
        <Typography>
          <b>v</b> One film that represented a fresh approach
        </Typography>
        <Typography>
          <b>vi</b> Future trends in filmmaking
        </Typography>
        <Typography>
          <b>vii</b> The debate about the origins of the genre
        </Typography>
        <Typography>
          <b>viii</b> The ability of ordinary people to create films
        </Typography>
      </Box>

      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3 }}
      >
        Questions 20 - 23
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
        startIndex={19}
        refStartIndex={6} // Corrected: Start assigning refs from index 6
        startQuestionNumber={20}
      />

      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3 }}
      >
        Questions 24 - 26
      </Typography>
      <Typography>
        Choose <b>NO MORE THAN TWO WORDS AND A NUMBER</b> from the text.
      </Typography>
      <Box sx={{ lineHeight: 3, mt: 1, textAlign: "left", fontSize: "19px" }}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Film Festivals
        </Typography>
        There are many festivals for documentary makers. For example, Canada’s
        Hot Docs festival has screened documentaries from more than 50
        countries. Meanwhile, the Hamburg Short Film Festival lives up to its
        name by accepting films no more than
        <TextField
          variant="standard"
          label="24"
          sx={{ mx: 1, width: "10em" }}
          value={answers[23] || ""}
          onChange={(e) => handleInputChange(23, e.target.value)}
          inputRef={questionRefs.current[10]}
        />
        long in one of its categories. The Short and Sweet Film Festival is
        especially good for documentary makers who are
        <TextField
          variant="standard"
          label="25"
          sx={{ mx: 1, width: "10em" }}
          value={answers[24] || ""}
          onChange={(e) => handleInputChange(24, e.target.value)}
          inputRef={questionRefs.current[11]}
        />
        . And the Atlanta Shortsfest accepts numerous forms of documentaries
        including
        <TextField
          variant="standard"
          label="26"
          sx={{ mx: 1, width: "10em" }}
          value={answers[25] || ""}
          onChange={(e) => handleInputChange(25, e.target.value)}
          inputRef={questionRefs.current[12]}
        />
        , which are becoming more common.
      </Box>
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<MakingDocumentaryFilmText />}
      rightContent={rightContent}
    />
  );
};

export default Part2;
