import React from "react";
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

const Part2 = ({ answers, setAnswers }) => {
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
        <MemoText />
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
          <b>READING PASSAGE 2</b>
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 15-27</b>, which are
          based on the two texts on the left.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 15 - 21</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.
        </Typography>
        <Typography sx={{ ml: 2, mb: 2 }} gutterBottom>
          Write your answers in boxes 15-21.
        </Typography>
        <Typography variant="h6" sx={{ mb: 0 }}>
          <b>Vern's Clothing Warehouse: Procedure for closing the shop</b>
        </Typography>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <List
            sx={{
              listStyleType: "upper-roman",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
              pl: "3rem",
              width: "100%",
            }}
          >
            <Typography variant="body1">
              <b>One hour prior to closing:</b>
            </Typography>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Paper
                sx={{
                  padding: 3,
                  gap: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>
                  - take returns to storeroom or place on shelves
                </Typography>
                <Typography>
                  - bring in
                  <TextField
                    sx={{ mt: -2.5, ml: 1 }}
                    label="15"
                    variant="standard"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(14, e.target.value)}
                    value={answers[14]}
                  />
                  from outside the shop
                </Typography>
                <Typography>- replace stock on shelves</Typography>
              </Paper>
            </ListItem>
            <Typography variant="body1">
              <b>Close the shop:</b>
            </Typography>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Paper
                sx={{
                  padding: 3,
                  gap: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>
                  - check no customers are still in store - look
                </Typography>
                <Typography>
                  in
                  <TextField
                    sx={{ mt: -2.5, ml: 1 }}
                    label="16"
                    variant="standard"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(15, e.target.value)}
                    value={answers[15]}
                  />
                </Typography>
                <Typography>- lock both doors</Typography>
                <Typography>
                  -
                  <TextField
                    sx={{ mt: -2.5, ml: 1 }}
                    label="17"
                    variant="standard"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(16, e.target.value)}
                    value={answers[16]}
                  />
                  are not permitted in the shop
                </Typography>
              </Paper>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Paper
                sx={{
                  padding: 3,
                  gap: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>- close and lock registers</Typography>
                <Typography>
                  - take cash to the safe in the
                  <TextField
                    sx={{ mt: -2.5, ml: 1 }}
                    label="18"
                    variant="standard"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(17, e.target.value)}
                    value={answers[17]}
                  />
                </Typography>
              </Paper>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Paper
                sx={{
                  padding: 3,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography>
                  - you need a
                  <TextField
                    sx={{ mt: -2.5, ml: 1 }}
                    label="19"
                    variant="standard"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(18, e.target.value)}
                    value={answers[18]}
                  />
                  to be there when opening the safe
                </Typography>
              </Paper>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Paper
                sx={{
                  padding: 3,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography>
                  - ensure correct
                  <TextField
                    sx={{ mt: -2.5, ml: 1 }}
                    label="20"
                    variant="standard"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(19, e.target.value)}
                    value={answers[19]}
                  />
                  are on
                </Typography>
              </Paper>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "row" }}>
              <Paper
                sx={{
                  padding: 3,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography>
                  - set the alarm (next to the
                  <TextField
                    sx={{ mt: -2.5, ml: 1 }}
                    label="21"
                    variant="standard"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(20, e.target.value)}
                    value={answers[20]}
                  />
                  ) and leave within 90 seconds
                </Typography>
              </Paper>
            </ListItem>
          </List>
        </Box>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 22 - 27</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.
        </Typography>
        <Typography sx={{ ml: 2, mb: 2 }} gutterBottom>
          Write your answers in boxes 22-27.
        </Typography>
        <Typography variant="h6" sx={{ ml: 15, mb: 0 }}>
          The Heritage Hotel: Uniform policy
        </Typography>
        <Box>
          <TableContainer sx={{ mt: 3, textAlign: "left" }} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Part</TableCell>
                  <TableCell>
                    <b>Management / Reception </b>
                  </TableCell>
                  <TableCell>
                    <b>Housekeeping / Maintenance</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <b>Top</b>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      - shirt (white or black) with
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 3, mb: 2 }}>
                      logo on
                      <TextField
                        sx={{
                          mt: -2,
                          ml: 1,
                          mr: 1,
                          width: "7em",
                          height: "3em",
                        }}
                        label="22"
                        variant="outlined"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(21, e.target.value)}
                        value={answers[21]}
                      />
                    </Typography>
                    <Typography variant="body2">- hotel jacket </Typography>
                  </TableCell>
                  <TableCell>
                    - white Bob Charles shirt with company logo
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Trousers / skirt</b>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">- colour: black </Typography>
                    <Typography variant="body2">
                      - supplied and fitted by hotel{" "}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    - colour:
                    <TextField
                      sx={{
                        mt: -2,
                        ml: 1,
                        mr: 1,
                        width: "6em",
                        height: "3em",
                      }}
                      label="23"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(22, e.target.value)}
                      value={answers[22]}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Shoes</b>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">- must not be</Typography>
                    <Typography variant="body2" sx={{ mt: 3, mb: 2 }}>
                      <TextField
                        sx={{
                          mt: -2,
                          ml: 1,
                          mr: 1,
                          width: "8em",
                          height: "3em",
                        }}
                        label="24"
                        variant="outlined"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(23, e.target.value)}
                        value={answers[23]}
                      />
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <TextField
                      sx={{
                        mt: -2,
                        width: "8em",
                        height: "3em",
                      }}
                      label="25"
                      variant="outlined"
                      autoComplete="off"
                      onChange={(e) => handleInputChange(24, e.target.value)}
                      value={answers[24]}
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
                  <TableCell>
                    <b>Storage and laundering of uniform</b>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      - keep in locker behind reception
                    </Typography>
                  </TableCell>
                  <TableCell>
                    - sign for clean uniform
                    <Typography variant="body2" sx={{ mt: 3, mb: 2 }}>
                      in
                      <TextField
                        sx={{
                          mt: -2,
                          ml: 1,
                          mr: 1,
                          width: "8em",
                          height: "3em",
                        }}
                        label="26"
                        variant="outlined"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(25, e.target.value)}
                        value={answers[25]}
                      />
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Damaged uniform</b>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      - take to Ms Nichols (laundry)
                    </Typography>
                  </TableCell>
                  <TableCell>
                    - report to
                    <Typography variant="body2" sx={{ mt: 3, mb: 2 }}>
                      <TextField
                        sx={{
                          mt: -2,
                          ml: 1,
                          mr: 1,
                          width: "8em",
                          height: "3em",
                        }}
                        label="27"
                        variant="outlined"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(26, e.target.value)}
                        value={answers[26]}
                      />
                    </Typography>
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
