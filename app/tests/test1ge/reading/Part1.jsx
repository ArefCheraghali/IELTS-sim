import React, { useRef, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import EmergencyText from "./text/EmergencyText";

const sentenceCompletionQuestions = [
  {
    qNum: 1,
    textBefore: "In an emergency, a teacher will either phone the office or",
    textAfter: ".",
    answerIndex: 0,
  },
  {
    qNum: 2,
    textBefore: "The signal for evacuation will normally be several",
    textAfter: ".",
    answerIndex: 1,
  },
  {
    qNum: 3,
    textBefore: "If possible, students should leave the building by the",
    textAfter: ".",
    answerIndex: 2,
  },
  {
    qNum: 4,
    textBefore: "They then walk quickly to the",
    textAfter: ".",
    answerIndex: 3,
  },
  {
    qNum: 5,
    textBefore: "",
    textAfter: "will join the teachers and students in the quad.",
    answerIndex: 4,
  },
  {
    qNum: 6,
    textBefore: "Each class teacher will count up his or her students and mark",
    textAfter: ".",
    answerIndex: 5,
  },
  {
    qNum: 7,
    textBefore: "After the",
    textAfter: ", everyone may return to class.",
    answerIndex: 6,
  },
  {
    qNum: 8,
    textBefore:
      "If there is an emergency at lunchtime, students gather in the quad in",
    textAfter: "and wait for their teacher.",
    answerIndex: 7,
  },
];

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  const possibleAnswers = ["TRUE", "FALSE", "NOT GIVEN"];
  const questionRefs = useRef([]);

  useEffect(() => {
    if (currentQuestion >= 1 && currentQuestion <= 14) {
      const index = currentQuestion - 1;
      const element = questionRefs.current[index];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(() => {
          const input = element.querySelector('input, [role="button"]');
          if (input) {
            input.focus();
            if (input.tagName === "INPUT") {
              input.select();
            }
          }
        }, 200);
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
      <Typography sx={{ ml: 5, fontSize: "1.1em", mb: 1 }}>
        <b>Part 1</b>
      </Typography>
      <Typography sx={{ ml: 1, mb: 1 }}>
        You should spend about 20 minutes on <b>Questions 1-14</b>.
      </Typography>
      <Typography sx={{ ml: 1, mb: 1, mt: 2 }}>
        <b>Questions 1 - 8</b>
      </Typography>
      <Typography sx={{ ml: 1, mb: 1 }}>
        Complete the sentences below.
      </Typography>
      <Typography sx={{ ml: 1, mb: 1 }}>
        Choose <b>NO MORE THAN THREE WORDS</b> from the{" "}
        <b>
          <i>first text (Emergency Procedures)</i>
        </b>{" "}
        for each answer.
      </Typography>
      <List sx={{ width: "100%", pl: 1 }}>
        {sentenceCompletionQuestions.map((q, index) => (
          <ListItem
            key={q.qNum}
            ref={(el) => (questionRefs.current[index] = el)}
            sx={{ alignItems: "baseline", my: 1 }}
          >
            <Typography component="div" variant="body1" sx={{ lineHeight: 2 }}>
              <b style={{ marginRight: "1em" }}>{q.qNum}</b>
              {q.textBefore}
              <FormControl
                variant="standard"
                sx={{
                  maxWidth: "12em",
                  mx: 1,
                  display: "inline-block",
                  verticalAlign: "bottom",
                }}
              >
                <TextField
                  label={q.qNum}
                  autoComplete="off"
                  value={answers[q.answerIndex] || ""}
                  onChange={(e) =>
                    handleInputChange(q.answerIndex, e.target.value)
                  }
                />
              </FormControl>
              {q.textAfter}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Typography sx={{ ml: 1, mb: 1, mt: 3 }}>
        <b>Questions 9 - 14</b>
      </Typography>
      <Typography sx={{ ml: 1, mb: 1 }}>
        Read the{" "}
        <b>
          <i>second text (Community Education)</i>
        </b>{" "}
        and answer Questions 9 - 14.
      </Typography>
      <Typography sx={{ ml: 1, mb: 1 }}>
        Do the following statements agree with the information given?
      </Typography>
      <List dense sx={{ pl: 2, mb: 2 }}>
        <ListItem>
          <Typography>
            <b>TRUE</b> if the statement agrees with the information
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>FALSE</b> if the statement contradicts the information
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>NOT GIVEN</b> if there is no information on this
          </Typography>
        </ListItem>
      </List>
      {[
        "Business Basics is appropriate for beginners.",
        "Bookkeeping has no practical component.",
        "Bookkeeping is intended for advanced students only.",
        "The New Enterprise Module can help your business become more profitable.",
        "Social Networking focuses on a specific website to help your business succeed.",
        "The Communication class involves speaking in front of an audience.",
      ].map((question, index) => (
        <Box
          key={index}
          ref={(el) => (questionRefs.current[8 + index] = el)}
          sx={{ display: "flex", alignItems: "center", mb: 1.5, pl: 1 }}
        >
          <FormControl sx={{ mr: 2, minWidth: "160px" }} size="small">
            <InputLabel>{`${9 + index}`}</InputLabel>
            <Select
              value={answers[8 + index] || ""}
              onChange={(e) => handleInputChange(8 + index, e.target.value)}
              label={`${9 + index}`}
            >
              {possibleAnswers.map((answer) => (
                <MenuItem key={answer} value={answer}>
                  {answer}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="body2">{question}</Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<EmergencyText />}
      rightContent={rightContent}
    />
  );
};

export default Part1;
