"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import UserList from "./UserList";
import NewUserForm from "./NewUserForm";

export default function AdminPanel() {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  // Handle exam navigation
  const handleExamNavigation = () => {
    router.push("/tests");
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: 2, mb: 4 }}
      >
        <Button
          onClick={() => setShowForm(!showForm)}
          variant="contained"
          sx={{
            backgroundColor: "#856404",
            "&:hover": {
              backgroundColor: "#a3790a",
            },
            "&:active": {
              backgroundColor: "#6b4f03",
            },
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {showForm ? "Show Users" : "New User"}
        </Button>

        <Button
          onClick={handleExamNavigation}
          variant="contained"
          sx={{
            backgroundColor: "#2196f3", // Blue color for exam button
            "&:hover": {
              backgroundColor: "#1976d2", // Darker blue on hover
            },
            "&:active": {
              backgroundColor: "#1565c0", // Even darker blue when clicked
            },
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Exam
        </Button>
      </Box>

      {showForm ? <NewUserForm /> : <UserList />}
    </Box>
  );
}
