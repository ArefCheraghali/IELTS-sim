"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";

// Validation schema
const schema = yup.object().shape({
  password: yup.string().required("Password is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, "Phone number is not valid")
    .required("Phone number is required"),
});

export default function Home() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    localStorage.setItem("user", JSON.stringify(data.phone));

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const response = await axios.post(
        `${backendUrl}/login`,
        {
          phone_number: data.phone,
          password: data.password,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Save token and role in localStorage
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("role", response.data.role);

        setSuccessMessage("Login successful! Redirecting...");

        // Add a small delay before redirecting
        setTimeout(() => {
          // Redirect based on role
          if (response.data.role === "admin") {
            router.push("/admin");
          } else if (response.data.role === "user") {
            router.push("/user");
          } else {
            console.error("Unknown role:", response.data.role);
          }
        }, 1500); // 1.5 second delay
      } else {
        setError("Login failed: Invalid credentials");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.detail || "An unexpected error occurred";
      setError(errorMessage);
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  const handleCloseSuccess = () => {
    setSuccessMessage(null);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to STTH IELTS Simulator
      </Typography>
      <Typography>Please log in to proceed.</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number"
              variant="outlined"
              autoComplete="off"
              margin="normal"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone.message : ""}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              variant="outlined"
              type="password"
              margin="normal"
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Log in"}
        </Button>
      </Box>

      {/* Error Snackbar */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>

      {/* Success Snackbar */}
      <Snackbar
        open={!!successMessage}
        autoHideDuration={1500}
        onClose={handleCloseSuccess}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
