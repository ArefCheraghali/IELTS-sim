"use client";
import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  TextField,
} from "@mui/material";

import CollectText from "./text/CollectText";

const trueFalseQuestionsData = [
  {
    number: 1,
    text: "Dr Maria Richter believes that people become interested in collecting in early childhood.",
  },
  {
    number: 2,
    text: "A form of collecting may have helped some ancient humans to survive.",
  },
  {
    number: 3,
    text: "Leonard Woolley expected to find the remains of a private collection at Ur.",
  },
  {
    number: 4,
    text: "Woolley found writing that identified some of the objects he discovered.",
  },
  {
    number: 5,
    text: "Princess Ennigaldi established her collection to show off her wealth.",
  },
  {
    number: 6,
    text: "Displaying artworks was the main purpose of Cabinets of Curiosities.",
  },
];

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(Array(13).fill(null));
  const prevQuestionRef = useRef(null);

  useEffect(() => {
    if (
      prevQuestionRef.current === null ||
      prevQuestionRef.current === currentQuestion
    ) {
      prevQuestionRef.current = currentQuestion;
      return;
    }

    if (currentQuestion >= 1 && currentQuestion <= 13) {
      const index = currentQuestion - 1;
      const element = questionRefs.current[index];
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setTimeout(() => {
          if (index < 6) {
            const selectButton = element.querySelector("[role='button']");
            if (selectButton) {
              selectButton.focus();
            }
          } else if (index >= 6) {
            const input = element.querySelector("input");
            if (input) {
              input.focus();
              input.select();
            }
          }
        }, 150);
      }
    }
    prevQuestionRef.current = currentQuestion;
  }, [currentQuestion]);

  const possibleAnswers = ["TRUE", "FALSE", "NOT GIVEN"];

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 120px - 26px )",
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
        <CollectText />
      </Box>
      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 2,
        }}
      >
        <Typography sx={{ fontSize: "1.1em", mb: 1, fontWeight: "bold" }}>
          READING PASSAGE 1
        </Typography>
        <Typography sx={{ mb: 2 }}>
          You should spend about 20 minutes on <b>Questions 1-13</b>, which are
          based on Reading Passage 1.
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ mb: 1, fontSize: "1rem", fontWeight: "bold" }}
        >
          <b>Questions 1 - 6</b>
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Do the following statements agree with the information given in the
          Reading Passage?
        </Typography>
        <Typography sx={{ mb: 1 }}>In boxes 1-6 below, select:</Typography>
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

        {trueFalseQuestionsData.map((q) => (
          <Box
            key={q.number}
            ref={(el) => (questionRefs.current[q.number - 1] = el)}
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
          sx={{ mb: 1, mt: 3, fontSize: "1rem", fontWeight: "bold" }}
        >
          Questions 7 - 13
        </Typography>
        <Typography>Complete the notes below.</Typography>
        <Typography>
          Write <b>ONE WORD ONLY</b> from the passage for each answer.
        </Typography>
        <Box
          sx={{
            height: "auto",
            maxWidth: "60rem",
            mt: 2,
            border: "1px solid",
            borderColor: "grey.400",
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
            Some significant private collections
          </Typography>
          <List sx={{ listStyleType: "circle", pl: 2 }}>
            <Typography sx={{ fontWeight: "bold" }}>
              15<sup>th</sup>-17<sup>th</sup> Centuries
            </Typography>
            <ListItem
              ref={(el) => (questionRefs.current[6] = el)}
              sx={{ display: "list-item", py: 1 }}
            >
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                The Medici family made their money from
                <TextField
                  sx={{ mx: 0.5, width: "8em" }}
                  label="7"
                  variant="standard"
                  size="small"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(6, e.target.value)}
                  value={answers[6]}
                />
                .
              </Typography>
            </ListItem>
            <ListItem
              ref={(el) => (questionRefs.current[7] = el)}
              sx={{ display: "list-item", py: 1 }}
            >
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                At the Palazzo Medici there was a hidden ‘studio’ which had no
                <TextField
                  sx={{ mx: 0.5, width: "7em" }}
                  label="8"
                  variant="standard"
                  size="small"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(7, e.target.value)}
                  value={answers[7]}
                />
                .
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", py: 1 }}>
              Ole Worm liked to show when other scientists had made mistakes.
            </ListItem>
            <ListItem
              ref={(el) => (questionRefs.current[8] = el)}
              sx={{ display: "list-item", py: 1 }}
            >
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                Ole Worm made an important
                <TextField
                  sx={{ mx: 0.5, width: "8em" }}
                  label="9"
                  variant="standard"
                  size="small"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(8, e.target.value)}
                  value={answers[8]}
                />
                of a bird.
              </Typography>
            </ListItem>
            <Typography sx={{ fontWeight: "bold", mt: 2 }}>
              19<sup>th</sup> Century
            </Typography>
            <ListItem
              ref={(el) => (questionRefs.current[9] = el)}
              sx={{ display: "list-item", py: 1 }}
            >
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                Lady Charlotte Guest created a collection of
                <TextField
                  sx={{ mx: 0.5, width: "8em" }}
                  label="10"
                  variant="standard"
                  size="small"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(9, e.target.value)}
                  value={answers[9]}
                />
                which she left to a museum.
              </Typography>
            </ListItem>
            <ListItem
              ref={(el) => (questionRefs.current[10] = el)}
              sx={{ display: "list-item", py: 1 }}
            >
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                Joseph Mayer paid for
                <TextField
                  sx={{ mx: 0.5, width: "8em" }}
                  label="11"
                  variant="standard"
                  size="small"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(10, e.target.value)}
                  value={answers[10]}
                />
                that are still given to the public today.
              </Typography>
            </ListItem>
            <Typography sx={{ fontWeight: "bold", mt: 2 }}>
              20<sup>th</sup> Century
            </Typography>
            <ListItem
              ref={(el) => (questionRefs.current[11] = el)}
              sx={{ display: "list-item", py: 1 }}
            >
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                Beatrix Potter did not give away her collection of
                <TextField
                  sx={{ mx: 0.5, width: "8em" }}
                  label="12"
                  variant="standard"
                  size="small"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(11, e.target.value)}
                  value={answers[11]}
                />
                .
              </Typography>
            </ListItem>
            <ListItem
              ref={(el) => (questionRefs.current[12] = el)}
              sx={{ display: "list-item", py: 1 }}
            >
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                Franklin D. Roosevelt believed collecting helped him deal with
                the
                <TextField
                  sx={{ mx: 0.5, width: "8em" }}
                  label="13"
                  variant="standard"
                  size="small"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(12, e.target.value)}
                  value={answers[12]}
                />
                of his job.
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Part1;
