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

import CollectText from "./text/CollectText";

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = React.useRef(Array(13).fill(null));
  const prevQuestionRef = React.useRef(null); // Add this to track previous question

  React.useEffect(() => {
    // Skip if it's the initial mount (prevQuestion is null)
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

          // Delay focus/click slightly after scroll
          setTimeout(() => {
            // Questions 1-6 (Select - TRUE/FALSE/NOT GIVEN)
            if (index < 6) {
              const selectButton = element.querySelector("[role='button']");
              if (selectButton) {
                selectButton.focus();
              }
            }
            // Questions 7-13 (TextField)
            else if (index >= 6) {
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
  const possibleAnswers = ["TRUE", "FALSE", "NOT GIVEN"];

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
        <CollectText />
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
          padding: 1,
        }}
      >
        <Typography sx={{ ml: 5, fontSize: "1.1em", mb: 1 }}>
          <b>READING PASSAGE 1</b>
        </Typography>
        <Typography sx={{ mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 1-13</b>, which are
          based on Reading Passage 1.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b>Questions 1 - 6</b>
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Do the following statements agree with the information given in the
          Reading Passage?
        </Typography>
        <Typography sx={{ mb: 1 }}>In boxes 1-6 below, select</Typography>
        <Typography sx={{ mb: 1 }}>
          Classify the following characteristics as belonging to
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            pl: "3rem",
          }}
        >
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "4.8em" }}>TRUE</b> if the statement agrees
            with the information
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "4.5em" }}>FALSE</b> if the statement
            contradicts the information
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "2em" }}>NOT GIVEN</b> if there is no
            information on this
          </ListItem>
        </List>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0,
            pl: "2rem",
          }}
        >
          <ListItem
            ref={(el) => (questionRefs.current[0] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "2rem", ml: -5 }}>1 </Typography>
            Dr Maria Richter believes that people become interested in
            collecting in early childhood.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[1] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "2rem", ml: -5 }}>2 </Typography>A
            form of collecting may have helped some ancient humans to survive.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[2] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "2rem", ml: -5 }}>3 </Typography>
            Leonard Woolley expected to find the remains of a private collection
            at Ur.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[3] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "2rem", ml: -5 }}>4 </Typography>
            Woolley found writing that identified some of the objects he
            discovered.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[4] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "2rem", ml: -5 }}>5 </Typography>
            Princess Ennigaldi established her collection to show off her
            wealth.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[5] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "2rem", ml: -5 }}>6 </Typography>
            Displaying artworks was the main purpose of Cabinets of Curiosities.
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl sx={{ ml: 3, margin: "1em" }} key={index}>
              <InputLabel>{`${1 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl sx={{ margin: "1em" }} key={index}>
              <InputLabel>{`${4 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[3 + index] || ""}
                onChange={(e) => handleInputChange(3 + index, e.target.value)}
                label={`${4 + index}`}
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
        <Typography sx={{ mb: 1, mt: 3 }}>Questions 7 - 10</Typography>
        <Typography>Complete the notes below.</Typography>
        <Typography>
          Write <b>ONE WORD ONLY</b> from the passage for each answer.
        </Typography>
        <Box
          sx={{
            height: "auto",
            maxWidth: "60rem",
            mt: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "flex-start",
            borderStyle: "solid",
            padding: "1em",
            textAlign: "left",
            fontSize: "1.1em",
          }}
        >
          <Typography variant="h6" sx={{ marginLeft: "5em" }}>
            Some significant private collections
          </Typography>
          <List sx={{ listStyleType: "circle", ml: "1em" }}>
            <Typography>
              <b>
                15<sup>th</sup>-17<sup>th</sup> Centuries
              </b>
            </Typography>
            <ListItem
              ref={(el) => (questionRefs.current[6] = el)}
              sx={{ display: "list-item", mb: "0.5em", mt: 1 }}
            >
              The Medici family made their money from
              <TextField
                sx={{ mt: -2.5, ml: 1, mr: 1, width: "8em" }}
                label="7"
                variant="standard"
                autoComplete="off"
                onChange={(e) => handleInputChange(6, e.target.value)}
                value={answers[6]}
              />
              .
            </ListItem>
            <ListItem
              ref={(el) => (questionRefs.current[7] = el)}
              sx={{ display: "list-item", mb: "0.5em" }}
            >
              At the Palazzo Medici there was a hidden ‘studio’ which had no
              <Box sx={{ mt: 3 }}>
                <TextField
                  sx={{ mt: -2.5, ml: 1, mr: 1, width: "7em" }}
                  label="8"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(7, e.target.value)}
                  value={answers[7]}
                />
                .
              </Box>
            </ListItem>
            <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
              Ole Worm liked to show when other scientists had made mistakes.
            </ListItem>
            <ListItem
              ref={(el) => (questionRefs.current[8] = el)}
              sx={{ display: "list-item", mb: "0.5em" }}
            >
              Ole Worm made an important
              <TextField
                sx={{ mt: -2.5, ml: 1, mr: 1, width: "8em" }}
                label="9"
                variant="standard"
                autoComplete="off"
                onChange={(e) => handleInputChange(8, e.target.value)}
                value={answers[8]}
              />
              of a bird.
            </ListItem>
            <Typography>
              <b>
                19<sup>th</sup> Centuries
              </b>
            </Typography>
            <ListItem
              ref={(el) => (questionRefs.current[9] = el)}
              sx={{ display: "list-item", mb: "0.5em", mt: 3 }}
            >
              Lady Charlotte Guest created a collection of
              <TextField
                sx={{ mt: -2.5, ml: 1, mr: 1, width: "8em" }}
                label="10"
                variant="standard"
                autoComplete="off"
                onChange={(e) => handleInputChange(9, e.target.value)}
                value={answers[9]}
              />
              which she left to a museum.
            </ListItem>
            <ListItem
              ref={(el) => (questionRefs.current[10] = el)}
              sx={{ display: "list-item", mb: "0.5em" }}
            >
              Joseph Mayer paid for
              <TextField
                sx={{ mt: -2.5, ml: 1, mr: 1, width: "8em" }}
                label="11"
                variant="standard"
                autoComplete="off"
                onChange={(e) => handleInputChange(10, e.target.value)}
                value={answers[10]}
              />
              that are still given to the public today.
            </ListItem>
            <Typography>
              <b>
                20<sup>th</sup> Centuries
              </b>
            </Typography>
            <ListItem
              ref={(el) => (questionRefs.current[11] = el)}
              sx={{ display: "list-item", mb: "0.5em" }}
            >
              Beatrix Potter did not give away her collection of
              <TextField
                sx={{ mt: -2.5, ml: 1, mr: 1, width: "8em" }}
                label="12"
                variant="standard"
                autoComplete="off"
                onChange={(e) => handleInputChange(11, e.target.value)}
                value={answers[11]}
              />
              .
            </ListItem>
            <ListItem
              ref={(el) => (questionRefs.current[12] = el)}
              sx={{ display: "list-item", mb: "0.5em" }}
            >
              Franklin D. Roosevelt believed collecting helped him deal with the
              <Box sx={{ mt: 3 }}>
                <TextField
                  sx={{ mt: -2.5, ml: 1, mr: 1, width: "8em" }}
                  label="13"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(12, e.target.value)}
                  value={answers[12]}
                />
                of this job.
              </Box>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Part1;
