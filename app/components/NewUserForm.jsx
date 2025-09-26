"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  family_name: yup.string().required("Family name is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

const NewUserForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // ✅ success state
  const [allowedToTakeTest, setAllowedToTakeTest] = useState(false);

  const handleSubmitForm = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const requestBody = {
        name: data.name,
        family_name: data.family_name,
        phone_number: data.phoneNumber,
        password: data.password,
        allowed_exam: allowedToTakeTest,
      };

      const token = localStorage.getItem("access_token");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/signup`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("User created successfully:", response.data);
        setSuccess("User created successfully!");
        reset({
          name: "",
          family_name: "",
          phoneNumber: "",
          password: "",
        });
        setAllowedToTakeTest(false);
      } else {
        setError("Failed to create user. Please try again.");
      }
    } catch (error) {
      setError("There was an error creating the user. Please try again.");
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  const handleCloseSuccess = () => {
    setSuccess(null);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleSubmitForm)}
      sx={{
        mt: 4,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        maxWidth: 500,
        mx: "auto",
      }}
    >
      <Typography variant="h6" sx={{ mb: 3 }}>
        Add New User
      </Typography>

      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message || ""}
            sx={{ mb: 2 }}
          />
        )}
      />

      <Controller
        name="family_name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Family Name"
            error={!!errors.family_name}
            helperText={errors.family_name?.message || ""}
            sx={{ mb: 2 }}
          />
        )}
      />

      <Controller
        name="phoneNumber"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Phone Number"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message || ""}
            sx={{ mb: 2 }}
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
            fullWidth
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message || ""}
            sx={{ mb: 2 }}
          />
        )}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={allowedToTakeTest}
            onChange={(e) => setAllowedToTakeTest(e.target.checked)}
          />
        }
        label="Allowed to take the test"
        sx={{ mb: 2 }}
      />

      <Button type="submit" variant="contained" fullWidth disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Add User"}
      </Button>

      <Snackbar
        open={!!success}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          {success}
        </Alert>
      </Snackbar>

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
};

export default NewUserForm;
