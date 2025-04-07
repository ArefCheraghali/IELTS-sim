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
  Typography,
  Accordion,
  AccordionSummary,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import SRBText from "./text/SRBText";
const image1 = "/images/test3/test3ac reading part2-1.jpg";

const Part3 = ({ answers, setAnswers }) => {
  const possibleAnswers = ["YES", "NO", "NOT GIVEN"];

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
        <SRBText />
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
        <Typography sx={{ ml: 1, mb: 1, mt: 2 }}>Questions 27 - 31</Typography>
        <Typography sx={{ ml: -1, mb: 1 }}>
          Do the following statements agree with the claims of the writer in the
          passage 3?
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>In boxes 27-31, pick</Typography>
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
            <b style={{ marginRight: "2em" }}>NOT GIVEN</b> If it is impossible
            to say what the writer thinks about this
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
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>27 </Typography>
            Many business commentators forget the examples of Muhammad Yunus.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>28 </Typography>
            Dan Rathbourne provides an accurate assessment of Socially
            Responsible Businesses (SRBs).
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>29 </Typography>
            The Quorate Group is a good example of an influential SRB.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>30 </Typography>
            Few other businesses will wish to follow the example of the Concern
            Consultancy.
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>31 </Typography>
            Professor Drew has correctly identified one reason for the emergence
            of SRBs.
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
              <InputLabel>{`${27 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[26 + index] || ""}
                onChange={(e) => handleInputChange(26 + index, e.target.value)}
                label={`${27 + index}`}
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
          {Array.from({ length: 2 }).map((_, index) => (
            <FormControl sx={{ margin: "1em" }} key={index}>
              <InputLabel>{`${30 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[29 + index] || ""}
                onChange={(e) => handleInputChange(29 + index, e.target.value)}
                label={`${30 + index}`}
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

        <Typography sx={{ ml: 1, mb: 1, mt: 2 }}>Questions 32 - 36</Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Complete the summary using the list of words, <b>A - H</b>, below.
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Write the correct letter, <b>A - H</b>, in boxes 32-36.
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h6" sx={{ ml: 6, mb: 0 }}>
            Examples of SRBs
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
            Renew has made a successful business out of designing
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "3em" }}
              label="32"
              variant="outlined"
              autoComplete="off"
              onChange={(e) => handleInputChange(31, e.target.value)}
              value={answers[31]}
            />
            On the
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
            other hand, Indulge wishes to promote
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "3em" }}
              label="33"
              variant="outlined"
              autoComplete="off"
              onChange={(e) => handleInputChange(32, e.target.value)}
              value={answers[32]}
            />
            and is expanding to new sites. Large corporations cannot always make
            quick changes but many make
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            provisions for
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "3em" }}
              label="34"
              variant="outlined"
              autoComplete="off"
              onChange={(e) => handleInputChange(33, e.target.value)}
              value={answers[33]}
            />
            , such as the Green Scheme. One a smaller scale,
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 1 }}>
            Johann Jensen is experimenting with types of
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "3em" }}
              label="35"
              variant="outlined"
              autoComplete="off"
              onChange={(e) => handleInputChange(34, e.target.value)}
              value={answers[34]}
            />
            and is planning other ventures. In contrast, an example of a
            well-established business is Greener
          </Typography>
          <Typography sx={{ ml: 2, mb: 1, mt: 3 }}>
            Good, which provides{" "}
            <TextField
              sx={{ mt: -2, ml: 1, mr: 1, width: "3em" }}
              label="36"
              variant="outlined"
              autoComplete="off"
              onChange={(e) => handleInputChange(35, e.target.value)}
              value={answers[35]}
            />
            to a growing market.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <img
            src={image1}
            alt="Reading Passage Part 2"
            style={{ width: "50%" }}
          />
        </Box>
        <br />
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 37 - 40</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose the correct letter <b>A, B, C or D</b>.
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
            <Accordion sx={{ bgcolor: "#ebebeb" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>37</b> When discussing
                  ‘conscious consumers’ the writer concludes that
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[36] || ""}
                onChange={(e) => handleInputChange(36, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) businesses are slow to respond to consumer demand. "
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) consumers and businesses have different interests. "
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C)  businesses and consumers are influencing each other. "
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D)  consumers should put more pressure on businesses. "
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion sx={{ bgcolor: "#ebebeb" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>38</b> The writer refers to
                  Lucinda Mitchell in order to
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[37] || ""}
                onChange={(e) => handleInputChange(37, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) explain why SRBs lose out to other businesses."
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) exemplify the way governments often support SRBs."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) contrast the approach of different governments to SRBs."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) compare the role of SRBs in different regions."
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion sx={{ bgcolor: "#ebebeb" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>39</b> What does the writer
                  suggest about the goals of SRBs?
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "4.5em" }}
                value={answers[38] || ""}
                onChange={(e) => handleInputChange(38, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) SRBs should have a wider range of goals. "
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B) It is a mistake for an SRB to change goal."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C) Some goals may make an SRB unprofitable."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) An SRB should not have more than one goal."
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
          <br />
          <FormControl>
            <Accordion sx={{ bgcolor: "#ebebeb" }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b style={{ marginRight: "2em" }}>40</b> Which of the
                  following best summerises the writer’s argument in the final
                  paragraph?
                </Typography>
              </AccordionSummary>
              <RadioGroup
                sx={{ ml: "5em" }}
                value={answers[39] || ""}
                onChange={(e) => handleInputChange(39, e.target.value)}
              >
                <FormControlLabel
                  value={"A"}
                  control={<Radio />}
                  label="A) A minority of businesses will inevitably fail."
                ></FormControlLabel>
                <FormControlLabel
                  value={"B"}
                  control={<Radio />}
                  label="B)  SRBs are more successful than other businesses."
                />
                <FormControlLabel
                  value={"C"}
                  control={<Radio />}
                  label="C)  Universities should do more research into SRBs."
                />
                <FormControlLabel
                  value={"D"}
                  control={<Radio />}
                  label="D) The problem faced by SRBs can be overcome."
                />
              </RadioGroup>
            </Accordion>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Part3;
