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

import AmericanDanceText from "./text/AmericanDanceText";

const Part1 = ({ answers, setAnswers, currentQuestion }) => {
  const possibleAnswers = ["TRUE", "FALSE", "NOT GIVEN"];
  const questionRefs = React.useRef(Array(13).fill(null));

  React.useEffect(() => {
    if (currentQuestion >= 1 && currentQuestion <= 13) {
      const index = currentQuestion - 1;
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
        height: "calc(100vh - 120px - 26px )",
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
        <AmericanDanceText />
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
          <b>READING PASSAGE 1</b>
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 1-13</b>, which are
          based on Reading Passage 1.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 1 - 6</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Do the following statements agree with the information given in the
          Reading Passage 1?
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          In boxes 1-6 below, select
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Classify the following characteristics as belonging to
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
            <b style={{ marginRight: "4.8em" }}>TRUE</b> if the statement agrees
            with the information
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "4.5em" }}>FALSE</b> if the statement
            contradicts the information
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <b style={{ marginRight: "2em" }}>NOT GIVEN</b> if there is no
            information on this
          </ListItem>
        </List>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0,
            pl: "3rem",
            width: "90%",
          }}
        >
          <ListItem
            ref={(el) => (questionRefs.current[0] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>1 </Typography>
            Dance historians agree about the development of modern American
            dance.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[1] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>2 </Typography>
            Dancers in the early 1900s tended to copy the styles of earlier
            dancers.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[2] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>3 </Typography>
            Loie Fuller preferred to dance alone on stage.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[3] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>4 </Typography>
            Isadora Duncan wore complicated clothing when dancing.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[4] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>5 </Typography>
            Some dancers criticized Isadora Duncan for her choice of music.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[5] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>6 </Typography>
            Ruth St Denis wished to educate others in her style of dancing.
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl sx={{ ml: 5, margin: "1em" }} key={index}>
              <InputLabel>{`${1 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[index] || ""}
                onChange={(e) => handleInputChange(index, e.target.value)}
                label={`${1 + index}`}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl sx={{ margin: "1em" }} key={index}>
              <InputLabel>{`${4 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[3 + index] || ""}
                onChange={(e) => handleInputChange(3 + index, e.target.value)}
                label={`${4 + index}`}
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
        <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>Questions 7 - 10</Typography>
        <Typography>Complete the notes below.</Typography>
        <Typography>
          Write <b>ONE WORD ONLY</b> from the passage for each answer.
        </Typography>
        <Box
          sx={{
            width: "94%",
            height: "auto",
            maxWidth: "60rem",
            mt: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "flex-start",
            borderStyle: "solid",
            padding: "1em",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" sx={{ marginLeft: "10%" }}>
            Developments in Modern American Dance
          </Typography>
          <List sx={{ listStyleType: "disc", ml: "3em" }}>
            <Typography>
              <b>1920s-1940s</b>
            </Typography>
            <ListItem
              sx={{ display: "list-item", mb: "1em", mt: 3 }}
              ref={(el) => (questionRefs.current[6] = el)}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                breathing and
                <TextField
                  sx={{ ml: 1, mr: 1, mt: -2, width: "10em" }}
                  label="7"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(6, e.target.value)}
                  value={answers[6]}
                />
                .
              </Box>
            </ListItem>
            <ListItem
              sx={{ display: "list-item", mb: "0.5em" }}
              ref={(el) => (questionRefs.current[7] = el)}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                Doris Humphrey wrote an important
                <TextField
                  sx={{ ml: 1, mr: 1, mt: -2, width: "10em" }}
                  label="8"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(7, e.target.value)}
                  value={answers[7]}
                />
              </Box>
              <Box>about her ideas.</Box>
            </ListItem>
            <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 3 }}>
              <Box>
                Dance became a respectable subject to study at university.
              </Box>
            </ListItem>
            <ListItem
              sx={{ display: "list-item", mb: "0.5em" }}
              ref={(el) => (questionRefs.current[8] = el)}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Hanya Holm introduced
                <TextField
                  sx={{ ml: 1, mr: 1, mt: -2, width: "10em" }}
                  label="9"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(8, e.target.value)}
                  value={answers[8]}
                />
                into dance and musicals.
              </Box>
            </ListItem>
            <Typography>
              <b>1950s-1970s</b>
            </Typography>
            <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 3 }}>
              <Box>
                Eric Hawkins and Merce Cunningham reintroduced some ballet
                techniques.
              </Box>
            </ListItem>
            <ListItem
              sx={{ display: "list-item", mb: "0.5em" }}
              ref={(el) => (questionRefs.current[9] = el)}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                An influential
                <TextField
                  sx={{ ml: 1, mr: 1, mt: -2, width: "10em" }}
                  label="10"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(9, e.target.value)}
                  value={answers[9]}
                />
                outlined the workinglife of
              </Box>
              <Box> Paul Taylor.</Box>
            </ListItem>
          </List>
        </Box>
        <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>Questions 11-13</Typography>
        <Typography>Answer the questions below.</Typography>
        <Typography>
          Write <b>ONE WORD ONLY</b> from the passage for each answer.
        </Typography>
        <br />
        <Typography ref={(el) => (questionRefs.current[10] = el)}>
          <b>11 - </b>When Pearl Primus gave up dancing, what did she focus on
          doing?
        </Typography>
        <Typography ref={(el) => (questionRefs.current[11] = el)}>
          <b>12 - </b>What was an important influence for Mark Morris's The Hard
          Nut?
        </Typography>
        <Typography ref={(el) => (questionRefs.current[12] = el)}>
          <b>13 - </b>Dancers working with Ohad Naharin practise without using
          what?
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <FormControl sx={{ margin: "1em" }} key={index}>
              <TextField
                sx={{ width: "10em" }}
                label={`${11 + index}`}
                variant="outlined"
                autoComplete="off"
                onChange={(e) => handleInputChange(10 + index, e.target.value)}
                value={answers[10 + index]}
              />
            </FormControl>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Part1;
