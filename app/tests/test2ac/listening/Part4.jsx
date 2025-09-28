import React, { useRef, useEffect } from "react";
import { Box, Typography, List, ListItem, TextField } from "@mui/material";

const Part4 = ({ answers, setAnswers, currentQuestion }) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    if (currentQuestion >= 31 && currentQuestion <= 40) {
      const index = currentQuestion - 31;
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

  const questionsData = [
    { qNum: 31, textBefore: "fibres from some", textAfter: "during washing" },
    {
      qNum: 32,
      textBefore: "They cause injuries to the",
      textAfter: "of wildlife and affect their digestive systems.",
    },
    {
      qNum: 33,
      textBefore: "They enter the food chain, e.g, in bottled and tap water,",
      textAfter: ", and seafood.",
    },
    {
      qNum: 34,
      textBefore:
        "They may not affect human health, but they are banned in skin cleaning products and",
      textAfter: "in some countries.",
    },
    {
      qNum: 35,
      textBefore: "Microplastics enter the soil through air, rain and",
      textAfter: ".",
    },
    {
      qNum: 36,
      textBefore: "Earthworms are important because they add",
      textAfter: "to the soil.",
    },
    {
      qNum: 37,
      textBefore:
        "The study aimed to find whether microplastics in earthworms affect the",
      textAfter: "of plants.",
    },
    { qNum: 38, textBefore: "", textAfter: "loss in earthworms" },
    {
      qNum: 39,
      textBefore: "a rise in the level of",
      textAfter: "in the soil.",
    },
    {
      qNum: 40,
      textBefore: "changes to soil damage both ecosystem and",
      textAfter: ".",
    },
  ];

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
        fontSize: "19px",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography variant="h5" gutterBottom>
          Part 4
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 31-40
        </Typography>
      </Box>

      <Typography>Complete the notes below.</Typography>
      <Typography sx={{ mb: 2 }}>
        Write <b>ONE WORD ONLY</b> for each answer.
      </Typography>

      <Box
        sx={{
          textAlign: "left",
          width: "100%",
          border: "1px solid #ccc",
          p: 2,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
          <b>Microplastics</b>
        </Typography>

        <Typography>
          <b>Where microplastics come from</b>
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item", py: 1 }}>
            {questionsData[0].textBefore}
            <TextField
              sx={{ mx: 1, width: "10em", mt: -2 }}
              label="31"
              variant="outlined"
              autoComplete="off"
              value={answers[30] || ""}
              onChange={(e) => handleInputChange(30, e.target.value)}
              inputRef={(el) => (inputRefs.current[0] = el)}
            />
            {questionsData[0].textAfter}
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            the breakdown of large pieces of plastic
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>waste from industry</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            the action of vehicle tyres on roads
          </ListItem>
        </List>

        <Typography sx={{ mt: 2 }}>
          <b>Effects of microplastics</b>
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          {questionsData.slice(1, 5).map((q, i) => (
            <ListItem key={q.qNum} sx={{ display: "list-item", py: 1 }}>
              {q.textBefore}
              <TextField
                sx={{ mx: 1, width: "10em", mt: -2 }}
                label={q.qNum}
                variant="outlined"
                autoComplete="off"
                value={answers[q.qNum - 1] || ""}
                onChange={(e) => handleInputChange(q.qNum - 1, e.target.value)}
                inputRef={(el) => (inputRefs.current[i + 1] = el)}
              />
              {q.textAfter}
            </ListItem>
          ))}
        </List>

        <Typography sx={{ mt: 2 }}>
          <b>Microplastics in the soil - a study by Anglia Ruskin University</b>
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          {questionsData.slice(5, 7).map((q, i) => (
            <ListItem key={q.qNum} sx={{ display: "list-item", py: 1 }}>
              {q.textBefore}
              <TextField
                sx={{ mx: 1, width: "10em", mt: -2 }}
                label={q.qNum}
                variant="outlined"
                autoComplete="off"
                value={answers[q.qNum - 1] || ""}
                onChange={(e) => handleInputChange(q.qNum - 1, e.target.value)}
                inputRef={(el) => (inputRefs.current[i + 5] = el)}
              />
              {q.textAfter}
            </ListItem>
          ))}
          <ListItem sx={{ display: "list-item" }}>
            The study found that microplastics caused:
            <List sx={{ listStyleType: "square", pl: 4 }}>
              <ListItem sx={{ display: "list-item", py: 1 }}>
                <TextField
                  sx={{ mr: 1, width: "10em", mt: -2 }}
                  label="38"
                  variant="outlined"
                  autoComplete="off"
                  value={answers[37] || ""}
                  onChange={(e) => handleInputChange(37, e.target.value)}
                  inputRef={(el) => (inputRefs.current[7] = el)}
                />
                loss in earthworms
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                fewer seeds to germinate
              </ListItem>
              <ListItem sx={{ display: "list-item", py: 1 }}>
                a rise in the level of
                <TextField
                  sx={{ mx: 1, width: "10em", mt: -2 }}
                  label="39"
                  variant="outlined"
                  autoComplete="off"
                  value={answers[38] || ""}
                  onChange={(e) => handleInputChange(38, e.target.value)}
                  inputRef={(el) => (inputRefs.current[8] = el)}
                />
                in the soil.
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <b>The study concluded:</b>
            <List sx={{ listStyleType: "square", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                soil should be seen as an important natural process.
              </ListItem>
              <ListItem sx={{ display: "list-item", py: 1 }}>
                changes to soil damage both ecosystem and
                <TextField
                  sx={{ mx: 1, width: "10em", mt: -2 }}
                  label="40"
                  variant="outlined"
                  autoComplete="off"
                  value={answers[39] || ""}
                  onChange={(e) => handleInputChange(39, e.target.value)}
                  inputRef={(el) => (inputRefs.current[9] = el)}
                />
                .
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default Part4;
