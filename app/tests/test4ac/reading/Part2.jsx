import React from "react";
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

import HumanLaughterText from "./text/HumanLaughterText";
import DragDrop from "../../../components/DragDrop";

const initialQuestions = [
  {
    id: "18",
    text: "19. Research has confirmed personal experience by identifying the wide range of subjects and situations that people find funny. ",
    answerId: null,
  },
  {
    id: "19",
    text: "20. Ideas about what is amusing have changed considerably over time. ",
    answerId: null,
  },
  {
    id: "20",
    text: "21. To intentionally make other people laugh requires an unusual combination of skills and characteristics.",
    answerId: null,
  },
  {
    id: "21",
    text: "22. The reasons why we laugh are sometimes misunderstood by ordinary people.",
    answerId: null,
  },
];

const initialAnswers = [
  { id: "A", text: "A) Dr Peter Shrimpton" },
  { id: "B", text: "B) Jocelyn Barnes" },
  { id: "C", text: "C) Heinrich Ahrends" },
  { id: "D", text: "D) David Mackenzie" },
  { id: "E", text: "E) Jake Gottlieb" },
];

const Part2 = ({ answers, setAnswers, currentQuestion }) => {
  const possibleAnswers = ["A", "B", "C", "D", "E"];
  const questionRefs = React.useRef(Array(13).fill(null));

  React.useEffect(() => {
    if (currentQuestion >= 14 && currentQuestion <= 26) {
      const index = currentQuestion - 14;
      questionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        <HumanLaughterText />
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
        <Typography sx={{ ml: 1, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 14-26</b>, which are
          based on Reading Passage 2.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 14 - 18</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Reading Passage 2 has five paragraphs, <b>A-E</b>.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Which paragraph contains the following information?
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Pick the correct letter in boxes 14-18.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b>NB </b>You may use any letter more than once.
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
          <ListItem ref={(el) => (questionRefs.current[0] = el)} sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>
              <b>14</b>
            </Typography>
            <Typography sx={{ ml: 2 }}>
              the claim that it is very hard for people to pretend to laugh
            </Typography>
          </ListItem>
          <ListItem ref={(el) => (questionRefs.current[1] = el)} sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>
              <b>15</b>
            </Typography>
            <Typography sx={{ ml: 2, mb: 1 }}>
              a reference to research showing that people do not know how often
              they laugh
            </Typography>
          </ListItem>
          <ListItem ref={(el) => (questionRefs.current[2] = el)} sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>
              <b>16</b>
            </Typography>
            <Typography sx={{ ml: 2, mb: 1 }}>
              the reason why people can sometimes stop themselves laughing
            </Typography>
          </ListItem>
          <ListItem ref={(el) => (questionRefs.current[3] = el)} sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>
              <b>17</b>
            </Typography>
            <Typography sx={{ ml: 2, mb: 1 }}>
              an outline of the health benefits experienced by people when
              laughing
            </Typography>
          </ListItem>
          <ListItem ref={(el) => (questionRefs.current[4] = el)} sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem" }}>
              <b>18</b>
            </Typography>
            <Typography sx={{ ml: 2, mb: 1 }}>
              a reference to a medical condition that stops some people making a
              noise when laughing
            </Typography>
          </ListItem>
        </List>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <FormControl sx={{ mt: 2, margin: "2em" }} key={index}>
              <InputLabel>{`${14 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[13 + index] || ""}
                onChange={(e) => handleInputChange(13 + index, e.target.value)}
                label={`${14 + index}`}
              >
                {possibleAnswers.map((answer) => (
                  <MenuItem key={answer} value={answer}>
                    {answer}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </Box>
        <Typography sx={{ ml: 2, mb: 1, mt: 5 }}>Questions 19 - 22</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Look at the statements (Questions 19-22) and the list of people below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Match each statement with the correct person, A-E.
        </Typography>
        <DragDrop
          initialQuestions={initialQuestions}
          initialAnswers={initialAnswers}
          setAnswers={setAnswers}
          answers={answers}
          title=""
          infoTitle="List of People"
          questionRefs={questionRefs}
          startIndex={5}
        />
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 23 - 26</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Complete the sentences below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose <b>ONE WORD ONLY</b> from the text for each answer.
        </Typography>
        <Typography sx={{ ml: 2, mb: 2 }} gutterBottom>
          Write your answers in boxes 23-26.
        </Typography>
        <Box sx={{ textAlign: "left", fontSize: "0.9rem" }}>
          <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
            <b>23 - </b> The French neurologist Guillaume Duchenne showed that
            if a smile is
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            fake, the skin around a person’s
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="23"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(22, e.target.value)}
              value={answers[22]}
              ref={(el) => (questionRefs.current[9] = el)}
            />
            does not change shape.
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            <b>24 - </b> A
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="24"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(23, e.target.value)}
              value={answers[23]}
              ref={(el) => (questionRefs.current[10] = el)}
            />
            that was produced in ancient Rome contains early examples of
            attempts to be funny.
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            <b>25 - </b>In January 1962, an outbreak of mass laughter caused
            problems
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            in a
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="25"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(24, e.target.value)}
              value={answers[24]}
              ref={(el) => (questionRefs.current[11] = el)}
            />
            in Tanzania.
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            <b>26 - </b>Neurologist Nikki Sokolov is investigating why
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="26"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(25, e.target.value)}
              value={answers[25]}
              ref={(el) => (questionRefs.current[12] = el)}
            />
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
            is possible even when a person finds something funny.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Part2;
