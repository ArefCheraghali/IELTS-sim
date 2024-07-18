import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import Drag from "./Drag";

const options = [
  { label: "their financial situation", value: "A" },
  { label: "their level of commitment", value: "B" },
  { label: "their work experience", value: "C" },
  { label: "their ambition", value: "D" },
  { label: "their availability", value: "E" },
];
const questionIndexes = [16, 17];

const Part2 = ({ answers, setAnswers }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event, option) => {
    const newSelectedOptions = event.target.checked
      ? [...selectedOptions, option.value]
      : selectedOptions.filter(
          (selectedOption) => selectedOption !== option.value
        );

    if (newSelectedOptions.length > 2) {
      event.target.checked = false;
      return;
    }

    setSelectedOptions(newSelectedOptions.sort());

    const updatedAnswers = [...answers];
    questionIndexes.forEach((questionIndex, i) => {
      updatedAnswers[questionIndex] = newSelectedOptions[i] || "";
    });

    setAnswers(updatedAnswers);
  };

  useEffect(() => {
    const initialSelectedOptions = options
      .filter((option) =>
        questionIndexes.some(
          (questionIndex) => answers[questionIndex] === option.value
        )
      )
      .map((option) => option.value);
    setSelectedOptions(initialSelectedOptions);
  }, [answers]);

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
          Which <b>TWO</b> reasons does the speaker give for recommending{" "}
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
                    onChange={(e) => handleCheckboxChange(e, option)}
                    disabled={
                      !selectedOptions.includes(option.value) &&
                      selectedOptions.length >= 2
                    }
                    checked={selectedOptions.includes(option.value)}
                  />
                }
                label={`${option.value}. ${option.label}`}
              />
            ))}
          </FormGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Part2;
