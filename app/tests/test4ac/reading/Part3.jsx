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
  TextField,
} from "@mui/material";
import RockClimbingText from "./text/RockClimbingText";
const image1 = "/images/test3/test3ac reading part2-1.jpg";

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  const possibleAnswers = ["YES", "NO", "NOT GIVEN"];
  const questionRefs = React.useRef(Array(14).fill(null));

  React.useEffect(() => {
    if (currentQuestion >= 27 && currentQuestion <= 40) {
      const index = currentQuestion - 27;
      questionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
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
        <RockClimbingText />
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
        <Typography sx={{ ml: 1, mb: 1, mt: 2 }}>Questions 27-32</Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Reading Passage 3 has eight paragraphs, A-H.
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Which paragraph contains the following information?
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Write the correct letter, A-H, in boxes 27-32 on your answer sheet.
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
            fontSize: "1.1rem",
          }}
        >
          {[
            "examples of the impact of climbers on ecosystems",
            "an account of how politics affected rock climbing",
            "a less dangerous alternative to climbing rock faces",
            "a recommendation for better regulation",
            "a reference to a climber who did not use any tools or ropes for assistance",
            "examples of different types of people who use the outdoors for recreation",
          ].map((text, index) => (
            <ListItem
              key={index}
              ref={(el) => (questionRefs.current[index] = el)}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "1.2rem", minWidth: "2rem" }}>
                {27 + index}
              </Typography>
              <Typography sx={{ fontSize: "1.1rem", flex: 1 }}>
                {text}
              </Typography>
              <FormControl sx={{ minWidth: 120 }}>
                <Select
                  value={answers[26 + index] || ""}
                  onChange={(e) =>
                    handleInputChange(26 + index, e.target.value)
                  }
                  sx={{ width: "5em" }}
                >
                  {["A", "B", "C", "D", "E", "F", "G", "H"].map((answer) => (
                    <MenuItem key={answer} value={answer}>
                      {answer}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </ListItem>
          ))}
        </List>

        <Typography sx={{ ml: 1, mb: 1, mt: 2 }}>Questions 33-39</Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Complete the flow chart below.
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Choose <b>NO MORE THAN THREE WORDS</b> from the passage for each
          answer.
        </Typography>
        <Box sx={{ textAlign: "left", mt: 3, fontSize: "1.2em" }}>
          <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
            A rock climbing time line
          </Typography>

          <Box sx={{ bgcolor: "#f5f5f5", p: 2, mb: 2 }}>
            <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 1 }}>
              Late 19th century
            </Typography>
            <Box>
              <Box sx={{ mb: 3 }}>
                {" "}
                Some climbers discuss whether pitons and ropes should only be
                considered
              </Box>
              <TextField
                sx={{ width: "10em", mb: 5, mt: -2.5 }}
                label="33"
                variant="standard"
                size="small"
                autoComplete="off"
                onChange={(e) => handleInputChange(32, e.target.value)}
                value={answers[32]}
                ref={(el) => (questionRefs.current[6] = el)}
              />
              .
            </Box>
            <TextField
              sx={{ width: "10em", mt: -2.5, mb: 1 }}
              variant="standard"
              label="34"
              size="small"
              autoComplete="off"
              onChange={(e) => handleInputChange(33, e.target.value)}
              value={answers[33]}
              ref={(el) => (questionRefs.current[7] = el)}
            />
            calls for guidelines based on unwritten rules which discourage
            climbing aids.
          </Box>

          <Box sx={{ bgcolor: "#f5f5f5", p: 2, mb: 2 }}>
            <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 1 }}>
              1940s
            </Typography>
            New equipment becomes controversial. Frank Smythe says that Mt
            Brussels is
            <Box sx={{ mt: 3, mb: 1 }}>
              effectively
              <TextField
                sx={{ width: "10em", mt: -2.5, ml: 1 }}
                label="35"
                variant="standard"
                size="small"
                autoComplete="off"
                onChange={(e) => handleInputChange(34, e.target.value)}
                value={answers[34]}
                ref={(el) => (questionRefs.current[8] = el)}
              />
              because of the techniques that were used
            </Box>{" "}
            in order to scale the mountain.
          </Box>

          <Box sx={{ bgcolor: "#f5f5f5", p: 2, mb: 2 }}>
            <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 1 }}>
              1970s
            </Typography>
            <TextField
              sx={{ width: "10em", mt: -2.5, mb: 3, mr: 1 }}
              label="36"
              variant="standard"
              size="small"
              autoComplete="off"
              onChange={(e) => handleInputChange(35, e.target.value)}
              value={answers[35]}
              ref={(el) => (questionRefs.current[9] = el)}
            />
            is more environmentally friendly.
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TextField
                sx={{ width: "10em", mt: -2.5 }}
                label="37"
                variant="standard"
                size="small"
                autoComplete="off"
                onChange={(e) => handleInputChange(36, e.target.value)}
                value={answers[36]}
                ref={(el) => (questionRefs.current[10] = el)}
              />
              are introduced as a climbing aid.
            </Box>
          </Box>

          <Box sx={{ bgcolor: "#f5f5f5", p: 2 }}>
            <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 1 }}>
              1980s – today
            </Typography>
            Climbers discuss the merits of new techniques for making hand holds,
            and
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 3,
                mb: 3,
              }}
            >
              also of{" "}
              <TextField
                sx={{ width: "10em", mt: -2.5 }}
                label="38"
                variant="standard"
                size="small"
                autoComplete="off"
                onChange={(e) => handleInputChange(37, e.target.value)}
                value={answers[37]}
                ref={(el) => (questionRefs.current[11] = el)}
              />
              . Many say that climbing is now a test of
            </Box>
            physical strength and
            <TextField
              sx={{ width: "10em", mt: -2.5, ml: 1 }}
              label="39"
              variant="standard"
              size="small"
              autoComplete="off"
              onChange={(e) => handleInputChange(38, e.target.value)}
              value={answers[38]}
              ref={(el) => (questionRefs.current[12] = el)}
            />
            , rather than of courage.
          </Box>
        </Box>

        <Typography sx={{ ml: 1, mb: 1, mt: 2 }}>Question 40</Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Choose the correct letter, A, B, C or D.
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Write the correct letter in box 40 on your answer sheet.
        </Typography>
        <Typography sx={{ ml: 1, mb: 2 }}>
          Choose the most appropriate title for the reading passage.
        </Typography>

        <FormControl sx={{ ml: 5, width: "90%" }}>
          <RadioGroup
            value={answers[39] || ""}
            onChange={(e) => handleInputChange(39, e.target.value)}
            ref={(el) => (questionRefs.current[13] = el)}
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label="A) A history of rock climbing"
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label="B) Ethics and issues in rock climbing"
            />
            <FormControlLabel
              value="C"
              control={<Radio />}
              label="C) Current trends in rock climbing"
            />
            <FormControlLabel
              value="D"
              control={<Radio />}
              label="D) Sport climbers versus traditional climbers"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Part3;
