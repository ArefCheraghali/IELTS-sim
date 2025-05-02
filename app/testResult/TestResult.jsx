import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Grid, Paper, Divider, Button } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import "./print.css"; // Import the print CSS

const TestResults = () => {
  const [listeningAnswers, setListeningAnswers] = useState([]);
  const [readingAnswers, setReadingAnswers] = useState([]);
  const [writingAnswers, setWritingAnswers] = useState([]);
  const [user, setUser] = useState([]);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    const listening =
      JSON.parse(localStorage.getItem("listeningAnswers")) || [];
    const reading = JSON.parse(localStorage.getItem("readingAnswers")) || [];
    const writing = JSON.parse(localStorage.getItem("writingAnswers")) || [];
    const user = JSON.parse(localStorage.getItem("userData"));

    setListeningAnswers(listening);
    setReadingAnswers(reading);
    setWritingAnswers(writing);
    setUser(user);
  }, []);

  const renderAnswersGrid = (answers, title) => (
    <Box className="page-container">
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {answers.map((answer, index) => (
          <Grid item xs={3} key={index}>
            <Paper sx={{ padding: 2, textAlign: "center", display: "flex" }}>
              <Typography variant="body1" gutterBottom>{`${
                index + 1
              }`}</Typography>
              <Typography variant="body2" sx={{ ml: 2 }}>
                {answer}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography sx={{ mt: 2, padding: 2 }}>Total:</Typography>
      <Typography sx={{ mt: 2, padding: 2 }}>Score:</Typography>
    </Box>
  );

  return (
    <Box>
      <Box ref={componentRef} className="print-content">
        <Typography variant="h4" gutterBottom sx={{}}>
          {user.name} {user.familyName}'s Test Results ({user.phone})
        </Typography>
        {renderAnswersGrid(listeningAnswers, "Listening Answers:")}
        <Divider
          variant="middle"
          sx={{
            width: "100%",
            minWidth: "88rem",
            mt: 2,
            mb: 5,
            ml: -20,
            bgcolor: "black",
          }}
        />
        <Box className="page-break">
          {renderAnswersGrid(readingAnswers, "Reading Answers:")}
        </Box>
        <Divider
          variant="middle"
          sx={{
            width: "100%",
            minWidth: "88rem",
            mt: 2,
            mb: 5,
            ml: -20,
            bgcolor: "black",
          }}
        />
        <Paper
          sx={{ padding: 2, whiteSpace: "pre-line" }}
          className="page-break"
        >
          <Typography sx={{ mb: 1 }}>Writing task 1:</Typography>
          <Typography>{writingAnswers[0]}</Typography>
        </Paper>
        <Box
          sx={{
            mt: 3,
            padding: 2,
            bgcolor: "lightgray",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Typography>TR:</Typography>
          <Typography>CC:</Typography>
          <Typography>LR:</Typography>
          <Typography>GRA:</Typography>
        </Box>
        <Typography sx={{ mt: 2, padding: 2 }}>Total:</Typography>
        <Divider
          variant="middle"
          sx={{
            width: "100%",
            minWidth: "88rem",
            mt: 2,
            mb: 5,
            ml: -20,
            bgcolor: "black",
          }}
        />
        <Paper
          sx={{ padding: 2, whiteSpace: "pre-line" }}
          className="page-break"
        >
          <Typography sx={{ mb: 1 }}>Writing task 2:</Typography>
          <Typography>{writingAnswers[1]}</Typography>
        </Paper>
        <Box
          sx={{
            mt: 3,
            padding: 2,
            bgcolor: "lightgray",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Typography>TR:</Typography>
          <Typography>CC:</Typography>
          <Typography>LR:</Typography>
          <Typography>GRA:</Typography>
        </Box>
        <Typography sx={{ mt: 2, padding: 2 }}>Total:</Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handlePrint}
        sx={{ mt: 4 }}
      >
        Print Results
      </Button>
    </Box>
  );
};

export default TestResults;
