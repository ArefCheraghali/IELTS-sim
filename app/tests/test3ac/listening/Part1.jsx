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
        <b>Questions 1-4</b>
      </Typography>
      <Typography>Complete the table below.</Typography>
      <Typography>
        Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> for each answer.
      </Typography>
      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant="h6" align="center">
                  City Bank Customer Service Log
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Customer name:</TableCell>
              <TableCell ref={questionRefs.current[0]}>
                David{" "}
                <TextField
                  label="1"
                  variant="outlined"
                  size="small"
                  sx={{ mt: -1 }}
                  value={answers[0] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone:</TableCell>
              <TableCell>023 - 561 - 055</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>D.O.B.:</TableCell>
              <TableCell>18 / 02 / 1968</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} sx={{ fontWeight: "bold" }}>
                Customer's Term Deposit details:
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Amount:</TableCell>
              <TableCell>$18,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Term:</TableCell>
              <TableCell ref={questionRefs.current[1]}>
                <TextField
                  label="2"
                  variant="outlined"
                  sx={{ mt: -1 }}
                  size="small"
                  value={answers[1] || ""}
                  onChange={(e) => handleInputChange(1, e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Interest rate:</TableCell>
              <TableCell>3.45% per annum</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} sx={{ fontWeight: "bold" }}>
                Current Term deposit interest rates:
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1 year</TableCell>
              <TableCell>3.65% per annum</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2 years</TableCell>
              <TableCell ref={questionRefs.current[2]}>
                <TextField
                  label="3"
                  variant="outlined"
                  size="small"
                  sx={{ mt: -1 }}
                  value={answers[2] || ""}
                  onChange={(e) => handleInputChange(2, e.target.value)}
                />{" "}
                % per annum
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell ref={questionRefs.current[3]}>
                <TextField
                  label="4"
                  variant="outlined"
                  size="small"
                  sx={{ mt: -1 }}
                  value={answers[3] || ""}
                  onChange={(e) => handleInputChange(3, e.target.value)}
                />{" "}
                Term deposits
              </TableCell>
              <TableCell>Minimum deposit: $20,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography sx={{ mt: 3 }}>
        <b>Questions 5-10</b>
      </Typography>
      <Typography>Complete the table below.</Typography>
      <Typography>
        Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> for each answer.
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell ref={questionRefs.current[4]}>
                <TextField
                  label="5"
                  variant="outlined"
                  fullWidth
                  size="small"
                  sx={{ mt: -1, maxWidth: 150 }}
                  value={answers[4] || ""}
                  onChange={(e) => handleInputChange(4, e.target.value)}
                />{" "}
                tax rate:
              </TableCell>
              <TableCell>28%</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Investment returns</TableCell>
              <TableCell ref={questionRefs.current[5]}>
                Depend on{" "}
                <TextField
                  label="6"
                  variant="outlined"
                  sx={{ mt: -1 }}
                  size="small"
                  value={answers[5] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2 years</TableCell>
              <TableCell sx={{ lineHeight: 3 }}>
                <b>Salary:</b> $48,001 - $70,000 = 3.75% <br /> <b>Salary:</b>{" "}
                $70,001 - $
                <TextField
                  label="7"
                  variant="outlined"
                  size="small"
                  sx={{ maxWidth: 100 }}
                  value={answers[6] || ""}
                  onChange={(e) => handleInputChange(6, e.target.value)}
                  inputRef={questionRefs.current[6]}
                />{" "}
                = 3.92%
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Minimum investment:</TableCell>
              <TableCell>$10,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hidden charges/fees:</TableCell>
              <TableCell ref={questionRefs.current[7]}>
                <TextField
                  label="8"
                  variant="outlined"
                  sx={{ mt: -1 }}
                  size="small"
                  value={answers[7] || ""}
                  onChange={(e) => handleInputChange(7, e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Interest payment options:</TableCell>
              <TableCell ref={questionRefs.current[8]}>
                monthly,{" "}
                <TextField
                  label="9"
                  variant="outlined"
                  sx={{ mt: -1 }}
                  size="small"
                  value={answers[8] || ""}
                  onChange={(e) => handleInputChange(8, e.target.value)}
                />
                , 6-monthly, annually
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Application options:</TableCell>
              <TableCell ref={questionRefs.current[9]} sx={{ lineHeight: 2 }}>
                - online <br />-{" "}
                <TextField
                  label="10"
                  variant="outlined"
                  size="small"
                  value={answers[9] || ""}
                  onChange={(e) => handleInputChange(9, e.target.value)}
                />
                <br />- in person
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default Part1;
