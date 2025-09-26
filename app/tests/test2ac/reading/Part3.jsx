"use client";
import React, { useRef, useEffect, useState } from "react";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import JellyfishText from "./text/JellyfishText";
import DragDrop from "../../../components/DragDrop";

const yesNoQuestionsData = [
  {
    number: 27,
    text: "It is surprising that many people have negative views of jellyfish.",
  },
  {
    number: 28,
    text: "In the 20th century, scientists should have conducted more studies of jellyfish",
  },
  {
    number: 29,
    text: "Some jellyfish species that used to live in shallow water may be moving to deep water.",
  },
  {
    number: 30,
    text: "Dr Karen Hansen’s views about jellyfish need to be confirmed by additional research.",
  },
  {
    number: 31,
    text: "It is possible to reverse the consequences of climate change.",
  },
  {
    number: 32,
    text: "The research findings of Paul Dewar have been accepted by other academics.",
  },
];

const initialQuestions = [
  {
    id: "37",
    text: "37. Researchers working in Norway and the Arctic have shown that",
    answerId: null,
  },
  {
    id: "38",
    text: "38. The use of DNA sequencing and isotope analysis has proved that",
    answerId: null,
  },
  {
    id: "39",
    text: "39. Research into ‘upside-down jellyfish’ showed that",
    answerId: null,
  },
  {
    id: "40",
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

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  const possibleAnswers = ["YES", "NO", "NOT GIVEN"];
  const questionRefs = useRef(
    Array(14)
      .fill(null)
      .map(() => React.createRef())
  );
  const prevQuestionRef = useRef(null);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  useEffect(() => {
    if (prevQuestionRef.current === null) {
      prevQuestionRef.current = currentQuestion;
      return;
    }

    if (prevQuestionRef.current !== currentQuestion) {
      if (currentQuestion >= 27 && currentQuestion <= 40) {
        const index = currentQuestion - 27;
        const targetRef = questionRefs.current[index];
        if (targetRef && targetRef.current) {
          const element = targetRef.current;
          element.scrollIntoView({ behavior: "smooth", block: "center" });

          setTimeout(() => {
            if (index < 6) {
              const selectButton = element.querySelector("[role='button']");
              if (selectButton) selectButton.focus();
            } else if (index >= 6 && index < 10) {
              setExpandedAccordion(`panel${currentQuestion}`);
              const radioInputs = element.querySelectorAll(
                'input[type="radio"]'
              );
              if (radioInputs.length > 0) radioInputs[0].focus();
            }
          }, 150);
        }
      }
      prevQuestionRef.current = currentQuestion;
    }
  }, [currentQuestion]);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <Box sx={{ display: "flex", height: "calc(100vh - 120px - 26px )" }}>
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
          padding: 2,
        }}
      >
        <Typography sx={{ fontSize: "1.1em", mb: 1, fontWeight: "bold" }}>
          READING PASSAGE 3
        </Typography>
        <Typography sx={{ mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 27-40</b>, which are
          based on Reading Passage 3.
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontSize: "1rem", fontWeight: "bold", mt: 2, mb: 1 }}
        >
          Questions 27 - 32
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Do the following statements agree with the claims of the writer in the
          passage 3?
        </Typography>
        <Typography sx={{ mb: 1 }}>In boxes 27-32, pick</Typography>
        <List
          dense
          sx={{ pl: 2, mb: 2, listStyleType: "none", paddingLeft: 0 }}
        >
          <ListItem sx={{ py: 0.2 }}>
            <Typography
              component="span"
              sx={{ fontWeight: "bold", minWidth: "90px" }}
            >
              YES
            </Typography>
            <Typography component="span" sx={{ fontSize: "0.9rem", ml: 2 }}>
              if the statement agrees with the claims of the writer
            </Typography>
          </ListItem>
          <ListItem sx={{ py: 0.2 }}>
            <Typography
              component="span"
              sx={{ fontWeight: "bold", minWidth: "90px" }}
            >
              NO
            </Typography>
            <Typography component="span" sx={{ fontSize: "0.9rem", ml: 2 }}>
              if the statement contradicts the claims of the writer
            </Typography>
          </ListItem>
          <ListItem sx={{ py: 0.2 }}>
            <Typography
              component="span"
              sx={{ fontWeight: "bold", minWidth: "90px" }}
            >
              NOT GIVEN
            </Typography>
            <Typography component="span" sx={{ fontSize: "0.9rem", ml: 2 }}>
              If it is impossible to say what the writer thinks about this
            </Typography>
          </ListItem>
        </List>

        {yesNoQuestionsData.map((q) => (
          <Box
            key={q.number}
            ref={questionRefs.current[q.number - 27]} // Q27 is index 0
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1.5,
              width: "100%",
            }}
          >
            <FormControl
              sx={{ mr: 2, minWidth: { xs: "100px", sm: "160px" } }}
              size="small"
            >
              <InputLabel id={`q${q.number}-label`}>{q.number}</InputLabel>
              <Select
                labelId={`q${q.number}-label`}
                label={`${q.number}`}
                value={answers[q.number - 1] || ""}
                onChange={(e) =>
                  handleInputChange(q.number - 1, e.target.value)
                }
              >
                {possibleAnswers.map((answerOption) => (
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
            questionText: "What is the writer doing in the fourth paragraph?",
            options: [
              {
                value: "A",
                label: "comparing several different types of jellyfish",
              },
              {
                value: "B",
                label: "dismissing some common ideas about jellyfish",
              },
              {
                value: "C",
                label: "contrasting various early theories about jellyfish",
              },
              {
                value: "D",
                label: "rejecting some scientific findings regarding jellyfish",
              },
            ],
          },
          {
            qNum: 34,
            questionText:
              "What does the writer conclude in the fifth paragraph?",
            options: [
              {
                value: "A",
                label:
                  "Jellyfish have advantages and disadvantages for humans.",
              },
              {
                value: "B",
                label:
                  "Humans have had a serious negative impact on jellyfish.",
              },
              {
                value: "C",
                label:
                  "Jellyfish will cause problems for humans in the future.",
              },
              {
                value: "D",
                label: "Humans and jellyfish are fundamentally similar.",
              },
            ],
          },
          {
            qNum: 35,
            questionText:
              "What is the writer’s main point in the sixth paragraph?",
            options: [
              {
                value: "A",
                label: "Jellyfish may once have inhabited dry land.",
              },
              {
                value: "B",
                label: "Jellyfish improve the environment they live in.",
              },
              {
                value: "C",
                label: "Jellyfish have proved able to survive over time.",
              },
              {
                value: "D",
                label:
                  "Jellyfish have caused other species to become endangered.",
              },
            ],
          },
          {
            qNum: 36,
            questionText: "The writer refers to the ‘scyphozoa’ in order to",
            options: [
              {
                value: "A",
                label: "exemplify the great size of some jellyfish.",
              },
              {
                value: "B",
                label: "illustrate that jellyfish are biologically complex.",
              },
              {
                value: "C",
                label: "explain why certain jellyfish may become extinct.",
              },
              {
                value: "D",
                label: "suggest that scientists still misunderstand jellyfish.",
              },
            ],
          },
        ].map((item) => (
          <Accordion
            key={item.qNum}
            ref={questionRefs.current[item.qNum - 27]}
            sx={{
              width: "100%",
              maxWidth: "calc(100% - 16px)",
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
        <Typography sx={{ mb: 1 }}>
          Complete each sentence with the correct ending, <b>A-F</b>, below.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Write the correct letter <b>A-F</b> in boxes 37-40.
        </Typography>
        <DragDrop
          initialQuestions={initialQuestions}
          initialAnswers={initialAnswers}
          setAnswers={setAnswers}
          answers={answers}
          title=""
          infoTitle=""
          currentQuestion={currentQuestion}
          questionRefs={questionRefs}
          startIndex={36}
          startQuestionNumber={36}
        />
      </Box>
    </Box>
  );
};

export default Part3;
