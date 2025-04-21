import React from "react";
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

import IconText from "./text/IconText";

const possibleAnswersYesNo = ["Yes", "No", "Not Given"];

const milesQuestions = [
  "20. Davis' trumpet teacher wanted him to play with vibrato.",
  "21. According to Davis, studying at Julliard helped him to improve his musical abilities.",
  "22. Playing in jazz clubs in New York was the best way to become famous.",
  "23. The Birth of Cool featured music that was faster and louder than most jazz at the time.",
  "24. Davis' personal troubles had a negative effect on his trumpet playing.",
  "25. Davis felt that his contribution to cool jazz had not been acknowledged.",
  "26. Davis was a traditionalist who wanted to keep the jazz sound pure.",
];

const Part2 = ({ answers, setAnswers, currentQuestion }) => {
  const possibleAnswers = [
    "i",
    "ii",
    "iii",
    "iv",
    "v",
    "vi",
    "vii",
    "viii",
    "ix",
  ];
  const questionRefs = React.useRef(Array(13).fill(null));

  React.useEffect(() => {
    if (currentQuestion >= 14 && currentQuestion <= 26) {
      const index = currentQuestion - 14;
      questionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentQuestion]);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    console.log(newAnswers);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "75vh",
      }}
    >
      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 2,
          borderRight: "1px solid #ccc",
        }}
      >
        <IconText />
      </Box>

      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "flex-start",
          alignItems: "flex-start",
          padding: 2,
        }}
      >
        <Typography sx={{ ml: 5, fontSize: "1.1em", mb: 1 }}>
          <b>READING PASSAGE 2</b>
        </Typography>
        <Typography sx={{ mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 14-26</b>, which are
          based on Reading Passage 2.
        </Typography>
        <Typography sx={{ mb: 1 }}>Questions 14 - 19</Typography>
        <Typography sx={{ mb: 1 }}>
          Reading Passage 2 has six paragraphs, <b>A-F</b>.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Choose the correct heading for paragraphs A-F from the list of
          headings below.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Write the correct number, <b>i-ix</b>, in boxes 14-19.
        </Typography>

        <Box sx={{ border: "1px solid #ccc", p: 2, mb: 2, width: "90%" }}>
          <Typography sx={{ mb: 1 }}>
            <b>List of Headings</b>
          </Typography>
          <Typography>
            i A controversial approach to studying laughter
          </Typography>
          <Typography>
            ii The physical processes involved in laughter
          </Typography>
          <Typography>
            iii Early attempts to study laughter scientifically
          </Typography>
          <Typography>
            iv The relationship between laughter and social status
          </Typography>
          <Typography>
            v Evidence that laughter can spread between people
          </Typography>
          <Typography>vi Claims about the benefits of laughter</Typography>
          <Typography>
            vii Reasons why people in different cultures laugh
          </Typography>
          <Typography>
            viii The connection between laughter and human evolution
          </Typography>
          <Typography>
            ix Different levels of brain activity in laughter
          </Typography>
        </Box>

        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            pl: "3rem",
            width: "90%",
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <ListItem
              key={index}
              ref={(el) => (questionRefs.current[index] = el)}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography sx={{ marginRight: "1rem" }}>
                <b>{14 + index}</b>
              </Typography>
              <Typography sx={{ minWidth: "100px" }}>
                Paragraph {String.fromCharCode(65 + index)}
              </Typography>
              <FormControl>
                <Select
                  sx={{ width: "5em" }}
                  value={answers[13 + index] || ""}
                  onChange={(e) =>
                    handleInputChange(13 + index, e.target.value)
                  }
                  size="small"
                >
                  {possibleAnswers.map((answer) => (
                    <MenuItem key={answer} value={answer}>
                      {answer}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </ListItem>
          ))}
        </List>

        <Typography sx={{ mb: 1, mt: 5 }}>Questions 20 - 26</Typography>
        <Typography sx={{ mb: 1 }}>
          Do the following statements agree with the views of the writer in
          Reading Passage 2?
        </Typography>
        <Typography sx={{ mb: 1 }}>
          In boxes 20-26 on your answer sheet, write
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography>
            <b>Yes</b> if the statement agrees with the views of the writer
          </Typography>
          <Typography>
            <b>No</b> if the statement contradicts the views of the writer
          </Typography>
          <Typography>
            <b>Not Given</b> if it is impossible to say what the writer thinks
            about this
          </Typography>
        </Box>

        <List sx={{ width: "100%" }}>
          {milesQuestions.map((question, index) => (
            <ListItem
              key={index}
              ref={(el) => (questionRefs.current[index + 6] = el)}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <Typography>{question}</Typography>
              <FormControl sx={{ minWidth: 120 }}>
                <Select
                  size="small"
                  value={answers[index + 19] || ""}
                  onChange={(e) =>
                    handleInputChange(index + 19, e.target.value)
                  }
                >
                  {possibleAnswersYesNo.map((answer) => (
                    <MenuItem key={answer} value={answer}>
                      {answer}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Part2;
