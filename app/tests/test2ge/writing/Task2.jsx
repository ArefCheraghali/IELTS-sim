import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const Part2 = ({ answers, setAnswers }) => {
  const wordLimit = 250;

  const getWordCount = (text) => {
    return text.trim().split(/\s+/).length;
  };
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
        <Typography variant="h5" sx={{ ml: 4, mb: 3 }}>
          <b>Writing Task 2</b>
        </Typography>
        <Typography sx={{ ml: 4, mb: 2 }}>
          You should spend about 40 minutes on this task.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            bgcolor: "lightgray",
            borderStyle: "solid",
            borderWidth: 1,
            padding: "0.5em",
            ml: 4,
            mb: 3,
            pl: 2,
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.1em",
              mb: 1,
            }}
          >
            Write about the following topic:
            <b>
              <br />
              <br /> Many people today buy ready-made food rather than spending
              time cooking.
              <br /> What do you think are the reasons for this?
              <br /> Do you think the advantages of this development outweigh
              the disadvantages?
            </b>
            <br />
            <br />
            Give reasons for your answer and include any relevant examples from
            your own knowledge or experience.
          </Typography>
        </Box>
        <Typography sx={{ ml: 4, mb: 2 }}>Write at least 250 words.</Typography>
      </Box>
      <Box
        sx={{
          width: "55%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "flex-start",
          alignItems: "flex-start",
          padding: 2,
        }}
      >
        <Typography variant="body2">
          Word Count: {getWordCount(answers[1])} / {wordLimit}
        </Typography>
        <Box sx={{ mt: 4, width: "100%", height: "100%" }}>
          <TextField
            fullWidth
            multiline
            rows={15}
            variant="outlined"
            placeholder="Start writing your essay here..."
            autoComplete="off"
            onChange={(e) => handleInputChange(1, e.target.value)}
            spellCheck={false}
            value={answers[1]}
            sx={{ backgroundColor: "#fff", height: "50vh" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Part2;
