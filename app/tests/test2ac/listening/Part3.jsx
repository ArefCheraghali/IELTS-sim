import React from "react";
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
  const possibleAnswers = [
    "A) size",
    "B) escape",
    "C) age",
    "D) water",
    "E) cereal",
    "F) calculations",
    "G) changes",
    "H) colour",
  ];

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
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
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
          Part 3
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 21-30
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "60rem",
          mt: 3,
          mb: 3,
        }}
      >
        <Typography>Questions 21-25</Typography>
        <Typography>
          Choose the correct letter, <b>A</b>,<b>B</b> or <b>C</b>.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "60rem",
            alignItems: "flex-start",
            mt: 2,
          }}
        >
          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em" }}>21</b> How does Clare feel about
              the students in her Year 12 science class?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[20] || ""}
              onChange={(e) => handleInputChange(20, e.target.value)}
              autoFocus={currentQuestion === 21}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) worried that they are not making progress"
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) challenged by their poor behaviour in class"
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) frustrated at their lack of interest in the subject"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em" }}>22</b> How does Jake react to
              Clare's suggestion about an experiment based on children's diet?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[21] || ""}
              onChange={(e) => handleInputChange(21, e.target.value)}
              autoFocus={currentQuestion === 22}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) He is concerned that the results might not be meaningful."
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) He feels some of the data might be difficult to obtain."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) He suspects that the conclusions might be upsetting."
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em" }}>23</b> What problem do they
              agree may be involved in an experiment involving animals?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[22] || ""}
              onChange={(e) => handleInputChange(22, e.target.value)}
              autoFocus={currentQuestion === 23}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) Any results may not apply to humans."
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) It may be complicated to get permission."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) Students may not be happy about animal experiments."
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em", marginLeft: "-4em" }}>24</b> What
              question do they decide the experiment should address?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[23] || ""}
              onChange={(e) => handleInputChange(23, e.target.value)}
              autoFocus={currentQuestion === 24}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) Are mice capable of controlling their food intake?"
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) Does an increase in sugar lead to health problems?"
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) How much do supplements of different kinds affect health?"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <Typography>
              <b style={{ marginRight: "2em" }}>25</b> Clare might also consider
              doing another experiment involving?
            </Typography>
            <RadioGroup
              sx={{ ml: "5em" }}
              value={answers[24] || ""}
              onChange={(e) => handleInputChange(24, e.target.value)}
              autoFocus={currentQuestion === 25}
            >
              <FormControlLabel
                value={"A"}
                control={<Radio />}
                label="A) other types of food supplement."
              ></FormControlLabel>
              <FormControlLabel
                value={"B"}
                control={<Radio />}
                label="B) different generic strains of mice."
              />
              <FormControlLabel
                value={"C"}
                control={<Radio />}
                label="C) varying amounts of exercise."
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Typography>Questions 26-30</Typography>
      <Typography>Complete the flowchart below.</Typography>
      <Typography>
        Choose <b>Five</b> answers from the box and write the correct letter,{" "}
        <b>A-H</b>, next to Questions 26-30.
      </Typography>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <List
          sx={{
            listStyleType: "upper-roman",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
            pl: "3rem",
            width: "100%",
          }}
        >
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Paper
              sx={{
                pl: 5,
                pr: 5,
                display: "flex",
                flexDirection: "row",
                pt: 3,
              }}
            >
              <Typography>Choose mice which are all the same</Typography>
              <FormControl sx={{ margin: "0.5em", ml: 1, mt: -2 }} key={26}>
                <InputLabel>26</InputLabel>
                <Select
                  sx={{ width: "10em" }}
                  value={answers[25] || ""}
                  onChange={(e) => handleInputChange(25, e.target.value)}
                  label={26}
                >
                  {possibleAnswers.map((answer) => (
                    <MenuItem key={answer} value={answer}>
                      {answer}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              .
            </Paper>
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Paper
              sx={{
                pl: 5,
                pr: 5,
                display: "flex",
                flexDirection: "row",
                pt: 3,
              }}
            >
              <Typography>
                Divide the mice into two groups, each with a different
              </Typography>
              <FormControl sx={{ margin: "0.5em", ml: 1, mt: -2 }} key={27}>
                <InputLabel>27</InputLabel>
                <Select
                  sx={{ width: "10em" }}
                  value={answers[26] || ""}
                  onChange={(e) => handleInputChange(26, e.target.value)}
                  label={27}
                >
                  {possibleAnswers.map((answer) => (
                    <MenuItem key={answer} value={answer}>
                      {answer}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              .
            </Paper>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Paper
              sx={{
                pl: 5,
                pr: 5,
                pt: 3,
              }}
            >
              <Typography sx={{ mb: 2 }}>
                Put each group in a separate cage.
              </Typography>
              <Typography>Feed group A commercial mouse food.</Typography>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
                <Typography>
                  Feed group B the same, but also sugar contained in{" "}
                </Typography>
                <FormControl sx={{ margin: "0.5em", ml: 1, mt: -2 }} key={28}>
                  <InputLabel>28</InputLabel>
                  <Select
                    sx={{ width: "10em" }}
                    value={answers[27] || ""}
                    onChange={(e) => handleInputChange(27, e.target.value)}
                    label={28}
                  >
                    {possibleAnswers.map((answer) => (
                      <MenuItem key={answer} value={answer}>
                        {answer}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                .
              </Box>
            </Paper>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Paper
              sx={{
                pl: 5,
                pr: 5,
                pt: 3,
              }}
            >
              <Typography>
                Take measurements using an electronic scale.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
                <Typography>
                  Place them in a weighing chamber to prevent
                </Typography>
                <FormControl sx={{ margin: "0.5em", ml: 1, mt: -2 }} key={29}>
                  <InputLabel>29</InputLabel>
                  <Select
                    sx={{ width: "10em" }}
                    value={answers[28] || ""}
                    onChange={(e) => handleInputChange(28, e.target.value)}
                    label={29}
                  >
                    {possibleAnswers.map((answer) => (
                      <MenuItem key={answer} value={answer}>
                        {answer}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                .
              </Box>
            </Paper>
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Paper
              sx={{
                pl: 5,
                pr: 5,
                display: "flex",
                flexDirection: "row",
                pt: 3,
              }}
            >
              <Typography>Do all necessary </Typography>
              <FormControl sx={{ margin: "0.5em", ml: 2, mt: -2 }} key={30}>
                <InputLabel>30</InputLabel>
                <Select
                  sx={{ width: "10em" }}
                  value={answers[29] || ""}
                  onChange={(e) => handleInputChange(29, e.target.value)}
                  label={30}
                >
                  {possibleAnswers.map((answer) => (
                    <MenuItem key={answer} value={answer}>
                      {answer}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              .
            </Paper>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default Part3;
