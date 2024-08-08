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

import M32Text from "./text/M32Text";

const Part1 = ({ answers, setAnswers }) => {
  const possibleAnswers = ["TRUE", "FALSE", "NOT GIVEN"];
  const possibleAnswers2 = ["A", "B", "C", "D", "E", "F", "G"];

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
        <M32Text />
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
          You should spend about 20 minutes on <b>Questions 1-14</b>, which are
          based on Reading Passage 1.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 1 - 7</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Do the following statements agree with the information given in the
          Reading Passage 1?
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          In boxes 1-7 below, select
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            pl: "3rem",
            width: "90%",
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
            pl: "3rem",
            width: "90%",
          }}
        >
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>1 </Typography>
            Stage 3 of the development was made public as soon as it was
            approved.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>2 </Typography>The
            developers responded to public complaints about Zone 1.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>3 </Typography>
            The meeting will be led by a representative from the Parents
            Association.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>4 </Typography>
            There is a plan to safely relocate animals in Zone 2.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>5 </Typography>
            Packers Road currently has more traffic problems than Bradford
            Street.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>6 </Typography>
            The developers produced a document about the effects of the
            development on nature in the area.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>7 </Typography>
            Children will be affected by the construction activities.
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl sx={{ ml: 5, margin: "1em" }} key={index}>
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
            width: "100%",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <FormControl sx={{ margin: "1em" }} key={7}>
            <InputLabel>7</InputLabel>
            <Select
              sx={{ width: "10em" }}
              value={answers[6] || ""}
              onChange={(e) => handleInputChange(6, e.target.value)}
              label={7}
            >
              {possibleAnswers.map((answer) => (
                <MenuItem key={answer} value={answer}>
                  {answer}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>Questions 8 - 14</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Look at the seven descriptions of events <b>A-G</b>.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          For which events are the following statements true?
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Pick the correct letter in boxes 8-14.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>NB</b> You may use any letter more
          than once.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>8</b> You can see a presentation
          about prepa ring food.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>9</b> You can watch a group of young
          people dancing.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>10</b> Children can d raw with the
          help of an expert.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>11</b> You can listen to local
          singers.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>12</b> There are prizes for
          children.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>13</b> There are activities for
          pets.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>14</b> There is a place to take a
          rest.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <FormControl sx={{ mt: 2, mx: "1em" }} key={index}>
              <InputLabel>{`${8 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[7 + index] || ""}
                onChange={(e) => handleInputChange(7 + index, e.target.value)}
                label={`${8 + index}`}
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
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          {Array.from({ length: 2 }).map((_, index) => (
            <FormControl sx={{ mt: 2, mx: "1em" }} key={index}>
              <InputLabel>{`${13 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[12 + index] || ""}
                onChange={(e) => handleInputChange(12 + index, e.target.value)}
                label={`${13 + index}`}
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
    </Box>
  );
};

export default Part1;
