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
  Container,
} from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getEnv } from "./utils/env";

// Validation schema
const schema = yup.object().shape({
  password: yup.string().required("Password is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, "Phone number is not valid") // Assuming an 11-digit phone number
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
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(data.phone));
    }

    try {
      const { NEXT_PUBLIC_BACKEND_URL } = getEnv();
      const backendUrl = NEXT_PUBLIC_BACKEND_URL;
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
        if (typeof window !== "undefined") {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("role", response.data.role);
        }
        setSuccessMessage("Login successful! Redirecting...");

        setTimeout(() => {
          if (response.data.role === "admin") {
            router.push("/admin");
          } else if (response.data.role === "user") {
            router.push("/user");
          } else {
            console.error("Unknown role:", response.data.role);
            setError("Login successful, but user role is undefined.");
            setLoading(false);
          }
        }, 1500);
      } else {
        setError("Login failed: Invalid credentials or server error.");
        setLoading(false);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.detail ||
        "An unexpected error occurred. Please try again.";
      setError(errorMessage);
      console.error("Login error:", error);
      setLoading(false);
    }
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(null);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessMessage(null);
  };

  return (
    <Container component="main" maxWidth="sm">
      {" "}
      {/* Changed from md to sm for a slightly narrower form as per previous discussions */}
      <Box
        sx={{
          marginTop: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: { xs: 2 },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", sm: "2.125rem" } }}
        >
          Welcome to STTH IELTS Simulator
        </Typography>
        <Typography variant="body1" sx={{ mb: { xs: 2, sm: 3 } }}>
          Please log in to proceed.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            mt: 1,
            width: "100%",
          }}
          noValidate
        >
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone Number"
                variant="outlined"
                autoComplete="tel"
                margin="normal"
                required
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ""}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                margin="normal"
                required
                fullWidth
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth // Ensured button is full width
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#31393C", // Custom background color
              color: "#fff", // Set text color to white for contrast
              "&:hover": {
                backgroundColor: "#1e2325", // A slightly darker shade for hover
              },
              // Optional: if you want to ensure consistent height with other buttons
              // paddingY: '10px',
              // fontSize: '0.9375rem',
            }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" /> // Inherits the white color
            ) : (
              "Log in"
            )}
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
      <Snackbar
        open={!!successMessage}
        autoHideDuration={1500}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
