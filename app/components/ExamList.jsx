"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Container,
  CircularProgress,
  Alert,
  Tooltip,
  Snackbar,
  Button,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility"; // 👁 Preview icon

const ExamList = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const router = useRouter();

  const fetchExams = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("access_token");
      const role = localStorage.getItem("role");

      if (role !== "admin") {
        setError("You do not have permission to view this page.");
        setLoading(false);
        return;
      }
      if (!token) {
        setError("Authentication token not found. Please log in.");
        setLoading(false);
        return;
      }

      const { NEXT_PUBLIC_BACKEND_URL } = require('../utils/env').getEnv();
      const response = await axios.get(
        `${NEXT_PUBLIC_BACKEND_URL}/exams`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        setExams(response.data.items || response.data);
      } else {
        setError(`Failed to fetch exams. Status: ${response.status}`);
      }
    } catch (error) {
      if (error.response) {
        setError(
          `Error fetching exams: ${
            error.response.data.detail || error.response.statusText
          }`
        );
      } else if (error.request) {
        setError("Error fetching exams: No response from server.");
      } else {
        setError(`Error fetching exams: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  const handleCloseSuccess = () => {
    setSuccess(null);
  };

  const handleDelete = async (examId, examTitle) => {
    if (!window.confirm(`Delete exam "${examTitle}"?`)) return;
    try {
      const token = localStorage.getItem("access_token");
      const { NEXT_PUBLIC_BACKEND_URL } = require('../utils/env').getEnv();
      const response = await axios.delete(
        `${NEXT_PUBLIC_BACKEND_URL}/exams/${examId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        setExams(exams.filter((e) => e.id !== examId));
        setSuccess(`Exam "${examTitle}" deleted successfully.`);
      } else {
        alert(
          `Failed to delete exam: ${response.data.detail || "Unknown error"}`
        );
      }
    } catch (error) {
      alert(
        `Error deleting exam: ${error.response?.data?.detail || error.message}`
      );
    }
  };

  const handleUpdate = (examId) => {
    router.push(`/admin/update-exam/${examId}`);
  };

  const handlePreview = (examId) => {
    router.push(`/admin/preview-exam/${examId}`);
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 1 }}>Loading exams...</Typography>
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
    <Container maxWidth="lg" sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Exam Management
      </Typography>

      {exams.length === 0 ? (
        <Typography align="center" sx={{ my: 5 }}>
          No exams found.
        </Typography>
      ) : (
        <Paper elevation={3}>
          <TableContainer>
            <Table>
              <TableHead
                sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}
              >
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Created At</TableCell>
                  <TableCell>Updated At</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exams.map((exam) => (
                  <TableRow key={exam.id} hover>
                    <TableCell>{exam.title || "-"}</TableCell>
                    <TableCell>{exam.description || "-"}</TableCell>
                    <TableCell>
                      {exam.created_at
                        ? new Date(exam.created_at).toLocaleString()
                        : "-"}
                    </TableCell>
                    <TableCell>
                      {exam.updated_at
                        ? new Date(exam.updated_at).toLocaleString()
                        : "-"}
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Preview">
                        <IconButton
                          onClick={() => handlePreview(exam.id)}
                          color="info"
                          size="small"
                        >
                          <VisibilityIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton
                          onClick={() => handleUpdate(exam.id)}
                          color="primary"
                          size="small"
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() => handleDelete(exam.id, exam.title)}
                          color="error"
                          size="small"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}

      <Snackbar
        open={!!success}
        autoHideDuration={4000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          {success}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ExamList;
