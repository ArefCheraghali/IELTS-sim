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
  Typography,
  Accordion,
  AccordionSummary,
  TextField,
} from "@mui/material";
import FishFarmingText from "./text/FishFarmingText";
const image1 = "/images/test2/test2ge reading part3.jpg";

const Part3 = ({ answers, setAnswers }) => {
  const possibleAnswers = ["A", "B", "C", "D"];

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
        <FishFarmingText />
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
          <b>READING PASSAGE 3</b>
        </Typography>
        <Typography sx={{ ml: 1, mb: 1, textAlign: "left" }}>
          You should spend about 20 minutes on <b>Questions 28-40</b>, which are
          based on Reading Passage 3.
        </Typography>
        <Typography sx={{ ml: 1, mb: 1, mt: 2 }}>
          <b>Questions 28 - 32</b>
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, textAlign: "left" }}>
          Look at the following statements (<b>Questions 28-32</b>) an d the
          list of people (<b>A-D</b>) below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Match each statement w ith the correct person, A, B, C or D
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Pick the correct letter in boxes 28-32.
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Box sx={{ display: "flex" }}>
            <b style={{ marginRight: "1em" }}>NB</b>
            <Typography sx={{ ml: 2, mb: 1 }}>
              You may use any letter more than once.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <b style={{ marginRight: "1em" }}>28</b>
            <Typography sx={{ ml: 2, mb: 1 }}>
              He believes that traditional fishing will not keep pace with
              population growth.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <b style={{ marginRight: "1em" }}>29</b>
            <Typography sx={{ ml: 2, mb: 1 }}>
              He states that a particular type of fish is suited to being
              farmed.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <b style={{ marginRight: "1em" }}>30</b>
            <Typography sx={{ ml: 2, mb: 1 }}>
              He analyses the taste of food carefully.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <b style={{ marginRight: "1em" }}>31</b>
            <Typography sx={{ ml: 2, mb: 1 }}>
              He believes that no artificial substances need to be added to the
              water.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <b style={{ marginRight: "1em" }}>32</b>
            <Typography sx={{ ml: 2, mb: 1 }}>
              He found that some people are reluctant to embrace the idea of
              fish farming.
            </Typography>
          </Box>
        </Box>
        <img
          src={image1}
          alt="Reading Passage Part 2"
          style={{ width: "35%", marginLeft: "10em" }}
        />
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <FormControl sx={{ mt: 2, mx: "1em" }} key={index}>
              <InputLabel>{`${28 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[27 + index] || ""}
                onChange={(e) => handleInputChange(27 + index, e.target.value)}
                label={`${28 + index}`}
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
        <Typography sx={{ ml: 1, mb: 1, mt: 2 }}>Questions 33 - 36</Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Choose the correct letter, <b>A, B, C</b> or <b>D</b>.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "60rem",
            alignItems: "flex-start",
            alignContent: "flex-start",
          }}
        >
          <FormControl>
            <Accordion sx={{ minWidth: "37em", bgcolor: "lightgray" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>33</b> One advantage of
                  aquaponics mentioned in the first paragraph is that
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "4em" }}
                value={answers[32] || ""}
                onChange={(e) => handleInputChange(32, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) people are quick to adopt it when they understand it. "
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B)  plants and animals benefit from each other."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) many cities are already equipped to put it into practice."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) food can reach customers the same day it is harvested. "
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion
              sx={{ minWidth: "35em", bgcolor: "lightgray", textAlign: "left" }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>34</b> What problem with
                  fish farming in the ocean is mentioned?
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "4em" }}
                value={answers[33] || ""}
                onChange={(e) => handleInputChange(33, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) Fish farms are too far from the consumer."
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B)  Diseased fish are becoming immune to medicines used."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C)  Conditions are becoming less favourable for some marine creatures. "
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D)  Other marine species may interfere with fish being farmed. "
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion sx={{ minWidth: "35em", bgcolor: "lightgray" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>35</b> A distinctive aspect
                  of the fish farming done by Edenworks is that
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "4em" }}
                value={answers[34] || ""}
                onChange={(e) => handleInputChange(34, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) they can maximise the use of space. "
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) they produce higher quality fish than other companies. "
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) they operate in taller buildings."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) they make use of artificial lighting."
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion
              sx={{ minWidth: "35em", bgcolor: "lightgray", textAlign: "left" }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>36</b> What does Green say
                  about designing farms within buildings?
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "4em" }}
                value={answers[35] || ""}
                onChange={(e) => handleInputChange(35, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) Urban architects have opposed these farms so far. "
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) These farms may bring other advantages as well as providing food. "
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) These farms should not be located too high up in the building. "
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) These farms will work well in a limited set of conditions. "
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
        </Box>
        <br />
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 37 - 40</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Complete the summary below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose <b>ONE WORD ONLY</b> from the text for each answer.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Write your answers in boxes 37-40.
        </Typography>
        <Typography sx={{ fontSize: "1.1em", ml: 20, mt: 1 }}>
          <b>Bringing back an old concept</b>
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Typography sx={{ ml: 2, mb: 1, mt: 2 }}>
            From 1 ,000 BC Chinese rice farmers made use of aquaponics, which
            helped
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 2 }}>
            them to increase their
            <TextField
              sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
              label="37"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(36, e.target.value)}
              value={answers[36]}
            />
            . They allowed fish into the rice
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 2 }}>
            paddies and the
            <TextField
              sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
              label="38"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(37, e.target.value)}
              value={answers[37]}
            />
            from the fish naturally enriched their
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
            crops. Edenworks is looking at ways to incorporate that idea, but
            with a
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 2 }}>
            system that is not connected to the
            <TextField
              sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
              label="39"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(38, e.target.value)}
              value={answers[38]}
            />
            . They are trying
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
            to find a way to produce food that tastes great by duplicating the
            qualities of
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 2 }}>
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="40"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(39, e.target.value)}
              value={answers[39]}
            />
            found in nature.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Part3;
