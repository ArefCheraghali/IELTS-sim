import React, { useRef, useEffect } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import MakingDocumentaryFilmText from "./text/MakingDocumentaryFilmText";
import DragDrop from "../../../components/DragDrop";

const initialQuestions = [
  {
    id: "19",
    text: "20. The creation of some new technologies did not change viewers’ attitudes towards documentaries as quickly as is sometimes proposed.",
    answerId: null,
  },
  {
    id: "20",
    text: "21. One set of beliefs and techniques helped to make documentary films academically respectable.",
    answerId: null,
  },
  {
    id: "21",
    text: "22. The action of putting material on film essentially changes the nature of the original material.",
    answerId: null,
  },
  {
    id: "22",
    text: "23. Documentary filmmakers have an obligation to include their own opinions about and analysis of the real events that they show in their films.",
    answerId: null,
  },
];

const initialAnswers = [
  { id: "A", text: "A) Dr Helmut Fischer" },
  { id: "B", text: "B) Anthony Berwick" },
  { id: "C", text: "C) Paula Murphy" },
  { id: "D", text: "D) Maria Fiala" },
  { id: "E", text: "E) Josh Camberwell" },
];

const Part2 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(Array(13).fill(null));
  const prevQuestionRef = useRef(null); // Add this to track previous question

  React.useEffect(() => {
    // Skip if it's the initial mount (prevQuestion is null)
    if (prevQuestionRef.current === null) {
      prevQuestionRef.current = currentQuestion;
      return;
    }

    // Only scroll if the question actually changed
    if (prevQuestionRef.current !== currentQuestion) {
      if (currentQuestion >= 14 && currentQuestion <= 26) {
        const index = currentQuestion - 14;
        const element = questionRefs.current[index];
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          // Add delay to ensure scroll completes before focus
          setTimeout(() => {
            if (currentQuestion >= 24 && currentQuestion <= 26) {
              // For text input questions (24-26)
              const input = element.querySelector("input");
              if (input) {
                input.focus();
                input.select();
              }
            } else if (currentQuestion >= 20 && currentQuestion <= 23) {
              // For drag-drop questions (20-23)
              // DragDrop component handles its own focus
            } else {
              // For select questions (14-19)
              const select = element.querySelector("[role='button']");
              if (select) {
                select.focus();
              }
            }
          }, 150);
        }
      }
      prevQuestionRef.current = currentQuestion;
    }
  }, [currentQuestion]);
  const possibleAnswers = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    console.log(newAnswers);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "75vh",
      }}
    >
      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 2,
          borderRight: "1px solid #ccc",
        }}
      >
        <MakingDocumentaryFilmText />
      </Box>

      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "flex-start",
          alignItems: "flex-start",
          padding: 2,
        }}
      >
        <Typography sx={{ ml: 5, fontSize: "1.1em", mb: 1 }}>
          <b>READING PASSAGE 2</b>
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 14-26</b>, which are
          based on Reading Passage 2.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 14 - 19</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Reading Passage 2 has six paragraphs, <b>A-F</b>.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose the correct heading for each paragraph from the list of
          headings below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Pick the correct number, <b>i-viii</b>, in boxes 14-19
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            padding: "1rem",
            margin: "1rem",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
          >
            List of Headings
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography>
              <b>i</b>&nbsp;&nbsp;&nbsp;&nbsp;A contrast between two historic
              approaches to documentary filmmaking
            </Typography>
            <Typography>
              <b>ii</b>&nbsp;&nbsp;&nbsp;Disagreement between two individual
              documentary makers
            </Typography>
            <Typography>
              <b>iii</b>&nbsp;&nbsp;A wide range of opportunities to promote
              documentary filmmaking
            </Typography>
            <Typography>
              <b>iv</b>&nbsp;&nbsp;&nbsp;A number of criticisms about all
              documentary filmmaking in the past
            </Typography>
            <Typography>
              <b>v</b>&nbsp;&nbsp;&nbsp;&nbsp;One film that represented a fresh
              approach to documentary filmmaking
            </Typography>
            <Typography>
              <b>vi</b>&nbsp;&nbsp;&nbsp;Some probable future trends in
              documentary filmmaking
            </Typography>
            <Typography>
              <b>vii</b>&nbsp;&nbsp;The debate about the origins of documentary
              filmmaking
            </Typography>
            <Typography>
              <b>viii</b>&nbsp;The ability of ordinary people to create
              documentary films for the first time
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2,
                width: "100%",
                padding: "1rem",
              }}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <FormControl
                  ref={(el) => (questionRefs.current[index] = el)}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  key={index}
                >
                  <Typography sx={{ mr: 2 }}>
                    {14 + index}) Paragraph {String.fromCharCode(65 + index)}
                  </Typography>
                  <Select
                    sx={{ width: "5em" }}
                    value={answers[13 + index] || ""}
                    onChange={(e) =>
                      handleInputChange(13 + index, e.target.value)
                    }
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
          </Box>
        </Box>
        <Typography sx={{ ml: 2, mb: 1, mt: 5 }}>Questions 20 - 23</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Look at the statements (Questions 20-23) and the list of people below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Match each statement with the correct person, A-E.
        </Typography>
        <DragDrop
          initialQuestions={initialQuestions}
          initialAnswers={initialAnswers}
          setAnswers={setAnswers}
          answers={answers}
          title=""
          infoTitle=""
          questionRefs={questionRefs}
          startIndex={6} // Start from index 6 for questions 20-23
        />
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 24 - 26</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose <b>NO MORE THAN TWO WORDS AND A NUMBER</b> from the text for
          each answer.
        </Typography>
        <Typography sx={{ ml: 2, mb: 2 }} gutterBottom>
          Write your answers in boxes 24-26.
        </Typography>
        <Typography variant="h6" sx={{ ml: 35, mb: 0 }}>
          Film Festivals
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
            There are many festivals for documentary makers. For example,
            Canada’s Hot Docs festival has screened documentaries from more than
            50 countries. Meanwhile, the Hamburg Short Film Festival lives up to
            its name by
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            accepting films no more than
            <TextField
              ref={(el) => (questionRefs.current[10] = el)}
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="24"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(23, e.target.value)}
              value={answers[23]}
            />
            long in one of
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
            its categories. The Short and Sweet Film Festival is especially good
            for
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            documentary makers who are
            <TextField
              ref={(el) => (questionRefs.current[11] = el)}
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="25"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(24, e.target.value)}
              value={answers[24]}
            />
            . And the Atlanta Shortsfest accepts numerous forms of documentaries
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            including
            <TextField
              ref={(el) => (questionRefs.current[12] = el)}
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="26"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(25, e.target.value)}
              value={answers[25]}
            />
            , which are becoming more common.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Part2;
