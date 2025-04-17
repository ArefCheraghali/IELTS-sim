import { useRef, useEffect } from "react";
import {
  Box,
  Paper,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  // Create refs for each text field
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the text field corresponding to the current question
    if (currentQuestion >= 1 && currentQuestion <= 10) {
      const index = currentQuestion - 1;
      const element = inputRefs.current[index];
      if (element) {
        element.focus();
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
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
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
            Part 1
          </Typography>
          <Typography variant="h6" gutterBottom>
            Questions 1-10
          </Typography>
        </Box>
        <>
          <Typography>Questions 1-5</Typography>
          <Typography>Complete the form below.</Typography>
          <Typography>
            Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> for each answer.
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              mb: 4,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "50rem",
                mt: 2,
                ml: 20,
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
              <Box sx={{ width: "100%", maxWidth: "900px" }}>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", width: "100%", mb: 3 }}
                >
                  <b>KT Furniture</b>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", width: "100%", mb: 3 }}
                >
                  <b>Customer Order Form</b>
                </Typography>
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 2,
                    width: "100%",
                    pl: "2rem",
                    pr: "2rem",
                  }}
                >
                  <Typography>
                    <b>Customer details</b>
                  </Typography>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "8rem", mt: 3 }}>
                      Company name:
                    </Typography>
                    <TextField
                      sx={{ mt: -2, ml: 1 }}
                      label="1"
                      variant="standard"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(0, e.target.value)}
                      value={answers[0]}
                      inputRef={(el) => (inputRefs.current[0] = el)}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "11.5em" }}>
                      Address:
                    </Typography>
                    <TextField
                      sx={{ mt: -2, ml: 1 }}
                      autoComplete="off"
                      spellCheck={false}
                      variant="standard"
                      label="2"
                      onChange={(e) => handleInputChange(1, e.target.value)}
                      value={answers[1]}
                      inputRef={(el) => (inputRefs.current[1] = el)}
                    />{" "}
                    Trading Estate
                  </ListItem>
                  <ListItem
                    sx={{ display: "flex", flexDirection: "row", mt: -2 }}
                  >
                    <Typography sx={{ marginRight: "16.5em" }}></Typography>
                    210 New Hampton Road
                  </ListItem>
                  <ListItem
                    sx={{ display: "flex", flexDirection: "row", mt: -3 }}
                  >
                    <Typography sx={{ marginRight: "16.5em" }}></Typography>
                    South Down
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "8rem" }}>
                      Contact number:
                    </Typography>
                    <TextField
                      sx={{ mt: -2, ml: 1 }}
                      autoComplete="off"
                      variant="standard"
                      label="3"
                      onChange={(e) => handleInputChange(2, e.target.value)}
                      value={answers[2]}
                      inputRef={(el) => (inputRefs.current[2] = el)}
                    />{" "}
                    (mobile)
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "9rem" }}>
                      Delivery option:
                    </Typography>
                    <Typography>1□ 2✓ (no</Typography>
                    <TextField
                      sx={{ mt: -2, ml: 1, width: "10em" }}
                      autoComplete="off"
                      variant="standard"
                      label="4"
                      onChange={(e) => handleInputChange(3, e.target.value)}
                      value={answers[3]}
                      inputRef={(el) => (inputRefs.current[3] = el)}
                    />
                    <Typography>)</Typography>
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "7rem" }}>
                      Method of payment:
                    </Typography>
                    <Typography>credit card Type:</Typography>
                    <TextField
                      sx={{ mt: -2, ml: 1 }}
                      autoComplete="off"
                      variant="standard"
                      label="5"
                      onChange={(e) => handleInputChange(4, e.target.value)}
                      value={answers[4]}
                      inputRef={(el) => (inputRefs.current[4] = el)}
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </>
        <br />
        <>
          <Typography>Questions 6-10</Typography>
          <Typography>Complete the table below.</Typography>
          <Typography>
            Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> for each answer.
          </Typography>
          <TableContainer
            sx={{ mt: 4, width: "100%", margin: "0 auto" }}
            component={Paper}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>item</TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>code</TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>colour</TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    Office chairs
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>ASP 23</TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    <TextField
                      sx={{
                        width: "10em",
                      }}
                      label="6"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(5, e.target.value)}
                      value={answers[5]}
                      inputRef={(el) => (inputRefs.current[5] = el)}
                    />
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    <TextField
                      sx={{
                        width: "10em",
                      }}
                      label="7"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(6, e.target.value)}
                      value={answers[6]}
                      inputRef={(el) => (inputRefs.current[6] = el)}
                    />
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    <TextField
                      sx={{
                        width: "10em",
                      }}
                      label="8"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(7, e.target.value)}
                      value={answers[7]}
                      inputRef={(el) => (inputRefs.current[7] = el)}
                    />
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    Leather sofa
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>DFD 44</TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    <TextField
                      sx={{
                        width: "10em",
                      }}
                      label="9"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(8, e.target.value)}
                      value={answers[8]}
                      inputRef={(el) => (inputRefs.current[8] = el)}
                    />
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    <TextField
                      sx={{
                        width: "10em",
                      }}
                      label="10"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(9, e.target.value)}
                      value={answers[9]}
                      inputRef={(el) => (inputRefs.current[9] = el)}
                    />
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>TX 22</TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>silver</TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>1</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </Box>
    </>
  );
};
export default Part1;
