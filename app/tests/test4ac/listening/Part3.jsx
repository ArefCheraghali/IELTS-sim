import { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import MultipleChoiceQuestion from "../../../components/MultipleChoiceQuestion";

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  // Create refs for each radio group
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the radio group or select corresponding to the current question
    if (currentQuestion >= 21 && currentQuestion <= 30) {
      const index = currentQuestion - 21;
      const element = inputRefs.current[index];
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
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
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
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
        <Typography>Questions 21-26</Typography>
        <Typography>
          Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.
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
              <b style={{ marginRight: "2em" }}>21</b> What does Ahmed say about
              last week's seminar?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[20] || ""}
              onChange={(e) => handleInputChange(20, e.target.value)}
              ref={(el) => (inputRefs.current[0] = el)}
            >
              <FormControlLabel
                value="A"
                control={<Radio />}
                label="A) He wasn't able to get there on time."
              />
              <FormControlLabel
                value="B"
                control={<Radio />}
                label="B) He didn't know all the students."
              />
              <FormControlLabel
                value="C"
                control={<Radio />}
                label="C) He couldn't understand everything."
              />
            </RadioGroup>
          </FormControl>

          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em" }}>22</b> What does the tutor say
              about Ahmed's preparation for the seminar?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[21] || ""}
              onChange={(e) => handleInputChange(21, e.target.value)}
              ref={(el) => (inputRefs.current[1] = el)}
            >
              <FormControlLabel
                value="A"
                control={<Radio />}
                label="A) He was better prepared than some students."
              />
              <FormControlLabel
                value="B"
                control={<Radio />}
                label="B) He completed some useful work."
              />
              <FormControlLabel
                value="C"
                control={<Radio />}
                label="C) He read some useful articles."
              />
            </RadioGroup>
          </FormControl>

          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em" }}>23</b> What does Ahmed say about
              his participation in the seminar?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[22] || ""}
              onChange={(e) => handleInputChange(22, e.target.value)}
              ref={(el) => (inputRefs.current[2] = el)}
            >
              <FormControlLabel
                value="A"
                control={<Radio />}
                label="A) He tended to speak to his neighbour only."
              />
              <FormControlLabel
                value="B"
                control={<Radio />}
                label="B) He spoke when other students were talking."
              />
              <FormControlLabel
                value="C"
                control={<Radio />}
                label="C) He felt embarrassed when students looked at him."
              />
            </RadioGroup>
          </FormControl>

          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em" }}>24</b> What does Ahmed worry
              about most in seminars?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[23] || ""}
              onChange={(e) => handleInputChange(23, e.target.value)}
              ref={(el) => (inputRefs.current[3] = el)}
            >
              <FormControlLabel
                value="A"
                control={<Radio />}
                label="A) speaking at the right time"
              />
              <FormControlLabel
                value="B"
                control={<Radio />}
                label="B) taking enough notes"
              />
              <FormControlLabel
                value="C"
                control={<Radio />}
                label="C) staying focused"
              />
            </RadioGroup>
          </FormControl>

          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em" }}>25</b> What does Ahmed say about
              his role in the group?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[24] || ""}
              onChange={(e) => handleInputChange(24, e.target.value)}
              ref={(el) => (inputRefs.current[4] = el)}
            >
              <FormControlLabel
                value="A"
                control={<Radio />}
                label="A) He hasn't thought about it."
              />
              <FormControlLabel
                value="B"
                control={<Radio />}
                label="B) He'd like to change it."
              />
              <FormControlLabel
                value="C"
                control={<Radio />}
                label="C) He feels he is acting a part."
              />
            </RadioGroup>
          </FormControl>

          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em" }}>26</b> At the next seminar,
              Ahmed's tutor suggests that he should
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[25] || ""}
              onChange={(e) => handleInputChange(25, e.target.value)}
              ref={(el) => (inputRefs.current[5] = el)}
            >
              <FormControlLabel
                value="A"
                control={<Radio />}
                label="A) give other students more help with their work."
              />
              <FormControlLabel
                value="B"
                control={<Radio />}
                label="B) observe the behaviour of other students."
              />
              <FormControlLabel
                value="C"
                control={<Radio />}
                label="C) ask other students for their views."
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Typography sx={{ mt: 4 }}>Questions 27 and 28</Typography>
        <Typography>Choose TWO letters, A-E.</Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          Which TWO strategies does the tutor suggest for the next seminar?
        </Typography>
        <Box>
          <Box ref={(el) => (inputRefs.current[7] = el)}>
            <Box ref={(el) => (inputRefs.current[6] = el)} />
            <MultipleChoiceQuestion
              options={[
                { label: "speak more frequently", value: "A" },
                { label: "behave in a confident manner", value: "B" },
                { label: "sit next to someone helpful", value: "C" },
                { label: "listen to what other people say", value: "D" },
                { label: "think of questions to ask", value: "E" },
              ]}
              questionIndexes={[26, 27]}
              answers={answers}
              setAnswers={setAnswers}
              currentQuestion={currentQuestion}
            />
          </Box>
        </Box>

        <Typography sx={{ mt: 4 }}>Questions 29 and 30</Typography>
        <Typography>Choose TWO letters, A-E.</Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          Which TWO suggestions does the tutor make about taking notes?
        </Typography>
        <Box>
          <Box ref={(el) => (inputRefs.current[9] = el)}>
            <Box ref={(el) => (inputRefs.current[8] = el)} />
            <MultipleChoiceQuestion
              options={[
                { label: "plan them before the seminar", value: "A" },
                { label: "note down key words that people say", value: "B" },
                { label: "note points to say later", value: "C" },
                { label: "include self-analysis", value: "D" },
                { label: "rewrite them after the seminar", value: "E" },
              ]}
              questionIndexes={[28, 29]}
              answers={answers}
              setAnswers={setAnswers}
              currentQuestion={currentQuestion}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Part3;
