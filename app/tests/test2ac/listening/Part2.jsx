import { Box, Typography } from "@mui/material";
import Drag from "./Drag";
import MultipleChoiceQuestion from "../../../components/MultipleChoiceQuestion";

const Part2 = ({ answers, setAnswers }) => {
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
          Part 2
        </Typography>
        <Typography variant="h6" gutterBottom>
          Questions 11-20
        </Typography>
      </Box>
      <Typography>Questions 11-16</Typography>
      <Typography>
        What information is given about each of the following festival
        workshops?
      </Typography>
      <Typography>
        Choose <b>SIX</b> answers from the box and write the correct letter,{" "}
        <b>A-I</b>, next to the questions 11-17.
      </Typography>
      <Drag answers={answers} setAnswers={setAnswers} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "60rem",
        }}
      >
        <Typography>Questions 17 and 18</Typography>
        <Typography>
          Choose <b>TWO</b> letters, <b>A-E</b>.
        </Typography>
        <Typography>
          Which <b>TWO</b> reasons does the speaker give for recommending{" "}
          <i>Alive and Kicking</i>?
        </Typography>
        <MultipleChoiceQuestion
          options={[
            { label: "their financial situation", value: "A" },
            { label: "their level of commitment", value: "B" },
            { label: "their work experience", value: "C" },
            { label: "their ambition", value: "D" },
            { label: "their availability", value: "E" },
          ]}
          questionIndexes={[16, 17]}
          answers={answers}
          setAnswers={setAnswers}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "60rem",
        }}
      >
        <Typography>Questions 19 and 20</Typography>
        <Typography>
          Choose <b>TWO</b> letters, <b>A-E</b>.
        </Typography>
        <Typography>
          Which <b>TWO</b> pieces of advice does the speaker give to parents
          about reading?
        </Typography>
        <MultipleChoiceQuestion
          options={[
            {
              label: "Encourage children to write down new vocabulary.",
              value: "A",
            },
            { label: "Allow children to listen to audio books.", value: "B" },
            { label: "Get reommendations from librarians.", value: "C" },
            {
              label: "Give children a choice about what they read.",
              value: "D",
            },
            {
              label:
                "Only read aloud to children until they can read independently.",
              value: "E",
            },
          ]}
          questionIndexes={[18, 19]}
          answers={answers}
          setAnswers={setAnswers}
        />
      </Box>
    </Box>
  );
};

export default Part2;
