import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  List,
  ListItem,
  TextField,
} from "@mui/material";
export default function Part3({ answers, setAnswers, currentQuestion }) {
  // Create refs for each text field
  const inputRefs = useRef([]);
  const questionRefs = useRef([]);

  useEffect(() => {
    // Focus on the text field corresponding to the current question
    if (currentQuestion >= 21 && currentQuestion <= 30) {
      const index = currentQuestion - 21;
      if (currentQuestion <= 23) {
        inputRefs.current[index]?.focus();
      }
      questionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentQuestion]);
  const possibleAnswers = ["A", "B", "C", "D", "E", "F", "G"];

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
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        margin: "0 auto",
        maxWidth: "1200px",
        padding: "0 2rem",
        pt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          minWidth: "35rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Part 3
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 21-30
        </Typography>
      </Box>
      <Typography>Questions 21-23</Typography>
      <Typography>
        Choose <b>THREE</b> letters, <b>A-G</b>.
      </Typography>
      <Typography>
        Which <b>THREE</b> factors does Marco's tutor advise him to consider
        when selecting a course?
      </Typography>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: "70%",
            maxWidth: "60rem",
            mt: 1,
            border: "1px solid #ccc",
            borderRadius: 1,
            bgcolor: "#f5f5f5",
          }}
        >
          <List>
            <ListItem>
              <Typography>
                <b>A</b>&nbsp;&nbsp;&nbsp;possibility of specialisation
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <b>B</b>&nbsp;&nbsp;&nbsp;relevance to future career
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <b>C</b>&nbsp;&nbsp;&nbsp;personal interest
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <b>D</b>&nbsp;&nbsp;&nbsp;organisation of course
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <b>E</b>&nbsp;&nbsp;&nbsp;assessment methods
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <b>F</b>&nbsp;&nbsp;&nbsp;range of topics
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <b>G</b>&nbsp;&nbsp;&nbsp;reputation of lecturer
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "60rem",
            mt: 5,
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl
              sx={{ margin: "0.5em", ml: "15em" }}
              key={index}
              ref={(el) => (questionRefs.current[index] = el)}
            >
              <InputLabel>{`${21 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[20 + index] || ""}
                inputRef={(el) => (inputRefs.current[index] = el)}
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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: "60rem",
          mt: 3,
          mb: 3,
        }}
      >
        <Typography>Questions 24-27</Typography>
        <Typography>
          Choose the correct letter, <b>A</b>,<b>B</b> or <b>C</b>.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "60rem",
            alignItems: "flex-start",
            mt: 2,
          }}
        >
          <FormControl
            sx={{ mt: 2 }}
            ref={(el) => (questionRefs.current[3] = el)}
          >
            <Typography>
              <b style={{ marginRight: "2em" }}>24</b> Why does Marco's tutor
              advise him to avoid the <i>Team Management</i> course?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[23] || ""}
              onChange={(e) => handleInputChange(23, e.target.value)}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) It will repeat work that Marco has already done."
              />
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) It will not be relevant to his future career."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) It will be too difficult for him to manage."
              />
            </RadioGroup>
          </FormControl>
          <FormControl
            sx={{ mt: 2 }}
            ref={(el) => (questionRefs.current[4] = el)}
          >
            <Typography>
              <b style={{ marginRight: "2em" }}>25</b> What does Marco's tutor
              say about the <i>Marketing</i> course?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[24] || ""}
              onChange={(e) => handleInputChange(24, e.target.value)}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) It would be a good choice for Marco."
              />
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) It is not suitable for Marco's level."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) It would be better to take it later."
              />
            </RadioGroup>
          </FormControl>
          <FormControl
            sx={{ mt: 2 }}
            ref={(el) => (questionRefs.current[5] = el)}
          >
            <Typography>
              <b style={{ marginRight: "2em" }}>26</b> What does Marco's tutor
              say about the <i>Finance</i> course?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[25] || ""}
              onChange={(e) => handleInputChange(25, e.target.value)}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) It would be useful for Marco's future career."
              />
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) It would be too challenging for Marco."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) It would not be interesting for Marco."
              />
            </RadioGroup>
          </FormControl>
          <FormControl
            sx={{ mt: 2 }}
            ref={(el) => (questionRefs.current[6] = el)}
          >
            <Typography>
              <b style={{ marginRight: "2em" }}>27</b> What does Marco's tutor
              say about the <i>Human Resources</i> course?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[26] || ""}
              onChange={(e) => handleInputChange(26, e.target.value)}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) It would be too theoretical for Marco."
              />
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) It would help Marco develop practical skills."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) It would not be relevant to Marco's interests."
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: "60rem",
        }}
      >
        <Typography>Questions 28-30</Typography>
        <Typography>Complete the sentences below.</Typography>
        <Typography>
          Write <b>NO MORE THAN TWO WORDS</b> for each answer.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            pl: "2rem",
            width: "100%",
            fontSize: "18px",
          }}
        >
          <Typography
            sx={{ mt: 2 }}
            ref={(el) => (questionRefs.current[7] = el)}
          >
            <b>28 - </b>
            Marco's tutor suggests that he should look at the
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="28"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(27, e.target.value)}
              value={answers[27]}
              inputRef={(el) => (inputRefs.current[7] = el)}
            />
            for each course.
          </Typography>
          <Typography
            sx={{ mt: 3 }}
            ref={(el) => (questionRefs.current[8] = el)}
          >
            <b>29 - </b>
            Marco's tutor advises him to check the
            <TextField
              sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
              label="29"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(28, e.target.value)}
              value={answers[28]}
              inputRef={(el) => (inputRefs.current[8] = el)}
            />
            for each course.
          </Typography>
          <Typography
            sx={{ mt: 3 }}
            ref={(el) => (questionRefs.current[9] = el)}
          >
            <b>30 - </b>
            Marco's tutor suggests that he should look at the
            <TextField
              sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
              label="30"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(29, e.target.value)}
              value={answers[29]}
              inputRef={(el) => (inputRefs.current[9] = el)}
            />
            for each course.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
