import React, { useEffect } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import Drag from "./Drag";

const options = [
  "their financial situation",
  "their level of commitment",
  "their work experience",
  "their ambition",
  "their availability",
];
const questionIndexes = [13, 14];

const Part2 = ({ answers, setAnswers }) => {
  const handleCheckboxChange = (event) => {
    const selectedOptions = options
      .map((option, i) =>
        document.getElementById(`checkbox-${i}`).checked ? option : null
      )
      .filter((option) => option !== null);

    selectedOptions.sort(); // Sort alphabetically

    const updatedAnswers = [...answers];
    questionIndexes.forEach((questionIndex, i) => {
      updatedAnswers[questionIndex] = selectedOptions[i] || "";
    });
    console.log(updatedAnswers);
    // setAnswers(updatedAnswers);
  };

  useEffect(() => {
    options.forEach((option, index) => {
      document.getElementById(`checkbox-${index}`).checked =
        questionIndexes.some(
          (questionIndex) => answers[questionIndex] === option
        );
    });
  }, [answers, options, questionIndexes]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
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
      <Drag answers={answers} setAnswers={setAnswers} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "60rem",
        }}
      >
        <Typography>Questions 17 and 18</Typography>
        <Typography>
          Choose <b>TWO</b> letters, <b>A-E</b>.
        </Typography>
        <Typography>
          Which <b>TWO</b> reasons does the speaker give for recommending
          <i>Alive and Kicking</i>?
        </Typography>
        <Box sx={{ mb: 4 }}>
          <FormGroup>
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    id={`checkbox-${index}`}
                    onChange={handleCheckboxChange}
                  />
                }
                label={option}
              />
            ))}
          </FormGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Part2;
