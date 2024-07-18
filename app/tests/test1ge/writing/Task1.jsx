import React from "react";
import { Box, TextField, Typography } from "@mui/material";

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
        height: "75vh",
        marginLeft: "-200px",
        marginRight: "-200px",
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
              You have been invited to attend an interview for a place studying
              a course in a college. Unfortunately because of a previous
              appointment you cannot come at the time they wish.
            </b>
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1em",
            }}
          >
            <b>
              Write a letter to the admissions tutor and explain your position.
              Apologise and offer to come on another day or later the same day.
              Ask also how long the interview will be and whether there will be
              any tests during it.
            </b>
          </Typography>
        </Box>
        <Typography sx={{ ml: 4, mb: 1 }}>
          {" "}
          Write at least 150 words.
        </Typography>
        <Typography sx={{ ml: 4, mb: 1 }}>
          You do <b>NOT</b> need to write your own address. Begin your letter as
          follows:
        </Typography>
        <Typography sx={{ ml: 12, mb: 1, mt: 3 }}>
          <b>Dear Sir,</b>
        </Typography>
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
            placeholder="Start writing your letter here..."
            autoComplete="off"
            onChange={(e) => handleInputChange(0, e.target.value)}
            value={answers[0]}
            sx={{ backgroundColor: "#fff", height: "50vh" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Task1;
