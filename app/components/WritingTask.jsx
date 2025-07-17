import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const WritingTask = ({
  answers,
  setAnswers,
  wordLimit,
  taskNumber,
  prompt,
  instructions,
  index = 0,
  imagePath,
  imageAlt,
  additionalInstructions,
  placeholder = "Write your answer here...",
}) => {
  const getWordCount = (text) => {
    return text
      ? text
          .trim()
          .split(/\s+/)
          .filter((word) => word.length > 0).length
      : 0;
  };

  const handleInputChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          width: "40%",
          overflowY: "auto",
          padding: 2,
          borderRight: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          Writing Task {taskNumber}
        </Typography>

        {instructions && (
          <Typography sx={{ mb: 2, color: "text.secondary" }}>
            {instructions}
          </Typography>
        )}

        <Box
          sx={{
            bgcolor: "grey.100",
            p: 2,
            borderRadius: 1,
            width: "100%",
            mb: 2,
          }}
        >
          <Typography sx={{ whiteSpace: "pre-wrap" }}>{prompt}</Typography>
        </Box>

        {imagePath && (
          <Box sx={{ width: "100%", mb: 2 }}>
            <img
              src={imagePath}
              alt={imageAlt || "Task image"}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        )}

        {additionalInstructions && (
          <Typography
            sx={{ mb: 2, color: "text.secondary", whiteSpace: "pre-wrap" }}
          >
            {additionalInstructions}
          </Typography>
        )}

        <Typography sx={{ mb: 2, color: "text.secondary" }}>
          Write at least {wordLimit} words.
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
        <TextField
          multiline
          rows={20}
          fullWidth
          value={answers[index] || ""}
          onChange={(e) => handleInputChange(e.target.value)}
          variant="outlined"
          placeholder={placeholder}
          spellCheck={false}
          sx={{ mb: 2, backgroundColor: "#fff" }}
        />
        <Typography
          sx={{
            color:
              getWordCount(answers[index]) < wordLimit
                ? "error.main"
                : "success.main",
          }}
        >
          Word count: {getWordCount(answers[index])} / {wordLimit}
        </Typography>
      </Box>
    </Box>
  );
};

export default WritingTask;
