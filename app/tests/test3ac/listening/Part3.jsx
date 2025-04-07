import { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  TextField,
  Divider,
} from "@mui/material";

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  // Create refs for each text field
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the text field corresponding to the current question
    if (currentQuestion >= 21 && currentQuestion <= 30) {
      const index = currentQuestion - 21;
      const element = inputRefs.current[index];
      if (element) {
        element.focus();
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
          <Typography>Questions 21-24</Typography>
          <Typography>Complete the flowchart below.</Typography>
          <Typography>
            Write <b>NO MORE THAN TWO WORDS</b> for each answer
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "flex-start",
                padding: "1em",
                textAlign: "left",
              }}
            >
              <List sx={{ listStyleType: "disc", ml: "3em" }}>
                <Typography variant="h6">
                  <b>Session outline:</b>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <b>Project topic:</b> design a water treatment system
                </Typography>
                <Divider sx={{ mt: 2 }} />
                <Typography sx={{ mt: 2 }}>Toturial structure:</Typography>
                <Typography sx={{ mt: 3 }}>
                  <b>Step 1: </b>go over
                  <TextField
                    sx={{ mt: -2.5, ml: 1, mr: 1, mb: 2, width: "10em" }}
                    label="21"
                    variant="standard"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(20, e.target.value)}
                    value={answers[20]}
                    inputRef={(el) => (inputRefs.current[0] = el)}
                  />
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <b>Step 2: </b>think about research
                  <TextField
                    sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                    label="22"
                    variant="standard"
                    autoComplete="off"
                    onChange={(e) => handleInputChange(21, e.target.value)}
                    value={answers[21]}
                    inputRef={(el) => (inputRefs.current[1] = el)}
                  />
                </Typography>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography>
                    search online databases using good search terms
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: "list-item", mb: "0.5em" }}>
                  <Typography>
                    consider the kind of research, e.g.
                    <TextField
                      sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                      label="23"
                      variant="standard"
                      spellCheck={false}
                      autoComplete="off"
                      onChange={(e) => handleInputChange(22, e.target.value)}
                      value={answers[22]}
                      inputRef={(el) => (inputRefs.current[2] = el)}
                    />
                    from other projects
                  </Typography>
                </ListItem>
                <Typography sx={{ mt: 2, mb: 2 }}>
                  <b>Step 3:</b> develop an
                  <TextField
                    sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                    label="24"
                    variant="standard"
                    spellCheck={false}
                    autoComplete="off"
                    onChange={(e) => handleInputChange(23, e.target.value)}
                    value={answers[23]}
                    inputRef={(el) => (inputRefs.current[3] = el)}
                  />
                </Typography>
                <Divider />
              </List>
            </Box>
          </Box>
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
          <Typography>Questions 25-27</Typography>
          <Typography>Complete the summary below.</Typography>
          <Typography>
            Write <b>NO MORE THAN ONE WORD</b> for each answer.
          </Typography>
          <Box
            sx={{ width: "100%", display: "flex", flexDirection: "row", mb: 4 }}
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
                padding: "1em",
                textAlign: "left",
              }}
            >
              <Typography variant="h6">Project description:</Typography>
              <Typography>
                You need to design a grey-water treatment system to reduce the
                pressure on the water
              </Typography>
              <Typography sx={{ mt: 3 }}>
                <TextField
                  sx={{ mt: -2.5, mr: 1, width: "10em" }}
                  label="25"
                  spellCheck={false}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(24, e.target.value)}
                  value={answers[24]}
                  inputRef={(el) => (inputRefs.current[4] = el)}
                />
                in a Cameroon village. Grey-water is wastewater from household
              </Typography>
              <Typography sx={{ mt: 3 }}>
                <TextField
                  sx={{ mt: -2.5, width: "10em" }}
                  label="26"
                  spellCheck={false}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(25, e.target.value)}
                  value={answers[25]}
                  inputRef={(el) => (inputRefs.current[5] = el)}
                />
                . The system needs to treat this water to remove bacteria, and
              </Typography>
              <Typography sx={{ mt: 3 }}>
                recycle it to use for purposes such as watering plants, flushing
                toilets and doing{" "}
              </Typography>
              <Typography sx={{ mt: 3 }}>
                <TextField
                  sx={{ mt: -2.5, width: "10em" }}
                  label="27"
                  spellCheck={false}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(26, e.target.value)}
                  value={answers[26]}
                  inputRef={(el) => (inputRefs.current[6] = el)}
                />
                .
              </Typography>
            </Box>
          </Box>
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
          <Typography>Questions 28-30</Typography>
          <Typography>Complete the notes below.</Typography>
          <Typography>
            Write <b>NO MORE THAN TWO WORD</b> for each answer.
          </Typography>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
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
                padding: "1em",
                textAlign: "left",
              }}
            >
              <Typography>
                <b>Reseach tips</b>
              </Typography>
              <Typography>General internet searches:</Typography>

              <Typography sx={{ mt: 3 }}>
                Avoid websites where
                <TextField
                  sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                  label="28"
                  spellCheck={false}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(27, e.target.value)}
                  value={answers[27]}
                  inputRef={(el) => (inputRefs.current[7] = el)}
                />
                try to sell their products.
              </Typography>
              <Typography sx={{ mt: 3 }}>
                <b>Engineering library:</b>
              </Typography>
              <Typography sx={{ mt: 3 }}>
                Use key words when searching the catalogue
              </Typography>
              <Typography sx={{ mt: 3 }}>
                e.g. grey-water treatment systems /
                <TextField
                  sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                  label="29"
                  spellCheck={false}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(28, e.target.value)}
                  value={answers[28]}
                  inputRef={(el) => (inputRefs.current[8] = el)}
                />
                use
              </Typography>
              <Typography sx={{ mt: 3 }}>
                <b>EWB website:</b>
              </Typography>
              <Typography sx={{ mt: 3 }}>
                Check examples from the
                <TextField
                  sx={{ mt: -2.5, ml: 1, mr: 1, width: "10em" }}
                  label="30"
                  spellCheck={false}
                  variant="standard"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(29, e.target.value)}
                  value={answers[29]}
                  inputRef={(el) => (inputRefs.current[9] = el)}
                />
                last year.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Part3;
