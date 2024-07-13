import React from "react";
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
const mapImage = "/images/test1/listening1-section2.jpg";
const answerImage = "/images/test1/listening1-section2-2.jpg";

export default function Section2({ answers, setAnswers }) {
  const possibleAnswers = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

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
          Part 2
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 11-20
        </Typography>
      </Box>
      <Typography>Questions 11-17</Typography>
      <Typography>Label the plan of the rock festival site below.</Typography>
      <Typography>
        Choose <b>SEVEN</b> answers from the box and write the correct letter,{" "}
        <b>A-I</b>, next to the questions 11-17.
      </Typography>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box
          component="img"
          sx={{
            width: "60%",
            maxWidth: "60rem",
            mt: 2,
          }}
          alt="Map"
          src={mapImage}
        />
        <Box>
          <Box
            component="img"
            sx={{
              width: "80%",
              maxWidth: "60rem",
              mt: 20,
            }}
            alt="Map"
            src={answerImage}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "60rem",
          mt: 2,
        }}
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <FormControl sx={{ mt: 2, margin: "2em" }} key={index}>
            <InputLabel>{`${11 + index}`}</InputLabel>
            <Select
              sx={{ width: "5em" }}
              value={answers[10 + index] || ""}
              onChange={(e) => handleInputChange(10 + index, e.target.value)}
              label={`${11 + index}`}
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
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "60rem",
        }}
      >
        <Typography>Questions 18-20</Typography>
        <Typography>Complete the sentences below.</Typography>
        <Typography>
          Write <b>NO MORE THAN TWO WORDS</b> for each answer.
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
            <Typography sx={{ marginRight: "3rem" }}>18 </Typography>
            To show you are an official visitor, you have to wear the
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="18"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(17, e.target.value)}
              value={answers[17]}
            />
            provided.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>19 </Typography>
            Cars blocing paths could prevent access by
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="19"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(18, e.target.value)}
              value={answers[18]}
            />
            in an emergency.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>20 </Typography>
            To reclaim items from storage, you must show your
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="20"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(19, e.target.value)}
              value={answers[19]}
            />
            .
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
