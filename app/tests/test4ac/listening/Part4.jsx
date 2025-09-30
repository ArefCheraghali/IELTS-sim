import React, { useRef, useEffect } from "react";
import { Box, Typography, List, ListItem, TextField } from "@mui/material";

const questionsData = [
  {
    qNum: 31,
    textBefore: "Deserts found in what is known as a",
    textAfter: "(or dry area).",
    answerIndex: 30,
  },
  {
    qNum: 32,
    textBefore: "Annual rainfall, if any, amounts to a",
    textAfter: ".",
    answerIndex: 31,
  },
  {
    qNum: 33,
    textBefore: "Soil contains a lot of salt and",
    textAfter: ".",
    answerIndex: 32,
  },
  {
    qNum: 34,
    textBefore: "They can",
    textAfter: "and store water.",
    answerIndex: 33,
  },
  {
    qNum: 35,
    textBefore: "Saguaro Cactus: stores water in its",
    textAfter: ".",
    answerIndex: 34,
  },
  {
    qNum: 36,
    textBefore: "Barrel Cactus: can",
    textAfter: "or shrink according to weather.",
    answerIndex: 35,
  },
  {
    qNum: 37,
    textBefore: "Old Man Cactus: has",
    textAfter: "that reflect the sun.",
    answerIndex: 36,
  },
  {
    qNum: 38,
    textBefore: "Prickly Pear Cactus: has",
    textAfter: "to keep away animals.",
    answerIndex: 37,
  },
  {
    qNum: 39,
    textBefore: "Desert Spoon: leaves are",
    textAfter: "to reduce water loss.",
    answerIndex: 38,
  },
  {
    qNum: 40,
    textBefore: "Aloe Plant: leaf surface acts like a",
    textAfter: "covering and keeps water inside.",
    answerIndex: 39,
  },
];

const Part4 = ({ answers, setAnswers, currentQuestion }) => {
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

    if (currentQuestion >= 31 && currentQuestion <= 40) {
      const index = currentQuestion - 31;
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
        <Typography variant="h5">Part 4</Typography>
        <Typography variant="h6">Questions 31-40</Typography>
      </Box>

      <Typography sx={{ mt: 2 }}>Complete the notes below.</Typography>
      <Typography>
        Write <b>NO MORE THAN TWO WORDS</b> for each answer.
      </Typography>

      <Box sx={{ border: "1px solid #ccc", p: 3, mt: 3, borderRadius: 1 }}>
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          DESERT PLANTS
        </Typography>

        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Background
        </Typography>
        {questionsData.slice(0, 3).map((q, index) => (
          <Box key={q.qNum} ref={questionRefs.current[index]} sx={{ my: 2.5 }}>
            <Typography
              component="div"
              sx={{ display: "flex", alignItems: "baseline" }}
            >
              <b>{q.qNum}</b>. {q.textBefore}
              <TextField
                variant="standard"
                sx={{ mx: 1, width: "12em" }}
                value={answers[q.answerIndex] || ""}
                onChange={(e) =>
                  handleInputChange(q.answerIndex, e.target.value)
                }
              />
              {q.textAfter}
            </Typography>
          </Box>
        ))}

        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 3 }}>
          General adaptations of desert plants
        </Typography>
        <Box ref={questionRefs.current[3]} sx={{ my: 2.5 }}>
          <Typography
            component="div"
            sx={{ display: "flex", alignItems: "baseline" }}
          >
            <b>34</b>. {questionsData[3].textBefore}
            <TextField
              variant="standard"
              sx={{ mx: 1, width: "12em" }}
              value={answers[33] || ""}
              onChange={(e) => handleInputChange(33, e.target.value)}
            />
            {questionsData[3].textAfter}
          </Typography>
        </Box>

        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 3 }}>
          Examples of adaptations
        </Typography>
        {questionsData.slice(4).map((q, index) => (
          <Box
            key={q.qNum}
            ref={questionRefs.current[index + 4]}
            sx={{ my: 2.5 }}
          >
            <Typography
              component="div"
              sx={{ display: "flex", alignItems: "baseline" }}
            >
              <b>{q.qNum}</b>. {q.textBefore}
              <TextField
                variant="standard"
                sx={{ mx: 1, width: "12em" }}
                value={answers[q.answerIndex] || ""}
                onChange={(e) =>
                  handleInputChange(q.answerIndex, e.target.value)
                }
              />
              {q.textAfter}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Part4;
