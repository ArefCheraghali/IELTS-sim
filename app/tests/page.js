"use client";
import React, { useEffect, useState } from "react";
import { Typography, Box, Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Tests() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (!userData) {
          setError("Phone number not found. Please log in again.");
          setLoading(false);
          return;
        }

        const phoneNumber = userData;
        const token = localStorage.getItem("access_token");

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${phoneNumber}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUser(response.data);
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

  const handleTestSelect = (testId, testType) => {
    localStorage.setItem("selectedTest", JSON.stringify({ testId, testType }));
    router.push("/tests/confirm-details");
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="h5" sx={{ mb: 3, color: "error.main" }}>
          {error}
        </Typography>
      ) : user ? (
        <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
          Candidate: {user.name} {user.family_name} ({user.phone_number})
        </Typography>
      ) : (
        <Typography variant="h5" sx={{ mb: 3, color: "error.main" }}>
          Candidate: Not logged in
        </Typography>
      )}
      <Typography variant="h4" gutterBottom>
        Please Select a Test
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, mr: 2 }}
        onClick={() => handleTestSelect(1, "academic")}
      >
        Test 1 Academic
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, mr: 2 }}
        onClick={() => handleTestSelect(1, "general")}
      >
        Test 1 General
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, mr: 2 }}
        onClick={() => handleTestSelect(2, "academic")}
      >
        Test 2 Academic
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, mr: 2 }}
        onClick={() => handleTestSelect(2, "general")}
      >
        Test 2 General
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, mr: 2 }}
        onClick={() => handleTestSelect(3, "academic")}
      >
        Test 3 Academic
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, mr: 2 }}
        onClick={() => handleTestSelect(4, "academic")}
      >
        Test 4 Academic
      </Button>
    </Box>
  );
}
