"use client";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import InfoIcon from "@mui/icons-material/Info";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ExamLayout from "./ExamLayout";
import { useExam } from "../contexts/ExamContext";

const SoundCheck = () => {
  const router = useRouter();
  const { volume } = useExam();
  const [selectedTest, setSelectedTest] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState(null);

  useEffect(() => {
    const testData = JSON.parse(localStorage.getItem("selectedTest"));
    setSelectedTest(testData);

    const audio = new Audio("/audio/check-sound.mp3");
    audio.volume = volume;
    setAudioElement(audio);

    return () => {
      if (audio) {
        audio.pause();
        audio.src = "";
      }
    };
  }, []);

  useEffect(() => {
    if (audioElement) {
      audioElement.volume = volume;
    }
  }, [volume, audioElement]);

  const handlePlaySound = () => {
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      setIsPlaying(true);

      audioElement.onended = () => {
        setIsPlaying(false);
      };
    }
  };

  const handleContinue = () => {
    if (selectedTest) {
      router.push(`/tests/listening-intro`);
    }
  };

  return (
    <ExamLayout sectionName="Sound Check">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          bgcolor: "#f5f5f5",
          padding: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            borderRadius: 2,
            p: 4,
            width: "100%",
            maxWidth: 600,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <HeadphonesIcon sx={{ fontSize: 40, mr: 2 }} />
            <Typography variant="h5">Test Sound</Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 4 }}>
            Put on your headphones and click the Play sound button to play a
            sample sound.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Button
              variant="contained"
              onClick={handlePlaySound}
              disabled={isPlaying}
              sx={{ px: 3 }}
            >
              Play sound
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
            <InfoIcon color="info" sx={{ mr: 1, mt: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              If you can not hear the sound clearly, please tell the invigilator
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleContinue}
            >
              Continue
            </Button>
          </Box>
        </Paper>
      </Box>
    </ExamLayout>
  );
};

export default SoundCheck;
