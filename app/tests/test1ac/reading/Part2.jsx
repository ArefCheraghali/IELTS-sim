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
import { useHighlight } from "app/contexts/HighlightContext";
import ReadingHighlightMenu from "app/components/ReadingHighlightMenu";

import CrowText from "./text/CrowText";
const image3 = "/images/test1/readingAc1-passage2-3.jpg";

const Section2 = ({ answers, setAnswers, currentQuestion }) => {
  const questionRefs = React.useRef(Array(13).fill(null));

  React.useEffect(() => {
    if (currentQuestion >= 14 && currentQuestion <= 26) {
      const index = currentQuestion - 14;
      const element = questionRefs.current[index];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        // Delay focus/click slightly after scroll
        setTimeout(() => {
          // Questions 14-17 (TextField)
          if (index >= 0 && index < 4) {
            const input = element.querySelector("input");
            if (input) {
              input.focus();
              input.select();
            }
          }
          // Questions 18-23 (Select - TRUE/FALSE/NOT GIVEN)
          else if (index >= 4 && index < 10) {
            const selectButton = element.querySelector("[role='button']"); // Target the button part of the Select
            if (selectButton) {
              selectButton.focus(); // Focus the button
              // selectButton.click(); // Optionally click to open dropdown
            }
          }
          // Questions 24-26 (Select - A/B/C...)
          else if (index >= 10) {
            const selectButton = element.querySelector("[role='button']"); // Target the button part of the Select
            if (selectButton) {
              selectButton.focus(); // Focus the button
              // selectButton.click(); // Optionally click to open dropdown
            }
          }
        }, 150); // Slightly increased timeout for stability
      }
    }
  }, [currentQuestion]);
  const possibleAnswers = ["TRUE", "FALSE", "NOT GIVEN"];
  const possibleAnswers2 = ["A", "B", "C", "D", "E", "F", "G"];
  const { handleContextMenu, textRef } = useHighlight();

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
        ref={textRef}
        onContextMenu={handleContextMenu}
        sx={{
          width: "50%",
          overflowY: "auto",
          padding: 2,
          borderRight: "1px solid #ccc",
        }}
      >
        <CrowText />
        <ReadingHighlightMenu />
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
        <Typography sx={{ ml: 2, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 14-26</b>, which are
          based on Reading Passage 2.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 14 - 17</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>Label the diagrams below.</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Write your answers in boxes 14-17.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "60rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <img
              src={image3}
              alt="Reading Passage Part 2"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              mt: 2,
              mb: 2,
              width: "80%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <Box ref={(el) => (questionRefs.current[0] = el)}>
              <TextField
                sx={{ ml: 1, mr: 1, width: "14em" }}
                label="14"
                autoComplete="off"
                onChange={(e) => handleInputChange(13, e.target.value)}
                value={answers[13]}
              />
            </Box>
            <Box ref={(el) => (questionRefs.current[1] = el)}>
              <TextField
                sx={{ ml: 1, mr: 1, width: "14em" }}
                label="15"
                autoComplete="off"
                onChange={(e) => handleInputChange(14, e.target.value)}
                value={answers[14]}
              />
            </Box>
            <Box ref={(el) => (questionRefs.current[2] = el)}>
              <TextField
                sx={{ ml: 1, mr: 1, width: "14em" }}
                label="16"
                autoComplete="off"
                onChange={(e) => handleInputChange(15, e.target.value)}
                value={answers[15]}
              />
            </Box>
            <Box ref={(el) => (questionRefs.current[3] = el)}>
              <TextField
                sx={{ ml: 1, mr: 1, width: "14em" }}
                label="17"
                autoComplete="off"
                onChange={(e) => handleInputChange(16, e.target.value)}
                value={answers[16]}
              />
            </Box>
          </Box>
        </Box>
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 18 - 23</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Do the following statements agree with the information given in the
          passage 2?
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          In boxes 18-23 on your answer sheet, write
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
          {/* Ref for Q18-23 group moved to FormControl below */}
          <ListItem
            // ref={(el) => (questionRefs.current[4] = el)} // Ref moved
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <b style={{ marginRight: "4.8em" }}>TRUE</b> if the statement agrees
            with the information
          </ListItem>
          {/* Ref for Q18-23 group moved to FormControl below */}
          <ListItem
            // ref={(el) => (questionRefs.current[4] = el)} // Ref moved
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <b style={{ marginRight: "4.5em" }}>FALSE</b> if the statement
            contradicts the information
          </ListItem>
          {/* Ref for Q18-23 group moved to FormControl below */}
          <ListItem
            // ref={(el) => (questionRefs.current[4] = el)} // Ref moved
            sx={{ display: "flex", flexDirection: "row" }}
          >
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
          {/* Ref for Q18-23 group moved to FormControl below */}
          <ListItem
            // ref={(el) => (questionRefs.current[4] = el)} // Ref moved
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>18 </Typography>
            There appears to be a fixed pattern for the padanus probe's
            construction.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[5] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>19 </Typography>
            There is plenty of evidence to indicate how the crows manufacture
            the padanus probe.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[6] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>20 </Typography>
            Crows seem to practise a number of times before making a usable
            padanus probe.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[7] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>21 </Typography>
            The researchers suspect the crows have a mental image of the padanus
            probe before they create it.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[8] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>22 </Typography>
            Research into how the padanus probe is made has helped to explain
            the toolmaking skills of many other bird species.
          </ListItem>
          <ListItem
            ref={(el) => (questionRefs.current[9] = el)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>23 </Typography>
            The researchers believe the ability to make the padanus probe is
            passed down to the crows in their genes.
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
            // Assign ref to FormControl for Q18-20
            <FormControl
              ref={(el) => (questionRefs.current[4 + index] = el)}
              sx={{ ml: 5, margin: "1em" }}
              key={index}
            >
              <InputLabel>{`${18 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[17 + index] || ""}
                onChange={(e) => handleInputChange(17 + index, e.target.value)}
                label={`${18 + index}`}
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
            // Assign ref to FormControl for Q21-23
            <FormControl
              ref={(el) => (questionRefs.current[7 + index] = el)}
              sx={{ margin: "1em" }}
              key={index}
            >
              <InputLabel>{`${21 + index}`}</InputLabel>
              <Select
                sx={{ width: "10em" }}
                value={answers[20 + index] || ""}
                onChange={(e) => handleInputChange(20 + index, e.target.value)}
                label={`${21 + index}`}
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
        <Typography sx={{ ml: 2, mb: 1 }}>Questions 24 - 26</Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Choose <b>THREE</b> letters, A-G.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          Pick the correct letters in boxes 24-26 below.
        </Typography>
        <Typography sx={{ ml: 2, mb: 1 }}>
          According to the information in the passage, which <b>THREE</b> of the
          following features are probably common to both New Caledonian crows
          and human beings?
        </Typography>
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
          {/* Ref for Q18-23 group moved to FormControl below */}
          <ListItem
            // ref={(el) => (questionRefs.current[4] = el)} // Ref moved
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>A </Typography>
            keeping the same mate for life
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>B </Typography>
            having few natural predators
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>C </Typography>
            having a bias to the right when working
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>D </Typography>
            being able to process sequential tasks
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>E </Typography>
            living in extended family groups
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>F </Typography>
            eating a variety of foodstuffs
          </ListItem>
          <ListItem sx={{ display: "flex", flexDirection: "row", mt: -2 }}>
            <Typography sx={{ marginRight: "3rem", ml: -5 }}>G </Typography>
            being able to adapt to diverse habitats
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
            // Assign ref to FormControl for Q24-26
            <FormControl
              ref={(el) => (questionRefs.current[10 + index] = el)}
              sx={{ margin: "1em" }}
              key={index}
            >
              <InputLabel>{`${24 + index}`}</InputLabel>
              <Select
                sx={{ width: "5em" }}
                value={answers[23 + index] || ""}
                onChange={(e) => handleInputChange(23 + index, e.target.value)}
                label={`${24 + index}`}
              >
                {possibleAnswers2.map((answer) => (
                  <MenuItem key={answer} value={answer}>
                    {answer}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Section2;
