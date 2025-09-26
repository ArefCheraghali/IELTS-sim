"use client";
import {
  Box,
  Typography,
  Button,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExamLayout from "./ExamLayout";
import { useExam } from "../contexts/ExamContext";

const ReadingIntro = () => {
  const router = useRouter();
  const [selectedTest, setSelectedTest] = useState(null);
  const [expanded, setExpanded] = useState(true);
  const videoRef = useRef(null);
  const { volume } = useExam();

  useEffect(() => {
    const testData = JSON.parse(localStorage.getItem("selectedTest"));
    setSelectedTest(testData);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (expanded) {
        videoRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      } else {
        videoRef.current.pause();
      }
      videoRef.current.volume = volume;
    }
  }, [expanded, volume]);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  const handleConfirm = () => {
    if (selectedTest) {
      const testRoute = `/tests/test${
        selectedTest.testId
      }${selectedTest.testType.charAt(0)}${selectedTest.testType.charAt(
        1
      )}/reading`;
      router.push(testRoute);
    }
  };

  return (
    <ExamLayout sectionName="Reading">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          p: 3,
          bgcolor: "#f5f5f5",
          minHeight: "140vh",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            width: "100%",
            maxWidth: 900,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "normal" }}
            >
              Reading
            </Typography>
            <Typography variant="body2" color="error">
              Not Completed
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
              Timing : 60 minutes
            </Typography>

            <Accordion
              expanded={expanded}
              onChange={handleAccordionChange}
              sx={{
                boxShadow: "none",
                "&:before": {
                  display: "none",
                },
                bgcolor: "#f8f8f8",
                mt: 1,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  bgcolor: "#f0f0f0",
                  borderRadius: "4px",
                  minHeight: "48px",
                  "& .MuiAccordionSummary-content": {
                    margin: "8px 0",
                  },
                }}
              >
                <Typography variant="body2" component="span">
                  Test Information
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ ml: 1 }}
                  color="error"
                >
                  Not Confirmed
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Box sx={{ width: "100%", mb: 4 }}>
                  <video
                    ref={videoRef}
                    controls
                    width="100%"
                    height="auto"
                    src="/video/reading.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </Box>

                <Box sx={{ textAlign: "left", mb: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ mb: 1, fontWeight: "medium" }}
                  >
                    Ready?
                  </Typography>
                  <Typography variant="body2">
                    Please confirm that you have understood the instructions
                    above.
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "left" }}>
                  <Button
                    variant="contained"
                    onClick={handleConfirm}
                    sx={{
                      bgcolor: "black",
                      color: "white",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "#333",
                      },
                    }}
                  >
                    ✓ I Confirm
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Paper>
      </Box>
    </ExamLayout>
  );
};

export default ReadingIntro;
