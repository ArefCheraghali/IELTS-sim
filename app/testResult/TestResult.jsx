import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const TestResults = () => {
  const [listeningAnswers, setListeningAnswers] = useState([]);
  const [readingAnswers, setReadingAnswers] = useState([]);
  const [writingAnswer, setWritingAnswer] = useState("");

  useEffect(() => {
    const listening =
      JSON.parse(localStorage.getItem("listeningAnswers")) || [];
    const reading = JSON.parse(localStorage.getItem("readingAnswers")) || [];
    const writing = localStorage.getItem("writingAnswer") || "";

    setListeningAnswers(listening);
    setReadingAnswers(reading);
    setWritingAnswer(writing);
  }, []);

  const renderAnswersGrid = (answers, title) => (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {answers.map((answer, index) => (
          <Grid item xs={3} key={index}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <Typography variant="body1" gutterBottom>{`Q${
                index + 1
              }`}</Typography>
              <Typography variant="body2">{answer}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Test Results
      </Typography>
      {renderAnswersGrid(listeningAnswers, "Listening Answers")}
      {renderAnswersGrid(readingAnswers, "Reading Answers")}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Writing Answer
        </Typography>
        <Paper sx={{ padding: 2, whiteSpace: "pre-line" }}>
          {writingAnswer}
        </Paper>
      </Box>
    </Box>
  );
};

export default TestResults;
