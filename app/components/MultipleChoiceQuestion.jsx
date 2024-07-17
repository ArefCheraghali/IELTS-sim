import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useEffect } from "react";

const MultipleChoiceQuestion = ({
  options,
  answers,
  setAnswers,
  questionIndexes,
}) => {
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

    setAnswers(updatedAnswers);
  };

  // Initialize checkboxes based on the answers prop
  useEffect(() => {
    options.forEach((option, index) => {
      document.getElementById(`checkbox-${index}`).checked =
        questionIndexes.some(
          (questionIndex) => answers[questionIndex] === option
        );
    });
  }, [answers, options, questionIndexes]);

  return (
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
  );
};

export default MultipleChoiceQuestion;
