"use client";
import React, { useEffect, useRef, useState } from "react"; // Added useRef, useEffect, useState
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
  List, // Added for the "List of People"
  ListItem, // Added
  Paper, // For better visual grouping if needed
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // For Accordion
import FishFarmingText from "./text/FishFarmingText"; // Assuming this is your reading passage

// Define question data for Questions 28-32 for easier mapping
const matchingPeopleStatements = [
  {
    number: 28,
    text: "He believes that traditional fishing will not keep pace with population growth.",
  },
  {
    number: 29,
    text: "He states that a particular type of fish is suited to being farmed.",
  },
  { number: 30, text: "He analyses the taste of food carefully." },
  {
    number: 31,
    text: "He believes that no artificial substances need to be added to the water.",
  },
  {
    number: 32,
    text: "He found that some people are reluctant to embrace the idea of fish farming.",
  },
];

// List of People data (from the image)
const listOfPeopleData = [
  { letter: "A", name: "Martin Schreibman" },
  { letter: "B", name: "Jason Green" },
  { letter: "C", name: "Sam Yoo" },
  { letter: "D", name: "Neil Sims" },
];

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  const possibleAnswersMatching = ["A", "B", "C", "D"]; // For Q28-32

  // Questions 28-40 -> 13 questions total
  // Q28 -> index 0, Q29 -> index 1, ..., Q40 -> index 12
  const questionRefs = React.useRef(
    Array(13)
      .fill(null)
      .map(() => React.createRef())
  );
  const prevCurrentQuestionRef = useRef();
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  useEffect(() => {
    const isQuestionInThisPart = currentQuestion >= 28 && currentQuestion <= 40;

    if (
      isQuestionInThisPart &&
      prevCurrentQuestionRef.current !== undefined &&
      prevCurrentQuestionRef.current !== currentQuestion
    ) {
      const index = currentQuestion - 28; // 0-based index for refs array
      const targetRef = questionRefs.current[index];

      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        // Handle focus for TextFields (Q37-40)
        if (currentQuestion >= 37 && currentQuestion <= 40) {
          // targetRef.current is the TextField's input element due to inputRef
          setTimeout(() => {
            targetRef.current.focus();
          }, 100); // Delay for scroll
        }
        // Handle accordion expansion (Q33-36)
        else if (currentQuestion >= 33 && currentQuestion <= 36) {
          setExpandedAccordion(`panel${currentQuestion}`);
        }
      }
    }
    prevCurrentQuestionRef.current = currentQuestion;
  }, [currentQuestion]);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value; // Index is already 0-based for answers array
    setAnswers(newAnswers);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "76vh",
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
          padding: 2,
        }}
      >
        <Typography sx={{ fontSize: "1.1em", mb: 1, fontWeight: "bold" }}>
          READING PASSAGE 3
        </Typography>
        <Typography sx={{ mb: 1, textAlign: "left" }}>
          You should spend about 20 minutes on <b>Questions 28-40</b>, which are
          based on Reading Passage 3.
        </Typography>

        {/* Questions 28 - 32: Matching People */}
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontSize: "1rem", fontWeight: "bold", mt: 2, mb: 1 }}
        >
          Questions 28 - 32
        </Typography>
        <Typography sx={{ mb: 1, textAlign: "left" }}>
          Look at the following statements (<b>Questions 28-32</b>) and the list
          of people (<b>A-D</b>) below.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Match each statement with the correct person, A, B, C or D.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Write the correct letter in boxes 28-32.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          <b>NB</b> You may use any letter more than once.
        </Typography>

        {/* List of People - Implemented from Image */}
        <Paper
          elevation={1}
          sx={{
            p: 2,
            mb: 3,
            backgroundColor: "grey.100",
            width: "fit-content",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}
          >
            List of People
          </Typography>
          <List dense disablePadding>
            {listOfPeopleData.map((person) => (
              <ListItem key={person.letter} sx={{ py: 0.2 }}>
                <Typography component="span" sx={{ fontWeight: "bold", mr: 2 }}>
                  {person.letter}
                </Typography>
                <Typography component="span">{person.name}</Typography>
              </ListItem>
            ))}
          </List>
        </Paper>

        {matchingPeopleStatements.map((q) => (
          <Box
            key={q.number}
            ref={questionRefs.current[q.number - 28]} // Q28 is index 0
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1.5,
              width: "100%",
              fontSize: "1em",
            }}
          >
            <FormControl
              sx={{ mr: 2, minWidth: { xs: "80px", sm: "100px" } }}
              size="small"
            >
              <InputLabel id={`q${q.number}-label`}>{q.number}</InputLabel>
              <Select
                labelId={`q${q.number}-label`}
                label={`${q.number}`}
                value={answers[q.number - 1] || ""} // answers array is 0-indexed from Q1 overall
                onChange={(e) =>
                  handleInputChange(q.number - 1, e.target.value)
                }
              >
                {possibleAnswersMatching.map((answerOption) => (
                  <MenuItem key={answerOption} value={answerOption}>
                    {answerOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography variant="body2" sx={{ flexGrow: 1, textAlign: "left" }}>
              {q.text}
            </Typography>
          </Box>
        ))}

        <Typography
          variant="h6"
          component="h3"
          sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3, mb: 1 }}
        >
          Questions 33 - 36
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Choose the correct letter, <b>A, B, C</b> or <b>D</b>.
        </Typography>
        {[
          {
            qNum: 33,
            questionText:
              "One advantage of aquaponics mentioned in the first paragraph is that",
            options: [
              {
                value: "A",
                label: "people are quick to adopt it when they understand it.",
              },
              {
                value: "B",
                label: "plants and animals benefit from each other.",
              },
              {
                value: "C",
                label:
                  "many cities are already equipped to put it into practice.",
              },
              {
                value: "D",
                label: "food can reach customers the same day it is harvested.",
              },
            ],
          },
          {
            qNum: 34,
            questionText:
              "What problem with fish farming in the ocean is mentioned?",
            options: [
              {
                value: "A",
                label: "Fish farms are too far from the consumer.",
              },
              {
                value: "B",
                label: "Diseased fish are becoming immune to medicines used.",
              },
              {
                value: "C",
                label:
                  "Conditions are becoming less favourable for some marine creatures.",
              },
              {
                value: "D",
                label:
                  "Other marine species may interfere with fish being farmed.",
              },
            ],
          },
          {
            qNum: 35,
            questionText:
              "A distinctive aspect of the fish farming done by Edenworks is that",
            options: [
              { value: "A", label: "they can maximise the use of space." },
              {
                value: "B",
                label: "they produce higher quality fish than other companies.",
              },
              { value: "C", label: "they operate in taller buildings." },
              { value: "D", label: "they make use of artificial lighting." },
            ],
          },
          {
            qNum: 36,
            questionText:
              "What does Green say about designing farms within buildings?",
            options: [
              {
                value: "A",
                label: "Urban architects have opposed these farms so far.",
              },
              {
                value: "B",
                label:
                  "These farms may bring other advantages as well as providing food.",
              },
              {
                value: "C",
                label:
                  "These farms should not be located too high up in the building.",
              },
              {
                value: "D",
                label:
                  "These farms will work well in a limited set of conditions.",
              },
            ],
          },
        ].map((item) => (
          <Accordion
            key={item.qNum}
            ref={questionRefs.current[item.qNum - 28]} // Q33 is index 5
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "calc(100% - 32px)" },
              bgcolor: "grey.100",
              mb: 1,
            }}
            expanded={expandedAccordion === `panel${item.qNum}`}
            onChange={handleAccordionChange(`panel${item.qNum}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item.qNum}-content`}
              id={`panel${item.qNum}-header`}
            >
              <Typography>
                <b style={{ marginRight: "1em" }}>{item.qNum}</b>{" "}
                {item.questionText}
              </Typography>
            </AccordionSummary>
            <RadioGroup
              sx={{ pl: "2em", py: 1 }} // Indent options
              value={answers[item.qNum - 1] || ""}
              onChange={(e) => handleInputChange(item.qNum - 1, e.target.value)}
            >
              {item.options.map((opt) => (
                <FormControlLabel
                  key={opt.value}
                  value={opt.value}
                  control={<Radio size="small" />}
                  label={`${opt.value}) ${opt.label}`}
                  sx={{ mb: 0.5 }}
                />
              ))}
            </RadioGroup>
          </Accordion>
        ))}
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3, mb: 1 }}
        >
          Questions 37 - 40
        </Typography>
        <Typography sx={{ mb: 1 }}>Complete the summary below.</Typography>
        <Typography sx={{ mb: 1 }}>
          Choose <b>ONE WORD ONLY</b> from the text for each answer.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Write your answers in boxes 37-40.
        </Typography>
        <Typography
          sx={{
            fontSize: "1.05em",
            fontWeight: "bold",
            mb: 2,
            textAlign: "center",
          }}
        >
          Bringing back an old concept
        </Typography>
        <Box sx={{ px: 2, textAlign: "left" }}>
          <Typography variant="body1" component="p" sx={{ lineHeight: 2.2 }}>
            {" "}
            {/* Increased line-height for readability */}
            From 1,000 BC Chinese rice farmers made use of aquaponics, which
            helped them to increase their
            <TextField
              variant="standard"
              label="37"
              size="small"
              autoComplete="off"
              sx={{ width: "12em", mx: 0.5, verticalAlign: "baseline" }} // Align with the text baseline
              onChange={(e) => handleInputChange(36, e.target.value)}
              value={answers[36] || ""}
              inputRef={questionRefs.current[37 - 28]} // Q37 is index 9
            />
            . They allowed fish into the rice paddies and the
            <TextField
              variant="standard"
              label="38"
              size="small"
              autoComplete="off"
              sx={{ width: "12em", mx: 0.5, verticalAlign: "baseline" }}
              onChange={(e) => handleInputChange(37, e.target.value)}
              value={answers[37] || ""}
              inputRef={questionRefs.current[38 - 28]} // Q38 is index 10
            />
            from the fish naturally enriched their crops. Edenworks is looking
            at ways to incorporate that idea, but with a system that is not
            connected to the
            <TextField
              variant="standard"
              label="39"
              size="small"
              autoComplete="off"
              sx={{ width: "12em", mx: 0.5, verticalAlign: "baseline" }}
              onChange={(e) => handleInputChange(38, e.target.value)}
              value={answers[38] || ""}
              inputRef={questionRefs.current[39 - 28]} // Q39 is index 11
            />
            . They are trying to find a way to produce food that tastes great by
            duplicating the qualities of
            <TextField
              variant="standard"
              label="40"
              size="small"
              autoComplete="off"
              sx={{ width: "10em", mx: 0.5, verticalAlign: "baseline" }}
              onChange={(e) => handleInputChange(39, e.target.value)}
              value={answers[39] || ""}
              inputRef={questionRefs.current[40 - 28]} // Q40 is index 12
            />
            found in nature.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Part3;
