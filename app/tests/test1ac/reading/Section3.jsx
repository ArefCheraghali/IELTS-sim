import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import WritingText from "./text/WritingText";

const image3 = "/images/test1/readingAc1-passage3-3.jpg";

const Section3 = ({ answers, setAnswers }) => {
  const possibleAnswers = ["A", "B", "C", "D", "E"];

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
        <WritingText />
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
        <Typography sx={{ ml: 3, fontSize: "1.1em", mb: 1 }}>
          <b>READING PASSAGE 3</b>
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 27-40</b>, which are
          based on Reading Passage 3.
        </Typography>
        <Typography sx={{ ml: 1, mb: 1, mt: 2 }}>Questions 27 - 30</Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Choose the correct letter, <b>A, B, C</b> or <b>D</b>.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "60rem",
            alignItems: "flex-start",
            alignContent: "flex-start",
          }}
        >
          <FormControl>
            <Accordion sx={{ minWidth: "45.5em", bgcolor: "lightgray" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>27</b> The researchers at
                  the symposium regarded the story of the King of Uruk as
                  ridiculous because
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[26] || ""}
                onChange={(e) => handleInputChange(26, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) writing probably developed independently of speech."
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) clay tablets had not been invented at that time."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) the distant ruler would have spoken another language."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) evidence of writing has been discovered from an earlier period."
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion sx={{ minWidth: "45.5em", bgcolor: "lightgray" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>28</b> According to the
                  writer, the story of the King of Uruk
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[27] || ""}
                onChange={(e) => handleInputChange(27, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) is a probable explanation of the origins of writing."
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) proves that early writing had a different function to writing today."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) provides an example of symbolic writing."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) shows some awareness amongst Sumerians of the purpose of writing."
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion sx={{ minWidth: "45.5em", bgcolor: "lightgray" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>29</b> There was
                  disagreement among the researchers at the symposium about
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[28] || ""}
                onChange={(e) => handleInputChange(28, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) the area where writing began."
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) the nature of early writing materials."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) the writing began."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) the meaning of certain abstract images."
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion sx={{ minWidth: "45.5em", bgcolor: "lightgray" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>30</b> The opponents of the
                  theory that writing developed from tokens believe that it
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[29] || ""}
                onChange={(e) => handleInputChange(29, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) grew out of accountancy."
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) evolved from pictures."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) was initially intended as decoration."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) was unlikely to have been connected with commerce."
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
        </Box>
        <br />
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 31 - 36</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Look at the following statements and the list of people below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Match each statement with the correct person, <b>A-E</b>.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Pick the correct letter in boxes 31-36.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>NB</b> You may use any letter more
          than once.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>31</b> There is no proof that early
          writing is connected to decorated household objects.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>32</b> As writing developed, it came
          to represent speech.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>33</b> Sumerian writing developed
          into means of political control.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>34</b> Early writing did not
          represent the grammatical features of speech.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>35</b> There is no convincing proof
          that tokens and signs are connected.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          <b style={{ marginRight: "2em" }}>36</b> The uses of cuneiform writing
          were narrow at first, and later widened.
        </Typography>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <img
            src={image3}
            alt="Reading Passage Part 1"
            style={{ width: "40%" }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <FormControl sx={{ mt: 2, margin: "2em" }} key={index}>
              <InputLabel>{`${31 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[30 + index] || ""}
                onChange={(e) => handleInputChange(30 + index, e.target.value)}
                label={`${31 + index}`}
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
        <br />
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 37 - 40</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Complete the summary using the list of words, <b>A-N</b>, below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Write the correct letter <b>A-N</b> in boxes 37-40.
        </Typography>
        <Typography sx={{ fontSize: "1.1em", ml: 30, mt: 1 }}>
          <b>The earliest form of writing</b>
        </Typography>
        <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
          Most archeological evidence shows that the people of
          <TextField
            sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
            label="37"
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(36, e.target.value)}
            value={answers[36]}
          />
          invented writing in
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            around 3,300 BC. Their script was written on
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="38"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(37, e.target.value)}
              value={answers[37]}
            />
            and was called
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="39"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(38, e.target.value)}
              value={answers[38]}
            />
            . Their script originally showed images related to political power
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            and business, and later developed to become more
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="40"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(39, e.target.value)}
              value={answers[39]}
            />
            .
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Section3;
