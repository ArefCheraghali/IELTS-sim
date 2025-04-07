"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        // Get the user object from localStorage
        const userData = JSON.parse(localStorage.getItem("user"));
        if (!userData) {
          setError("Phone number not found. Please log in again.");
          setLoading(false);
          return;
        }

        const phoneNumber = userData;

        // Get the token from localStorage
        const token = localStorage.getItem("access_token");

        // Fetch user data
        const response = await axios.get(
          `http://127.0.0.1:8000/users/${phoneNumber}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUser(response.data); // Set the user data
        } else {
          setError("Failed to fetch user data.");
        }
      } catch (error) {
        setError("There was an error fetching the user data.");
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle logout
  const handleLogout = () => {
    // Clear the user's session
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");

    // Redirect to the home page
    router.push("/");
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography
        variant="h6"
        color="error"
        sx={{ textAlign: "center", mt: 4 }}
      >
        {error}
      </Typography>
    );
  }

  if (!user) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center", mt: 4 }}>
        No user data found.
      </Typography>
    );
  }

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {user.name} {user.family_name}!
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        User Information
      </Typography>
      <Box sx={{ mt: 2, mb: 4 }}>
        <Typography>Phone Number: {user.phone_number}</Typography>
        <Typography>
          Allowed to Take Exam: {user.allowed_exam ? "Yes" : "No"}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          disabled={!user.allowed_exam} // Disable if allowed_exam is false
          onClick={() => router.push("/tests")}
          sx={{
            backgroundColor: "#856404",
            "&:hover": {
              backgroundColor: "#a3790a",
            },
            "&:disabled": {
              backgroundColor: "#ccc",
              color: "#666",
            },
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Take Test
        </Button>

        <Button
          variant="contained"
          onClick={() => router.push("/results")}
          sx={{
            backgroundColor: "#007bff",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          View Results
        </Button>
      </Box>

      <Button
        onClick={handleLogout}
        variant="contained"
        sx={{
          backgroundColor: "#dc3545",
          "&:hover": {
            backgroundColor: "#c82333",
          },
          color: "#fff",
          fontWeight: "bold",
          textTransform: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          mt: 4,
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserPage;
