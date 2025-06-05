"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Typography,
  Container,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // For the back button
import VisibilityIcon from "@mui/icons-material/Visibility"; // For the view details button

// Mock data for exam history - replace with actual API call
const mockExamHistory = [
  {
    id: "exam123",
    name: "IELTS Academic Mock Test 1",
    dateTaken: "2024-05-15",
    assessmentStatus: "Available", // Could be "Pending", "Not Available"
  },
  {
    id: "exam124",
    name: "General Training Reading Practice",
    dateTaken: "2024-05-28",
    assessmentStatus: "Pending",
  },
  {
    id: "exam125",
    name: "IELTS Academic Mock Test 2",
    dateTaken: "2024-06-02",
    assessmentStatus: "Available",
  },
  {
    id: "exam126",
    name: "Speaking Section Practice",
    dateTaken: "2024-06-10",
    assessmentStatus: "Not Available",
  },
];

export default function ExamResultList() {
  const router = useRouter();
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call to fetch exam history
    const fetchHistory = async () => {
      setLoading(true);
      setError(null);
      try {
        // Replace this with your actual API call:
        // const response = await fetch('/api/user/exam-history');
        // if (!response.ok) throw new Error('Failed to fetch exam history');
        // const data = await response.json();
        // setExams(data);

        // Using mock data for now
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
        setExams(mockExamHistory);
      } catch (err) {
        setError(
          err.message || "An error occurred while fetching exam history."
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const handleGoBack = () => {
    router.back(); // Navigates to the previous page in history
  };

  const handleViewDetails = (examId) => {
    // Navigate to the specific exam result page
    // This page will be created later
    router.push(`/user/exam-results/${examId}`);
    console.log(`Navigating to details for exam ID: ${examId}`);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 2, sm: 4 }, mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton onClick={handleGoBack} sx={{ mr: 1 }} aria-label="go back">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1">
          My Exam History
        </Typography>
      </Box>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {!loading && !error && exams.length === 0 && (
        <Typography variant="subtitle1" sx={{ textAlign: "center", my: 5 }}>
          You haven't taken any exams yet.
        </Typography>
      )}

      {!loading && !error && exams.length > 0 && (
        <Paper elevation={3}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="exam history table">
              <TableHead
                sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}
              >
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Exam Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Date Taken
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Assessment Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exams.map((exam) => (
                  <TableRow
                    key={exam.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    <TableCell component="th" scope="row">
                      {exam.name}
                    </TableCell>
                    <TableCell align="center">{exam.dateTaken}</TableCell>
                    <TableCell align="center">
                      <Typography
                        variant="body2"
                        sx={{
                          color:
                            exam.assessmentStatus === "Available"
                              ? "success.main"
                              : exam.assessmentStatus === "Pending"
                              ? "warning.main"
                              : "text.secondary",
                          fontWeight: "medium",
                        }}
                      >
                        {exam.assessmentStatus}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        startIcon={<VisibilityIcon />}
                        onClick={() => handleViewDetails(exam.id)}
                        disabled={exam.assessmentStatus === "Not Available"} // Example: disable if not available
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Container>
  );
}
