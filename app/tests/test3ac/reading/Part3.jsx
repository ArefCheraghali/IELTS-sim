"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
  Accordion,
  AccordionSummary,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import SRBText from "./text/SRBText";

const yesNoQuestions = [
  {
    qNum: 27,
    text: "Many business commentators forget the examples of Muhammad Yunus.",
  },
  {
    qNum: 28,
    text: "Dan Rathbourne provides an accurate assessment of Socially Responsible Businesses (SRBs).",
  },
  {
    qNum: 29,
    text: "The Quorate Group is a good example of an influential SRB.",
  },
  {
    qNum: 30,
    text: "Few other businesses will wish to follow the example of the Concern Consultancy.",
  },
  {
    qNum: 31,
    text: "Professor Drew has correctly identified one reason for the emergence of SRBs.",
  },
];

const summaryOptions = ["A", "B", "C", "D", "E", "F", "G", "H"];

const radioQuestionsData = [
  {
    qNum: 37,
    questionText:
      "When discussing ‘conscious consumers’ the writer concludes that",
    options: [
      {
        value: "A",
        label: "businesses are slow to respond to consumer demand.",
      },
      {
        value: "B",
        label: "consumers and businesses have different interests.",
      },
      {
        value: "C",
        label: "businesses and consumers are influencing each other.",
      },
      {
        value: "D",
        label: "consumers should put more pressure on businesses.",
      },
    ],
  },
  {
    qNum: 38,
    questionText: "The writer refers to Lucinda Mitchell in order to",
    options: [
      { value: "A", label: "explain why SRBs lose out to other businesses." },
      {
        value: "B",
        label: "exemplify the way governments often support SRBs.",
      },
      {
        value: "C",
        label: "contrast the approach of different governments to SRBs.",
      },
      { value: "D", label: "compare the role of SRBs in different regions." },
    ],
  },
  {
    qNum: 39,
    questionText: "What does the writer suggest about the goals of SRBs?",
    options: [
      { value: "A", label: "SRBs should have a wider range of goals." },
      { value: "B", label: "It is a mistake for an SRB to change goal." },
      { value: "C", label: "Some goals may make an SRB unprofitable." },
      { value: "D", label: "An SRB should not have more than one goal." },
    ],
  },
  {
    qNum: 40,
    questionText:
      "Which of the following best summerises the writer's argument in the final paragraph?",
    options: [
      { value: "A", label: "A minority of businesses will inevitably fail." },
      { value: "B", label: "SRBs are more successful than other businesses." },
      { value: "C", label: "Universities should do more research into SRBs." },
      { value: "D", label: "The problem faced by SRBs can be overcome." },
    ],
  },
];

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = useRef(
    Array(14)
      .fill(null)
      .map(() => React.createRef())
  );
  const isInitialMount = useRef(true);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (currentQuestion >= 27 && currentQuestion <= 40) {
      const index = currentQuestion - 27;
      const element = questionRefs.current[index]?.current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          setExpandedAccordion(`panel${currentQuestion}`);
          const input = element.querySelector('input, [role="button"]');
          if (input) input.focus();
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
        READING PASSAGE 3
      </Typography>
      <Typography sx={{ mb: 2 }}>
        You should spend about 20 minutes on <b>Questions 27-40</b>.
      </Typography>

      <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Questions 27 - 31
      </Typography>
      <Typography>
        Do the following statements agree with the claims of the writer?
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          pl: "3rem",
          width: "90%",
        }}
      >
        <ListItem sx={{ display: "flex", flexDirection: "row" }}>
          <b style={{ marginRight: "4.8em" }}>YES</b> if the statement agrees
          with the claims of the writer
        </ListItem>
        <ListItem sx={{ display: "flex", flexDirection: "row" }}>
          <b style={{ marginRight: "4.5em" }}>NO</b> if the statement
          contradicts the claims of the writer
        </ListItem>
        <ListItem sx={{ display: "flex", flexDirection: "row" }}>
          <b style={{ marginRight: "2em" }}>NOT GIVEN</b> If it is impossible to
          say what the writer thinks about this
        </ListItem>
      </List>
      {yesNoQuestions.map((q, index) => (
        <Box
          key={q.qNum}
          ref={questionRefs.current[index]}
          sx={{ display: "flex", alignItems: "center", my: 1.5 }}
        >
          <FormControl size="small" sx={{ mr: 2, minWidth: "140px" }}>
            <InputLabel>{q.qNum}</InputLabel>
            <Select
              value={answers[q.qNum - 1] || ""}
              onChange={(e) => handleInputChange(q.qNum - 1, e.target.value)}
              label={`${q.qNum}`}
            >
              <MenuItem value="YES">YES</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
              <MenuItem value="NOT GIVEN">NOT GIVEN</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="body2">{q.text}</Typography>
        </Box>
      ))}

      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3 }}
      >
        Questions 32 - 36
      </Typography>
      <Typography>
        Complete the summary using the list of words, <b>A - H</b>, below.
      </Typography>

      <Typography sx={{ ml: 2, mb: 1 }}>
        In boxes 27-31, pick the correct answer
      </Typography>

      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h6" sx={{ ml: 6, mb: 1, mt: 1 }}>
          Examples of SRBs
        </Typography>
        <Typography component="div" sx={{ lineHeight: 2.8 }}>
          Renew has made a successful business out of designing
          <FormControl
            size="small"
            sx={{ mx: 1, minWidth: "5em" }}
            ref={questionRefs.current[5]}
          >
            <InputLabel>32</InputLabel>
            <Select
              value={answers[31] || ""}
              onChange={(e) => handleInputChange(31, e.target.value)}
              label="32"
            >
              {summaryOptions.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          . On the other hand, Indulge wishes to promote
          <FormControl
            size="small"
            sx={{ mx: 1, minWidth: "5em" }}
            ref={questionRefs.current[6]}
          >
            <InputLabel>33</InputLabel>
            <Select
              value={answers[32] || ""}
              onChange={(e) => handleInputChange(32, e.target.value)}
              label="33"
            >
              {summaryOptions.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          and is expanding to new sites. Large corporations cannot always make
          quick changes but many make provisions for
          <FormControl
            size="small"
            sx={{ mx: 1, minWidth: "5em" }}
            ref={questionRefs.current[7]}
          >
            <InputLabel>34</InputLabel>
            <Select
              value={answers[33] || ""}
              onChange={(e) => handleInputChange(33, e.target.value)}
              label="34"
            >
              {summaryOptions.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          , such as the Green Scheme. On a smaller scale, Johann Jensen is
          experimenting with types of
          <FormControl
            size="small"
            sx={{ mx: 1, minWidth: "5em" }}
            ref={questionRefs.current[8]}
          >
            <InputLabel>35</InputLabel>
            <Select
              value={answers[34] || ""}
              onChange={(e) => handleInputChange(34, e.target.value)}
              label="35"
            >
              {summaryOptions.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          and is planning other ventures. In contrast, an example of a
          well-established business is Greener Good, which provides
          <FormControl
            size="small"
            sx={{ mx: 1, minWidth: "5em" }}
            ref={questionRefs.current[9]}
          >
            <InputLabel>36</InputLabel>
            <Select
              value={answers[35] || ""}
              onChange={(e) => handleInputChange(35, e.target.value)}
              label="36"
            >
              {summaryOptions.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          to a growing market.
        </Typography>
      </Box>

      <Paper sx={{ p: 2, my: 2, bgcolor: "#f5f5f5" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem" }}>
          <Typography>A) recycling</Typography>
          <Typography>B) wellbeing</Typography>
          <Typography>C) packaging</Typography>
          <Typography>D) volunteering</Typography>
          <Typography>E) nutrition</Typography>
          <Typography>F) investment</Typography>
          <Typography>G) food</Typography>
          <Typography>H) clothing</Typography>
        </Box>
      </Paper>

      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3 }}
      >
        Questions 37 - 40
      </Typography>
      <Typography>
        Choose the correct letter <b>A, B, C or D</b>.
      </Typography>

      {radioQuestionsData.map((item, index) => (
        <Accordion
          key={item.qNum}
          ref={questionRefs.current[index + 10]}
          sx={{ bgcolor: "grey.100", my: 1 }}
          expanded={expandedAccordion === `panel${item.qNum}`}
          onChange={(e, isExpanded) =>
            setExpandedAccordion(isExpanded ? `panel${item.qNum}` : false)
          }
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <b>{item.qNum}</b> {item.questionText}
            </Typography>
          </AccordionSummary>
          <RadioGroup
            sx={{ pl: "2em", py: 1 }}
            value={answers[item.qNum - 1] || ""}
            onChange={(e) => handleInputChange(item.qNum - 1, e.target.value)}
          >
            {item.options.map((opt) => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio size="small" />}
                label={`${opt.value}) ${opt.label}`}
              />
            ))}
          </RadioGroup>
        </Accordion>
      ))}
    </Box>
  );

  return (
    <TwoColumnLayout leftContent={<SRBText />} rightContent={rightContent} />
  );
};
export default Part3;
