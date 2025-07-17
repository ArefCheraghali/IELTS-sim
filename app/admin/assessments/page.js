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
  Alert,
} from "@mui/material";
import GradingIcon from "@mui/icons-material/Grading"; // Icon for the assess button

// Mock data - Replace this with your actual API call
const mockSubmissions = [
  {
    submissionId: "sub_001",
    userName: "John Doe",
    userPhone: "09111234567",
    testName: "IELTS Academic Mock Test 2",
    dateSubmitted: "2025-06-08",
  },
  {
    submissionId: "sub_002",
    userName: "Jane Smith",
    userPhone: "09129876543",
    testName: "IELTS General Mock Test 1",
    dateSubmitted: "2025-06-07",
  },
  {
    submissionId: "sub_003",
    userName: "Peter Jones",
    userPhone: "09131122334",
    testName: "IELTS Academic Mock Test 4",
    dateSubmitted: "2025-06-06",
  },
];

export default function AssessmentsPage() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call to fetch unassessed writings
    const fetchSubmissions = async () => {
      setLoading(true);
      setError(null);
      try {
        // TODO: Replace with your actual API call
        // const token = localStorage.getItem("access_token");
        // const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/assessments/pending`, { headers: { Authorization: `Bearer ${token}` } });
        // setSubmissions(response.data);

        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
        setSubmissions(mockSubmissions);
      } catch (err) {
        setError(
          "Failed to fetch pending assessments. Please try again later."
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleAssessClick = (submissionId) => {
    router.push(`/admin/assessments/${submissionId}`);
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 1 }}>Loading Pending Assessments...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 2, sm: 4 }, mb: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
        Pending Writing Assessments
      </Typography>

      {submissions.length === 0 ? (
        <Typography variant="subtitle1" sx={{ textAlign: "center", my: 5 }}>
          There are no writing submissions waiting for assessment. Great job!
        </Typography>
      ) : (
        <Paper elevation={3} sx={{ overflow: "hidden" }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="pending assessments table"
            >
              <TableHead
                sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}
              >
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>User Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Test</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Date Submitted
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {submissions.map((sub) => (
                  <TableRow key={sub.submissionId} hover>
                    <TableCell component="th" scope="row">
                      {sub.userName}
                      <Typography variant="body2" color="text.secondary">
                        {sub.userPhone}
                      </Typography>
                    </TableCell>
                    <TableCell>{sub.testName}</TableCell>
                    <TableCell align="center">
                      {new Date(sub.dateSubmitted).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<GradingIcon />}
                        onClick={() => handleAssessClick(sub.submissionId)}
                      >
                        Assess Now
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
