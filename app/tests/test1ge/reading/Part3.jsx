import React, { useRef, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import CalisthenicsText from "./text/CalisthenicsText";

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  const paragraphSelectPossibleAnswers = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
  ];
  const questionRefs = useRef(Array(12).fill(null));

  const paragraphMatchingQuestions = [
    "the origin of the word ‘calisthenics’",
    "the last popular supporter of calisthenics",
    "the first use of calisthenics as a training method",
    "a multidisciplinary approach to all-round health and strength",
    "reasons for the survival of calisthenics throughout the ages",
    "the use of a medical substance to increase muscle mass and strength",
    "a reference to travelling showmen who displayed their strength for audiences",
  ];

  useEffect(() => {
    if (currentQuestion >= 29 && currentQuestion <= 40) {
      const refArrayIndex = currentQuestion - 29;
      const questionElement = questionRefs.current[refArrayIndex];
      if (questionElement) {
        questionElement.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          const input = questionElement.querySelector('input, [role="button"]');
          if (input) {
            input.focus();
            if (input.tagName === "INPUT") input.select();
          }
        }, 200);
      }
    }
  }, [currentQuestion]);

  const handleInputChange = (answerArrayIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[answerArrayIndex] = value;
    setAnswers(newAnswers);
  };

  const rightContent = (
    <Box>
      <Typography sx={{ fontSize: "1.1em", mb: 1 }}>
        <b>Part 3</b>
      </Typography>
      <Typography sx={{ mb: 1 }}>
        You should spend about 20 minutes on <b>Questions 29-40</b>.
      </Typography>

      <Typography variant="h6" sx={{ mt: 2, fontSize: "1rem" }}>
        <b>Questions 29 - 35</b>
      </Typography>
      <Typography sx={{ mb: 1 }}>
        The text has eight paragraphs, <b>A-H</b>. Which paragraph contains the
        following information?
      </Typography>

      {paragraphMatchingQuestions.map((text, index) => (
        <Box
          key={index}
          ref={(el) => (questionRefs.current[index] = el)}
          sx={{ display: "flex", alignItems: "center", my: 1.5 }}
        >
          <FormControl sx={{ mr: 2, minWidth: "120px" }} size="small">
            <InputLabel>{29 + index}</InputLabel>
            <Select
              value={answers[28 + index] || ""}
              onChange={(e) => handleInputChange(28 + index, e.target.value)}
              label={`${29 + index}`}
            >
              {paragraphSelectPossibleAnswers.map((answer) => (
                <MenuItem key={answer} value={answer}>
                  {answer}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="body2">{text}</Typography>
        </Box>
      ))}

      <Typography variant="h6" sx={{ mt: 3, fontSize: "1rem" }}>
        <b>Questions 36 - 40</b>
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Complete the summary below. Choose <b>NO MORE THAN TWO WORDS</b> from
        the text for each answer.
      </Typography>

      <Box sx={{ lineHeight: 3, fontSize: "20px" }}>
        During the sixties and seventies, attaining huge muscles became more
        important than
        <TextField
          ref={(el) => (questionRefs.current[7] = el)}
          label="36"
          variant="standard"
          sx={{ mx: 1, width: "10em" }}
          value={answers[35] || ""}
          onChange={(e) => handleInputChange(35, e.target.value)}
        />
        or having an attractive-looking body. The first people to take up this
        new sport of body building had a background in calisthenics but the most
        famous practitioners became known as
        <TextField
          ref={(el) => (questionRefs.current[8] = el)}
          label="37"
          variant="standard"
          sx={{ mx: 1, width: "10em" }}
          value={answers[36] || ""}
          onChange={(e) => handleInputChange(36, e.target.value)}
        />
        on account of the impressive size of their muscles. Drugs and mechanical
        devices were used to develop individual muscles to a monstrous size.
        Calisthenics then became the domain of ‘weaker’ people: females,
        children and those recovering from
        <TextField
          ref={(el) => (questionRefs.current[9] = el)}
          label="38"
          variant="standard"
          sx={{ mx: 1, width: "10em" }}
          value={answers[37] || ""}
          onChange={(e) => handleInputChange(37, e.target.value)}
        />
        . Much of the advanced knowledge about calisthenics was lost and the
        method was subsequently downgraded to the status of a simple,
        userfriendly activity. Once a person became skilled at this, he would
        progress to
        <TextField
          ref={(el) => (questionRefs.current[10] = el)}
          label="39"
          variant="standard"
          sx={{ mx: 1, width: "7em" }}
          value={answers[38] || ""}
          onChange={(e) => handleInputChange(38, e.target.value)}
        />
        . Currently a revival of calisthenics is under way as extreme muscle
        building can harm the body leaving it sore, out of balance, and in poor
        <TextField
          ref={(el) => (questionRefs.current[11] = el)}
          label="40"
          variant="standard"
          sx={{ mx: 1, width: "6em" }}
          value={answers[39] || ""}
          onChange={(e) => handleInputChange(39, e.target.value)}
        />
        .
      </Box>
    </Box>
  );

  return (
    <TwoColumnLayout
      leftContent={<CalisthenicsText />}
      rightContent={rightContent}
    />
  );
};

export default Part3;
