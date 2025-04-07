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
        <Typography>Questions 1-6</Typography>
        <Typography>Complete the notes below.</Typography>
        <Typography>
          Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.
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
              maxWidth: "60rem",
              mt: 2,
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
            <Typography variant="h6" sx={{ marginLeft: "40%" }}>
              <b>Local food shops</b>
            </Typography>
            <List sx={{ listStyleType: "disc", ml: "3em" }}>
              <b>Where to go</b>
              <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
                Kite Place - near the
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="1"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  value={answers[0]}
                  inputRef={(el) => (inputRefs.current[0] = el)}
                />
              </ListItem>
              <b>Fish market</b>
              <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 2 }}>
                cross the
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="2"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(1, e.target.value)}
                  value={answers[1]}
                  inputRef={(el) => (inputRefs.current[1] = el)}
                />
                and turn right
              </ListItem>
              <ListItem sx={{ display: "list-item", mb: "1em" }}>
                best to go before
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="3"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(2, e.target.value)}
                  value={answers[2]}
                  inputRef={(el) => (inputRefs.current[2] = el)}
                />
                pm, earlier than closing time
              </ListItem>
              <b>Organic shop</b>
              <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 2 }}>
                called
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="4"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(3, e.target.value)}
                  value={answers[3]}
                  inputRef={(el) => (inputRefs.current[3] = el)}
                />
              </ListItem>
              <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
                below a restaurant in the large, grey building
              </ListItem>
              <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
                look for the large
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="5"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(4, e.target.value)}
                  value={answers[4]}
                  inputRef={(el) => (inputRefs.current[4] = el)}
                />
                outside
              </ListItem>
              <b>Supermarket</b>
              <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 2 }}>
                take a
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="6"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  value={answers[5]}
                  inputRef={(el) => (inputRefs.current[5] = el)}
                />
                minibus, number 289
              </ListItem>
            </List>
          </Box>
        </Box>
        <br />
        <Typography>Questions 7-10</Typography>
        <Typography>Complete the table below.</Typography>
        <Typography>
          Write <b>ONE WORD ONLY</b> for each answer.
        </Typography>
        <TableContainer sx={{ mt: 3 }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Shopping</TableCell>
                <TableCell>To buy</TableCell>
                <TableCell>Other ideas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Fish market</TableCell>
                <TableCell>a dozen prawns</TableCell>
                <TableCell>
                  a handful of{" "}
                  <TextField
                    sx={{ mt: -2, ml: 1, mr: 1, width: "10em", height: "3em" }}
                    label="7"
                    variant="outlined"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(6, e.target.value)}
                    value={answers[6]}
                    inputRef={(el) => (inputRefs.current[6] = el)}
                  />
                  (type of seaweed)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Organic shop</TableCell>
                <TableCell>
                  beans and a{" "}
                  <TextField
                    sx={{ mt: -2, ml: 1, mr: 1, width: "10em", height: "3em" }}
                    label="8"
                    variant="outlined"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(7, e.target.value)}
                    value={answers[7]}
                  />{" "}
                  for dessert
                </TableCell>
                <TableCell>
                  spices and{" "}
                  <TextField
                    sx={{ mt: -2, ml: 1, mr: 1, width: "10em", height: "3em" }}
                    label="9"
                    variant="outlined"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(8, e.target.value)}
                    value={answers[8]}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bakery</TableCell>
                <TableCell>a brown loaf</TableCell>
                <TableCell>
                  a{" "}
                  <TextField
                    sx={{ mt: -2, ml: 1, mr: 1, width: "10em", height: "3em" }}
                    label="10"
                    variant="outlined"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(9, e.target.value)}
                    value={answers[9]}
                  />{" "}
                  tart
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
export default Part1;
