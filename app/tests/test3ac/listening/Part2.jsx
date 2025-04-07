import { useRef, useEffect } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

const Part2 = ({ answers, setAnswers, currentQuestion }) => {
  // Create refs for each question (both radio groups and text fields)
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the element corresponding to the current question
    if (currentQuestion >= 11 && currentQuestion <= 20) {
      const index = currentQuestion - 11;
      const element = inputRefs.current[index];
      if (element) {
        // For radio groups (questions 11-15), focus on the container and scroll it into view
        if (index <= 4) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Find the first radio input within the group and focus it
          const firstRadio = element.querySelector('input[type="radio"]');
          if (firstRadio) {
            firstRadio.focus();
          }
        } else {
          // For text fields (questions 16-20)
          element.focus();
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
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
          Part 2
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 11-20
        </Typography>
      </Box>
      {
        <>
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
            <Typography>Questions 11-15</Typography>
            <Typography>Choose the correct letter, A, B or C.</Typography>
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
              <FormControl sx={{ mt: 1 }}>
                <Typography>
                  <b style={{ marginRight: "2em" }}>11</b> The September
                  Celebration day is held ...
                </Typography>
                <RadioGroup
                  sx={{ ml: "5em" }}
                  value={answers[10] || ""}
                  onChange={(e) => handleInputChange(10, e.target.value)}
                  ref={(el) => (inputRefs.current[0] = el)}
                >
                  <FormControlLabel
                    value={"A"}
                    control={<Radio />}
                    label="A) five times a year to honour the city"
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"B"}
                    control={<Radio />}
                    label="B) on the park's important birthday"
                  />
                  <FormControlLabel
                    value={"C"}
                    control={<Radio />}
                    label="C) to remember the history of the park"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl sx={{ mt: 2 }}>
                <Typography>
                  <b style={{ marginRight: "2em" }}>12</b> The park was first
                  built in ...
                </Typography>
                <RadioGroup
                  sx={{ ml: "5em" }}
                  value={answers[11] || ""}
                  onChange={(e) => handleInputChange(11, e.target.value)}
                  ref={(el) => (inputRefs.current[1] = el)}
                >
                  <FormControlLabel
                    value={"A"}
                    control={<Radio />}
                    label="A) 1955"
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"B"}
                    control={<Radio />}
                    label="B) 1979"
                  />
                  <FormControlLabel
                    value={"C"}
                    control={<Radio />}
                    label="C) the 1990s"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl sx={{ mt: 2 }}>
                <Typography>
                  <b style={{ marginRight: "2em" }}>13</b> The park still uses
                  ...
                </Typography>
                <RadioGroup
                  sx={{ ml: "5em" }}
                  value={answers[12] || ""}
                  onChange={(e) => handleInputChange(12, e.target.value)}
                  ref={(el) => (inputRefs.current[2] = el)}
                >
                  <FormControlLabel
                    value={"A"}
                    control={<Radio />}
                    label="A) a children's play area"
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"B"}
                    control={<Radio />}
                    label="B) a petting zoo"
                  />
                  <FormControlLabel
                    value={"C"}
                    control={<Radio />}
                    label="C) two of the early rides"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl sx={{ mt: 2 }}>
                <Typography>
                  <b style={{ marginRight: "2em" }}>14</b> The Hurricane
                  roller-coaster is ...
                </Typography>
                <RadioGroup
                  sx={{ ml: "5em" }}
                  value={answers[13] || ""}
                  onChange={(e) => handleInputChange(13, e.target.value)}
                  ref={(el) => (inputRefs.current[3] = el)}
                >
                  <FormControlLabel
                    value={"A"}
                    control={<Radio />}
                    label="A) tall and made of wood"
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"B"}
                    control={<Radio />}
                    label="B) designed for smaller children"
                  />
                  <FormControlLabel
                    value={"C"}
                    control={<Radio />}
                    label="C) very fast and exciting"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl sx={{ mt: 2 }}>
                <Typography>
                  <b style={{ marginRight: "2em" }}>15</b> The rides with a
                  height limit are coded ...
                </Typography>
                <RadioGroup
                  sx={{ ml: "5em" }}
                  value={answers[14] || ""}
                  onChange={(e) => handleInputChange(14, e.target.value)}
                  ref={(el) => (inputRefs.current[4] = el)}
                >
                  <FormControlLabel
                    value={"A"}
                    control={<Radio />}
                    label="A) yellow"
                  ></FormControlLabel>
                  <FormControlLabel
                    value={"B"}
                    control={<Radio />}
                    label="B) blue"
                  />
                  <FormControlLabel
                    value={"C"}
                    control={<Radio />}
                    label="C) black"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </>
      }
      {
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "60rem",
              alignItems: "flex-start",
              textAlign: "left",
              mt: 2,
              mb: 4,
            }}
          >
            <Typography>Questions 16-20</Typography>
            <Typography>Complete the notes below.</Typography>
            <Typography>
              Write <b>NO MORE THAN TWO WORDS</b> for each answer.
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
                  maxWidth: "40rem",
                  mt: 2,
                  ml: 20,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  alignItems: "flex-start",
                  borderStyle: "solid",
                  padding: "1em",
                  textAlign: "left",
                }}
              >
                <List sx={{ listStyleType: "disc", ml: "3em" }}>
                  <Typography>
                    <b>Food options:</b>
                  </Typography>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography>
                      Italian, Chinese, etc. at the Food Court
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 1 }}>
                    <Typography>
                      hamburgers, sandwiches, etc. at
                      <TextField
                        sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                        label="16"
                        variant="standard"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(15, e.target.value)}
                        value={answers[15]}
                        inputRef={(el) => (inputRefs.current[5] = el)}
                      />
                    </Typography>
                  </ListItem>
                  <Typography>
                    <b>Special Evenents:</b>
                    <br />
                    <b>Parade</b>
                  </Typography>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography>Starts at noon</Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography>
                      On the
                      <TextField
                        sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                        label="17"
                        variant="standard"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(16, e.target.value)}
                        value={answers[16]}
                        inputRef={(el) => (inputRefs.current[6] = el)}
                      />
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography>
                      Run by final year high school students
                    </Typography>
                  </ListItem>
                  <Typography>
                    <b>Concert</b>
                  </Typography>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography>At the amphitheatre</Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography>
                      Theme:
                      <TextField
                        sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                        label="18"
                        variant="standard"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(17, e.target.value)}
                        value={answers[17]}
                        inputRef={(el) => (inputRefs.current[7] = el)}
                      />
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography>Starts at 7:00</Typography>
                  </ListItem>
                  <Typography>
                    <b>Safety and Security:</b>
                  </Typography>
                  <ListItem sx={{ display: "list-item", mt: 2 }}>
                    <Typography>
                      Ten
                      <TextField
                        sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                        label="19"
                        variant="standard"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(18, e.target.value)}
                        value={answers[18]}
                        inputRef={(el) => (inputRefs.current[8] = el)}
                      />
                      centers in the park
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item", mt: 1 }}>
                    <Typography>
                      Children ask any staff member for help
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item", mt: 1 }}>
                    <Typography>
                      Ask security team at the
                      <TextField
                        sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                        label="20"
                        variant="standard"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(19, e.target.value)}
                        value={answers[19]}
                        inputRef={(el) => (inputRefs.current[9] = el)}
                      />
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </>
      }
    </Box>
  );
};

export default Part2;
