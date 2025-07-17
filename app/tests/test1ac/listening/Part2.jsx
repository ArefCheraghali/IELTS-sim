import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  TextField,
} from "@mui/material";

const mapImage = "/images/test1/listening1-section2.jpg";

const answerOptions = [
  { letter: "A", text: "art exhibition" },
  { letter: "B", text: "band entrance" },
  { letter: "C", text: "car park" },
  { letter: "D", text: "craft fair" },
  { letter: "E", text: "exhibitors' entrance" },
  { letter: "F", text: "fringe stage" },
  { letter: "G", text: "lock-up garages" },
  { letter: "H", text: "main stage" },
  { letter: "I", text: "restaurant" },
];

export default function Part2({ answers, setAnswers, currentQuestion }) {
  const inputRefs = useRef([]);
  const questionRefs = useRef([]);
  const prevCurrentQuestionRef = useRef();

  useEffect(() => {
    // Only scroll/focus if currentQuestion has actually changed to a new value
    if (
      prevCurrentQuestionRef.current !== undefined &&
      prevCurrentQuestionRef.current !== currentQuestion
    ) {
      if (currentQuestion >= 11 && currentQuestion <= 20) {
        const index = currentQuestion - 11;
        const questionElement = questionRefs.current[index];
        const inputElement = inputRefs.current[index];

        if (questionElement) {
          questionElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }

        // A small timeout ensures the scroll has started before focusing
        if (inputElement) {
          setTimeout(() => {
            inputElement.focus();
          }, 100);
        }
      }
    }
    // Update the ref for the next comparison
    prevCurrentQuestionRef.current = currentQuestion;
  }, [currentQuestion]);

  const possibleAnswers = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

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
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        margin: "0 auto",
        maxWidth: "1200px",
        padding: "0 2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "60rem",
          margin: "0 auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Part 2
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 11-20
        </Typography>
      </Box>
      <Typography>Questions 11-17</Typography>
      <Typography>Label the plan of the rock festival site below.</Typography>
      <Typography>
        Choose <b>SEVEN</b> answers from the box and write the correct letter,{" "}
        <b>A-I</b>, next to the questions 11-17.
      </Typography>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 4 }}
      >
        <Box
          component="div"
          sx={{
            width: "60%",
            maxWidth: "60rem",
            mt: 2,
          }}
        >
          <img
            src={mapImage}
            alt="Map"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            padding: 2,
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            height: "30%",
            mt: 16,
          }}
        >
          {answerOptions.map((option) => (
            <Box
              key={option.letter}
              sx={{
                padding: 1,
                border: "1px solid #ddd",
                textAlign: "center",
                backgroundColor: "#f8f8f8",
              }}
            >
              <Typography>
                <b>{option.letter}</b>
              </Typography>
              <Typography variant="body2">{option.text}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "60rem",
          mt: 2,
        }}
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <FormControl
            sx={{ mt: 2, margin: "2em" }}
            key={index}
            ref={(el) => (questionRefs.current[index] = el)}
          >
            <InputLabel>{`${11 + index}`}</InputLabel>
            <Select
              sx={{ width: "5em" }}
              value={answers[10 + index] || ""}
              inputRef={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleInputChange(10 + index, e.target.value)}
              label={`${11 + index}`}
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "60rem",
        }}
      >
        <Typography>Questions 18-20</Typography>
        <Typography>Complete the sentences below.</Typography>
        <Typography>
          Write <b>NO MORE THAN TWO WORDS</b> for each answer.
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
            pl: "3rem",
            width: "100%",
            fontSize: "18px",
          }}
        >
          <ListItem
            sx={{ display: "flex", flexDirection: "row" }}
            ref={(el) => (questionRefs.current[7] = el)}
          >
            <Typography>
              <b>18 - </b> To show you are an official visitor, you have to wear
              the
              <TextField
                sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
                label="18"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[7] = el)}
                onChange={(e) => handleInputChange(17, e.target.value)}
                value={answers[17]}
              />
              provided.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>
              <b>19 - </b>
              Cars blocing paths could prevent access by
              <TextField
                sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
                label="19"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[8] = el)}
                onChange={(e) => handleInputChange(18, e.target.value)}
                value={answers[18]}
              />
              in an emergency.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>
              <b>20 - </b>
              To reclaim items from storage, you must show your
              <TextField
                sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
                label="20"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[9] = el)}
                onChange={(e) => handleInputChange(19, e.target.value)}
                value={answers[19]}
              />
              .
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
