import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  TextField,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

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
            if (input.type === "text") input.select();
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

      <Typography sx={{ mt: 2 }}>
        <b>Questions 31-34</b>
      </Typography>
      <Typography>Complete the summary below.</Typography>
      <Typography>
        Write <b>NO MORE THAN TWO WORDS</b> for each answer.
      </Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, mt: 2, borderRadius: 1 }}>
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          Origins of the Caveman Diet
        </Typography>
        <Typography component="div" sx={{ lineHeight: 2.8 }}>
          There are many popular fad diets nowadays. They all promise good
          health if you stick to the
          <TextField
            variant="outlined"
            size="small"
            label="31"
            sx={{ mx: 1, width: "10em" }}
            value={answers[30] || ""}
            onChange={(e) => handleInputChange(30, e.target.value)}
            inputRef={questionRefs.current[0]}
          />
          . The Caveman diet is a popular example. This diet includes foods such
          as lean meat and fish that our forebears ate before we developed
          <TextField
            variant="outlined"
            label="32"
            sx={{ mx: 1, width: "10em" }}
            value={answers[31] || ""}
            onChange={(e) => handleInputChange(31, e.target.value)}
            inputRef={questionRefs.current[1]}
          />
          . We need to find out what our ancestors did eat, so researchers are
          studying some existing hunter-gatherer tribes. These tribes typically
          like to eat meat but they can’t always get it, even though they are
          skilled with their weapons, e.g.
          <TextField
            variant="outlined"
            size="small"
            label="33"
            sx={{ mx: 1, width: "10em" }}
            value={answers[32] || ""}
            onChange={(e) => handleInputChange(32, e.target.value)}
            inputRef={questionRefs.current[2]}
          />
          . So, instead, they eat foods that their wives gather. They get only
          about a
          <TextField
            variant="outlined"
            size="small"
            label="34"
            sx={{ mr: 1, width: "10em" }}
            value={answers[33] || ""}
            onChange={(e) => handleInputChange(33, e.target.value)}
            inputRef={questionRefs.current[3]}
          />
          of their energy from meat.
        </Typography>
      </Box>

      <Typography sx={{ mt: 3 }}>
        <b>Questions 35 and 36</b>
      </Typography>
      <Typography>
        Choose the correct letter, <b>A, B</b> or <b>C</b>.
      </Typography>
      <FormControl fullWidth sx={{ mt: 1 }} ref={questionRefs.current[4]}>
        <Typography>
          <b>35</b> Research evidence suggests that ...
        </Typography>
        <RadioGroup
          value={answers[34] || ""}
          onChange={(e) => handleInputChange(34, e.target.value)}
          sx={{ ml: 2 }}
        >
          <FormControlLabel
            value="A"
            control={<Radio />}
            label="A) the tribesmen's traditional diet is unhealthy"
          />
          <FormControlLabel
            value="B"
            control={<Radio />}
            label="B) our bodies can digest only certain foods"
          />
          <FormControlLabel
            value="C"
            control={<Radio />}
            label="C) we can adapt to a range of diets"
          />
        </RadioGroup>
      </FormControl>
      <FormControl fullWidth sx={{ mt: 2 }} ref={questionRefs.current[5]}>
        <Typography>
          <b>36</b> Thai people have difficulty digesting milk because ...
        </Typography>
        <RadioGroup
          value={answers[35] || ""}
          onChange={(e) => handleInputChange(35, e.target.value)}
          sx={{ ml: 2 }}
        >
          <FormControlLabel
            value="A"
            control={<Radio />}
            label="A) they have too much lactase in their bodies"
          />
          <FormControlLabel
            value="B"
            control={<Radio />}
            label="B) in the past they didn't farm cows"
          />
          <FormControlLabel
            value="C"
            control={<Radio />}
            label="C) their saliva lacks certain enzymes"
          />
        </RadioGroup>
      </FormControl>

      <Typography sx={{ mt: 3 }}>
        <b>Questions 37-40</b>
      </Typography>
      <Typography>Complete the notes below.</Typography>
      <Typography>
        Write <b>NO MORE THAN TWO WORDS</b> for each answer.
      </Typography>
      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          mt: 2,
          borderRadius: 1,
          fontSize: "19px",
        }}
      >
        <List>
          <ListItem>
            <b>Variation in global diets:</b>
          </ListItem>
          <ListItem ref={questionRefs.current[6]}>
            Inuit – most calories from{" "}
            <TextField
              variant="outlined"
              label="37"
              sx={{ mx: 1 }}
              value={answers[36] || ""}
              onChange={(e) => handleInputChange(36, e.target.value)}
            />{" "}
            foods, e.g. seal meat
          </ListItem>
          <ListItem>Jains – vegetarian, but milk is permitted</ListItem>
          <ListItem>Others – fish, insects</ListItem>

          <ListItem sx={{ mt: 1 }}>
            <b>Implications for the caveman diet:</b>
          </ListItem>
          <ListItem>Cavemen did not all eat the same diet</ListItem>
          <ListItem ref={questionRefs.current[7]}>
            Diets come from complicated cultural{" "}
            <TextField
              variant="outlined"
              label="38"
              sx={{ mx: 1 }}
              value={answers[37] || ""}
              onChange={(e) => handleInputChange(37, e.target.value)}
            />
          </ListItem>

          <ListItem sx={{ mt: 1 }}>
            <b>Problems with Caveman diet:</b>
          </ListItem>
          <ListItem ref={questionRefs.current[8]}>
            Costs a lot of money for lean meat and{" "}
            <TextField
              variant="outlined"
              label="39"
              sx={{ mx: 1 }}
              value={answers[38] || ""}
              onChange={(e) => handleInputChange(38, e.target.value)}
            />
          </ListItem>
          <ListItem>Too much red meat may be unhealthy</ListItem>
          <ListItem ref={questionRefs.current[9]}>
            Reliance on meat is bad for the{" "}
            <TextField
              variant="outlined"
              label="40"
              sx={{ mx: 1 }}
              value={answers[39] || ""}
              onChange={(e) => handleInputChange(39, e.target.value)}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Part4;
