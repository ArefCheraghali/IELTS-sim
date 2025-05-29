import { useRef, useEffect } from "react";
import { Box, Typography, List, ListItem, TextField } from "@mui/material";

const Part4 = ({ answers, setAnswers, currentQuestion }) => {
  // Create refs for each text field
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the text field corresponding to the current question
    if (currentQuestion >= 31 && currentQuestion <= 40) {
      const index = currentQuestion - 31;
      const element = inputRefs.current[index];
      if (element) {
        element.focus();
        element.select();
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
      <Typography>Complete the notes below.</Typography>
      <Typography>
        Write <b>ONE WORD ONLY</b> for each answer.
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: "auto",
          maxWidth: "60rem",
          mt: 2,
          display: "flex",
          flexDirection: "column",
          padding: "1em",
          textAlign: "left",
          fontSize: "1.2rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: "center", width: "100%", mb: 2 }}
        >
          <b>Microplastics</b>
        </Typography>
        <List sx={{ listStyleType: "circle", ml: "3em" }}>
          <Typography>
            <b>Where microbplastics come from</b>
          </Typography>
          <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 3 }}>
            fibres from some
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="31"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(30, e.target.value)}
              value={answers[30]}
              inputRef={(el) => (inputRefs.current[0] = el)}
            />
            during washing
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            the breakdown of large pieces of plastic
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>waste from industry</ListItem>
          <ListItem sx={{ display: "list-item", mb: 3 }}>
            the action of vehicle tyres on roads
          </ListItem>
          <Typography>
            <b>Effects of microplastics</b>
          </Typography>
          <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 3 }}>
            They cause injuries to the
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="32"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(31, e.target.value)}
              value={answers[31]}
              inputRef={(el) => (inputRefs.current[1] = el)}
            />
            of wildlife and affect their digestive systems.
          </ListItem>
          <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
            They enter the food chain, e.g, in bottled and tap water,
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="33"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(32, e.target.value)}
              value={answers[32]}
              inputRef={(el) => (inputRefs.current[2] = el)}
            />
            and seafood.
          </ListItem>
          <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
            They may not affect human health, but they are banned in skin
            cleaning products and
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="34"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(33, e.target.value)}
              value={answers[33]}
              inputRef={(el) => (inputRefs.current[3] = el)}
            />
            in some countries.
          </ListItem>
          <ListItem sx={{ display: "list-item", mb: 3 }}>
            Microplastics enter the soil through air, rain and
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="35"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(34, e.target.value)}
              value={answers[34]}
              inputRef={(el) => (inputRefs.current[4] = el)}
            />
          </ListItem>
          <Typography>
            <b>
              Microplastics in the soil - a study by Anglia Ruskin University
            </b>
          </Typography>
          <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 3 }}>
            Earthworms are important because they add
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="36"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(35, e.target.value)}
              value={answers[35]}
              inputRef={(el) => (inputRefs.current[5] = el)}
            />
            to the soil.
          </ListItem>
          <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
            The study aimed to find whether microplastics in earthworms affect
            the
            <TextField
              sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
              label="37"
              variant="standard"
              autoComplete="off"
              onChange={(e) => handleInputChange(36, e.target.value)}
              value={answers[36]}
              inputRef={(el) => (inputRefs.current[6] = el)}
            />
            of plants.
          </ListItem>
          <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
            The study found that microplastics caused:
            <List sx={{ listStyleType: "disc", ml: "3em" }}>
              <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 1 }}>
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="38"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(37, e.target.value)}
                  value={answers[37]}
                  inputRef={(el) => (inputRefs.current[7] = el)}
                />
                loss in earthworms
              </ListItem>
              <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
                fewer seeds to germinate
              </ListItem>
              <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
                a rise in the level of
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="39"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(38, e.target.value)}
                  value={answers[38]}
                  inputRef={(el) => (inputRefs.current[8] = el)}
                />
                in the soil.
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
            <b>The study concluded:</b>
            <List sx={{ listStyleType: "disc", ml: "3em" }}>
              <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 1 }}>
                soil should be seen as an important natural procecss.
              </ListItem>
              <ListItem sx={{ display: "list-item", mb: "0.5em", mt: 1 }}>
                changes to soil damage both ecosystem and
                <TextField
                  sx={{ mt: -3, ml: 1, mr: 1, width: "10em" }}
                  label="40"
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(39, e.target.value)}
                  value={answers[39]}
                  inputRef={(el) => (inputRefs.current[9] = el)}
                />
                .
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default Part4;
