"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Box,
  Button,
  Typography,
  Container,
  CircularProgress,
  Paper,
  Divider,
  Grid,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// Mock data for a single submission - Replace with your API call
const getMockSubmissionDetail = (id) => ({
  submissionId: id,
  userName: "John Doe",
  userPhone: "09111234567",
  testName: "IELTS Academic Mock Test 2",
  dateSubmitted: "2025-06-08",
  task1:
    "The first writing task submitted by the user goes here. It could be quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illuse quite long, describing a chart or a diagram. The text would continue, illustrating the user's ability to summarize and present information accurately.",
  task2:
    "The second writing task, the essay, would be placed here. This text is typically longer and presents an argument or discusses a point of view. It demonstrates the user's ability to construct a coherent argument, use a range of vocabulary, and show command of grammatical structures.",
});

// Component to display a single writing task
const WritingTaskViewer = ({ title, text }) => (
  <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, height: "100%" }}>
    <Typography variant="h6" component="h3" gutterBottom>
      {title}
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <Typography
      variant="body1"
      sx={{ whiteSpace: "pre-wrap", fontFamily: "serif", lineHeight: 1.75 }}
    >
      {text}
    </Typography>
  </Paper>
);

export default function AssessDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { submissionId } = params;

  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    if (submissionId) {
      const fetchSubmission = async () => {
        setLoading(true);
        setError(null);
        try {
          // TODO: Replace with your actual API call
          // const token = localStorage.getItem("access_token");
          // const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/assessments/${submissionId}`, { headers: { Authorization: `Bearer ${token}` } });
          // setSubmission(response.data);

          await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network delay
          setSubmission(getMockSubmissionDetail(submissionId));
        } catch (err) {
          setError("Failed to fetch submission details.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchSubmission();
    }
  }, [submissionId]);

  const handleMarkAsAssessed = async () => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with your actual API call
      // const token = localStorage.getItem("access_token");
      // await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/assessments/${submissionId}/complete`, {}, { headers: { Authorization: `Bearer ${token}` } });

      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      setSnackbar({
        open: true,
        message: "Assessment completed successfully! Redirecting...",
        severity: "success",
      });

      setTimeout(() => {
        router.push("/admin/assessments");
      }, 2000);
    } catch (err) {
      console.error("Failed to mark as assessed:", err);
      setSnackbar({
        open: true,
        message: "Failed to submit assessment. Please try again.",
        severity: "error",
      });
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
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

  if (!submission) {
    return null; // Or show a "Not Found" message
  }

  return (
    <Container maxWidth="lg" sx={{ my: { xs: 2, sm: 4 }, height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton onClick={() => router.back()} aria-label="go back">
            <ArrowBackIcon />
          </IconButton>
          <Box>
            <Typography variant="h5" component="h1">
              Assess Writings
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {submission.userName} - {submission.testName}
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={
            isSubmitting ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <CheckCircleOutlineIcon />
            )
          }
          onClick={handleMarkAsAssessed}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Mark as Assessed"}
        </Button>
      </Box>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <WritingTaskViewer title="Writing Task 1" text={submission.task1} />
        </Grid>
        <Grid item xs={12} md={6}>
          <WritingTaskViewer title="Writing Task 2" text={submission.task2} />
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
