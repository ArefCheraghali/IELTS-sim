"use client";

import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";

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

const UpdateUserForm = ({ params }) => {
  const { phoneNumber } = params;
  const router = useRouter();

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
  const [allowedToTakeTest, setAllowedToTakeTest] = useState(false);

  // Fetch existing user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("access_token");

        const response = await axios.get(
          `http://127.0.0.1:8000/users/${phoneNumber}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const userData = response.data;
          reset({
            name: userData.name,
            family_name: userData.family_name,
            phoneNumber: userData.phone_number,
            password: userData.password,
          });
          setAllowedToTakeTest(userData.allowed_exam); // Set the checkbox value
        } else {
          setError("Failed to fetch user data. Please try again.");
        }
      } catch (error) {
        setError(
          "There was an error fetching the user data. Please try again."
        );
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [phoneNumber, reset]);

  const handleSubmitForm = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const requestBody = {
        name: data.name,
        family_name: data.family_name,
        phone_number: data.phoneNumber,
        password: data.password,
        allowed_exam: allowedToTakeTest, // Include the checkbox value
      };

      const token = localStorage.getItem("access_token");

      const response = await axios.put(
        `http://127.0.0.1:8000/users/${phoneNumber}`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("User updated successfully:", response.data);
        router.push("/admin");
      } else {
        setError("Failed to update user. Please try again.");
      }
    } catch (error) {
      setError("There was an error updating the user. Please try again.");
      console.error("Error updating user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseError = () => {
    setError(null);
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
        Update User
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
            helperText={errors.name ? errors.name.message : ""}
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
            helperText={errors.family_name ? errors.family_name.message : ""}
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
            helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
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
            helperText={errors.password ? errors.password.message : ""}
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

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={loading}
        sx={{ mb: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : "Update User"}
      </Button>

      {/* Go Back Button */}
      <Button
        variant="outlined"
        fullWidth
        onClick={() => router.push("/admin")}
      >
        Go Back to Admin Page
      </Button>

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
};

export default UpdateUserForm;
