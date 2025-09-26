"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Container,
  Alert,
  Paper,
} from "@mui/material"; // Added Container and Alert
import { useRouter } from "next/navigation";
import axios from "axios";
import ResetPassword from "app/components/ResetPassword";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Get the user's phone number, which was stored during login
        const userPhone = JSON.parse(localStorage.getItem("user"));
        if (!userPhone) {
          setError("User session not found. Please log in again.");
          setLoading(false);
          router.push("/");
          return;
        }

        const token = localStorage.getItem("access_token");
        if (!token) {
          setError("Authentication token not found. Please log in again.");
          setLoading(false);
          router.push("/");
          return;
        }

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userPhone}`, // Use userPhone directly
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUser(response.data);
          localStorage.setItem(
            "userData",
            JSON.stringify({
              phone: response.data.phone_number,
              name: response.data.name,
              familyName: response.data.family_name,
              // You might want to store other relevant details like allowed_exam here too
            })
          );
        } else {
          setError(`Failed to fetch user data. Status: ${response.status}`);
        }
      } catch (error) {
        if (error.response) {
          setError(
            `Error fetching data: ${
              error.response.data.detail || error.response.statusText
            }`
          );
          if (error.response.status === 401 || error.response.status === 403) {
            // Unauthorized or Forbidden, clear session and redirect to login
            localStorage.removeItem("access_token");
            localStorage.removeItem("role");
            localStorage.removeItem("user");
            localStorage.removeItem("userData");
            router.push("/");
          }
        } else if (error.request) {
          setError(
            "Error fetching data: No response from server. Please check your connection."
          );
        } else {
          setError(`An unexpected error occurred: ${error.message}`);
        }
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]); // Added router to dependency array as it's used in error handling

  // Note: Logout functionality is typically in a shared Navbar or Layout,
  // but if it were here, it would be:
  // const handleLogout = () => {
  //   localStorage.removeItem("access_token");
  //   localStorage.removeItem("role");
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("userData");
  //   router.push("/");
  // };

  if (loading) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Button variant="contained" onClick={() => router.push("/")}>
          Go to Login
        </Button>
      </Container>
    );
  }

  if (!user) {
    return (
      // This state might be brief if error handling/redirects are effective
      <Container maxWidth="sm" sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h6">
          No user data found. You may be redirected.
        </Typography>
      </Container>
    );
  }

  // Common button styles (except for backgroundColor and hover)
  const commonButtonSx = {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    minWidth: "150px", // Give buttons a consistent minimum width
  };

  return (
    <Container maxWidth="sm">
      {" "}
      {/* Using Container for consistent layout */}
      <Box
        sx={{ textAlign: "center", my: { xs: 3, sm: 5 }, p: { xs: 1, sm: 2 } }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", sm: "2.25rem" } }}
        >
          Welcome, {user.name} {user.family_name}!
        </Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          User Information
        </Typography>
        <Paper
          elevation={2}
          sx={{
            p: { xs: 2, sm: 3 },
            display: "inline-block",
            textAlign: "left",
            mb: 3,
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <Typography sx={{ mb: 0.5 }}>
            <strong>Phone Number:</strong> {user.phone_number}
          </Typography>
          <Typography sx={{ mb: 1 }}>
            <strong>Allowed to Take Exam:</strong>
            <Box
              component="span"
              sx={{
                color: user.allowed_exam ? "success.main" : "error.main",
                fontWeight: "bold",
                ml: 0.5,
              }}
            >
              {user.allowed_exam ? "Yes" : "No"}
            </Box>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            - If you are not allowed to take a test, contact Mrs. Mohammadi or
            the person responsible.
            <br /> - Please do not take the test on mobile devices.
            <br /> - For the best experience, please use Google Chrome on a
            desktop.
          </Typography>
        </Paper>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            disabled={!user.allowed_exam}
            onClick={() => router.push("/tests")} // Assuming this is the correct path for taking tests
            sx={{
              ...commonButtonSx,
              backgroundColor: "#3E96F4", // New color for Take Test
              "&:hover": {
                backgroundColor: "#2e7cdA", // Darker shade for hover
              },
              "&:disabled": {
                // Keep or adjust disabled styles
                backgroundColor: "#ccc",
                color: "#666",
              },
            }}
          >
            Take Test
          </Button>
          <Button
            variant="contained"
            onClick={() => router.push("/user/examResults")} // Path to the new exam history page
            sx={{
              ...commonButtonSx,
              backgroundColor: "#31393C", // New color for View Results
              "&:hover": {
                backgroundColor: "#1e2325", // Darker shade for hover
              },
            }}
          >
            View Results
          </Button>
          <ResetPassword commonButtonSx={commonButtonSx} />
        </Box>

        {/* Logout button has been removed as per request */}
        {/* If you need a logout button, it's often placed in a global AppBar/Navbar */}
        {/* Example: 
        <Button
          onClick={handleLogout} // Assuming handleLogout is defined if this button is re-added
          variant="outlined" // Or "contained" with appropriate color
          color="error" 
          sx={{ ...commonButtonSx, mt: 4, borderColor: 'error.main', color: 'error.main', '&:hover': { backgroundColor: 'error.lighter' } }}
        >
          Logout
        </Button> 
        */}
      </Box>
    </Container>
  );
};

export default UserPage;
