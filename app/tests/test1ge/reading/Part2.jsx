import React from "react";
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import KeyboardText from "./text/KeyboardText";
const image1 = "/images/test1/readingGe1-passage2-1.jpg";
const image2 = "/images/test1/readingGe1-passage2-2.jpg";

const Part2 = ({ answers, setAnswers, currentQuestion }) => {
  const possibleAnswers = ["A", "B", "C", "D", "E"];
  const possibleAnswers2 = [
    "i",
    "ii",
    "iii",
    "iv",
    "v",
    "vi",
    "vii",
    "viii",
    "ix",
    "x",
  ];

  const questionRefs = React.useRef(Array(14).fill(null));
  const prevQuestionRef = React.useRef(null);

  React.useEffect(() => {
    if (prevQuestionRef.current === null) {
      prevQuestionRef.current = currentQuestion;
      return;
    }

    if (prevQuestionRef.current !== currentQuestion) {
      if (currentQuestion >= 14 && currentQuestion <= 28) {
        const index = currentQuestion - 14;
        const element = questionRefs.current[index];
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          // Add delay to ensure scroll completes before focus
          setTimeout(() => {
            // For questions 15-21 (Select with Roman numerals)
            if (index >= 1 && index <= 7) {
              const select = element.querySelector("[role='button']");
              if (select) {
                select.focus();
              }
            }
            // For questions 22-23 (TextField)
            else if (index === 8 || index === 9) {
              const input = element.querySelector("input");
              if (input) {
                input.focus();
                input.select();
              }
            }
            // For questions 24-28 (Select with letters)
            else if (index >= 10 && index <= 14) {
              const select = element.querySelector("[role='button']");
              if (select) {
                select.focus();
              }
            }
          }, 150);
        }
      }
      prevQuestionRef.current = currentQuestion;
    }
  }, [currentQuestion]);

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
        height: "calc(100vh - 120px - 26px )",
      }}
    >
      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 1,
          borderRight: "1px solid #ccc",
        }}
      >
        <KeyboardText />
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
        <Typography sx={{ ml: 4, fontSize: "1.1em", mb: 1 }}>
          <b>Part 2</b>
        </Typography>
        <Typography sx={{ mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 14-28</b>, which are
          based on Reading Part 2.
        </Typography>
        <Typography ref={(el) => (questionRefs.current[0] = el)} sx={{ mb: 1 }}>
          Questions 15 - 21
        </Typography>
        <Typography sx={{ mb: 1 }}>
          The text on the left (BENEFICIAL WORK PRACTICES FOR THE KEYBOARD
          OPERATOR) has seven sections, <b>A-G</b>.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Choose the correct heading for each section from the list of headings
          below.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Write the correct number, i–x, in boxes 15–21.
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

              padding: 2,
              border: "1px solid #ccc",
              borderRadius: 1,
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ ml: 1 }}>
              List of Headings
            </Typography>
            <List>
              <ListItem>
                <Typography>
                  <strong>i</strong> How can reflection problems be avoided?
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>ii</strong> How long should I work without a break?
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>iii</strong> What if I experience any problems?
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>iv</strong> When is the best time to do filing chores?
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>v</strong> What makes a good seat?
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>vi</strong> What are the common health problems?
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>vii</strong> What is the best kind of lighting to
                  have?
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>viii</strong> What are the roles of management and
                  workers?
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>ix</strong> Why does a VDU create eye fatigue?
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>x</strong> Where should I place the documents?
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            {Array.from({ length: 7 }).map((_, index) => (
              <FormControl
                sx={{ mt: 2, mr: 1 }}
                key={15 + index}
                ref={(el) => (questionRefs.current[1 + index] = el)}
              >
                <InputLabel>{`${15 + index}`}</InputLabel>
                <Select
                  sx={{ width: "5em" }}
                  value={answers[14 + index] || ""}
                  onChange={(e) =>
                    handleInputChange(14 + index, e.target.value)
                  }
                  label={`${15 + index}`}
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
        <Divider sx={{ mb: 3 }} />
        <Typography sx={{ mb: 1 }}>
          <b>Questions 22 - 28</b>
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Read the second text (Workplace dismissals) and answer Questions
          22–28.
        </Typography>
        <Typography sx={{ mb: 1 }}>Questions 22 and 23</Typography>
        <Typography sx={{ mb: 1 }}>Complete the sentences below.</Typography>
        <Typography sx={{ mb: 1 }}>
          Choose <b>NO MORE THAN THREE WORDS</b> from the text for each answer
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Write your answers in boxes 22 and 23
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
            width: "100%",
          }}
        >
          <ListItem
            ref={(el) => (questionRefs.current[8] = el)}
            sx={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "40em",
            }}
          >
            <Typography sx={{ marginRight: "3rem" }}>22 </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                If an employee receives a
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="22"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(21, e.target.value)}
                  value={answers[21]}
                />
                , this means he
              </Box>
              <Box sx={{ mt: 1 }}>
                will lose his job if his work does not get better.
              </Box>
            </Box>
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[9] = el)}
            sx={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "40em",
            }}
          >
            <Typography sx={{ marginRight: "3rem" }}>23 </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                If an employee does not accept the reasons for his dismissal,
              </Box>
              <Box sx={{ mt: 3 }}>
                a
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="23"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(22, e.target.value)}
                  value={answers[22]}
                />
                can be arranged.
              </Box>
            </Box>
          </ListItem>
        </List>
        <Typography sx={{ mb: 1 }}>Questions 24 - 28</Typography>
        <Typography sx={{ mb: 1 }}>
          Look at the following descriptions (Questions 24–28) and the list of
          terms in the box below.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Match each description with the correct term <b>A-E</b>.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Pick the correct letter in boxes 24-28.
        </Typography>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            ml: 5,
            border: "1px solid #ddd",
            padding: 2,
            mb: 2,
          }}
        >
          <Typography>A) Fair dismissal</Typography>
          <Typography>B) Summary dismissal</Typography>
          <Typography>C) Unfair dismissal</Typography>
          <Typography>D) Wrongful dismissal</Typography>
          <Typography>E) Constructive dismissal</Typography>
        </Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            pl: "1rem",
            width: "90%",
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <ListItem
              key={index}
              ref={(el) => (questionRefs.current[10 + index] = el)}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mb: 2,
              }}
            >
              <FormControl sx={{ minWidth: "5em", mr: 2 }}>
                <InputLabel>{`${24 + index}`}</InputLabel>
                <Select
                  sx={{ width: "5em" }}
                  value={answers[23 + index] || ""}
                  onChange={(e) =>
                    handleInputChange(23 + index, e.target.value)
                  }
                  label={`${24 + index}`}
                >
                  {possibleAnswers.map((answer) => (
                    <MenuItem key={answer} value={answer}>
                      {answer}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography>
                {index === 0 &&
                  "An employee is asked to leave work straight away because he has done something really bad."}
                {index === 1 &&
                  "An employee is pressured to leave his job unless he accepts conditions that are very different from those agreed to in the beginning."}
                {index === 2 &&
                  "An employer gets rid of an employee without keeping to conditions in the contract."}
                {index === 3 &&
                  "The reason for an employee's dismissal is not considered good enough."}
                {index === 4 &&
                  "The reasons for an employee's dismissal are acceptable by law and the terms of the employment contract."}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Part2;
