import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import CalisthenicsText from "./text/CalisthenicsText";

const image3 = "/images/test1/readingAc1-passage3-3.jpg";

const Section3 = ({ answers, setAnswers }) => {
  const possibleAnswers = ["A", "B", "C", "D", "E", "F", "G", "H"];

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
        <CalisthenicsText />
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
        <Typography sx={{ ml: 3, fontSize: "1.1em", mb: 1 }}>
          <b>Part 3</b>
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 29-40</b>, which are
          based on Reading Passage 3 (CALISTHENICS).
        </Typography>
        <br />
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 29 - 35</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Which paragraph contains the following information?
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          The text has eight paragraphs, <b>A-H</b>.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Pick the correct letter in boxes 29-35.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>29</b> the origin of the word
          ‘calisthenics’
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>30</b> the last popular supporter of
          calisthenics
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>31</b> the first use of calisthenics
          as a training method
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>32</b> a multidisciplinary approach
          to all-round health and strength
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>33</b> reasons for the survival of
          calisthenics throughout the ages
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>34</b> the use of a medical
          substance to increase muscle mass and strength
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>35</b> a reference to travelling
          showmen who displayed their strength for audiences
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          {Array.from({ length: 7 }).map((_, index) => (
            <FormControl sx={{ mt: 2, margin: "1em" }} key={index}>
              <InputLabel>{`${29 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[28 + index] || ""}
                onChange={(e) => handleInputChange(28 + index, e.target.value)}
                label={`${29 + index}`}
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
        <br />
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 36 - 40</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Complete the summary below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Write your answers in boxes 36-40.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
          During the sixties and seventies, attaining huge muscles became more
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 2 }}>
          important than
          <TextField
            sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
            label="36"
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(35, e.target.value)}
            value={answers[35]}
          />
          or having an attractive-looking body.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
          The first people to take up this new sport of body building had a
          background
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 2 }}>
          in calisthenics but the most famous practitioners became known as
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 2 }}>
          <TextField
            sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
            label="37"
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(36, e.target.value)}
            value={answers[36]}
          />
          on account of the impressive size of their muscles.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
          Drugs and mechanical devices were used to develop individual muscles
          to
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
          a monstrous size. Calisthenics then became the domain of ‘weaker’
          people:
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 2 }}>
          females, children and those recovering from
          <TextField
            sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
            label="38"
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(37, e.target.value)}
            value={answers[37]}
          />
          . Much
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
          of the advanced knowledge about calisthenics was lost and the method
          was
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
          subsequently downgraded to the status of a simple, userfriendly
          activity.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 2 }}>
          Once a person became skilled at this, he would progress to
          <TextField
            sx={{ mt: -3, ml: 1, width: "7em" }}
            label="39"
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(38, e.target.value)}
            value={answers[38]}
          />
          .
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
          Currently a revival of calisthenics is under way as extreme muscle
          building
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 2 }}>
          can harm the body leaving it sore, out of balance, and in poor
          <TextField
            sx={{ mt: -3, ml: 1, width: "6em" }}
            label="40"
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(39, e.target.value)}
            value={answers[39]}
          />
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default Section3;
