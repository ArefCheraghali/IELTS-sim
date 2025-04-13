import { useRef, useEffect } from "react";
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
  // Create refs for each question element
  const questionRefs = useRef([]);

  useEffect(() => {
    // Focus on the element corresponding to the current question
    if (currentQuestion >= 31 && currentQuestion <= 40) {
      const index = currentQuestion - 31;
      const element = questionRefs.current[index];
      if (element) {
        // For radio groups, focus on the first radio button if none selected
        if (element.querySelector) {
          const radioInputs = element.querySelectorAll('input[type="radio"]');
          const textInput = element.querySelector('input[type="text"]');

          if (radioInputs.length > 0) {
            const selectedRadio = element.querySelector(
              'input[type="radio"]:checked'
            );
            if (selectedRadio) {
              selectedRadio.focus();
            } else {
              radioInputs[0].focus();
            }
          } else if (textInput) {
            textInput.focus();
          }
        }
        // Scroll the question into view
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [currentQuestion]);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    console.log(newAnswers);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "60rem",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Part 4
          </Typography>
          <Typography variant="h6" gutterBottom>
            Questions 31-40
          </Typography>
        </Box>
        <Typography>Questions 31-34</Typography>
        <Typography>Complete the summary below.</Typography>
        <Typography>
          Write <b>NO MORE THAN TWO WORDS</b> for each answer.
        </Typography>
        <Box
          sx={{ width: "100%", display: "flex", flexDirection: "row", mb: 4 }}
        >
          <Box
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "50rem",
              mt: 2,
              ml: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignItems: "flex-start",
              padding: "1em",
              textAlign: "left",
            }}
          >
            <Typography>
              <b>Origins of the Caveman Diet</b>
            </Typography>
            <Typography sx={{ mt: 3 }}>
              There are many popular fad diets nowadays. They all promise good
              health if you stick to the
            </Typography>
            <Box ref={(el) => (questionRefs.current[0] = el)}>
              <Typography sx={{ mt: 3 }}>
                <TextField
                  sx={{ mt: -2.5, mr: 1, width: "10em" }}
                  label="31"
                  spellCheck={false}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(30, e.target.value)}
                  value={answers[30]}
                />
                . The Caveman diet is a popular example. This diet includes
                foods such as lean
              </Typography>
            </Box>
            <Box ref={(el) => (questionRefs.current[1] = el)}>
              <Typography sx={{ mt: 3 }}>
                meat and fish that our forebears ate before we developed
                <TextField
                  sx={{ mt: -2.5, mr: 1, ml: 1, width: "10em" }}
                  label="32"
                  spellCheck={false}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(31, e.target.value)}
                  value={answers[31]}
                />
                . We need to find
              </Typography>
            </Box>
            <Typography sx={{ mt: 3 }}>
              out what our ancestors did eat, so researchers are studying some
              existing hunter-gatherer tribes.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              These tribes typically like to eat meat but they can’t always get
              it, even though they are skilled with
            </Typography>
            <Box ref={(el) => (questionRefs.current[2] = el)}>
              <Typography sx={{ mt: 3 }}>
                their weapons, e.g.
                <TextField
                  sx={{ mt: -2.5, mr: 1, ml: 1, width: "10em" }}
                  label="33"
                  spellCheck={false}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(32, e.target.value)}
                  value={answers[32]}
                />
                . So, instead, they eat foods that their wives gather.
              </Typography>
            </Box>
            <Box ref={(el) => (questionRefs.current[3] = el)}>
              <Typography sx={{ mt: 3 }}>
                They get only about a
                <TextField
                  sx={{ mt: -2.5, mr: 1, ml: 1, width: "10em" }}
                  label="34"
                  spellCheck={false}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(33, e.target.value)}
                  value={answers[33]}
                />
                of their energy from meat.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography>Questions 35 and 36</Typography>
        <Typography>Choose the correct letter, A, B or C.</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "60rem",
            alignItems: "flex-start",
            textAlign: "left",
            mt: 2,
            mb: 4,
          }}
        >
          <Box ref={(el) => (questionRefs.current[4] = el)}>
            <FormControl sx={{ mt: 1 }}>
              <Typography>
                <b style={{ marginRight: "2em" }}>35</b> Research evidence
                suggests that ...
              </Typography>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[34] || ""}
                onChange={(e) => handleInputChange(34, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) the tribesmen's traditional diet is unhealthy"
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) our bodies can digest only certain foods"
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) we can adapt to a range of diets"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box ref={(el) => (questionRefs.current[5] = el)}>
            <FormControl sx={{ mt: 2 }}>
              <Typography>
                <b style={{ marginRight: "2em" }}>36</b> Thai people have
                difficulty digesting milk because ...
              </Typography>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[35] || ""}
                onChange={(e) => handleInputChange(35, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) they have too much lactase in their bodies"
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) in the past they didn't farm cows"
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) their saliva lacks certain enzymes"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <>
          <Typography>Questions 37-40</Typography>
          <Typography>Complete the notes below.</Typography>
          <Typography>
            Write <b>NO MORE THAN TWO WORDS</b> for each answer.
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "40rem",
                mt: 2,
                ml: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "flex-start",
                borderStyle: "solid",
                padding: "1em",
                textAlign: "left",
              }}
            >
              <List sx={{ listStyleType: "disc", ml: "3em" }}>
                <Typography>Variation in global diets:</Typography>
                <Box ref={(el) => (questionRefs.current[6] = el)}>
                  <ListItem sx={{ display: "list-item", mt: 1 }}>
                    <Typography>
                      Inuit – most calories from
                      <TextField
                        sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                        label="37"
                        spellCheck={false}
                        variant="standard"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(36, e.target.value)}
                        value={answers[36]}
                      />{" "}
                      foods, e.g. seal meat
                    </Typography>
                  </ListItem>
                </Box>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography>
                    Jains – vegetarian, but milk is permitted
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
                  <Typography>Others – fish, insects</Typography>
                </ListItem>
                <Typography>Implications for the caveman diet:</Typography>
                <ListItem sx={{ display: "list-item", mt: 1 }}>
                  <Typography>Cavemen did not all eat the same diet</Typography>
                </ListItem>
                <Box ref={(el) => (questionRefs.current[7] = el)}>
                  <ListItem sx={{ display: "list-item", mb: 1 }}>
                    <Typography>
                      Diets come from complicated cultural
                      <TextField
                        sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                        label="38"
                        variant="standard"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(37, e.target.value)}
                        value={answers[37]}
                      />
                    </Typography>
                  </ListItem>
                </Box>
                <Typography>Problems with Caveman diet:</Typography>
                <Box ref={(el) => (questionRefs.current[8] = el)}>
                  <ListItem sx={{ display: "list-item", mt: 1 }}>
                    <Typography>
                      Costs a lot of money for lean meat and
                      <TextField
                        sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                        label="39"
                        variant="standard"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(38, e.target.value)}
                        value={answers[38]}
                      />
                    </Typography>
                  </ListItem>
                </Box>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography>Too much red meat may be unhealthy</Typography>
                </ListItem>
                <Box ref={(el) => (questionRefs.current[9] = el)}>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography>
                      Reliance on meat is bad for the
                      <TextField
                        sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                        label="40"
                        variant="standard"
                        autoComplete="off"
                        onChange={(e) => handleInputChange(39, e.target.value)}
                        value={answers[39]}
                      />
                    </Typography>
                  </ListItem>
                </Box>
              </List>
            </Box>
          </Box>
        </>
      </Box>
    </>
  );
};

export default Part4;
