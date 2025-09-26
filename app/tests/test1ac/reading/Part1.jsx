"use client";
import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import TwoColumnLayout from "@/app/components/TwoColumnLayout";
import SeaweedText from "./text/SeaweedText";

const image4 = "/images/test1/readingAc1-passage1-4.jpg";

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef([]);

  useEffect(() => {
    const questionIndex = currentQuestion - 1;
    if (questionIndex >= 0 && questionIndex < 13) {
      const element = questionRefs.current[questionIndex];
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setTimeout(() => {
          const input = element.querySelector('input, [role="button"]');
          if (input) {
            input.focus();
            if (input.tagName === "INPUT") {
              input.select();
            }
          }
        }, 300);
      }
    }
  }, [currentQuestion]);

  const possibleAnswers = [
    "i",
    "ii",
    "iii",
    "iv",
    "v",
    "vi",
    "vii",
    "viii",
    "ix",
  ];

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const rightContent = (
    <Box>
      <Typography sx={{ ml: 5, fontSize: "1.1em", mb: 1 }}>
        <b>READING PASSAGE 1</b>
      </Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        You should spend about 20 minutes on <b>Questions 1-13</b>, which are
        based on Reading Passage 1.
      </Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>Questions 1 - 6</Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        Reading Passage 1 has six paragraphs, <b>A-F</b>.
      </Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        Choose the correct heading for each paragraph from the list of headings
        below.
      </Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        Pick the correct number, <b>i-ix</b>, in the boxes below.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "60rem",
        }}
      >
        <Box
          sx={{
            width: "70%",
            border: "1px solid #000",
            padding: "1rem",
            mb: 2,
            ml: 2,
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
            List of Headings
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {/* List of Headings */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography sx={{ minWidth: "2rem" }}>i</Typography>
              <Typography>
                The appearance and location of different seaweeds
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography sx={{ minWidth: "2rem" }}>ii</Typography>
              <Typography>The nutritional value of seaweeds</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography sx={{ minWidth: "2rem" }}>iii</Typography>
              <Typography>How seaweeds reproduce and grow</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography sx={{ minWidth: "2rem" }}>iv</Typography>
              <Typography>How to make agar from seaweeds</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography sx={{ minWidth: "2rem" }}>v</Typography>
              <Typography>The under-use of native seaweeds</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography sx={{ minWidth: "2rem" }}>vi</Typography>
              <Typography>Seaweed species at risk of extinction</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography sx={{ minWidth: "2rem" }}>vii</Typography>
              <Typography>Recipes for how to cook seaweeds</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography sx={{ minWidth: "2rem" }}>viii</Typography>
              <Typography>The range of seaweed products</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography sx={{ minWidth: "2rem" }}>ix</Typography>
              <Typography>Why seaweeds don't sink or dry out</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <FormControl
              sx={{ mt: 2, margin: "2em" }}
              key={index}
              ref={(el) => (questionRefs.current[index] = el)}
            >
              <InputLabel>{`${1 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[index] || ""}
                onChange={(e) => handleInputChange(index, e.target.value)}
                label={`Paragraph ${String.fromCharCode(65 + index)}`}
              >
                {possibleAnswers.map((answer) => (
                  <MenuItem key={answer} value={answer}>
                    {answer}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </Box>
      </Box>
      <Typography sx={{ ml: 2, mb: 1 }}>Questions 7 - 10</Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        Complete the flow-chart below.
      </Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        Choose <b>NO MORE THAN THREE WORDS</b> from the passage for each answer
      </Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        Write your answers in boxes 7-10
      </Typography>
      <Box sx={{ width: "100%" }}>
        <img
          src={image4}
          alt="Flow-chart for agar production"
          style={{ width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          mt: 2,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <TextField
            key={index}
            ref={(el) => (questionRefs.current[6 + index] = el)}
            sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
            label={`${7 + index}`}
            autoComplete="off"
            onChange={(e) => handleInputChange(6 + index, e.target.value)}
            value={answers[6 + index] || ""}
          />
        ))}
      </Box>
      <br />
      <Typography sx={{ ml: 2, mb: 1 }}>Questions 11 - 13</Typography>
      <Typography sx={{ ml: 2, mb: 1 }}>
        Classify the following characteristics as belonging to
      </Typography>
      <List>
        <ListItem>A) brown seaweed</ListItem>
        <ListItem>B) green seaweed</ListItem>
        <ListItem>C) red seaweed</ListItem>
      </List>
      <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
        Pick the correct, A, B or C, in boxes 11-13.
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
          pl: "3rem",
          width: "90%",
        }}
      >
        {[
          {
            num: 11,
            text: "can survive the heat and dryness at the high-water mark",
          },
          { num: 12, text: "grow far out in the open sea" },
          { num: 13, text: "share their site with karengo seaweed" },
        ].map(({ num, text }, index) => (
          <ListItem
            key={num}
            sx={{ display: "flex", flexDirection: "row" }}
            ref={(el) => (questionRefs.current[10 + index] = el)}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>{num}</Typography>
            {text}
            <Box sx={{ minWidth: 120, ml: "1em" }}>
              <FormControl>
                <InputLabel>{num}</InputLabel>
                <Select
                  sx={{ width: "5em" }}
                  value={answers[10 + index] || ""}
                  label={`${num}`}
                  onChange={(e) =>
                    handleInputChange(10 + index, e.target.value)
                  }
                >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<SeaweedText />}
      rightContent={rightContent}
    />
  );
};

export default Part1;
