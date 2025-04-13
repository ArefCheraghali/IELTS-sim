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
      if (inputRefs.current[index]) {
        inputRefs.current[index].focus();
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
          <Typography>Questions 1-4</Typography>
          <Typography>Complete the table below.</Typography>
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
                  <b>City Bank Customer Service Log</b>
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
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "14rem", mt: 3 }}>
                      Customer name:
                    </Typography>
                    David
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
                    <Typography sx={{ marginRight: "19em" }}>
                      Phone:{" "}
                    </Typography>
                    023 - 561 - 055
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "19em" }}>
                      D.O.B.:
                    </Typography>
                    18 / 02 / 1968
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography>
                      <b>Customer's Term Deposit details:</b>
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "18em" }}>
                      Amount:
                    </Typography>
                    $18,000
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "18em" }}>Term:</Typography>
                    <TextField
                      sx={{ mt: -2, ml: 1 }}
                      autoComplete="off"
                      spellCheck={false}
                      variant="standard"
                      label="2"
                      onChange={(e) => handleInputChange(1, e.target.value)}
                      value={answers[1]}
                      inputRef={(el) => (inputRefs.current[1] = el)}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "16em" }}>
                      Interest rate:
                    </Typography>
                    3.45% per annum
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography>
                      <b>Current Term deposit interest rates:</b>
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "19em" }}>1 year</Typography>
                    3.65% per annum
                  </ListItem>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "18em" }}>
                      2 years
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
                    % per annum
                  </ListItem>
                  <Typography>
                    <TextField
                      sx={{ mt: -2, ml: 1 }}
                      autoComplete="off"
                      variant="standard"
                      label="4"
                      onChange={(e) => handleInputChange(3, e.target.value)}
                      value={answers[3]}
                      inputRef={(el) => (inputRefs.current[3] = el)}
                    />
                    <b> Term deposits</b>
                  </Typography>
                  <ListItem sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ marginRight: "23em" }}>
                      Minimum deposit: $20,000
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </>
        <br />
        <>
          <Typography>Questions 5-10</Typography>
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
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    <TextField
                      sx={{
                        mt: -2,
                        ml: 1,
                        mr: 1,
                        width: "10em",
                        height: "3em",
                      }}
                      label="5"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(4, e.target.value)}
                      value={answers[4]}
                      inputRef={(el) => (inputRefs.current[4] = el)}
                    />{" "}
                    tax rate:
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>28%</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    Investment returns
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    Depend on
                    <TextField
                      sx={{
                        mt: -2,
                        ml: 1,
                        mr: 1,
                        width: "10em",
                        height: "3em",
                      }}
                      label="6"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(5, e.target.value)}
                      value={answers[5]}
                      inputRef={(el) => (inputRefs.current[5] = el)}
                    />
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>Term</TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    Effective rate of return
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>2 years</TableCell>{" "}
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    <b>Salary</b>
                    <br />
                    $48,001 - $70,000
                    <br />
                    3.75% per annum
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    <b>Salary</b>
                    <br />
                    $70,001 - $
                    <TextField
                      sx={{
                        mt: -2,
                        ml: 1,
                        mr: 1,
                        width: "10em",
                        height: "3em",
                      }}
                      label="7"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(6, e.target.value)}
                      value={answers[6]}
                      inputRef={(el) => (inputRefs.current[6] = el)}
                    />
                    <br />
                    3.92% per annum
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    Minimum investment amount:
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>$10,000</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    Hidden charges/fees:
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    <TextField
                      sx={{
                        mt: -2,
                        ml: 1,
                        mr: 1,
                        width: "10em",
                        height: "3em",
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
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    Interest payment options:
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    monthly,{" "}
                    <TextField
                      sx={{
                        mt: -2,
                        ml: 1,
                        mr: 1,
                        width: "10em",
                        height: "3em",
                      }}
                      label="9"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(8, e.target.value)}
                      value={answers[8]}
                      inputRef={(el) => (inputRefs.current[8] = el)}
                    />
                    , 6-monthly, annually
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    Application options:
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    - online <br /> <br />-{" "}
                    <TextField
                      sx={{
                        mt: -2,
                        mr: 1,
                        mb: 1,
                        width: "10em",
                        height: "3em",
                      }}
                      label="10"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(9, e.target.value)}
                      value={answers[9]}
                      inputRef={(el) => (inputRefs.current[9] = el)}
                    />
                    <br />- in person
                  </TableCell>
                  <TableCell></TableCell>
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
