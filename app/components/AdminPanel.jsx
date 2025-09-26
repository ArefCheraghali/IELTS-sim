"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import UserList from "./UserList";
import NewUserForm from "./NewUserForm";
import ExamList from "./ExamList";
import NewExam from "./NewExam";
const Assessments = () => <div>Assessments will go here</div>;

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("users");
  const [showUserForm, setShowUserForm] = useState(false);
  const [showExamForm, setShowExamForm] = useState(false);
  const router = useRouter();

  const handleExamNavigation = () => {
    router.push("/tests"); // existing route for selecting/taking test
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
      {/* Top navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          mb: 3,
        }}
      >
        <Button
          onClick={() => setActiveTab("users")}
          variant="contained"
          sx={{
            ...commonButtonSx,
            backgroundColor: activeTab === "users" ? "#856404" : "#aaa",
          }}
        >
          User Management
        </Button>
        <Button
          onClick={() => setActiveTab("exams")}
          variant="contained"
          sx={{
            ...commonButtonSx,
            backgroundColor: activeTab === "exams" ? "#2196f3" : "#aaa",
          }}
        >
          Exam Management
        </Button>
        <Button
          onClick={() => setActiveTab("assessments")}
          variant="contained"
          sx={{
            ...commonButtonSx,
            backgroundColor: activeTab === "assessments" ? "#673ab7" : "#aaa",
          }}
        >
          Assessments
        </Button>
        <Button
          onClick={handleExamNavigation}
          variant="contained"
          sx={{
            ...commonButtonSx,
            backgroundColor: "#ff9800",
          }}
        >
          Take Test
        </Button>
      </Box>

      {/* Content area */}
      <Box>
        {/* User management tab */}
        {activeTab === "users" && (
          <>
            <Button
              onClick={() => setShowUserForm(!showUserForm)}
              variant="contained"
              sx={{
                ...commonButtonSx,
                backgroundColor: "#856404",
                mb: 2,
              }}
            >
              {showUserForm ? "Show Users" : "New User"}
            </Button>
            {showUserForm ? <NewUserForm /> : <UserList />}
          </>
        )}

        {/* Exam management tab */}
        {activeTab === "exams" && (
          <>
            <Button
              onClick={() => setShowExamForm(!showExamForm)}
              variant="contained"
              sx={{
                ...commonButtonSx,
                backgroundColor: "#2196f3",
                mb: 2,
              }}
            >
              {showExamForm ? "Show Exams" : "New Exam"}
            </Button>
            {showExamForm ? <NewExam /> : <ExamList />}
          </>
        )}

        {/* Assessments tab */}
        {activeTab === "assessments" && <Assessments />}
      </Box>
    </Box>
  );
}
