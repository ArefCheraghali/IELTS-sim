import { useRef, useEffect } from "react";
import { Box, Typography, TextField } from "@mui/material";

const Part4 = ({ answers, setAnswers, currentQuestion }) => {
  const inputRefs = useRef([]);

  useEffect(() => {
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
        <Typography>Complete the notes below.</Typography>
        <Typography>
          Write <b>NO MORE THAN TWO WORDS</b> for each answer.
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 2, mb: 2, textAlign: "center", width: "100%" }}
        >
          DESERT PLANTS
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          Background
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography>
            <b style={{ marginRight: "1em" }}>31</b> Deserts found in what is
            known as a
          </Typography>
          <TextField
            sx={{ ml: 1, width: "10em" }}
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(30, e.target.value)}
            value={answers[30] || ""}
            inputRef={(el) => (inputRefs.current[0] = el)}
          />
          <Typography sx={{ ml: 1 }}>(or dry area).</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography>
            <b style={{ marginRight: "1em" }}>32</b> Annual rainfall, if any,
            amounts to a
          </Typography>
          <TextField
            sx={{ ml: 1, width: "10em" }}
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(31, e.target.value)}
            value={answers[31] || ""}
            inputRef={(el) => (inputRefs.current[1] = el)}
          />
          <Typography>.</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography>
            <b style={{ marginRight: "1em" }}>33</b> Soil contains a lot of salt
            and
          </Typography>
          <TextField
            sx={{ ml: 1, width: "10em" }}
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(32, e.target.value)}
            value={answers[32] || ""}
            inputRef={(el) => (inputRefs.current[2] = el)}
          />
          <Typography>.</Typography>
        </Box>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          General adaptations of desert plants
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography>
            <b style={{ marginRight: "1em" }}>34</b> They can
          </Typography>
          <TextField
            sx={{ ml: 1, width: "10em" }}
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(33, e.target.value)}
            value={answers[33] || ""}
            inputRef={(el) => (inputRefs.current[3] = el)}
          />
          <Typography sx={{ ml: 1 }}>and store water.</Typography>
        </Box>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          Examples of adaptations
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography>
            <b style={{ marginRight: "1em" }}>35</b> <i>Saguaro Cactus</i>:
            stores water in its
          </Typography>
          <TextField
            sx={{ ml: 1, width: "10em" }}
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(34, e.target.value)}
            value={answers[34] || ""}
            inputRef={(el) => (inputRefs.current[4] = el)}
          />
          <Typography>.</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography>
            <b style={{ marginRight: "1em" }}>36</b> <i>Barrel Cactus</i>: can
          </Typography>
          <TextField
            sx={{ ml: 1, width: "10em" }}
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(35, e.target.value)}
            value={answers[35] || ""}
            inputRef={(el) => (inputRefs.current[5] = el)}
          />
          <Typography sx={{ ml: 1 }}>
            or shrink according to weather.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography>
            <b style={{ marginRight: "1em" }}>37</b> <i>Old Man Cactus</i>: has
          </Typography>
          <TextField
            sx={{ ml: 1, width: "10em" }}
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(36, e.target.value)}
            value={answers[36] || ""}
            inputRef={(el) => (inputRefs.current[6] = el)}
          />
          <Typography sx={{ ml: 1 }}>that reflect the sun.</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography>
            <b style={{ marginRight: "1em" }}>38</b> <i>Prickly Pear Cactus</i>:
            has
          </Typography>
          <TextField
            sx={{ ml: 1, width: "10em" }}
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(37, e.target.value)}
            value={answers[37] || ""}
            inputRef={(el) => (inputRefs.current[7] = el)}
          />
          <Typography sx={{ ml: 1 }}>to keep away animals.</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography>
            <b style={{ marginRight: "1em" }}>39</b> <i>Desert Spoon</i>: leaves
            are
          </Typography>
          <TextField
            sx={{ ml: 1, width: "10em" }}
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(38, e.target.value)}
            value={answers[38] || ""}
            inputRef={(el) => (inputRefs.current[8] = el)}
          />
          <Typography sx={{ ml: 1 }}>to reduce water loss.</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography>
            <b style={{ marginRight: "1em" }}>40</b> <i>Aloe Plant</i>: leaf
            surface acts like a
          </Typography>
          <TextField
            sx={{ ml: 1, width: "10em" }}
            variant="standard"
            autoComplete="off"
            onChange={(e) => handleInputChange(39, e.target.value)}
            value={answers[39] || ""}
            inputRef={(el) => (inputRefs.current[9] = el)}
          />
          <Typography sx={{ ml: 1 }}>
            covering and keeps water inside.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Part4;
