"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from "@mui/material";
import axios from "axios";

const ResetPassword = ({ commonButtonSx }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const token = localStorage.getItem("access_token");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/reset-password`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setSuccess("Password reset successfully.");
        setForm({
          current_password: "",
          new_password: "",
          confirm_password: "",
        });
      }
    } catch (err) {
      setError(
        err.response?.data?.detail || "Failed to reset password. Try again."
      );
    }
  };

  return (
    <Box>
      {/* Styled button like others */}
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{
          ...commonButtonSx,
          backgroundColor: "#D9534F", // red tone for reset
          "&:hover": { backgroundColor: "#b52b27" },
        }}
      >
        Reset Password
      </Button>

      {/* Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <TextField
            margin="dense"
            label="Current Password"
            type="password"
            name="current_password"
            fullWidth
            value={form.current_password}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="New Password"
            type="password"
            name="new_password"
            fullWidth
            value={form.new_password}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Confirm Password"
            type="password"
            name="confirm_password"
            fullWidth
            value={form.confirm_password}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ResetPassword;
