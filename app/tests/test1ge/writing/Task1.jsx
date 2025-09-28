import React from "react";
import { Box, TextField, Typography } from "@mui/material";

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
        <Typography sx={{ mb: 2 }}>
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
          <Typography>
            You recently bought a piece of equipment for your kitchen but it did
            not work. You phoned the shop but no action was taken.
          </Typography>
          <br />
          <Typography>
            Write a letter to the shop manager. In your letter:
          </Typography>
          <ul style={{ marginTop: "8px", fontSize: "20px" }}>
            <li>describe the problem with the equipment</li>
            <li>explain what happened when you phoned the shop</li>
            <li>say what you would like the manager to do</li>
          </ul>
        </Box>
        <Typography sx={{ mb: 1 }}>
          Write at least <b>150 words</b>.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          You do <b>NOT</b> need to write any addresses.
        </Typography>
        <Typography>
          Begin your letter as follows:
          <br />
          <br />
          <b>Dear Sir or Madam,</b>
          ...
        </Typography>
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
          placeholder="Start writing your letter here..."
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
