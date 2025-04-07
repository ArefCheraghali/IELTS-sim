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

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

    localStorage.setItem("user", JSON.stringify(data.phone));

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/login",
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

        // Redirect based on role
        if (response.data.role === "admin") {
          router.push("/admin"); // Redirect to admin page
        } else if (response.data.role === "user") {
          router.push("/user"); // Redirect to user page
        } else {
          console.error("Unknown role:", response.data.role);
        }
      } else {
        setError("Login failed: Invalid credentials");
      }
    } catch (error) {
      setError("There was an error logging in. Please try again.");
      console.error("There was an error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseError = () => {
    setError(null);
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
    </Box>
  );
}
