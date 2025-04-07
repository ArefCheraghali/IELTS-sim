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

import CrowText from "./text/CrowText";
const image3 = "/images/test1/readingAc1-passage2-3.jpg";

const Section2 = ({ answers, setAnswers }) => {
  const possibleAnswers = ["TRUE", "FALSE", "NOT GIVEN"];
  const possibleAnswers2 = ["A", "B", "C", "D", "E", "F", "G"];

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
        <CrowText />
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
          <b>READING PASSAGE 2</b>
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 14-26</b>, which are
          based on Reading Passage 2.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 14 - 17</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Label the diagrams below.</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Write your answers in boxes 14-17.
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
              width: "100%",
            }}
          >
            <img
              src={image3}
              alt="Reading Passage Part 2"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              mt: 2,
              mb: 2,
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
              label="14"
              autoComplete="off"
              onChange={(e) => handleInputChange(13, e.target.value)}
              value={answers[13]}
            />
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="15"
              autoComplete="off"
              onChange={(e) => handleInputChange(14, e.target.value)}
              value={answers[14]}
            />
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="16"
              autoComplete="off"
              onChange={(e) => handleInputChange(15, e.target.value)}
              value={answers[15]}
            />
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="17"
              autoComplete="off"
              onChange={(e) => handleInputChange(16, e.target.value)}
              value={answers[16]}
            />
          </Box>
        </Box>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 18 - 23</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Do the following statements agree with the information given in the
          passage 2?
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          In boxes 18-23 on your answer sheet, write
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Classify the following characteristics as belonging to
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            pl: "3rem",
            width: "90%",
          }}
        >
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "4.8em" }}>TRUE</b> if the statement agrees
            with the information
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "4.5em" }}>FALSE</b> if the statement
            contradicts the information
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "2em" }}>NOT GIVEN</b> if there is no
            information on this
          </ListItem>
        </List>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0,
            pl: "3rem",
            width: "90%",
          }}
        >
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>18 </Typography>
            There appears to be a fixed pattern for the padanus probe's
            construction.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>19 </Typography>
            There is plenty of evidence to indicate how the crows manufacture
            the padanus probe.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>20 </Typography>
            Crows seem to practise a number of times before making a usable
            padanus probe.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>21 </Typography>
            The researchers suspect the crows have a mental image of the padanus
            probe before they create it.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>22 </Typography>
            Research into how the padanus probe is made has helped to explain
            the toolmaking skills of many other bird species.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>23 </Typography>
            The researchers believe the ability to make the padanus probe is
            passed down to the crows in their genes.
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl sx={{ ml: 5, margin: "1em" }} key={index}>
              <InputLabel>{`${18 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[17 + index] || ""}
                onChange={(e) => handleInputChange(17 + index, e.target.value)}
                label={`${18 + index}`}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl sx={{ margin: "1em" }} key={index}>
              <InputLabel>{`${21 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[20 + index] || ""}
                onChange={(e) => handleInputChange(20 + index, e.target.value)}
                label={`${21 + index}`}
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
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 24 - 26</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose <b>THREE</b> letters, A-G.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Pick the correct letters in boxes 24-26 below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          According to the information in the passage, which <b>THREE</b> of the
          following features are probably common to both New Caledonian crows
          and human beings?
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0,
            pl: "3rem",
            width: "90%",
          }}
        >
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>A </Typography>
            keeping the same mate for life
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>B </Typography>
            having few natural predators
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>C </Typography>
            having a bias to the right when working
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>D </Typography>
            being able to process sequential tasks
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>E </Typography>
            living in extended family groups
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>F </Typography>
            eating a variety of foodstuffs
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>G </Typography>
            being able to adapt to diverse habitats
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl sx={{ margin: "1em" }} key={index}>
              <InputLabel>{`${24 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[23 + index] || ""}
                onChange={(e) => handleInputChange(23 + index, e.target.value)}
                label={`${24 + index}`}
              >
                {possibleAnswers2.map((answer) => (
                  <MenuItem key={answer} value={answer}>
                    {answer}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Section2;
