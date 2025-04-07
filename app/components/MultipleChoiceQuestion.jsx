import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";

const MultipleChoiceQuestion = ({
  options,
  answers,
  setAnswers,
  questionIndexes,
}) => {
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
  );
};

export default MultipleChoiceQuestion;
