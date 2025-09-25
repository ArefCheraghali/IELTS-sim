"use client";

import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Button,
  CircularProgress,
  Container,
  Alert,
  Paper,
  Divider, // Added for visual separation
} from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Tests() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
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
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userPhone}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUser(response.data);
        } else {
          setError(`Failed to fetch user data. Status: ${response.status}`);
        }
      } catch (err) {
        if (err.response) {
          setError(
            `Error fetching data: ${
              err.response.data.detail || err.response.statusText
            }`
          );
          if (err.response.status === 401 || err.response.status === 403) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("role");
            localStorage.removeItem("user");
            localStorage.removeItem("userData");
            router.push("/");
          }
        } else if (err.request) {
          setError(
            "Error fetching data: No response from server. Please check your connection."
          );
        } else {
          setError(`An unexpected error occurred: ${err.message}`);
        }
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  const handleTestSelect = (testId, testType) => {
    localStorage.setItem("selectedTest", JSON.stringify({ testId, testType }));
    router.push("/tests/confirm-details");
  };

  const commonButtonSx = {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    minWidth: { xs: "calc(50% - 8px)", sm: "200px" }, // Adjust for 2 buttons per row on xs if desired
    flexGrow: { xs: 1, sm: 0 }, // Allow buttons to grow on xs if in a flex row
    margin: 1, // Replaced gap for individual margin control
    backgroundColor: "#3E96F4", // Common blue color
    "&:hover": {
      backgroundColor: "#2e7cdA", // Darker blue for hover
    },
  };

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
      <Container maxWidth="sm" sx={{ mt: 4, textAlign: "center" }}>
        <Alert severity="error" sx={{ mb: 2, textAlign: "left" }}>
          {error}
        </Alert>
        <Button
          variant="contained"
          onClick={() => router.push("/")}
          sx={{
            backgroundColor: "#31393C",
            "&:hover": { backgroundColor: "#1e2325" },
          }}
        >
          Go to Login
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{ textAlign: "center", my: { xs: 3, sm: 5 }, p: { xs: 1, sm: 2 } }}
      >
        {user ? (
          <Paper
            elevation={2}
            sx={{
              p: { xs: 1.5, sm: 2 },
              mb: 4,
              display: "inline-block",
              backgroundColor: (theme) => theme.palette.grey[50],
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "text.primary",
                fontSize: { xs: "1rem", sm: "1.15rem" },
              }}
            >
              Candidate: {user.name} {user.family_name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              ({user.phone_number})
            </Typography>
          </Paper>
        ) : (
          !loading && (
            <Alert severity="warning" sx={{ mb: 3 }}>
              Candidate information not available. Please ensure you are logged
              in.
            </Alert>
          )
        )}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", sm: "2.25rem" }, mb: 3 }}
        >
          Please Select a Test
        </Typography>

        {/* Academic Tests Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontSize: { xs: "1.4rem", sm: "1.75rem" },
              mb: 2,
              color: "text.secondary",
              fontWeight: "medium",
            }}
          >
            Academic Tests
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              // gap: 2 // Using margin on buttons instead for more control with flexGrow on xs
            }}
          >
            <Button
              variant="contained"
              sx={commonButtonSx}
              onClick={() => handleTestSelect(1, "academic")}
            >
              Test 1 Academic
            </Button>
            <Button
              variant="contained"
              sx={commonButtonSx}
              onClick={() => handleTestSelect(2, "academic")}
            >
              Test 2 Academic
            </Button>
            <Button
              variant="contained"
              sx={commonButtonSx}
              onClick={() => handleTestSelect(3, "academic")}
            >
              Test 3 Academic
            </Button>
            <Button
              variant="contained"
              sx={commonButtonSx}
              onClick={() => handleTestSelect(4, "academic")}
            >
              Test 4 Academic
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: "grey.400" }} />

        {/* General Training Tests Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontSize: { xs: "1.4rem", sm: "1.75rem" },
              mb: 2,
              color: "text.secondary",
              fontWeight: "medium",
            }}
          >
            General Training Tests
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              // gap: 2
            }}
          >
            <Button
              variant="contained"
              sx={commonButtonSx}
              onClick={() => handleTestSelect(1, "general")}
            >
              Test 1 General
            </Button>
            <Button
              variant="contained"
              sx={commonButtonSx}
              onClick={() => handleTestSelect(2, "general")}
            >
              Test 2 General
            </Button>
          </Box>
        </Box>
        <Button
          variant="outlined"
          onClick={() => router.back()}
          sx={{
            mb: 3,
            borderColor: "#31393C",
            color: "#31393C",
            "&:hover": { backgroundColor: "#f0f0f0", borderColor: "#1e2325" },
          }}
        >
          ← Go Back
        </Button>
      </Box>
    </Container>
  );
}
