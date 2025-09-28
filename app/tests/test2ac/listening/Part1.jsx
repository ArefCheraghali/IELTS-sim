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
  const inputRefs = useRef([]);

  useEffect(() => {
    if (currentQuestion >= 1 && currentQuestion <= 10) {
      const index = currentQuestion - 1;
      const element = inputRefs.current[index];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          element.focus();
          element.select();
        }, 200);
      }
    }
  }, [currentQuestion]);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "60rem",
        margin: "0 auto",
        padding: "0 1rem",
        fontSize: "18px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Part 1
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 1-10
        </Typography>
      </Box>
      <Typography sx={{ mb: 2 }}>
        <b>Questions 1-6</b>
      </Typography>
      <Typography>Complete the notes below.</Typography>
      <Typography>
        Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.
      </Typography>
      <Box
        sx={{
          width: "100%",
          mt: 2,
          mb: 4,
          border: "1px solid #ccc",
          padding: "1em",
          textAlign: "left",
          lineHeight: 3,
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
          <b>Local food shops</b>
        </Typography>
        <List sx={{ listStyleType: "disc", ml: "2em" }}>
          <b>Where to go</b>
          <ListItem sx={{ display: "list-item", py: 1 }}>
            Kite Place - near the
            <TextField
              sx={{ mx: 1, width: "10em", mt: -0.5 }}
              label="1"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(0, e.target.value)}
              value={answers[0] || ""}
              inputRef={(el) => (inputRefs.current[0] = el)}
            />
          </ListItem>
          <b>Fish market</b>
          <ListItem sx={{ display: "list-item", py: 1 }}>
            cross the
            <TextField
              sx={{ mx: 1, width: "10em", mt: -0.5 }}
              label="2"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(1, e.target.value)}
              value={answers[1] || ""}
              inputRef={(el) => (inputRefs.current[1] = el)}
            />
            and turn right
          </ListItem>
          <ListItem sx={{ display: "list-item", py: 1 }}>
            best to go before
            <TextField
              sx={{ mx: 1, width: "10em", mt: -0.5 }}
              label="3"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(2, e.target.value)}
              value={answers[2] || ""}
              inputRef={(el) => (inputRefs.current[2] = el)}
            />
            pm, earlier than closing time
          </ListItem>
          <b>Organic shop</b>
          <ListItem sx={{ display: "list-item", py: 1 }}>
            called
            <TextField
              sx={{ mx: 1, width: "10em", mt: -0.5 }}
              label="4"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(3, e.target.value)}
              value={answers[3] || ""}
              inputRef={(el) => (inputRefs.current[3] = el)}
            />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            below a restaurant in the large, grey building
          </ListItem>
          <ListItem sx={{ display: "list-item", py: 1 }}>
            look for the large
            <TextField
              sx={{ mx: 1, width: "10em", mt: -0.5 }}
              label="5"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(4, e.target.value)}
              value={answers[4] || ""}
              inputRef={(el) => (inputRefs.current[4] = el)}
            />
            outside
          </ListItem>
          <b>Supermarket</b>
          <ListItem sx={{ display: "list-item", py: 1 }}>
            take a
            <TextField
              sx={{ mx: 1, width: "10em", mt: -0.5 }}
              label="6"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(5, e.target.value)}
              value={answers[5] || ""}
              inputRef={(el) => (inputRefs.current[5] = el)}
            />
            minibus, number 289
          </ListItem>
        </List>
      </Box>

      <Typography sx={{ mb: 2 }}>
        <b>Questions 7-10</b>
      </Typography>
      <Typography>Complete the table below.</Typography>
      <Typography>
        Write <b>ONE WORD ONLY</b> for each answer.
      </Typography>
      <TableContainer sx={{ mt: 2 }} component={Paper}>
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
                a handful of
                <TextField
                  label="7"
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  sx={{ mx: 1, width: "10em", mt: -1 }}
                  onChange={(e) => handleInputChange(6, e.target.value)}
                  value={answers[6] || ""}
                  inputRef={(el) => (inputRefs.current[6] = el)}
                />
                (type of seaweed)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Organic shop</TableCell>
              <TableCell>
                beans and a
                <TextField
                  label="8"
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  sx={{ mx: 1, width: "10em", mt: -1 }}
                  onChange={(e) => handleInputChange(7, e.target.value)}
                  value={answers[7] || ""}
                  inputRef={(el) => (inputRefs.current[7] = el)}
                />
                for dessert
              </TableCell>
              <TableCell>
                spices and
                <TextField
                  label="9"
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  sx={{ mx: 1, width: "10em", mt: -1 }}
                  onChange={(e) => handleInputChange(8, e.target.value)}
                  value={answers[8] || ""}
                  inputRef={(el) => (inputRefs.current[8] = el)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bakery</TableCell>
              <TableCell>a brown loaf</TableCell>
              <TableCell>
                a
                <TextField
                  label="10"
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  sx={{ mx: 1, width: "10em", mt: -1 }}
                  onChange={(e) => handleInputChange(9, e.target.value)}
                  value={answers[9] || ""}
                  inputRef={(el) => (inputRefs.current[9] = el)}
                />
                tart
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default Part1;
