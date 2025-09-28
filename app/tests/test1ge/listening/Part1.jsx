import { useRef, useEffect } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

export default function Part1({ answers, setAnswers, currentQuestion }) {
  // Create refs for each text field
  const inputRefs = useRef([]);
  const questionRefs = useRef([]);

  useEffect(() => {
    // Focus on the text field corresponding to the current question
    if (currentQuestion >= 1 && currentQuestion <= 10) {
      const index = currentQuestion - 1;
      if (inputRefs.current[index]) {
        inputRefs.current[index].focus();
        questionRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
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
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          margin: "0 auto",
          maxWidth: "1300px",
          padding: "0 2rem",
          pt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            minWidth: "50rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Part 1
          </Typography>
          <Typography variant="h6" gutterBottom>
            Questions 1-10
          </Typography>
        </Box>
        <Typography>Complete the form below.</Typography>
        <Typography>
          Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.
        </Typography>
        <Box sx={{ textAlign: "center", mt: 5, width: "80%" }}>
          <Typography>
            <b>THEATRE ROYAL PLYMOUTH</b>
          </Typography>
          <Typography>Booking Form</Typography>
        </Box>
        <Divider
          variant="middle"
          sx={{
            width: "90%",
            maxWidth: "80rem",
            mt: 2,
            mb: 2,
            bgcolor: "black",
          }}
        />
        <Box sx={{ minWidth: "100%" }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
              pl: "3rem",
              width: "75%",
            }}
          >
            <ListItem
              sx={{ display: "flex", flexDirection: "row" }}
              ref={(el) => (questionRefs.current[0] = el)}
            >
              <Typography sx={{ marginRight: "14rem" }}>Date: </Typography>
              <Typography>Saturday</Typography>
              <TextField
                sx={{ mt: -2, ml: 1 }}
                label="1"
                variant="standard"
                autoComplete="off"
                inputRef={(el) => (inputRefs.current[0] = el)}
                onChange={(e) => handleInputChange(0, e.target.value)}
                value={answers[0]}
              />
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "14em" }}>Time: </Typography>
              <TextField
                sx={{ mt: -2, ml: 1 }}
                label="2"
                autoComplete="off"
                variant="standard"
                inputRef={(el) => (inputRefs.current[1] = el)}
                onChange={(e) => handleInputChange(1, e.target.value)}
                value={answers[1]}
              />
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "13em" }}>Tickets:</Typography>
              <Typography>three adults and one child</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "13em" }}>Seats in:</Typography>
              <Typography>the</Typography>
              <TextField
                sx={{ mt: -2, ml: 1 }}
                autoComplete="off"
                variant="standard"
                label="3"
                inputRef={(el) => (inputRefs.current[2] = el)}
                onChange={(e) => handleInputChange(2, e.target.value)}
                value={answers[2]}
              />
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "7em" }}>
                Seat row/number(s):
              </Typography>
              <TextField
                sx={{ mt: -2, ml: 1 }}
                autoComplete="off"
                variant="standard"
                label="4"
                inputRef={(el) => (inputRefs.current[3] = el)}
                onChange={(e) => handleInputChange(3, e.target.value)}
                value={answers[3]}
              />
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "8em" }}>
                Method of delivery:
              </Typography>
              <Typography>post</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "10em" }}>
                Total payment:
              </Typography>
              <Typography>39 pounds</Typography>
            </ListItem>
            <Divider
              variant="middle"
              sx={{
                width: "90%",
                maxWidth: "80rem",
                mt: 2,
                mb: 2,
                bgcolor: "black",
              }}
            />
            <Typography sx={{ ml: 2 }}>Card details:</Typography>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "9em", marginLeft: "5em" }}>
                Type:
              </Typography>
              <TextField
                sx={{ mt: -2, ml: 1 }}
                autoComplete="off"
                variant="standard"
                label="5"
                inputRef={(el) => (inputRefs.current[4] = el)}
                onChange={(e) => handleInputChange(4, e.target.value)}
                value={answers[4]}
              />
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "8em", marginLeft: "5em" }}>
                Number:
              </Typography>
              <TextField
                sx={{ mt: -2, ml: 1 }}
                autoComplete="off"
                variant="standard"
                label="6"
                inputRef={(el) => (inputRefs.current[5] = el)}
                onChange={(e) => handleInputChange(5, e.target.value)}
                value={answers[5]}
              />
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography sx={{ marginRight: "9em", marginLeft: "5em" }}>
                Name:
              </Typography>
              <Typography>Mr J.</Typography>
              <TextField
                sx={{ mt: -2, ml: 1 }}
                autoComplete="off"
                variant="standard"
                label="7"
                inputRef={(el) => (inputRefs.current[6] = el)}
                onChange={(e) => handleInputChange(6, e.target.value)}
                value={answers[6]}
              />
            </ListItem>
            <Divider
              variant="middle"
              sx={{
                width: "90%",
                maxWidth: "80rem",
                mt: 2,
                mb: 2,
                bgcolor: "black",
              }}
            />
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "12em" }}>Address:</Typography>
              <TextField
                sx={{ mt: -2, ml: 1 }}
                autoComplete="off"
                variant="standard"
                label="8"
                inputRef={(el) => (inputRefs.current[7] = el)}
                onChange={(e) => handleInputChange(7, e.target.value)}
                value={answers[7]}
              />
              <Typography>Street, London</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "16em" }}></Typography>
              <TextField
                sx={{ mt: -2, ml: 1 }}
                autoComplete="off"
                variant="standard"
                label="9"
                inputRef={(el) => (inputRefs.current[8] = el)}
                onChange={(e) => handleInputChange(8, e.target.value)}
                value={answers[8]}
              />
            </ListItem>
            <Divider
              variant="middle"
              sx={{
                width: "90%",
                maxWidth: "80rem",
                mt: 2,
                mb: 2,
                bgcolor: "black",
              }}
            />
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "8em" }}>
                Additional requests:
              </Typography>
              <Typography>put on the mailing list</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ marginRight: "14em" }}></Typography>
              <Typography> book</Typography>
              <TextField
                sx={{ mt: -2, ml: 1, width: "8rem" }}
                autoComplete="off"
                variant="standard"
                label="10"
                inputRef={(el) => (inputRefs.current[9] = el)}
                onChange={(e) => handleInputChange(9, e.target.value)}
                value={answers[9]}
              />
              <Typography>in advance</Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
