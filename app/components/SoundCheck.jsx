"use client";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import HeadphonesIcon from "@mui/icons-material/Headphones";

const SoundCheck = () => {
  const router = useRouter();
  const [selectedTest, setSelectedTest] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState(null);

  useState(() => {
    const testData = JSON.parse(localStorage.getItem("selectedTest"));
    setSelectedTest(testData);

    // Create audio element
    const audio = new Audio("/audio/sample-sound.mp3"); // Replace with your sound file path
    setAudioElement(audio);

    return () => {
      // Cleanup function
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, []);

  const handlePlaySound = () => {
    if (audioElement) {
      audioElement.currentTime = 0; // Reset to beginning
      audioElement.play();
      setIsPlaying(true);

      audioElement.onended = () => {
        setIsPlaying(false);
      };
    }
  };

  const handleContinue = () => {
    if (selectedTest) {
      // First we'll go to the listening introduction
      router.push(`/tests/listening-intro`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
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
          <Button variant="contained" color="primary" onClick={handleContinue}>
            Continue
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SoundCheck;
