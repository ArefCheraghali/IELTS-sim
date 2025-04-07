"use client";
import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Tests() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  const handleTestSelect = (testId, testType) => {
    // Store selected test info in localStorage
    localStorage.setItem("selectedTest", JSON.stringify({ testId, testType }));
    router.push("/tests/confirm-details");
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      {user && (
        <Typography variant="h6" gutterBottom>
          Candidate: {user.name} ({user.phone})
        </Typography>
      )}
      <Typography variant="h4" gutterBottom>
        Select a Test
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
    </Box>
  );
}
