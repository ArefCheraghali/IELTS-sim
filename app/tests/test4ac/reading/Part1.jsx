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

import FoliesBarText from "./text/FoliesBarText";

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  const possibleAnswers = ["A", "B", "C", "D", "E", "F"];
  const questionRefs = React.useRef(Array(13).fill(null));
  const prevQuestionRef = React.useRef(null); // Add this line

  React.useEffect(() => {
    // Skip if it's the initial mount
    if (prevQuestionRef.current === null) {
      prevQuestionRef.current = currentQuestion;
      return;
    }

    // Only scroll if the question actually changed
    if (prevQuestionRef.current !== currentQuestion) {
      if (currentQuestion >= 1 && currentQuestion <= 13) {
        const index = currentQuestion - 1;
        const element = questionRefs.current[index];
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          // Add delay to ensure scroll completes before focus
          setTimeout(() => {
            // For questions 1-5 (Select)
            if (index < 5) {
              const select = element.querySelector("[role='button']");
              if (select) {
                select.focus();
              }
            }
            // For questions 6-10 (TextField)
            else {
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
        <FoliesBarText />
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
        <Typography sx={{ ml: 5, fontSize: "1.1em", mb: 1 }}>
          <b>READING PASSAGE 1</b>
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 1-13</b>, which are
          based on Reading Passage 1.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 1-5</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Reading Passage 1 has six paragraphs, A-F.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Which paragraph contains the following information?
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose the correct letter, A-F, in boxes 1-5.
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
            width: "90%",
          }}
        >
          <ListItem
            ref={(el) => (questionRefs.current[0] = el)}
            sx={{ display: "flex", flexDirection: "row", fontSize: "1.1em" }}
          >
            <Typography sx={{ width: "2rem" }}>1 </Typography>
            <Typography>
              a description of how Manet created the painting
            </Typography>
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[1] = el)}
            sx={{ display: "flex", flexDirection: "row", fontSize: "1.1em" }}
          >
            <Typography sx={{ width: "2rem" }}>2 </Typography>
            <Typography>
              aspects of the painting that scholars are most interested in
            </Typography>
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[2] = el)}
            sx={{ display: "flex", flexDirection: "row", fontSize: "1.1em" }}
          >
            <Typography sx={{ width: "2rem" }}>3 </Typography>
            <Typography>
              the writer's view of the idea that Manet wants to communicate
            </Typography>
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[3] = el)}
            sx={{ display: "flex", flexDirection: "row", fontSize: "1.1em" }}
          >
            <Typography sx={{ width: "2rem" }}>4 </Typography>
            <Typography>
              examples to show why the bar scene is unrealistic
            </Typography>
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[4] = el)}
            sx={{ display: "flex", flexDirection: "row", fontSize: "1.1em" }}
          >
            <Typography sx={{ width: "2rem" }}>5 </Typography>
            <Typography>
              a statement about the popularity of the painting
            </Typography>
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
            padding: 2,
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <FormControl key={index}>
              <InputLabel>{`${1 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[index] || ""}
                onChange={(e) => handleInputChange(index, e.target.value)}
                label={`${1 + index}`}
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
        <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>Questions 6-10</Typography>
        <Typography>Answer the questions below.</Typography>
        <Typography>
          Choose <b>NO MORE THAN THREE WORDS</b> from the passage for each
          answer.
        </Typography>
        <Typography>Write your answers in boxes 6-10.</Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
            pl: "3rem",
            width: "90%",
            mt: 2,
          }}
        >
          <ListItem
            ref={(el) => (questionRefs.current[5] = el)}
            sx={{ display: "flex", flexDirection: "row", fontSize: "1.1em" }}
          >
            <Typography sx={{ width: "2rem" }}>6 </Typography>
            <Typography>
              Who was the first owner of A Bar at the Folies?
            </Typography>
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[6] = el)}
            sx={{ display: "flex", flexDirection: "row", fontSize: "1.1em" }}
          >
            <Typography sx={{ width: "2rem" }}>7 </Typography>
            <Typography>What is the barmaid wearing?</Typography>
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[7] = el)}
            sx={{ display: "flex", flexDirection: "row", fontSize: "1.1em" }}
          >
            <Typography sx={{ width: "2rem" }}>8 </Typography>
            <Typography>
              Which room is seen at the back of the painting?
            </Typography>
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[8] = el)}
            sx={{ display: "flex", flexDirection: "row", fontSize: "1.1em" }}
          >
            <Typography sx={{ width: "2rem" }}>9 </Typography>
            <Typography>Who is performing for the audience?</Typography>
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[9] = el)}
            sx={{ display: "flex", flexDirection: "row", fontSize: "1.1em" }}
          >
            <Typography sx={{ width: "2rem" }}>10 </Typography>
            <Typography>
              Where did most of the work on the painting take place?
            </Typography>
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
            padding: 2,
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <FormControl key={index + 5}>
              <TextField
                sx={{ width: "15em" }}
                label={`${6 + index}`}
                variant="outlined"
                autoComplete="off"
                onChange={(e) => handleInputChange(5 + index, e.target.value)}
                value={answers[5 + index] || ""}
              />
            </FormControl>
          ))}
        </Box>
        <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>Questions 11-13</Typography>
        <Typography>
          Complete each sentence with the correct ending, A-F, below.
        </Typography>
        <Typography>Write the correct letter, A-F, in boxes 11-13.</Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
            pl: "3rem",
            width: "90%",
            mt: 2,
          }}
        >
          <ListItem
            ref={(el) => (questionRefs.current[10] = el)}
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "1.1em",
              gap: 2,
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ width: "2rem" }}>11 </Typography>
              <Typography>
                Manet misrepresents the images in the mirror because he
              </Typography>
            </Box>
            <FormControl sx={{ ml: 3 }}>
              <Select
                value={answers[10] || ""}
                onChange={(e) => handleInputChange(10, e.target.value)}
                size="small"
                sx={{ minWidth: 400 }}
              >
                {[
                  "A. wanted to find out if the painting's perspective was realistic",
                  "B. had to work in a private studio",
                  "C. needed to show the barmaid's different emotions",
                  "D. felt disconnected from their real identity",
                  "E. were fascinated by the mirror's reflection",
                  "F. preferred to focus on the human aspect",
                ].map((answer) => (
                  <MenuItem key={answer} value={answer.charAt(0)}>
                    {answer}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[11] = el)}
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "1.1em",
              gap: 2,
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ width: "2rem" }}>12 </Typography>
              <Typography>
                Manet felt modern workers were alienated because they
              </Typography>
            </Box>
            <FormControl sx={{ ml: 3 }}>
              <Select
                value={answers[11] || ""}
                onChange={(e) => handleInputChange(11, e.target.value)}
                size="small"
                sx={{ minWidth: 400 }}
              >
                {[
                  "A. wanted to find out if the painting's perspective was realistic",
                  "B. had to work in a private studio",
                  "C. needed to show the barmaid's different emotions",
                  "D. felt disconnected from their real identity",
                  "E. were fascinated by the mirror's reflection",
                  "F. preferred to focus on the human aspect",
                ].map((answer) => (
                  <MenuItem key={answer} value={answer.charAt(0)}>
                    {answer}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[12] = el)}
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "1.1em",
              gap: 2,
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ width: "2rem" }}>13 </Typography>
              <Typography>
                Academics have re-constructed the painting in real life because
                they
              </Typography>
            </Box>
            <FormControl sx={{ ml: 3 }}>
              <Select
                value={answers[12] || ""}
                onChange={(e) => handleInputChange(12, e.target.value)}
                size="small"
                sx={{ minWidth: 400 }}
              >
                {[
                  "A. wanted to find out if the painting's perspective was realistic",
                  "B. had to work in a private studio",
                  "C. needed to show the barmaid's different emotions",
                  "D. felt disconnected from their real identity",
                  "E. were fascinated by the mirror's reflection",
                  "F. preferred to focus on the human aspect",
                ].map((answer) => (
                  <MenuItem key={answer} value={answer.charAt(0)}>
                    {answer}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Part1;
