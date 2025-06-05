"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Slider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { useVolume } from "../contexts/VolumeContext";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTimer } from "../contexts/TimerContext";
import { useRouter } from "next/navigation";

const ExamNavbar = ({ sectionName, userName, onSubmit }) => {
  const [exitDialogOpen, setExitDialogOpen] = useState(false);
  const router = useRouter();
  const { volume, setVolume } = useVolume();
  const { timeLeft, formatTime } = useTimer();

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleExitClick = () => {
    setExitDialogOpen(true);
  };

  const handleExitConfirm = () => {
    setExitDialogOpen(false);
    router.push("/user");
  };

  const handleExitCancel = () => {
    setExitDialogOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "black",
        boxShadow: 3,
        color: "white",
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              mr: 2,
              fontWeight: "medium",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            {userName}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            {sectionName}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="h6"
            sx={{
              color: timeLeft <= 120 ? "#ff4444" : "white",
              fontWeight: timeLeft <= 120 ? "bold" : "normal",
              mr: "150px",
            }}
          >
            Time Left: {formatTime(timeLeft)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: 200,
              bgcolor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 1,
              padding: "4px 8px",
            }}
          >
            <IconButton
              color="inherit"
              size="small"
              onClick={() => setVolume(Math.max(0, volume - 0.1))}
            >
              <VolumeDownIcon />
            </IconButton>
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              aria-labelledby="volume-slider"
              min={0}
              max={1}
              step={0.1}
              sx={{
                mx: 2,
                color: "white",
                "& .MuiSlider-thumb": {
                  width: 16,
                  height: 16,
                  bgcolor: "white",
                },
                "& .MuiSlider-rail": {
                  opacity: 0.3,
                },
                "& .MuiSlider-track": {
                  bgcolor: "white",
                },
              }}
            />
            <IconButton
              color="inherit"
              size="small"
              onClick={() => setVolume(Math.min(1, volume + 0.1))}
            >
              <VolumeUpIcon />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            onClick={onSubmit}
            sx={{
              ml: 2,
              bgcolor: "rgba(255, 255, 255, 0.9)",
              color: "black",
              "&:hover": {
                bgcolor: "white",
              },
            }}
          >
            Submit
          </Button>
          <IconButton color="inherit" onClick={handleExitClick} sx={{ ml: 2 }}>
            Exit <ExitToAppIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 1 }}>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Dialog
        open={exitDialogOpen}
        onClose={handleExitCancel}
        aria-labelledby="exit-dialog-title"
      >
        <DialogTitle id="exit-dialog-title">
          Are you sure you want to exit?
        </DialogTitle>
        <DialogContent>
          Warning: If you exit the exam now, you won't be able to return to this
          session.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleExitCancel}>Cancel</Button>
          <Button onClick={handleExitConfirm} color="error" variant="contained">
            Exit Exam
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default ExamNavbar;
