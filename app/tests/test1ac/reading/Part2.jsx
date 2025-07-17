"use client";
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
import { useHighlight } from "app/contexts/HighlightContext";
import ReadingHighlightMenu from "app/components/ReadingHighlightMenu";

import CrowText from "./text/CrowText";
const image3 = "/images/test1/readingAc1-passage2-3.jpg";

// Data array for questions 18-23 for easier mapping
const trueFalseQuestionsData = [
  {
    number: 18,
    text: "There appears to be a fixed pattern for the padanus probe's construction.",
  },
  {
    number: 19,
    text: "There is plenty of evidence to indicate how the crows manufacture the padanus probe.",
  },
  {
    number: 20,
    text: "Crows seem to practise a number of times before making a usable padanus probe.",
  },
  {
    number: 21,
    text: "The researchers suspect the crows have a mental image of the padanus probe before they create it.",
  },
  {
    number: 22,
    text: "Research into how the padanus probe is made has helped to explain the toolmaking skills of many other bird species.",
  },
  {
    number: 23,
    text: "The researchers believe the ability to make the padanus probe is passed down to the crows in their genes.",
  },
];

const Section2 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = React.useRef(Array(13).fill(null));
  const prevCurrentQuestionRef = React.useRef();

  React.useEffect(() => {
    // Only scroll/focus if currentQuestion has actually changed to a new value
    if (
      prevCurrentQuestionRef.current !== undefined &&
      prevCurrentQuestionRef.current !== currentQuestion
    ) {
      if (currentQuestion >= 14 && currentQuestion <= 26) {
        const index = currentQuestion - 14;
        const element = questionRefs.current[index];
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Delay focus/click slightly after scroll
          setTimeout(() => {
            // Questions 14-17 (TextField)
            if (index >= 0 && index < 4) {
              const input = element.querySelector("input");
              if (input) {
                input.focus();
                input.select();
              }
            }
            // Questions 18-23 (Select - TRUE/FALSE/NOT GIVEN)
            else if (index >= 4 && index < 10) {
              const selectButton = element.querySelector("[role='button']");
              if (selectButton) {
                selectButton.focus();
              }
            }
            // Questions 24-26 (Select - A/B/C...)
            else if (index >= 10) {
              const selectButton = element.querySelector("[role='button']");
              if (selectButton) {
                selectButton.focus();
              }
            }
          }, 150);
        }
      }
    }
    // Update the ref for the next comparison
    prevCurrentQuestionRef.current = currentQuestion;
  }, [currentQuestion]);

  const possibleAnswers = ["TRUE", "FALSE", "NOT GIVEN"];
  const possibleAnswers2 = ["A", "B", "C", "D", "E", "F", "G"];
  const { handleContextMenu, textRef } = useHighlight();

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
        height: "calc(100vh - 120px - 26px )", // Consider changing to a calc() value based on your layout
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
        <CrowText />
        <ReadingHighlightMenu />
      </Box>

      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 2,
        }}
      >
        <Typography sx={{ fontSize: "1.1em", mb: 1, fontWeight: "bold" }}>
          <b>READING PASSAGE 2</b>
        </Typography>
        <Typography sx={{ mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 14-26</b>, which are
          based on Reading Passage 2.
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontSize: "1rem", fontWeight: "bold", mt: 2, mb: 1 }}
        >
          Questions 14 - 17
        </Typography>
        <Typography sx={{ mb: 1 }}>Label the diagrams below.</Typography>
        <Typography sx={{ mb: 1 }}>
          Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.
        </Typography>
        <Typography sx={{ mb: 1 }}>
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
          <Box sx={{ width: "100%" }}>
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
              width: "80%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Responsive grid
              gap: 2,
            }}
          >
            <Box ref={(el) => (questionRefs.current[0] = el)}>
              <TextField
                sx={{ width: "100%" }}
                label="14"
                autoComplete="off"
                onChange={(e) => handleInputChange(13, e.target.value)}
                value={answers[13]}
              />
            </Box>
            <Box ref={(el) => (questionRefs.current[1] = el)}>
              <TextField
                sx={{ width: "100%" }}
                label="15"
                autoComplete="off"
                onChange={(e) => handleInputChange(14, e.target.value)}
                value={answers[14]}
              />
            </Box>
            <Box ref={(el) => (questionRefs.current[2] = el)}>
              <TextField
                sx={{ width: "100%" }}
                label="16"
                autoComplete="off"
                onChange={(e) => handleInputChange(15, e.target.value)}
                value={answers[15]}
              />
            </Box>
            <Box ref={(el) => (questionRefs.current[3] = el)}>
              <TextField
                sx={{ width: "100%" }}
                label="17"
                autoComplete="off"
                onChange={(e) => handleInputChange(16, e.target.value)}
                value={answers[16]}
              />
            </Box>
          </Box>
        </Box>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontSize: "1rem", fontWeight: "bold", mt: 2, mb: 1 }}
        >
          Questions 18 - 23
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Do the following statements agree with the information given in the
          passage 2?
        </Typography>
        <Typography sx={{ mb: 1 }}>
          In boxes 18-23 on your answer sheet, write
        </Typography>
        <List
          dense
          sx={{ pl: 2, mb: 2, listStyleType: "none", paddingLeft: 0 }}
        >
          <ListItem sx={{ py: 0.2 }}>
            <Typography
              component="span"
              sx={{ fontWeight: "bold", minWidth: "90px" }}
            >
              TRUE
            </Typography>
            <Typography component="span" sx={{ fontSize: "0.9rem", ml: 2 }}>
              if the statement agrees with the information
            </Typography>
          </ListItem>
          <ListItem sx={{ py: 0.2 }}>
            <Typography
              component="span"
              sx={{ fontWeight: "bold", minWidth: "90px" }}
            >
              FALSE
            </Typography>
            <Typography component="span" sx={{ fontSize: "0.9rem", ml: 2 }}>
              if the statement contradicts the information
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
              if there is no information on this
            </Typography>
          </ListItem>
        </List>

        {/* MODIFIED SECTION STARTS HERE */}
        {trueFalseQuestionsData.map((q) => (
          <Box
            key={q.number}
            ref={(el) => (questionRefs.current[q.number - 14] = el)} // e.g., for Q18, index is 18-14=4
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
                value={answers[q.number - 1] || ""} // answers array is 0-indexed from the start of the test
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
        {/* MODIFIED SECTION ENDS HERE */}

        <Typography
          variant="h6"
          component="h3"
          sx={{ fontSize: "1rem", fontWeight: "bold", mt: 2, mb: 1 }}
        >
          Questions 24 - 26
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Choose <b>THREE</b> letters, A-G.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Pick the correct letters in boxes 24-26 below.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          According to the information in the passage, which <b>THREE</b> of the
          following features are probably common to both New Caledonian crows
          and human beings?
        </Typography>
        <List dense sx={{ pl: 2, width: "100%", fontSize: "1.1em" }}>
          <ListItem>A) keeping the same mate for life</ListItem>
          <ListItem>B) having few natural predators</ListItem>
          <ListItem>C) having a bias to the right when working</ListItem>
          <ListItem>D) being able to process sequential tasks</ListItem>
          <ListItem>E) living in extended family groups</ListItem>
          <ListItem>F) eating a variety of foodstuffs</ListItem>
          <ListItem>G) being able to adapt to diverse habitats</ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
            mt: 1,
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl
              ref={(el) => (questionRefs.current[10 + index] = el)}
              sx={{ m: 1, minWidth: "100px" }} // Use minWidth for consistency
              size="small"
              key={index}
            >
              <InputLabel>{`${24 + index}`}</InputLabel>
              <Select
                sx={{ width: "100%" }}
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
