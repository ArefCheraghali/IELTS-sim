import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  List,
  ListItem,
  TextField,
} from "@mui/material";

export default function Part4({ answers, setAnswers, currentQuestion }) {
  // Create refs for each text field
  const inputRefs = useRef([]);
  const questionRefs = useRef([]);

  useEffect(() => {
    if (currentQuestion >= 31 && currentQuestion <= 40) {
      const index = currentQuestion - 31;
      if (questionRefs.current[index]) {
        questionRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        if (inputRefs.current[index]) {
          if (currentQuestion <= 38) {
            inputRefs.current[index].focus();
          } else {
            inputRefs.current[index].focus();
            const radioButtons = questionRefs.current[index].querySelectorAll(
              'input[type="radio"]'
            );
            if (radioButtons.length > 0) {
              const selectedRadio =
                radioButtons[answers[currentQuestion - 1]] || radioButtons[0];
              selectedRadio.focus();
            }
          }
        }
      }
    }
  }, [currentQuestion, answers]);

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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "60rem",
          margin: "0 auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Part 4
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 31-40
        </Typography>
      </Box>
      <Typography>Questions 31-33</Typography>
      <Typography>Complete the notes below.</Typography>
      <Typography>
        Write <b>ONE WORD ONLY</b> for each answer.
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: "60rem",
            mt: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "flex-start",
            borderStyle: "solid",
            padding: "1em",
            fontSize: "18px",
          }}
        >
          <Typography variant="h6" sx={{ marginLeft: "40%" }}>
            <b>The Tiger Shark</b>
          </Typography>
          <List sx={{ listStyleType: "disc", ml: "3em" }}>
            <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
              <b>Origin of Name:</b> its dark bands
            </ListItem>
            <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
              <b>Size:</b> 6.5 metres (maximum)
            </ListItem>
            <ListItem
              sx={{ display: "list-item", mb: "0.5em" }}
              ref={(el) => (questionRefs.current[0] = el)}
            >
              <b>Preferred habitat:</b> near to the{" "}
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="31"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[0] = el)}
                onChange={(e) => handleInputChange(30, e.target.value)}
                value={answers[30]}
              />
            </ListItem>
            <ListItem
              sx={{ display: "list-item", mb: "0.5em" }}
              ref={(el) => (questionRefs.current[1] = el)}
            >
              <b>Typical food:</b> other sea creatures but also{" "}
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="32"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[1] = el)}
                onChange={(e) => handleInputChange(31, e.target.value)}
                value={answers[31]}
              />{" "}
              produced by humans
            </ListItem>
            <ListItem
              sx={{ display: "list-item", mb: "0.5em" }}
              ref={(el) => (questionRefs.current[2] = el)}
            >
              <b>Raine Island area:</b> studies show tiger sharks are mainly
              found here during the{" "}
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="33"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[2] = el)}
                onChange={(e) => handleInputChange(32, e.target.value)}
                value={answers[32]}
              />
              (when the turtles are nesting)
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "60rem",
          mt: "1em",
        }}
      >
        <Typography>Questions 34-38</Typography>
        <Typography>Complete the flow-chart below.</Typography>
        <Typography>
          Write <b>ONE WORD ONLY</b> for each answer.
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginLeft: "40%", marginBottom: "0.5em" }}
        >
          <b>Shark Tagging Process</b>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            alignContent: "center",
            fontSize: "1.1em",
          }}
        >
          <List sx={{ listStyleType: "disc", ml: "3em", gap: 10 }}>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "row",
                display: "list-item",
                mb: 2,
              }}
              ref={(el) => (questionRefs.current[3] = el)}
            >
              Pieces of
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="34"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[3] = el)}
                onChange={(e) => handleInputChange(33, e.target.value)}
                value={answers[33]}
              />
              were attached to lines as bait.
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "row",
                display: "list-item",
                mb: 2,
              }}
              ref={(el) => (questionRefs.current[4] = el)}
            >
              The lines were
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="35"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[4] = el)}
                onChange={(e) => handleInputChange(34, e.target.value)}
                value={answers[34]}
              />
              regularly.
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "row",
                display: "list-item",
                mb: "0.5em",
              }}
              ref={(el) => (questionRefs.current[5] = el)}
            >
              The hooked shark was brought to the
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="36"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[5] = el)}
                onChange={(e) => handleInputChange(35, e.target.value)}
                value={answers[35]}
              />
              and secured.
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "row",
                display: "list-item",
                mb: "0.5em",
              }}
            >
              The shark was measured and tagged, and tissue removed for
              research.
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "row",
                display: "list-item",
                mb: "0.5em",
              }}
              ref={(el) => (questionRefs.current[6] = el)}
            >
              Larger sharks: an acoustic tag was fitted or a
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="37"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[6] = el)}
                onChange={(e) => handleInputChange(36, e.target.value)}
                value={answers[36]}
              />
              was attached.
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "row",
                display: "list-item",
                mb: "0.5em",
              }}
              ref={(el) => (questionRefs.current[7] = el)}
            >
              The shark was released after its
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="38"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[7] = el)}
                onChange={(e) => handleInputChange(37, e.target.value)}
                value={answers[37]}
              />
              was checked.
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "60rem",
          mt: "1em",
        }}
      >
        <Typography>Questions 39-40</Typography>
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
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            ref={(el) => (questionRefs.current[8] = el)}
          >
            <Typography ref={(el) => (inputRefs.current[8] = el)} tabIndex={0}>
              <b style={{ marginRight: "2em" }}>39</b> What was the most
              surprising finding about tiger sharks in the Raine Island area?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[38] || ""}
              onChange={(e) => handleInputChange(38, e.target.value)}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) They were more numerous than expected."
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) They were larger than expected."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) They were less aggressive than expected."
              />
            </RadioGroup>
          </FormControl>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            ref={(el) => (questionRefs.current[9] = el)}
          >
            <Typography ref={(el) => (inputRefs.current[9] = el)} tabIndex={0}>
              <b style={{ marginRight: "2em" }}>40</b> What does the speaker say
              about the future of the research project?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[39] || ""}
              onChange={(e) => handleInputChange(39, e.target.value)}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) The same methods will continue to be used."
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) More attention will be paid to other species."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) A new system of tagging will be tried out."
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
