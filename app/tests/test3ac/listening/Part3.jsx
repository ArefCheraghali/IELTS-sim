import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  TextField,
  Divider,
  Paper,
  FormControl,
} from "@mui/material";

const flowchartSteps = [
  { qNum: 21, textBefore: "Step 1: go over", textAfter: "", answerIndex: 20 },
  {
    qNum: 22,
    textBefore: "Step 2: think about research",
    textAfter: "",
    answerIndex: 21,
  },
  {
    qNum: 23,
    textBefore: "consider the kind of research, e.g.",
    textAfter: "from other projects",
    answerIndex: 22,
  },
  {
    qNum: 24,
    textBefore: "Step 3: develop an",
    textAfter: "",
    answerIndex: 23,
  },
];

const summaryQuestions = [
  {
    qNum: 25,
    textBefore: "...to reduce the pressure on the water",
    textAfter: "in a Cameroon village.",
    answerIndex: 24,
  },
  {
    qNum: 26,
    textBefore: "Grey-water is wastewater from household",
    textAfter: ".",
    answerIndex: 25,
  },
  {
    qNum: 27,
    textBefore:
      "...recycle it to use for purposes such as watering plants, flushing toilets and doing",
    textAfter: ".",
    answerIndex: 26,
  },
];

const researchTipsQuestions = [
  {
    qNum: 28,
    textBefore: "Avoid websites where",
    textAfter: "try to sell their products.",
    answerIndex: 27,
  },
  {
    qNum: 29,
    textBefore: "e.g. grey-water treatment systems /",
    textAfter: "use",
    answerIndex: 28,
  },
  {
    qNum: 30,
    textBefore: "Check examples from the",
    textAfter: "last year.",
    answerIndex: 29,
  },
];

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
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

    if (currentQuestion >= 21 && currentQuestion <= 30) {
      const index = currentQuestion - 21;
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
        <Typography variant="h5">Part 3</Typography>
        <Typography variant="h6">Questions 21-30</Typography>
      </Box>

      <Typography sx={{ mt: 2 }}>
        <b>Questions 21-24</b>
      </Typography>
      <Typography>Complete the flowchart below.</Typography>
      <Typography>
        Write <b>NO MORE THAN TWO WORDS</b> for each answer.
      </Typography>
      <Paper sx={{ p: 2, mt: 2, border: "1px solid #ccc" }}>
        <Typography variant="h6">Session outline:</Typography>
        <Typography sx={{ mt: 1 }}>
          <b>Project topic:</b> design a water treatment system
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography>
          <b>Tutorial structure:</b>
        </Typography>
        <List>
          {flowchartSteps.map((step, index) => (
            <ListItem key={step.qNum} ref={questionRefs.current[index]}>
              <Typography
                component="div"
                sx={{ display: "flex", alignItems: "baseline" }}
              >
                {step.textBefore}
                <TextField
                  variant="standard"
                  label={step.qNum}
                  sx={{ mx: 1, width: "10em" }}
                  value={answers[step.answerIndex] || ""}
                  onChange={(e) =>
                    handleInputChange(step.answerIndex, e.target.value)
                  }
                />
                {step.textAfter}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Paper>

      <Typography sx={{ mt: 3 }}>
        <b>Questions 25-27</b>
      </Typography>
      <Typography>Complete the summary below.</Typography>
      <Typography>
        Write <b>NO MORE THAN ONE WORD</b> for each answer.
      </Typography>
      <Paper sx={{ p: 2, mt: 2, border: "1px solid #ccc" }}>
        <Typography variant="h6">Project description:</Typography>
        <Typography component="div" sx={{ lineHeight: 2.8 }}>
          You need to design a grey-water treatment system
          {summaryQuestions.map((q, index) => (
            <React.Fragment key={q.qNum}>
              <span ref={questionRefs.current[index + 4]}>
                {q.textBefore}
                <TextField
                  variant="standard"
                  label={q.qNum}
                  sx={{ mx: 1, width: "10em", mt: -1 }}
                  value={answers[q.answerIndex] || ""}
                  onChange={(e) =>
                    handleInputChange(q.answerIndex, e.target.value)
                  }
                />
                {q.textAfter}
              </span>
            </React.Fragment>
          ))}
        </Typography>
      </Paper>

      <Typography sx={{ mt: 3 }}>
        <b>Questions 28-30</b>
      </Typography>
      <Typography>Complete the notes below.</Typography>
      <Typography>
        Write <b>NO MORE THAN TWO WORDS</b> for each answer.
      </Typography>
      <Paper sx={{ p: 2, mt: 2, border: "1px solid #ccc" }}>
        <Typography>
          <b>Research tips</b>
        </Typography>
        <List>
          <ListItem>
            <b>General internet searches:</b>
          </ListItem>
          {researchTipsQuestions.map((tip, index) => (
            <ListItem key={tip.qNum} ref={questionRefs.current[index + 7]}>
              <Typography
                component="div"
                sx={{ display: "flex", alignItems: "baseline" }}
              >
                {tip.textBefore}
                <TextField
                  variant="standard"
                  label={tip.qNum}
                  sx={{ mx: 1, width: "10em" }}
                  value={answers[tip.answerIndex] || ""}
                  onChange={(e) =>
                    handleInputChange(tip.answerIndex, e.target.value)
                  }
                />
                {tip.textAfter}
              </Typography>
            </ListItem>
          ))}
          <ListItem>
            <b>Engineering library:</b>
          </ListItem>
          <ListItem>Use key words when searching the catalogue</ListItem>
          <ListItem>
            <b>EWB website:</b>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};
export default Part3;
