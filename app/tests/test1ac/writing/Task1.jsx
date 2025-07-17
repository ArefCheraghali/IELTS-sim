import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const image1 = "/images/test1/writingAc1-task1.jpg";

const Task1 = ({ answers, setAnswers }) => {
  const wordLimit = 150;

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
        height: "calc(100vh - 120px - 26px )",
      }}
    >
      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 2,
          borderRight: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5" sx={{ ml: 4, mb: 2 }}>
          <b>Writing Task 1</b>
        </Typography>
        <Typography sx={{ ml: 4, mb: 1 }}>
          You should spend about 20 minutes on this task.
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
            mb: 1,
            pl: 2,
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.1em",
            }}
          >
            <b>
              The charts below show the proportions of the world’s oil resources
              held in different areas, together with the proportions consumed
              annually in the same areas.
            </b>
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1em",
            }}
          >
            <b>
              Summarise the information by selecting and reporting the main
              features, and make comparisons where relevant.
            </b>
          </Typography>
        </Box>
        <Typography sx={{ ml: 4, mb: 1 }}>
          {" "}
          Write at least 150 words.
        </Typography>
        <img
          src={image1}
          alt="Reading Passage Part 1"
          style={{ width: "100%" }}
        />
      </Box>

      <Box
        sx={{
          width: "50%",
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
          Word Count: {getWordCount(answers[0])} / {wordLimit}
        </Typography>
        <Box sx={{ mt: 4, width: "100%", height: "100%" }}>
          <TextField
            fullWidth
            multiline
            rows={15}
            variant="outlined"
            placeholder="Start writing your essay here..."
            autoComplete="off"
            onChange={(e) => handleInputChange(0, e.target.value)}
            spellCheck={false}
            value={answers[0]}
            sx={{ backgroundColor: "#fff", height: "50vh" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Task1;
