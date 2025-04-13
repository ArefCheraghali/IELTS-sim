import React, { useRef, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useHighlight } from "app/contexts/HighlightContext";
import ReadingHighlightMenu from "app/components/ReadingHighlightMenu";

import SeaweedText from "./text/seaweedText";
const image4 = "/images/test1/readingAc1-passage1-4.jpg";

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  const refs = useRef(Array(13).fill(null));
  const { handleContextMenu, textRef } = useHighlight();

  useEffect(() => {
    // Focus on the element corresponding to the current question
    if (currentQuestion >= 1 && currentQuestion <= 13) {
      const index = currentQuestion - 1;
      const element = refs.current[index];
      if (element) {
        // Scroll the element into view first
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        // Handle focus based on question type
        if (index < 6 || index >= 10) {
          // For Select components (questions 1-6 and 11-13)
          const input = element.querySelector("input");
          if (input) {
            setTimeout(() => input.focus(), 100);
          }
        } else if (index >= 6 && index <= 9) {
          // For text fields (questions 7-10)
          setTimeout(() => element.focus(), 100);
        }
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
        ref={textRef}
        onContextMenu={handleContextMenu}
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 2,
          borderRight: "1px solid #ccc",
        }}
      >
        <SeaweedText />
        <ReadingHighlightMenu />
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
          Choose the correct heading for each paragraph from the list of
          headings below.
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
              <FormControl sx={{ mt: 2, margin: "2em" }} key={index}>
                <InputLabel>{`${1 + index}`}</InputLabel>
                <Select
                  ref={(el) => (refs.current[index] = el)}
                  sx={{ width: "5em" }}
                  value={answers[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  label={`${1 + index}`}
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
          Choose <b>NO MORE THAN THREE WORDS</b> from the passage for each
          answer
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Write your answers in boxes 7-10
        </Typography>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <img
            src={image4}
            alt="Reading Passage Part 1"
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            mt: 2,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <TextField
            ref={(el) => (refs.current[6] = el)}
            sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
            label="7"
            autoComplete="off"
            onChange={(e) => handleInputChange(6, e.target.value)}
            value={answers[6]}
          />
          <TextField
            ref={(el) => (refs.current[7] = el)}
            sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
            label="8"
            autoComplete="off"
            onChange={(e) => handleInputChange(7, e.target.value)}
            value={answers[7]}
          />
          <TextField
            ref={(el) => (refs.current[8] = el)}
            sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
            label="9"
            autoComplete="off"
            onChange={(e) => handleInputChange(8, e.target.value)}
            value={answers[8]}
          />
          <TextField
            ref={(el) => (refs.current[9] = el)}
            sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
            label="10"
            autoComplete="off"
            onChange={(e) => handleInputChange(9, e.target.value)}
            value={answers[9]}
          />
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
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>11 </Typography>
            can survive the heat and dryness at the high-water mark
            <Box sx={{ minWidth: 120, ml: "1em" }}>
              <FormControl>
                <InputLabel>11</InputLabel>
                <Select
                  ref={(el) => (refs.current[10] = el)}
                  sx={{ width: "5em" }}
                  value={answers[10] || ""}
                  label="11"
                  onChange={(e) => handleInputChange(10, e.target.value)}
                >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>12 </Typography>
            grow far out in the open sea
            <Box sx={{ minWidth: 120, ml: "1em" }}>
              <FormControl>
                <InputLabel>12</InputLabel>
                <Select
                  ref={(el) => (refs.current[11] = el)}
                  sx={{ width: "5em" }}
                  value={answers[11] || ""}
                  label="12"
                  onChange={(e) => handleInputChange(11, e.target.value)}
                >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>13 </Typography>
            share their site with karengo seaweed
            <Box sx={{ minWidth: 120, ml: "1em" }}>
              <FormControl>
                <InputLabel>13</InputLabel>
                <Select
                  ref={(el) => (refs.current[12] = el)}
                  sx={{ width: "5em" }}
                  value={answers[12] || ""}
                  label="13"
                  onChange={(e) => handleInputChange(12, e.target.value)}
                >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Part1;
