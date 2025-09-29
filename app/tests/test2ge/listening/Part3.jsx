import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  List,
  ListItem,
  Paper,
} from "@mui/material";

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(
    Array(10)
      .fill(null)
      .map(() => React.createRef())
  );

  useEffect(() => {
    if (currentQuestion >= 21 && currentQuestion <= 30) {
      const index = currentQuestion - 21;
      const element = questionRefs.current[index]?.current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          const input = element.querySelector('input, [role="button"]');
          if (input) input.focus();
        }, 200);
      }
    }
  }, [currentQuestion]);

  const flowChartOptions = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const radioQuestions = [
    {
      qNum: 21,
      text: "How does Clare feel about the students in her Year 12 science class?",
      options: [
        { val: "A", label: "worried that they are not making progress" },
        { val: "B", label: "challenged by their poor behaviour in class" },
        {
          val: "C",
          label: "frustrated at their lack of interest in the subject",
        },
      ],
    },
    {
      qNum: 22,
      text: "How does Jake react to Clare's suggestion about an experiment based on children's diet?",
      options: [
        {
          val: "A",
          label: "He is concerned that the results might not be meaningful.",
        },
        {
          val: "B",
          label: "He feels some of the data might be difficult to obtain.",
        },
        {
          val: "C",
          label: "He suspects that the conclusions might be upsetting.",
        },
      ],
    },
    {
      qNum: 23,
      text: "What problem do they agree may be involved in an experiment involving animals?",
      options: [
        { val: "A", label: "Any results may not apply to humans." },
        { val: "B", label: "It may be complicated to get permission." },
        {
          val: "C",
          label: "Students may not be happy about animal experiments.",
        },
      ],
    },
    {
      qNum: 24,
      text: "What question do they decide the experiment should address?",
      options: [
        {
          val: "A",
          label: "Are mice capable of controlling their food intake?",
        },
        {
          val: "B",
          label: "Does an increase in sugar lead to health problems?",
        },
        {
          val: "C",
          label: "How much do supplements of different kinds affect health?",
        },
      ],
    },
    {
      qNum: 25,
      text: "Clare might also consider doing another experiment involving?",
      options: [
        { val: "A", label: "other types of food supplement." },
        { val: "B", label: "different genetic strains of mice." },
        { val: "C", label: "varying amounts of exercise." },
      ],
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
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography variant="h5" gutterBottom>
          Part 3
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 21-30
        </Typography>
      </Box>

      <Box sx={{ width: "100%", mt: 2, textAlign: "left" }}>
        <Typography>
          <b>Questions 21-25</b>
        </Typography>
        <Typography>
          Choose the correct letter, <b>A, B</b> or <b>C</b>.
        </Typography>
        {radioQuestions.map((q, index) => (
          <FormControl
            key={q.qNum}
            sx={{ my: 1.5, width: "100%" }}
            ref={questionRefs.current[index]}
          >
            <Typography>
              <b>{q.qNum}</b> {q.text}
            </Typography>
            <RadioGroup
              sx={{ ml: 4 }}
              value={answers[q.qNum - 1] || ""}
              onChange={(e) => handleInputChange(q.qNum - 1, e.target.value)}
            >
              {q.options.map((opt) => (
                <FormControlLabel
                  key={opt.val}
                  value={opt.val}
                  control={<Radio />}
                  label={`${opt.val}) ${opt.label}`}
                />
              ))}
            </RadioGroup>
          </FormControl>
        ))}
      </Box>

      <Box sx={{ width: "100%", mt: 3, textAlign: "left" }}>
        <Typography>
          <b>Questions 26-30</b>
        </Typography>
        <Typography>Complete the flowchart below.</Typography>
        <Typography>
          Choose <b>FIVE</b> answers from the box and write the correct letter,{" "}
          <b>A-H</b>, next to Questions 26-30.
        </Typography>
        <Paper sx={{ p: 2, my: 2, bgcolor: "#f5f5f5", width: "100%" }}>
          <List sx={{ display: "flex" }}>
            <ListItem>A) size</ListItem>
            <ListItem>B) escape</ListItem>
            <ListItem>C) age</ListItem>
            <ListItem>D) water</ListItem>
            <ListItem>E) cereal</ListItem>
            <ListItem>F) calculations</ListItem>
            <ListItem>G) changes</ListItem>
          </List>
          <ListItem>H) colour</ListItem>
        </Paper>

        {/* Flowchart Structure */}
        <List sx={{ listStyleType: "decimal", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }} ref={questionRefs.current[5]}>
            Choose mice which are all the same
            <FormControl size="small" sx={{ mx: 1, minWidth: "8em", mt: -1 }}>
              <InputLabel>26</InputLabel>
              <Select
                value={answers[25] || ""}
                onChange={(e) => handleInputChange(25, e.target.value)}
                label="26"
              >
                {flowChartOptions.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            .
          </ListItem>
          <ListItem sx={{ display: "list-item" }} ref={questionRefs.current[6]}>
            Divide the mice into two groups, each with a different
            <FormControl size="small" sx={{ mx: 1, minWidth: "8em", mt: -1 }}>
              <InputLabel>27</InputLabel>
              <Select
                value={answers[26] || ""}
                onChange={(e) => handleInputChange(26, e.target.value)}
                label="27"
              >
                {flowChartOptions.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            .
          </ListItem>
          <ListItem sx={{ display: "list-item" }} ref={questionRefs.current[7]}>
            Feed group B the same, but also sugar contained in
            <FormControl size="small" sx={{ mx: 1, minWidth: "8em", mt: -1 }}>
              <InputLabel>28</InputLabel>
              <Select
                value={answers[27] || ""}
                onChange={(e) => handleInputChange(27, e.target.value)}
                label="28"
              >
                {flowChartOptions.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            .
          </ListItem>
          <ListItem sx={{ display: "list-item" }} ref={questionRefs.current[8]}>
            Place them in a weighing chamber to prevent
            <FormControl size="small" sx={{ mx: 1, minWidth: "8em", mt: -1 }}>
              <InputLabel>29</InputLabel>
              <Select
                value={answers[28] || ""}
                onChange={(e) => handleInputChange(28, e.target.value)}
                label="29"
              >
                {flowChartOptions.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            .
          </ListItem>
          <ListItem sx={{ display: "list-item" }} ref={questionRefs.current[9]}>
            Do all necessary
            <FormControl size="small" sx={{ mx: 1, minWidth: "8em", mt: -1 }}>
              <InputLabel>30</InputLabel>
              <Select
                value={answers[29] || ""}
                onChange={(e) => handleInputChange(29, e.target.value)}
                label="30"
              >
                {flowChartOptions.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            .
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default Part3;
