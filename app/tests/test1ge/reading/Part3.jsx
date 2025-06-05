import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CalisthenicsText from "./text/CalisthenicsText";

const Part3 = ({ answers, setAnswers, currentQuestion }) => {
  const paragraphSelectPossibleAnswers = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
  ];
  // Total questions: 7 (29-35) + 5 (36-40) = 12
  const questionRefs = React.useRef(Array(12).fill(null));

  // Data for Questions 29-35
  const paragraphMatchingQuestions = [
    {
      number: 29,
      text: "the origin of the word ‘calisthenics’",
      answerIndex: 28,
    },
    {
      number: 30,
      text: "the last popular supporter of calisthenics",
      answerIndex: 29,
    },
    {
      number: 31,
      text: "the first use of calisthenics as a training method",
      answerIndex: 30,
    },
    {
      number: 32,
      text: "a multidisciplinary approach to all-round health and strength",
      answerIndex: 31,
    },
    {
      number: 33,
      text: "reasons for the survival of calisthenics throughout the ages",
      answerIndex: 32,
    },
    {
      number: 34,
      text: "the use of a medical substance to increase muscle mass and strength",
      answerIndex: 33,
    },
    {
      number: 35,
      text: "a reference to travelling showmen who displayed their strength for audiences",
      answerIndex: 34,
    },
  ];

  // Data for Questions 36-40 (TextFields)
  // answerIndex refers to the index in the global 'answers' array
  const summaryCompletionQuestions = [
    {
      number: 36,
      promptBefore: "important than",
      promptAfter: "or having an attractive-looking body.",
      answerIndex: 35,
      refIndex: 7,
    },
    {
      number: 37,
      promptBefore:
        "in calisthenics but the most famous practitioners became known as",
      promptAfter: "on account of the impressive size of their muscles.",
      answerIndex: 36,
      refIndex: 8,
    },
    {
      number: 38,
      promptBefore: "females, children and those recovering from",
      promptAfter: ". Much",
      answerIndex: 37,
      refIndex: 9,
    },
    {
      number: 39,
      promptBefore:
        "Once a person became skilled at this, he would progress to",
      promptAfter: ".",
      answerIndex: 38,
      refIndex: 10,
    },
    {
      number: 40,
      promptBefore:
        "can harm the body leaving it sore, out of balance, and in poor",
      promptAfter: ".",
      answerIndex: 39,
      refIndex: 11,
    },
  ];

  React.useEffect(() => {
    if (currentQuestion >= 29 && currentQuestion <= 40) {
      const refArrayIndex = currentQuestion - 29; // Calculate index for 0-based questionRefs array
      const questionElementOrInput = questionRefs.current[refArrayIndex];

      if (questionElementOrInput) {
        // Scroll the main element (Box wrapper or input itself) into view
        questionElementOrInput.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        // Auto-focus if it's a TextField question (36-40)
        // For these questions, the ref is directly on the input element via `inputRef`
        if (currentQuestion >= 36 && currentQuestion <= 40) {
          questionElementOrInput.focus();
        }
      }
    }
  }, [currentQuestion]);

  const handleInputChange = (answerArrayIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[answerArrayIndex] = value;
    setAnswers(newAnswers);
    // console.log(newAnswers); // Keep for debugging if needed
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
        <CalisthenicsText />
      </Box>
      <Box
        sx={{
          width: "50%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          padding: 2,
        }}
      >
        <Typography sx={{ ml: 1, fontSize: "1.1em", mb: 1 }}>
          <b>Part 3</b>
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          You should spend about 20 minutes on <b>Questions 29-40</b>, which are
          based on Reading Passage 3 (CALISTHENICS).
        </Typography>
        <br />

        {/* Questions 29 - 35: Paragraph Matching */}
        <Typography variant="h6" sx={{ ml: 1, mb: 1, fontSize: "1rem" }}>
          Questions 29 - 35
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Which paragraph contains the following information?
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          The text has eight paragraphs, <b>A-H</b>. Pick the correct letter in
          boxes 29-35.
        </Typography>
        {paragraphMatchingQuestions.map((q, index) => (
          <Box
            key={q.number}
            ref={(el) => (questionRefs.current[index] = el)} // index 0-6 for Q29-35
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1.5,
              pl: 1,
              py: 0.5,
            }}
          >
            <FormControl sx={{ mr: 2, minWidth: "5.5em" }}>
              <InputLabel id={`q${q.number}-label`}>{q.number}</InputLabel>
              <Select
                labelId={`q${q.number}-label`}
                sx={{ width: "100%" }}
                value={answers[q.answerIndex] || ""}
                onChange={(e) =>
                  handleInputChange(q.answerIndex, e.target.value)
                }
                label={`${q.number}`}
              >
                {paragraphSelectPossibleAnswers.map((answer) => (
                  <MenuItem key={answer} value={answer}>
                    {answer}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography variant="body2">
              {/* <b>{q.number}</b>  The number is now the label of the select */}
              {q.text}
            </Typography>
          </Box>
        ))}
        <br />

        {/* Questions 36 - 40: Summary Completion */}
        <Typography variant="h6" sx={{ ml: 1, mb: 1, mt: 2, fontSize: "1rem" }}>
          Questions 36 - 40
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          Complete the summary below. Choose <b>NO MORE THAN TWO WORDS</b> from
          the text for each answer.
        </Typography>
        <Typography sx={{ ml: 1, mb: 2 }}>
          Write your answers in boxes 36-40.
        </Typography>
        <Typography sx={{ ml: 1, mb: 1 }}>
          During the sixties and seventies, attaining huge muscles became more
          important than
        </Typography>
        <Typography
          sx={{
            ml: 1,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <TextField
            sx={{ mx: 0.5, width: "10em", my: 0.5, mt: -1 }}
            label="36"
            variant="standard"
            autoComplete="off"
            onChange={(e) =>
              handleInputChange(
                summaryCompletionQuestions[0].answerIndex,
                e.target.value
              )
            }
            value={answers[summaryCompletionQuestions[0].answerIndex] || ""}
            inputRef={(el) =>
              (questionRefs.current[summaryCompletionQuestions[0].refIndex] =
                el)
            }
          />
          or having an attractive-looking body.
        </Typography>
        <Typography sx={{ ml: 1, mt: 1 }}>
          The first people to take up this new sport of body building had a
          background in calisthenics but the most famous practitioners became
          known as
        </Typography>
        <Typography sx={{ ml: 1, mt: 3 }}>
          <TextField
            sx={{ mx: 0.5, width: "10em", my: 0.5, mt: -2.5 }}
            label="37"
            variant="standard"
            autoComplete="off"
            onChange={(e) =>
              handleInputChange(
                summaryCompletionQuestions[1].answerIndex,
                e.target.value
              )
            }
            value={answers[summaryCompletionQuestions[1].answerIndex] || ""}
            inputRef={(el) =>
              (questionRefs.current[summaryCompletionQuestions[1].refIndex] =
                el)
            }
          />
          on account of the impressive size of their muscles.
        </Typography>
        <Typography sx={{ ml: 1, mt: 1 }}>
          Drugs and mechanical devices were used to develop individual muscles
          to a monstrous size. Calisthenics then became the domain of ‘weaker’
          people: females,
        </Typography>
        <Typography sx={{ ml: 1, mt: 3 }}>
          children and those recovering from
          <TextField
            sx={{ mx: 0.5, width: "10em", my: 0.5, mt: -2.5 }}
            label="38"
            variant="standard"
            autoComplete="off"
            onChange={(e) =>
              handleInputChange(
                summaryCompletionQuestions[2].answerIndex,
                e.target.value
              )
            }
            value={answers[summaryCompletionQuestions[2].answerIndex] || ""}
            inputRef={(el) =>
              (questionRefs.current[summaryCompletionQuestions[2].refIndex] =
                el)
            }
          />
          . Much of the advanced
        </Typography>
        <Typography sx={{ ml: 1, mt: 1 }}>
          knowledge about calisthenics was lost and the method was subsequently
          downgraded to the status of a simple, userfriendly activity. Once a
          person became skilled at this,
        </Typography>
        <Typography
          sx={{
            ml: 1,
            mt: 1,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          he would progress to
          <TextField
            sx={{ mx: 0.5, width: "7em", my: 0.5, mt: -1 }}
            label="39"
            variant="standard"
            autoComplete="off"
            onChange={(e) =>
              handleInputChange(
                summaryCompletionQuestions[3].answerIndex,
                e.target.value
              )
            }
            value={answers[summaryCompletionQuestions[3].answerIndex] || ""}
            inputRef={(el) =>
              (questionRefs.current[summaryCompletionQuestions[3].refIndex] =
                el)
            }
          />
          . Currently a revival of calisthenics is under way
        </Typography>
        <Typography sx={{ ml: 1, mt: 1 }}>
          as extreme muscle building can harm the body leaving it sore, out of
          balance, and in
        </Typography>
        <Typography sx={{ ml: 1, mt: 3 }}>
          poor
          <TextField
            sx={{ mx: 0.5, width: "6em", my: 0.5, mt: -2.5 }}
            label="40"
            variant="standard"
            autoComplete="off"
            onChange={(e) =>
              handleInputChange(
                summaryCompletionQuestions[4].answerIndex,
                e.target.value
              )
            }
            value={answers[summaryCompletionQuestions[4].answerIndex] || ""}
            inputRef={(el) =>
              (questionRefs.current[summaryCompletionQuestions[4].refIndex] =
                el)
            }
          />
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default Part3;
