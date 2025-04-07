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
  List,
  ListItem,
} from "@mui/material";
import JellyfishText from "./text/JellyfishText";
import DragDrop from "../../../components/DragDrop";

const initialQuestions = [
  {
    id: "36",
    text: "37. Researchers working in Norway and the Arctic have shown that",
    answerId: null,
  },
  {
    id: "37",
    text: "38. The use of DNA sequencing and isotope analysis has proved that",
    answerId: null,
  },
  {
    id: "38",
    text: "39. Research into ‘upside-down jellyfish’ showed that",
    answerId: null,
  },
  {
    id: "39",
    text: "40. Following research in the Mediterranean Sea, it has been claimed that",
    answerId: null,
  },
];

const initialAnswers = [
  { id: "A", text: "A) it was wrong to assume that jellyfish do not sleep." },
  {
    id: "B",
    text: "B) certain species of jellyfish have changed their usual diet.",
  },
  {
    id: "C",
    text: "C) jellyfish can be observed and tracked in ways that do not injure them.",
  },
  {
    id: "D",
    text: "D) one particular type of jellyfish may be able to live forever.",
  },
  {
    id: "E",
    text: "E) there are more types of jellyfish than previously realised.",
  },
  {
    id: "F",
    text: "F) some jellyfish are more dangerous to humans than once thought.",
  },
];

const Part3 = ({ answers, setAnswers }) => {
  const possibleAnswers = ["YES", "NO", "NOT GIVEN"];

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
        <JellyfishText />
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
        <Typography sx={{ ml: 1, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 27-40</b>, which are
          based on Reading Passage 3.
        </Typography>
        <Typography sx={{ ml: 1, mb: 1, mt: 2 }}>Questions 27 - 32</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Do the following statements agree with the claims of the writer in the
          passage 3?
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>In boxes 27-32, pick</Typography>
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
            <b style={{ marginRight: "4.8em" }}>YES</b> if the statement agrees
            with the claims of the writer
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "4.5em" }}>NO</b> if the statement
            contradicts the claims of the writer
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "2em" }}>NOT GIVEN</b> If it is impossible
            to say what the writer thinks about this
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
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>27 </Typography>
            It is surprising that many people have negative views of jellyfish.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>28 </Typography>
            In the 20<sup>th</sup> century, scientists should have conducted
            more studies of jellyfish
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>29 </Typography>
            Some jellyfish species that used to live in shallow water may be
            moving to deep water.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>30 </Typography>
            Dr Karen Hansen’s views about jellyfish need to be confirmed by
            additional research.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>31 </Typography>
            It is possible to reverse the consequences of climate change.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>32 </Typography>
            The research findings of Paul Dewar have been accepted by other
            academics.
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
              <InputLabel>{`${27 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[26 + index] || ""}
                onChange={(e) => handleInputChange(26 + index, e.target.value)}
                label={`${27 + index}`}
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
              <InputLabel>{`${30 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[29 + index] || ""}
                onChange={(e) => handleInputChange(29 + index, e.target.value)}
                label={`${30 + index}`}
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
            <Accordion sx={{ bgcolor: "#ebebeb" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>33</b> What is the writer
                  doing in the fourth paragraph?
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[32] || ""}
                onChange={(e) => handleInputChange(32, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) comparing several different types of jellyfish"
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) dismissing some common ideas about jellyfish"
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) contrasting various early theories about jellyfish"
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) rejecting some scientific findings regarding jellyfish"
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion sx={{ bgcolor: "#ebebeb" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>34</b> What does the writer
                  conclude in the fifth paragraph?
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[33] || ""}
                onChange={(e) => handleInputChange(33, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) Jellyfish have advantages and disadvantages for humans."
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) Humans have had a serious negative impact on jellyfish."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) Jellyfish will cause problems for humans in the future."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) Humans and jellyfish are fundamentally similar."
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion sx={{ bgcolor: "#ebebeb" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>35</b> What is the writer’s
                  main point in the sixth paragraph?
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "4.5em" }}
                value={answers[34] || ""}
                onChange={(e) => handleInputChange(34, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) Jellyfish may once have inhabited dry land."
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) Jellyfish improve the environment they live in."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) Jellyfish have proved able to survive over time."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) Jellyfish have caused other species to become endangered."
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion sx={{ bgcolor: "#ebebeb" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>36</b> The writer refers to
                  the ‘scyphozoa’ in order to
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[35] || ""}
                onChange={(e) => handleInputChange(35, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) exemplify the great size of some jellyfish."
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) illustrate that jellyfish are biologically complex."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) explain why certain jellyfish may become extinct."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) suggest that scientists still misunderstand jellyfish."
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
        </Box>
        <br />
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 37 - 40</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Complete each sentence with the correct ending, <b>A-F</b>, below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Drag the correct letter <b>A-F</b> in boxes 37-40.
        </Typography>
        <DragDrop
          initialQuestions={initialQuestions}
          initialAnswers={initialAnswers}
          setAnswers={setAnswers}
          answers={answers}
          title=""
          infoTitle=""
        />
      </Box>
    </Box>
  );
};

export default Part3;
