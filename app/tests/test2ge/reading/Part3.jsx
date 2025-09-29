"use client";
import React, { useEffect, useRef, useState } from "react";
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
  List,
  ListItem,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import FishFarmingText from "./text/FishFarmingText";

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

const radioQuestionsData = [
  {
    qNum: 33,
    questionText:
      "One advantage of aquaponics mentioned in the first paragraph is that",
    options: [
      {
        value: "A",
        label: "people are quick to adopt it when they understand it.",
      },
      { value: "B", label: "plants and animals benefit from each other." },
      {
        value: "C",
        label: "many cities are already equipped to put it into practice.",
      },
      {
        value: "D",
        label: "food can reach customers the same day it is harvested.",
      },
    ],
  },
  {
    qNum: 34,
    questionText: "What problem with fish farming in the ocean is mentioned?",
    options: [
      { value: "A", label: "Fish farms are too far from the consumer." },
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
        label: "Other marine species may interfere with fish being farmed.",
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
    questionText: "What does Green say about designing farms within buildings?",
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
        label: "These farms should not be located too high up in the building.",
      },
      {
        value: "D",
        label: "These farms will work well in a limited set of conditions.",
      },
    ],
  },
];

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(
    Array(13)
      .fill(null)
      .map(() => React.createRef())
  );
  const isInitialMount = useRef(true);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (currentQuestion >= 28 && currentQuestion <= 40) {
      const index = currentQuestion - 28;
      const element = questionRefs.current[index]?.current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          setExpandedAccordion(`panel${currentQuestion}`);
          const input = element.querySelector('input, [role="button"]');
          if (input) input.focus();
        }, 300);
      }
    }
  }, [currentQuestion]);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const rightContent = (
    <Box>
      <Typography sx={{ fontSize: "1.1em", mb: 1, fontWeight: "bold" }}>
        READING PASSAGE 3
      </Typography>
      <Typography sx={{ mb: 1 }}>
        You should spend about 20 minutes on <b>Questions 28-40</b>.
      </Typography>

      <Typography
        variant="h6"
        component="h3"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 2, mb: 1 }}
      >
        Questions 28 - 32
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Match each statement with the correct person, <b>A, B, C</b> or <b>D</b>
        .
      </Typography>
      <Paper
        elevation={1}
        sx={{ p: 2, mb: 2, backgroundColor: "grey.100", width: "fit-content" }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
          List of People
        </Typography>
        <List dense disablePadding>
          <ListItem sx={{ py: 0.2 }}>
            <Typography>
              <b>A</b> Martin Schreibman
            </Typography>
          </ListItem>
          <ListItem sx={{ py: 0.2 }}>
            <Typography>
              <b>B</b> Jason Green
            </Typography>
          </ListItem>
          <ListItem sx={{ py: 0.2 }}>
            <Typography>
              <b>C</b> Sam Yoo
            </Typography>
          </ListItem>
          <ListItem sx={{ py: 0.2 }}>
            <Typography>
              <b>D</b> Neil Sims
            </Typography>
          </ListItem>
        </List>
      </Paper>

      {matchingPeopleStatements.map((q, index) => (
        <Box
          key={q.number}
          ref={questionRefs.current[index]}
          sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
        >
          <FormControl sx={{ mr: 2, minWidth: "100px" }} size="small">
            <InputLabel>{q.number}</InputLabel>
            <Select
              value={answers[q.number - 1] || ""}
              onChange={(e) => handleInputChange(q.number - 1, e.target.value)}
              label={`${q.number}`}
            >
              {["A", "B", "C", "D"].map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="body2">{q.text}</Typography>
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

      {radioQuestionsData.map((item, index) => (
        <Accordion
          key={item.qNum}
          ref={questionRefs.current[index + 5]}
          sx={{ bgcolor: "grey.100", mb: 1 }}
          expanded={expandedAccordion === `panel${item.qNum}`}
          onChange={(e, isExpanded) =>
            setExpandedAccordion(isExpanded ? `panel${item.qNum}` : false)
          }
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <b>{item.qNum}</b> {item.questionText}
            </Typography>
          </AccordionSummary>
          <RadioGroup
            sx={{ pl: "2em", py: 1 }}
            value={answers[item.qNum - 1] || ""}
            onChange={(e) => handleInputChange(item.qNum - 1, e.target.value)}
          >
            {item.options.map((opt) => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio size="small" />}
                label={`${opt.value}) ${opt.label}`}
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
      <Typography sx={{ mb: 2 }}>
        Choose <b>ONE WORD ONLY</b> from the text for each answer.
      </Typography>
      <Typography variant="body1" component="p" sx={{ lineHeight: 3 }}>
        From 1,000 BC Chinese rice farmers made use of aquaponics, which helped
        them to increase their
        <TextField
          variant="outlined"
          label="37"
          size="small"
          autoComplete="off"
          sx={{ width: "12em", mx: 0.5, mt: 0.5 }}
          value={answers[36] || ""}
          onChange={(e) => handleInputChange(36, e.target.value)}
          inputRef={questionRefs.current[9]}
        />
        . They allowed fish into the rice paddies and the
        <TextField
          variant="outlined"
          label="38"
          size="small"
          autoComplete="off"
          sx={{ width: "12em", mx: 0.5, mt: 0.5 }}
          value={answers[37] || ""}
          onChange={(e) => handleInputChange(37, e.target.value)}
          inputRef={questionRefs.current[10]}
        />
        from the fish naturally enriched their crops. Edenworks is looking at
        ways to incorporate that idea, but with a system that is not connected
        to the
        <TextField
          variant="outlined"
          label="39"
          size="small"
          autoComplete="off"
          sx={{ width: "12em", mx: 0.5, mt: 0.5 }}
          value={answers[38] || ""}
          onChange={(e) => handleInputChange(38, e.target.value)}
          inputRef={questionRefs.current[11]}
        />
        . They are trying to find a way to produce food that tastes great by
        duplicating the qualities of
        <TextField
          variant="outlined"
          label="40"
          size="small"
          autoComplete="off"
          sx={{ width: "10em", mx: 0.5, mt: 0.5 }}
          value={answers[39] || ""}
          onChange={(e) => handleInputChange(39, e.target.value)}
          inputRef={questionRefs.current[12]}
        />
        found in nature.
      </Typography>
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<FishFarmingText />}
      rightContent={rightContent}
    />
  );
};

export default Part3;
