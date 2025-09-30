import React, { useRef, useEffect } from "react";
import {
  Box,
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

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(
    Array(10)
      .fill(null)
      .map(() => React.createRef())
  );
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (currentQuestion >= 1 && currentQuestion <= 10) {
      const index = currentQuestion - 1;
      const element = questionRefs.current[index]?.current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          const input = element.querySelector("input");
          if (input) {
            input.focus();
            input.select();
          }
        }, 300);
      }
    }
  }, [currentQuestion]);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <Box sx={{ maxWidth: "60rem", mx: "auto", px: 2, textAlign: "left" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Typography variant="h5">Part 1</Typography>
        <Typography variant="h6">Questions 1-10</Typography>
      </Box>

      <Typography sx={{ mt: 2 }}>
        <b>Questions 1-5</b>
      </Typography>
      <Typography>Complete the form below.</Typography>
      <Typography>
        Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> for each answer.
      </Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, mt: 2, borderRadius: 1 }}>
        <Typography variant="h6" align="center">
          KT Furniture
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 2 }}>
          Customer Order Form
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "8px 16px",
            alignItems: "center",
          }}
        >
          <Typography>Company name:</Typography>
          <Box ref={questionRefs.current[0]}>
            <TextField
              label="1"
              variant="standard"
              fullWidth
              value={answers[0] || ""}
              onChange={(e) => handleInputChange(0, e.target.value)}
            />
          </Box>

          <Typography>Address:</Typography>
          <Box
            ref={questionRefs.current[1]}
            sx={{ display: "flex", alignItems: "baseline" }}
          >
            <TextField
              label="2"
              variant="standard"
              value={answers[1] || ""}
              onChange={(e) => handleInputChange(1, e.target.value)}
            />
            <Typography component="span" sx={{ ml: 1 }}>
              Trading Estate
            </Typography>
          </Box>

          <Typography></Typography>
          <Typography>210 New Hampton Road, South Down</Typography>

          <Typography>Contact number:</Typography>
          <Box
            ref={questionRefs.current[2]}
            sx={{ display: "flex", alignItems: "baseline" }}
          >
            <TextField
              label="3"
              variant="standard"
              value={answers[2] || ""}
              onChange={(e) => handleInputChange(2, e.target.value)}
            />
            <Typography component="span" sx={{ ml: 1 }}>
              (mobile)
            </Typography>
          </Box>

          <Typography>Delivery option:</Typography>
          <Box
            ref={questionRefs.current[3]}
            sx={{ display: "flex", alignItems: "baseline" }}
          >
            <Typography>1☐ 2✓ (no</Typography>
            <TextField
              label="4"
              variant="standard"
              sx={{ mx: 1 }}
              value={answers[3] || ""}
              onChange={(e) => handleInputChange(3, e.target.value)}
            />
            <Typography>)</Typography>
          </Box>

          <Typography>Method of payment:</Typography>
          <Box
            ref={questionRefs.current[4]}
            sx={{ display: "flex", alignItems: "baseline" }}
          >
            <Typography>credit card Type:</Typography>
            <TextField
              label="5"
              variant="standard"
              sx={{ ml: 1 }}
              value={answers[4] || ""}
              onChange={(e) => handleInputChange(4, e.target.value)}
            />
          </Box>
        </Box>
      </Box>

      <Typography sx={{ mt: 3 }}>
        <b>Questions 6-10</b>
      </Typography>
      <Typography>Complete the table below.</Typography>
      <Typography>
        Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> for each answer.
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>item</TableCell>
              <TableCell>code</TableCell>
              <TableCell>colour</TableCell>
              <TableCell>quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Office chairs</TableCell>
              <TableCell>ASP 23</TableCell>
              <TableCell ref={questionRefs.current[5]}>
                <TextField
                  label="6"
                  variant="outlined"
                  size="small"
                  value={answers[5] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                />
              </TableCell>
              <TableCell>5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell ref={questionRefs.current[6]}>
                <TextField
                  label="7"
                  variant="outlined"
                  size="small"
                  value={answers[6] || ""}
                  onChange={(e) => handleInputChange(6, e.target.value)}
                />
              </TableCell>
              <TableCell ref={questionRefs.current[7]}>
                <TextField
                  label="8"
                  variant="outlined"
                  size="small"
                  value={answers[7] || ""}
                  onChange={(e) => handleInputChange(7, e.target.value)}
                />
              </TableCell>
              <TableCell></TableCell>
              <TableCell>2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Leather sofa</TableCell>
              <TableCell>DFD 44</TableCell>
              <TableCell ref={questionRefs.current[8]}>
                <TextField
                  label="9"
                  variant="outlined"
                  size="small"
                  value={answers[8] || ""}
                  onChange={(e) => handleInputChange(8, e.target.value)}
                />
              </TableCell>
              <TableCell>1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell ref={questionRefs.current[9]}>
                <TextField
                  label="10"
                  variant="outlined"
                  size="small"
                  value={answers[9] || ""}
                  onChange={(e) => handleInputChange(9, e.target.value)}
                />
              </TableCell>
              <TableCell>TX 22</TableCell>
              <TableCell>silver</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default Part1;
