import { useRef, useEffect } from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
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
        // For text fields (questions 11-17)
        if (index <= 6) {
          const textField = element.querySelector('input[type="text"]');
          if (textField) {
            textField.focus();
            textField.select();
          }
        } else {
          // For select fields (questions 18-20)
          const selectField = element.querySelector("select");
          if (selectField) {
            selectField.focus();
          }
        }
        element.scrollIntoView({ behavior: "smooth", block: "center" });
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
            <Typography>Complete the sentences below.</Typography>
            <Typography>
              Write <b>NO MORE THAN TWO WORDS</b> for each answer.
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
              Marathon – tips for spectators
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
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography>
                  <b style={{ marginRight: "1em" }}>11</b> To enjoy the day,
                  make sure you
                </Typography>
                <TextField
                  sx={{ ml: 1, width: "10em" }}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(10, e.target.value)}
                  value={answers[10]}
                  inputRef={(el) => (inputRefs.current[0] = el)}
                />
                <Typography sx={{ ml: 1 }}>it first.</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography>
                  <b style={{ marginRight: "1em" }}>12</b> Travel
                </Typography>
                <TextField
                  sx={{ ml: 1, width: "10em" }}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(11, e.target.value)}
                  value={answers[11]}
                  inputRef={(el) => (inputRefs.current[1] = el)}
                />
                <Typography sx={{ ml: 1 }}>within the city centre.</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography>
                  <b style={{ marginRight: "1em" }}>13</b> Wear
                </Typography>
                <TextField
                  sx={{ ml: 1, width: "10em" }}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(12, e.target.value)}
                  value={answers[12]}
                  inputRef={(el) => (inputRefs.current[2] = el)}
                />
                <Typography sx={{ ml: 1 }}>on the day.</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography>
                  <b style={{ marginRight: "1em" }}>14</b> Check the
                </Typography>
                <TextField
                  sx={{ ml: 1, width: "10em" }}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(13, e.target.value)}
                  value={answers[13]}
                  inputRef={(el) => (inputRefs.current[3] = el)}
                />
                <Typography sx={{ ml: 1 }}>
                  the night before the marathon.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography>
                  <b style={{ marginRight: "1em" }}>15</b> Let the
                </Typography>
                <TextField
                  sx={{ ml: 1, width: "10em" }}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(14, e.target.value)}
                  value={answers[14]}
                  inputRef={(el) => (inputRefs.current[4] = el)}
                />
                <Typography sx={{ ml: 1 }}>give drinks to runners.</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography>
                  <b style={{ marginRight: "1em" }}>16</b> Stay on one side of
                  the road to avoid
                </Typography>
                <TextField
                  sx={{ ml: 1, width: "10em" }}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(15, e.target.value)}
                  value={answers[15]}
                  inputRef={(el) => (inputRefs.current[5] = el)}
                />
                <Typography>.</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography>
                  <b style={{ marginRight: "1em" }}>17</b> Don't arrange to meet
                  runners near the
                </Typography>
                <TextField
                  sx={{ ml: 1, width: "10em" }}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(16, e.target.value)}
                  value={answers[16]}
                  inputRef={(el) => (inputRefs.current[6] = el)}
                />
                <Typography>.</Typography>
              </Box>
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
            <Typography>Questions 18-20</Typography>
            <Typography>
              What does the speaker say about the following forms of transport?
            </Typography>
            <Typography>
              Write the correct letter, A, B, C, D or E, next to questions
              18-20.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "40rem",
                  border: "1px solid #ccc",
                  borderRadius: 1,
                  p: 2,
                  mb: 2,
                }}
              >
                <List>
                  <ListItem>
                    <Typography>
                      <b>A</b>&nbsp;&nbsp;&nbsp;will take more passengers than
                      usual
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      <b>B</b>&nbsp;&nbsp;&nbsp;will suit people who want to see
                      the start of the race
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      <b>C</b>&nbsp;&nbsp;&nbsp;waiting times will be longer
                      than usual
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      <b>D</b>&nbsp;&nbsp;&nbsp;will have fewer staff than usual
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      <b>E</b>&nbsp;&nbsp;&nbsp;some work schedules will change
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
                ref={(el) => (inputRefs.current[7] = el)}
              >
                <Typography>
                  <b style={{ marginRight: "1em" }}>18</b> taxis
                </Typography>
                <FormControl sx={{ ml: 2, minWidth: 120 }}>
                  <Select
                    variant="standard"
                    value={answers[17] || ""}
                    onChange={(e) => handleInputChange(17, e.target.value)}
                  >
                    {["A", "B", "C", "D", "E"].map((letter) => (
                      <MenuItem key={letter} value={letter}>
                        {letter}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
                ref={(el) => (inputRefs.current[8] = el)}
              >
                <Typography>
                  <b style={{ marginRight: "1em" }}>19</b> trams
                </Typography>
                <FormControl sx={{ ml: 2, minWidth: 120 }}>
                  <Select
                    variant="standard"
                    value={answers[18] || ""}
                    onChange={(e) => handleInputChange(18, e.target.value)}
                  >
                    {["A", "B", "C", "D", "E"].map((letter) => (
                      <MenuItem key={letter} value={letter}>
                        {letter}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
                ref={(el) => (inputRefs.current[9] = el)}
              >
                <Typography>
                  <b style={{ marginRight: "1em" }}>20</b> buses
                </Typography>
                <FormControl sx={{ ml: 2, minWidth: 120 }}>
                  <Select
                    variant="standard"
                    value={answers[19] || ""}
                    onChange={(e) => handleInputChange(19, e.target.value)}
                  >
                    {["A", "B", "C", "D", "E"].map((letter) => (
                      <MenuItem key={letter} value={letter}>
                        {letter}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </>
      }
    </Box>
  );
};

export default Part2;
