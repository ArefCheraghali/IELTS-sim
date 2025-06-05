"use client";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Instructions = () => {
  const router = useRouter();
  const [selectedTest, setSelectedTest] = useState(null);

  useEffect(() => {
    const testData = JSON.parse(localStorage.getItem("selectedTest"));
    setSelectedTest(testData);
  }, []);

  const handleStartTest = () => {
    router.push("/tests/sound-check");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        bgcolor: "#f5f5f5",
        padding: 4,
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          p: 4,
          width: "100%",
          maxWidth: 800,
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" gutterBottom>
          IELTS Test Instructions
        </Typography>

        {selectedTest && (
          <Typography variant="h6" gutterBottom>
            Test {selectedTest.testId}{" "}
            {selectedTest.testType.charAt(0).toUpperCase() +
              selectedTest.testType.slice(1)}
          </Typography>
        )}

        <Typography variant="body1" paragraph>
          This is a computer-delivered IELTS test. Please read the following
          instructions carefully:
        </Typography>

        <Typography variant="body1" component="div">
          <ul>
            <li>
              The test consists of three sections: Listening, Reading and
              Writing.
            </li>
            <li>You will start with the Listening section.</li>
            <li>
              Each section has specific time limits that will be displayed.
            </li>
            <li>
              Do not refresh the page during the test as your progress may be
              lost.
            </li>
            <li>
              You can use the navigation buttons at the bottom of the test page
              to move between questions.
            </li>
            <li>
              Click the "Submit" button when you have completed each section.
            </li>
            <li>
              If you run out of time, your answers will be submitted
              automatically.
            </li>
          </ul>
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleStartTest}
          sx={{ mt: 4 }}
        >
          I understand. Start the test
        </Button>
      </Box>
    </Box>
  );
};

export default Instructions;
