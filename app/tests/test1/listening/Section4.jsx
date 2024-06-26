import React from "react";
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

export default function Section4({ answers, setAnswers }) {
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
          Section 4
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
            <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
              <b>Preferred habitat:</b> near to the{" "}
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="31"
                variant="standard"
                autoComplete="off"
                onChange={(e) => handleInputChange(30, e.target.value)}
                value={answers[30]}
              />
            </ListItem>
            <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
              <b>Typical food:</b> other sea creatures but also{" "}
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="32"
                variant="standard"
                autoComplete="off"
                onChange={(e) => handleInputChange(31, e.target.value)}
                value={answers[31]}
              />{" "}
              produced by humans
            </ListItem>
            <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
              <b>Raine Island area:</b> studies show tiger sharks are mainly
              found here during the{" "}
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="33"
                variant="standard"
                autoComplete="off"
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
            >
              Pieces of
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="34"
                variant="standard"
                autoComplete="off"
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
            >
              The lines were
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="35"
                variant="standard"
                autoComplete="off"
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
            >
              The hooked shark was brought to the
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="36"
                variant="standard"
                autoComplete="off"
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
            >
              Larger sharks: an acoustic tag was fitted or a
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="37"
                variant="standard"
                autoComplete="off"
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
            >
              The shark was
              <TextField
                sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                label="38"
                variant="standard"
                autoComplete="off"
                onChange={(e) => handleInputChange(37, e.target.value)}
                value={answers[37]}
              />
              and could be tracked.
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
          mt: 3,
          mb: 3,
        }}
      >
        <Typography>Questions 39 and 40</Typography>
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
              <b style={{ marginRight: "2em" }}>39</b> The purpose of the
              research was to understand the tiger sharks'
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[38] || ""}
              onChange={(e) => handleInputChange(38, e.target.value)}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) reproductive patterns."
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) migration patterns."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) feeding patterns."
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em", marginLeft: "-3em" }}>40</b>{" "}
              Observations showed that, in general, tiger sharks
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[39] || ""}
              onChange={(e) => handleInputChange(39, e.target.value)}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) change depths frequently."
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) usually avoid the surface of the water."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) often spend long periods on the ocean floor."
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
