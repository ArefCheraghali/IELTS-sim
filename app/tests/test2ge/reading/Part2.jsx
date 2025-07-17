"use client";
import React, { useEffect, useRef } from "react";
import {
  Box,
  List,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import MemoText from "./text/MemoText";

const Part2 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = React.useRef(Array(13).fill(null)); // For Questions 15-27 (13 questions)
  const prevCurrentQuestionRef = useRef(); // To store the previous currentQuestion

  useEffect(() => {
    const isQuestionInThisPart = currentQuestion >= 15 && currentQuestion <= 27;

    if (
      isQuestionInThisPart &&
      prevCurrentQuestionRef.current !== undefined &&
      prevCurrentQuestionRef.current !== currentQuestion
    ) {
      const index = currentQuestion - 15; // Calculate 0-based index for refs array
      const inputElement = questionRefs.current[index];

      if (inputElement && typeof inputElement.focus === "function") {
        inputElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setTimeout(() => {
          inputElement.focus();
        }, 100);
      }
    }

    prevCurrentQuestionRef.current = currentQuestion;
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
        height: "calc(100vh - 120px - 26px )",
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
        <MemoText />
      </Box>
      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 2,
        }}
      >
        <Typography sx={{ fontSize: "1.1em", mb: 1, fontWeight: "bold" }}>
          READING PASSAGE 2
        </Typography>
        <Typography sx={{ mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 15-27</b>, which are
          based on the two texts on the left.
        </Typography>

        {/* Questions 15 - 21 */}
        <Typography
          variant="h6"
          component="h3"
          sx={{ mb: 0.5, fontSize: "1rem", fontWeight: "bold" }}
        >
          Questions 15 - 21
        </Typography>
        <Typography sx={{ mb: 0.5 }}>
          Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.
        </Typography>
        <Typography sx={{ mb: 2 }} gutterBottom>
          Write your answers in boxes 15-21.
        </Typography>
        <Typography variant="h6" sx={{ mb: 1, fontSize: "1rem" }}>
          <b>Vern's Clothing Warehouse: Procedure for closing the shop</b>
        </Typography>

        <Box sx={{ width: "100%" }}>
          <List sx={{ gap: 0, pl: { xs: 1, sm: 2 }, width: "100%" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              One hour prior to closing:
            </Typography>
            <ListItem sx={{ display: "block", py: 0.5, px: 0 }}>
              <Paper
                elevation={0}
                sx={{ p: 1.5, backgroundColor: "transparent" }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    mb: 0.5,
                  }}
                >
                  - take returns to storeroom or place on shelves
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    mb: 0.5,
                  }}
                >
                  - bring in
                  <TextField
                    sx={{ mx: 0.5, width: "10em" }}
                    label="15"
                    variant="standard"
                    size="small"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(14, e.target.value)}
                    value={answers[14] || ""}
                    inputRef={(el) => (questionRefs.current[0] = el)} // Q15 -> ref index 0
                  />
                  from outside the shop
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  - replace stock on shelves
                </Typography>
              </Paper>
            </ListItem>

            <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
              Close the shop:
            </Typography>
            <ListItem sx={{ display: "block", py: 0.5, px: 0 }}>
              <Paper
                elevation={0}
                sx={{ p: 1.5, backgroundColor: "transparent" }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    mb: 0.5,
                  }}
                >
                  - check no customers are still in store - look in
                  <TextField
                    sx={{ mx: 0.5, width: "10em" }}
                    label="16"
                    variant="standard"
                    size="small"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(15, e.target.value)}
                    value={answers[15] || ""}
                    inputRef={(el) => (questionRefs.current[1] = el)} // Q16 -> ref index 1
                  />
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    mb: 0.5,
                  }}
                >
                  - lock both doors
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  -
                  <TextField
                    sx={{ mx: 0.5, width: "10em" }}
                    label="17"
                    variant="standard"
                    size="small"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(16, e.target.value)}
                    value={answers[16] || ""}
                    inputRef={(el) => (questionRefs.current[2] = el)} // Q17 -> ref index 2
                  />
                  are not permitted in the shop
                </Typography>
              </Paper>
            </ListItem>
            {/* Questions 18-21 with refs */}
            <ListItem sx={{ display: "block", py: 0.5, px: 0 }}>
              <Paper
                elevation={0}
                sx={{ p: 1.5, backgroundColor: "transparent" }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    mb: 0.5,
                  }}
                >
                  - close and lock registers
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  - take cash to the safe in the
                  <TextField
                    sx={{ mx: 0.5, width: "10em" }}
                    label="18"
                    variant="standard"
                    size="small"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(17, e.target.value)}
                    value={answers[17] || ""}
                    inputRef={(el) => (questionRefs.current[3] = el)} // Q18 -> ref index 3
                  />
                </Typography>
              </Paper>
            </ListItem>
            <ListItem sx={{ display: "block", py: 0.5, px: 0 }}>
              <Paper
                elevation={0}
                sx={{ p: 1.5, backgroundColor: "transparent" }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  - you need a
                  <TextField
                    sx={{ mx: 0.5, width: "10em" }}
                    label="19"
                    variant="standard"
                    size="small"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(18, e.target.value)}
                    value={answers[18] || ""}
                    inputRef={(el) => (questionRefs.current[4] = el)} // Q19 -> ref index 4
                  />
                  to be there when opening the safe
                </Typography>
              </Paper>
            </ListItem>
            <ListItem sx={{ display: "block", py: 0.5, px: 0 }}>
              <Paper
                elevation={0}
                sx={{ p: 1.5, backgroundColor: "transparent" }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  - ensure correct
                  <TextField
                    sx={{ mx: 0.5, width: "10em" }}
                    label="20"
                    variant="standard"
                    size="small"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(19, e.target.value)}
                    value={answers[19] || ""}
                    inputRef={(el) => (questionRefs.current[5] = el)} // Q20 -> ref index 5
                  />
                  are on
                </Typography>
              </Paper>
            </ListItem>
            <ListItem sx={{ display: "block", py: 0.5, px: 0 }}>
              <Paper
                elevation={0}
                sx={{ p: 1.5, backgroundColor: "transparent" }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  - set the alarm (next to the
                  <TextField
                    sx={{ mx: 0.5, width: "10em" }}
                    label="21"
                    variant="standard"
                    size="small"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(20, e.target.value)}
                    value={answers[20] || ""}
                    inputRef={(el) => (questionRefs.current[6] = el)} // Q21 -> ref index 6
                  />
                  ) and leave within 90 seconds
                </Typography>
              </Paper>
            </ListItem>
          </List>
        </Box>

        {/* Questions 22 - 27 */}
        <Typography
          variant="h6"
          component="h3"
          sx={{ mt: 3, mb: 0.5, fontSize: "1rem", fontWeight: "bold" }}
        >
          Questions 22 - 27
        </Typography>
        <Typography sx={{ mb: 0.5 }}>
          Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.
        </Typography>
        <Typography sx={{ mb: 2 }} gutterBottom>
          Write your answers in boxes 22-27.
        </Typography>
        <Typography variant="h6" sx={{ mb: 1, fontSize: "1rem" }}>
          The Heritage Hotel: Uniform policy
        </Typography>
        <Box>
          <TableContainer sx={{ mt: 1 }} component={Paper} elevation={1}>
            <Table size="small">
              <TableHead
                sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}
              >
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Part</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Management / Reception
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Housekeeping / Maintenance
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Top</TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                        mb: 0.5,
                      }}
                    >
                      - shirt (white or black) with logo on
                      <TextField
                        sx={{ mx: 0.5, width: "7em" }}
                        label="22"
                        variant="outlined"
                        size="small"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(21, e.target.value)}
                        value={answers[21] || ""}
                        inputRef={(el) => (questionRefs.current[7] = el)} // Q22 -> ref index 7
                      />
                    </Typography>
                    <Typography variant="body2">- hotel jacket </Typography>
                  </TableCell>
                  <TableCell>
                    - white Bob Charles shirt with company logo
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Trousers / skirt
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">- colour: black </Typography>
                    <Typography variant="body2">
                      - supplied and fitted by hotel
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      flexWrap: "wrap",
                    }}
                  >
                    - colour:
                    <TextField
                      sx={{ mx: 0.5, width: "6em" }}
                      label="23"
                      variant="outlined"
                      size="small"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(22, e.target.value)}
                      value={answers[22] || ""}
                      inputRef={(el) => (questionRefs.current[8] = el)} // Q23 -> ref index 8
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Shoes</TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      flexWrap: "wrap",
                    }}
                  >
                    - must not be
                    <TextField
                      sx={{ mx: 0.5, width: "8em" }}
                      label="24"
                      variant="outlined"
                      size="small"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(23, e.target.value)}
                      value={answers[23] || ""}
                      inputRef={(el) => (questionRefs.current[9] = el)} // Q24 -> ref index 9
                    />
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    <TextField
                      sx={{ width: "100%", maxWidth: "10em" }}
                      label="25"
                      variant="outlined"
                      size="small"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(24, e.target.value)}
                      value={answers[24] || ""}
                      inputRef={(el) => (questionRefs.current[10] = el)} // Q25 -> ref index 10
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      - must be worn by all staff members while at work
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Storage and laundering of uniform
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      - keep in locker behind reception
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      flexWrap: "wrap",
                    }}
                  >
                    - sign for clean uniform in
                    <TextField
                      sx={{ mx: 0.5, width: "8em" }}
                      label="26"
                      variant="outlined"
                      size="small"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(25, e.target.value)}
                      value={answers[25] || ""}
                      inputRef={(el) => (questionRefs.current[11] = el)} // Q26 -> ref index 11
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Damaged uniform
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      - take to Ms Nichols (laundry)
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      flexWrap: "wrap",
                    }}
                  >
                    - report to
                    <TextField
                      sx={{ mx: 0.5, width: "8em" }}
                      label="27"
                      variant="outlined"
                      size="small"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(26, e.target.value)}
                      value={answers[26] || ""}
                      inputRef={(el) => (questionRefs.current[12] = el)} // Q27 -> ref index 12
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Part2;
