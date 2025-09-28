import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const image1 = "/images/test2/test2ac writing task1.jpg";

const Task1 = ({ answers, setAnswers }) => {
  const wordLimit = 150;

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
          width: "50%",
          overflowY: "auto",
          padding: 2,
          borderRight: "1px solid #ccc",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          <b>Writing Task 1</b>
        </Typography>
        <Typography sx={{ mb: 1 }}>
          You should spend about 20 minutes on this task.
        </Typography>
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
            The diagrams below show the main reasons workers chose to work from
            home and the hours males and females worked at home for the year
            2019.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Summarise the information by selecting and reporting the main
            features, and make comparisons where relevant.
          </Typography>
        </Box>
        <Typography sx={{ mb: 2 }}>Write at least 150 words.</Typography>
        <img
          src={image1}
          alt="Work from home statistics graphs"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Box>

      <Box
        sx={{
          width: "50%",
          padding: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body2"
          sx={{ mb: 1, textAlign: "right", color: "text.secondary" }}
        >
          Word Count: {getWordCount(answers[0] || "")} / {wordLimit}
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={20}
          variant="outlined"
          placeholder="Start writing your summary here..."
          autoComplete="off"
          onChange={(e) => handleInputChange(0, e.target.value)}
          spellCheck={false}
          value={answers[0] || ""}
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

export default Task1;
