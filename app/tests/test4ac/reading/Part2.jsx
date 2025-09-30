"use client";
import React, { useRef, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import IconText from "./text/IconText";

const headingsData = [
  { number: 14, paragraph: "A" },
  { number: 15, paragraph: "B" },
  { number: 16, paragraph: "C" },
  { number: 17, paragraph: "D" },
  { number: 18, paragraph: "E" },
  { number: 19, paragraph: "F" },
];

const yesNoQuestionsData = [
  {
    number: 20,
    text: "Davis' trumpet teacher wanted him to play with vibrato.",
  },
  {
    number: 21,
    text: "According to Davis, studying at Julliard helped him to improve his musical abilities.",
  },
  {
    number: 22,
    text: "Playing in jazz clubs in New York was the best way to become famous.",
  },
  {
    number: 23,
    text: "The Birth of Cool featured music that was faster and louder than most jazz at the time.",
  },
  {
    number: 24,
    text: "Davis' personal troubles had a negative effect on his trumpet playing.",
  },
  {
    number: 25,
    text: "Davis felt that his contribution to cool jazz had not been acknowledged.",
  },
  {
    number: 26,
    text: "Davis was a traditionalist who wanted to keep the jazz sound pure.",
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
    if (currentQuestion >= 14 && currentQuestion <= 26) {
      const index = currentQuestion - 14;
      const element = questionRefs.current[index]?.current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
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
        READING PASSAGE 2
      </Typography>
      <Typography sx={{ mb: 2 }}>
        You should spend about 20 minutes on <b>Questions 14-26</b>.
      </Typography>

      <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Questions 14 - 19
      </Typography>
      <Typography>
        Reading Passage 2 has six paragraphs, <b>A-F</b>.
      </Typography>
      <Typography>
        Choose the correct heading for paragraphs A-F from the list of headings
        below.
      </Typography>

      {headingsData.map((item, index) => (
        <Box
          key={item.number}
          ref={questionRefs.current[index]}
          sx={{ display: "flex", alignItems: "center", my: 1.5 }}
        >
          <Typography sx={{ mr: 2 }}>
            <b>{item.number}</b> Paragraph {item.paragraph}
          </Typography>
          <FormControl size="small">
            <Select
              value={answers[item.number - 1] || ""}
              onChange={(e) =>
                handleInputChange(item.number - 1, e.target.value)
              }
              sx={{ minWidth: "5em" }}
            >
              {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"].map(
                (opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Box>
      ))}

      <Box
        sx={{
          border: "1px solid #ccc",
          p: 2,
          my: 2,
          borderRadius: 1,
          bgcolor: "#f5f5f5",
        }}
      >
        <Typography sx={{ mb: 1 }}>
          <b>List of Headings</b>
        </Typography>
        <Typography>i. A legacy is established</Typography>
        <Typography>ii. Formal education unhelpful</Typography>
        <Typography>iii. An education in two parts</Typography>
        <Typography>iv. Branching out in new directions</Typography>
        <Typography>v. Childhood and family life</Typography>
        <Typography>vi. Change necessary to stay creative</Typography>
        <Typography>
          vii. Conflicted opinions over Davis’ earlier work
        </Typography>
        <Typography>viii. Davis’ unique style of trumpet playing</Typography>
        <Typography>ix. Personal and professional struggles</Typography>
      </Box>

      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", fontWeight: "bold", mt: 3 }}
      >
        Questions 20 - 26
      </Typography>
      <Typography>
        Do the following statements agree with the views of the writer in
        Reading Passage 2?
      </Typography>
      <List dense sx={{ pl: 2, mb: 2 }}>
        <ListItem>
          <b>YES-</b> if the statement agrees with the views of the writer
        </ListItem>
        <ListItem>
          <b>NO-</b> if the statement contradicts the views of the writer
        </ListItem>
        <ListItem>
          <b>NOT GIVEN-</b> if it is impossible to say what the writer thinks
          about this
        </ListItem>
      </List>

      {yesNoQuestionsData.map((q, index) => (
        <Box
          key={q.number}
          ref={questionRefs.current[index + 6]}
          sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
        >
          <FormControl sx={{ mr: 2, minWidth: "140px" }} size="small">
            <InputLabel>{q.number}</InputLabel>
            <Select
              value={answers[q.number - 1] || ""}
              onChange={(e) => handleInputChange(q.number - 1, e.target.value)}
              label={`${q.number}`}
            >
              <MenuItem value="YES">YES</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
              <MenuItem value="NOT GIVEN">NOT GIVEN</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="body2">{q.text}</Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <TwoColumnLayout leftContent={<IconText />} rightContent={rightContent} />
  );
};

export default Part2;
