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
import TwoColumnLayout from "@/components/TwoColumnLayout";
import MemoText from "./text/MemoText";

const closingProcedureQuestions = [
  {
    qNum: 15,
    textBefore: "- bring in",
    textAfter: "from outside the shop",
    answerIndex: 14,
  },
  {
    qNum: 16,
    textBefore: "- check no customers are still in store - look in",
    textAfter: "",
    answerIndex: 15,
  },
  {
    qNum: 17,
    textBefore: "-",
    textAfter: "are not permitted in the shop",
    answerIndex: 16,
  },
  {
    qNum: 18,
    textBefore: "- take cash to the safe in the",
    textAfter: "",
    answerIndex: 17,
  },
  {
    qNum: 19,
    textBefore: "- you need a",
    textAfter: "to be there when opening the safe",
    answerIndex: 18,
  },
  {
    qNum: 20,
    textBefore: "- ensure correct",
    textAfter: "are on",
    answerIndex: 19,
  },
  {
    qNum: 21,
    textBefore: "- set the alarm (next to the",
    textAfter: ") and leave within 90 seconds",
    answerIndex: 20,
  },
];

const Part2 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(
    Array(13)
      .fill(null)
      .map(() => React.createRef())
  );
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (currentQuestion >= 15 && currentQuestion <= 27) {
      const index = currentQuestion - 15;
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

  const rightContent = (
    <Box>
      <Typography sx={{ fontSize: "1.1em", mb: 1, fontWeight: "bold" }}>
        READING PASSAGE 2
      </Typography>
      <Typography sx={{ mb: 1 }}>
        You should spend about 20 minutes on <b>Questions 15-27</b>.
      </Typography>

      <Typography
        variant="h6"
        component="h3"
        sx={{ mb: 0.5, fontSize: "1rem", fontWeight: "bold" }}
      >
        Questions 15 - 21
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.
      </Typography>

      <Box sx={{ border: "1px solid #ccc", p: 2, borderRadius: 1 }}>
        <Typography variant="h6" sx={{ mb: 1, fontSize: "1rem" }}>
          <b>Vern's Clothing Warehouse: Procedure for closing the shop</b>
        </Typography>
        <List>
          {closingProcedureQuestions.map((q, index) => (
            <ListItem key={q.qNum} ref={questionRefs.current[index]}>
              <Typography
                component="div"
                sx={{ display: "flex", alignItems: "baseline" }}
              >
                {q.textBefore}
                <TextField
                  sx={{ mx: 0.5, width: "10em" }}
                  label={q.qNum}
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  value={answers[q.answerIndex] || ""}
                  onChange={(e) =>
                    handleInputChange(q.answerIndex, e.target.value)
                  }
                />
                {q.textAfter}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Typography
        variant="h6"
        component="h3"
        sx={{ mt: 3, mb: 0.5, fontSize: "1rem", fontWeight: "bold" }}
      >
        Questions 22 - 27
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.
      </Typography>

      <TableContainer component={Paper} elevation={2}>
        <Table size="small">
          <TableHead sx={{ bgcolor: "grey.200" }}>
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
              <TableCell>Top</TableCell>
              <TableCell ref={questionRefs.current[7]}>
                shirt... with logo on{" "}
                <TextField
                  label="22"
                  variant="outlined"
                  size="small"
                  sx={{ width: "7em", mx: 1 }}
                  value={answers[21] || ""}
                  onChange={(e) => handleInputChange(21, e.target.value)}
                />
              </TableCell>
              <TableCell>white Bob Charles shirt...</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Trousers / skirt</TableCell>
              <TableCell>colour: black</TableCell>
              <TableCell ref={questionRefs.current[8]}>
                colour:{" "}
                <TextField
                  label="23"
                  variant="outlined"
                  size="small"
                  sx={{ width: "6em", mx: 1 }}
                  value={answers[22] || ""}
                  onChange={(e) => handleInputChange(22, e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shoes</TableCell>
              <TableCell ref={questionRefs.current[9]}>
                must not be{" "}
                <TextField
                  label="24"
                  variant="outlined"
                  size="small"
                  sx={{ width: "8em", mx: 1 }}
                  value={answers[23] || ""}
                  onChange={(e) => handleInputChange(23, e.target.value)}
                />
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell ref={questionRefs.current[10]}>
                <TextField
                  label="25"
                  variant="outlined"
                  size="small"
                  sx={{ width: "100%" }}
                  value={answers[24] || ""}
                  onChange={(e) => handleInputChange(24, e.target.value)}
                />
              </TableCell>
              <TableCell>must be worn by all staff</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Storage and laundering</TableCell>
              <TableCell>keep in locker</TableCell>
              <TableCell ref={questionRefs.current[11]}>
                sign for clean uniform in{" "}
                <TextField
                  label="26"
                  variant="outlined"
                  size="small"
                  sx={{ width: "8em", mx: 1 }}
                  value={answers[25] || ""}
                  onChange={(e) => handleInputChange(25, e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Damaged uniform</TableCell>
              <TableCell>take to Ms Nichols</TableCell>
              <TableCell ref={questionRefs.current[12]}>
                report to{" "}
                <TextField
                  label="27"
                  variant="outlined"
                  size="small"
                  sx={{ width: "8em", mx: 1 }}
                  value={answers[26] || ""}
                  onChange={(e) => handleInputChange(26, e.target.value)}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  return (
    <TwoColumnLayout leftContent={<MemoText />} rightContent={rightContent} />
  );
};

export default Part2;
