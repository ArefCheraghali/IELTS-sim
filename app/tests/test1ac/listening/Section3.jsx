import React from "react";
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
const answerImage = "/images/test1/listening1-section3-1.jpg";

export default function Section3({ answers, setAnswers }) {
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
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "60rem",
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
          component="img"
          sx={{
            width: "35%",
            height: "20vh",
            maxWidth: "60rem",
            mt: 5,
          }}
          alt="Map"
          src={answerImage}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "60rem",
            mt: 2,
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl sx={{ margin: "0.5em", ml: "15em" }} key={index}>
              <InputLabel>{`${21 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[20 + index] || ""}
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
          width: "100%",
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
          <FormControl sx={{ mt: 2 }}>
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
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) It is intended for students at a lower level than Marco."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) It may take too much time to do well."
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em", marginLeft: "-3em" }}>25</b> Why
              does Marco want to do a dissertation?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[24] || ""}
              onChange={(e) => handleInputChange(24, e.target.value)}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) He thinks it will help his future career."
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) He would like to do a detailed study."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) He has already done some work for it."
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em" }}>26</b> What does Marco's tutor
              think about the dissertation outline?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[25] || ""}
              onChange={(e) => handleInputChange(25, e.target.value)}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) The topic is too narrow to be useful."
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) The available data may be unsuitable."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) The research plan is too complicated."
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em" }}>27</b> What does Marco decide to
              do about his dissertation?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[26] || ""}
              onChange={(e) => handleInputChange(26, e.target.value)}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) contact potencial interviewees."
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) change to another topic."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) discuss it with Professor Briggs."
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
          width: "100%",
          maxWidth: "60rem",
        }}
      >
        <Typography>Questions 28-30</Typography>
        <Typography>Complete the sentences below.</Typography>
        <Typography>
          Write <b>NO MORE THAN TWO WORDS</b> for each answer.
        </Typography>
        <Typography>
          <b>Practical details</b>
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
            pl: "3rem",
            width: "100%",
          }}
        >
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>28 </Typography>
            A first draft of the dissertation should be completed by the end of
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="28"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(27, e.target.value)}
              value={answers[27]}
            />
            .
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>29 </Typography>
            The dissertation should be registered with the
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="29"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(28, e.target.value)}
              value={answers[28]}
            />
            of the department.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>30 </Typography>
            Marco should get a copy of the statistics software from the
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="30"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(29, e.target.value)}
              value={answers[29]}
            />
            .
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
