import React from "react";
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

import SeaweedText from "./text/seaweedText";
const image3 = "/images/test1/readingAc1-passage1-3.jpg";
const image4 = "/images/test1/readingAc1-passage1-4.jpg";

const Section1 = ({ answers, setAnswers }) => {
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
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 2,
          borderRight: "1px solid #ccc",
        }}
      >
        <SeaweedText />
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
            }}
          >
            <img
              src={image3}
              alt="Reading Passage Part 1"
              style={{ width: "550px" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            {Array.from({ length: 6 }).map((_, index) => (
              <FormControl sx={{ mt: 2, margin: "2em" }} key={index}>
                <InputLabel>{`${1 + index}`}</InputLabel>
                <Select
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
            sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
            label="7"
            autoComplete="off"
            onChange={(e) => handleInputChange(6, e.target.value)}
            value={answers[6]}
          />
          <TextField
            sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
            label="8"
            autoComplete="off"
            onChange={(e) => handleInputChange(7, e.target.value)}
            value={answers[7]}
          />
          <TextField
            sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
            label="9"
            autoComplete="off"
            onChange={(e) => handleInputChange(8, e.target.value)}
            value={answers[8]}
          />
          <TextField
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

export default Section1;