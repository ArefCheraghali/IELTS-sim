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

import EmergencyText from "./text/EmergencyText";

const Section1 = ({ answers, setAnswers }) => {
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
        marginLeft: "-200px",
        marginRight: "-200px",
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
        <EmergencyText />
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
          <b>Part 1</b>
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 1-14</b>, which are
          based on Reading Part 1.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 1 - 8</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Complete the sentences below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose <b>NO MORE THAN THREE WORDS</b> from the{" "}
          <b>
            <i>first text (Emergency Procedures)</i>
          </b>{" "}
          for each answer
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Write your answers in boxes 1-8
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
            <Typography sx={{ marginRight: "3rem" }}>1 </Typography>
            In an emergency, a teacher will either phone the office or
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="1"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(0, e.target.value)}
              value={answers[0]}
            />
            .
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>2 </Typography>
            The signal for evacuation will normally be several
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="2"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(1, e.target.value)}
              value={answers[1]}
            />
            .
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>3 </Typography>
            If possible, students should leave the building by the
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="3"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(2, e.target.value)}
              value={answers[2]}
            />
            .
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>4 </Typography>
            They then walk quickly to the
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="4"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(3, e.target.value)}
              value={answers[3]}
            />
            .
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>5 </Typography>
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="5"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(4, e.target.value)}
              value={answers[4]}
            />
            will join the teachers and students in the quad.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>6 </Typography>
            Each class teacher will count up his or her students and mark
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="6"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(5, e.target.value)}
              value={answers[5]}
            />
            .
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>7 </Typography>
            After the
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "10em" }}
              label="7"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(6, e.target.value)}
              value={answers[6]}
            />
            , everyone may return to class.
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "40em",
            }}
          >
            <Typography sx={{ marginRight: "3rem" }}>8 </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                If there is an emergency at lunchtime, students gather in the
                quad in
              </Box>
              <Box sx={{ mt: 3 }}>
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="8"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(7, e.target.value)}
                  value={answers[7]}
                />
                and wait for their teacher.
              </Box>
            </Box>
          </ListItem>
        </List>
        <br />
        <Typography sx={{ ml: 2, mb: 1 }}>
          Read the{" "}
          <b>
            <i>second text (Community Education)</i>
          </b>{" "}
          and answer Questions 9 - 14
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 9 - 14</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Do the following statements agree with the information given in the
          passage 2?
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          In boxes 18-23 on your answer sheet, write
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Classify the following characteristics as belonging to
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
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>9 </Typography>
            Business Basics is appropriate for beginners.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>10 </Typography>
            Bookkeeping has no practical component.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>11 </Typography>
            Bookkeeping is intended for advanced students only.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>12 </Typography>
            The New Enterprise Module can help your business become more
            profitable.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>13 </Typography>
            Social Networking focuses on a specific website to help your
            business succeed.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>14 </Typography>
            The Communication class involves speaking in front of an audience.
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
              <InputLabel>{`${9 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[8 + index] || ""}
                onChange={(e) => handleInputChange(8 + index, e.target.value)}
                label={`${9 + index}`}
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
              <InputLabel>{`${12 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[11 + index] || ""}
                onChange={(e) => handleInputChange(11 + index, e.target.value)}
                label={`${12 + index}`}
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
    </Box>
  );
};

export default Section1;
