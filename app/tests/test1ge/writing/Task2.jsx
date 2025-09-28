import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const Task2 = ({ answers, setAnswers }) => {
  const wordLimit = 250;

  const getWordCount = (text) => {
    if (!text) return 0;
    const words = text.trim().split(/\s+/);
    return words.filter((word) => word.length > 0).length;
  };

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 120px - 26px)",
      }}
    >
      <Box
        sx={{
          width: "40%",
          overflowY: "auto",
          padding: 2,
          borderRight: "1px solid #ccc",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          <b>Writing Task 2</b>
        </Typography>
        <Typography sx={{ mb: 2 }}>
          You should spend about 40 minutes on this task.
        </Typography>
        <Typography sx={{ mb: 2 }}>Write about the following topic:</Typography>
        <Box
          sx={{
            border: "1px solid #ccc",
            p: 2,
            bgcolor: "#f5f5f5",
            borderRadius: 1,
            mb: 2,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            The wealth gap between 1st world countries and 3rd world countries
            seems to be increasing. How can we reduce this gap? Do you think
            that developed countries have a duty to assist developing countries
            in every way?
          </Typography>
        </Box>
        <Typography>
          Write at least <b>250 words</b>.
        </Typography>
      </Box>

      <Box
        sx={{
          width: "60%",
          padding: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body2"
          sx={{ mb: 1, textAlign: "right", color: "text.secondary" }}
        >
          Word Count: {getWordCount(answers[1] || "")} / {wordLimit}
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={20}
          variant="outlined"
          placeholder="Start writing your essay here..."
          autoComplete="off"
          onChange={(e) => handleInputChange(1, e.target.value)}
          spellCheck={false}
          value={answers[1] || ""}
          sx={{
            flexGrow: 1,
            "& .MuiOutlinedInput-root": {
              height: "100%",
              alignItems: "flex-start",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Task2;
