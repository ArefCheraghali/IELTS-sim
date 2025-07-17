"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import UserList from "./UserList";
import NewUserForm from "./NewUserForm";

export default function AdminPanel() {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  // Navigation handlers
  const handleExamNavigation = () => {
    router.push("/tests");
  };

  const handleAddTestNavigation = () => {
    // Replace with the actual path to your "Add Test" page
    router.push("/admin/new-test");
  };

  const handleAssessmentsNavigation = () => {
    // Replace with the actual path to your "Assessments" page
    router.push("/admin/assessments");
  };

  const commonButtonSx = {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    flexShrink: 0,
  };

  return (
    <Box sx={{ p: { xs: 1, sm: 2 }, textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap", // Allow wrapping on small screens
          gap: 2, // Add gap between items when they wrap
          mb: 3, // Margin below the button bar
        }}
      >
        <Button
          onClick={() => setShowForm(!showForm)}
          variant="contained"
          sx={{
            ...commonButtonSx,
            backgroundColor: "#856404",
            "&:hover": { backgroundColor: "#a3790a" },
            "&:active": { backgroundColor: "#6b4f03" },
          }}
        >
          {showForm ? "Show Users" : "New User"}
        </Button>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2 }, // Smaller gap on mobile
            flexWrap: "wrap", // Allow these buttons to wrap if needed
            justifyContent: "flex-end", // Align to the end
          }}
        >
          <Button
            onClick={handleExamNavigation}
            variant="contained"
            sx={{
              ...commonButtonSx,
              backgroundColor: "#2196f3", // Blue color
              "&:hover": { backgroundColor: "#1976d2" },
              "&:active": { backgroundColor: "#1565c0" },
            }}
          >
            Exam
          </Button>
          <Button
            onClick={handleAddTestNavigation}
            variant="contained"
            sx={{
              ...commonButtonSx,
              backgroundColor: "#4caf50", // Green color for "Add"
              "&:hover": { backgroundColor: "#388e3c" },
              "&:active": { backgroundColor: "#2e7d32" },
            }}
          >
            Add Test
          </Button>
          <Button
            onClick={handleAssessmentsNavigation}
            variant="contained"
            sx={{
              ...commonButtonSx,
              backgroundColor: "#673ab7", // Deep purple for "Assessments"
              "&:hover": { backgroundColor: "#512da8" },
              "&:active": { backgroundColor: "#4527a0" },
            }}
          >
            Assessments
          </Button>
        </Box>
      </Box>
      {showForm ? <NewUserForm /> : <UserList />}
    </Box>
  );
}
