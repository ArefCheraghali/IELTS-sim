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
  Box,
  Container,
  CircularProgress,
  Alert,
  Tooltip, // Added for tooltips
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
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

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUsers(response.data);
        } else {
          setError(`Failed to fetch users. Status: ${response.status}`);
        }
      } catch (error) {
        if (error.response) {
          setError(
            `Error fetching users: ${
              error.response.data.detail || error.response.statusText
            }`
          );
        } else if (error.request) {
          setError("Error fetching users: No response from server.");
        } else {
          setError(`Error fetching users: ${error.message}`);
        }
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (phoneNumber, userName) => {
    if (
      !window.confirm(
        `Are you sure you want to delete user "${userName}" (Phone: ${phoneNumber})? This action cannot be undone.`
      )
    ) {
      return;
    }
    try {
      const token = localStorage.getItem("access_token");
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${phoneNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUsers(users.filter((user) => user.phone_number !== phoneNumber));
        // Optionally, show a success notification (e.g., with a Snackbar)
        // alert(`User ${userName} deleted successfully.`);
      } else {
        console.error("Failed to delete user:", response.data);
        alert(
          `Failed to delete user: ${response.data.detail || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("There was an error deleting the user:", error);
      alert(
        `Error deleting user: ${
          error.response?.data?.detail || error.message || "Please try again."
        }`
      );
    }
  };

  const handleUpdate = (phoneNumber) => {
    router.push(`/admin/update-user/${phoneNumber}`);
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 1 }}>Loading users...</Typography>
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
      <Typography variant="h4" component="h1" sx={{ mb: 2, mt: -4 }}>
        User Management
      </Typography>
      {users.length === 0 && !loading && (
        <Typography variant="subtitle1" sx={{ textAlign: "center", my: 5 }}>
          No users found.
        </Typography>
      )}
      {users.length > 0 && (
        <Paper elevation={3} sx={{ overflow: "hidden" }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-label="user list table">
              <TableHead
                sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}
              >
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>
                    Name
                  </TableCell>{" "}
                  {/* Adjusted padding */}
                  <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>
                    Family Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>
                    Phone Number
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "bold", py: 1.5 }}
                    align="center"
                  >
                    Allowed Exam
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>
                    Role
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>
                    Created At
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>
                    Updated At
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "bold", py: 1.5 }}
                    align="center"
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow
                    key={user.phone_number || user.id}
                    hover
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.name || "-"}
                    </TableCell>
                    <TableCell>{user.family_name || "-"}</TableCell>
                    <TableCell>{user.phone_number}</TableCell>
                    <TableCell align="center">
                      <Typography
                        variant="body2"
                        sx={{
                          color: user.allowed_exam
                            ? "success.main"
                            : "error.main",
                          fontWeight: "medium",
                        }}
                      >
                        {user.allowed_exam ? "Yes" : "No"}
                      </Typography>
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      {user.created_at
                        ? new Date(user.created_at).toLocaleString()
                        : "-"}
                    </TableCell>
                    <TableCell>
                      {user.updated_at
                        ? new Date(user.updated_at).toLocaleString()
                        : "-"}
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip
                        title={`Edit user ${user.name || user.phone_number}`}
                      >
                        <IconButton
                          onClick={() => handleUpdate(user.phone_number)}
                          color="primary"
                          aria-label={`edit user ${
                            user.name || user.phone_number
                          }`}
                          size="small"
                          sx={{
                            "&:hover": { backgroundColor: "primary.lighter" },
                          }} // Subtle hover effect
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        title={`Delete user ${user.name || user.phone_number}`}
                      >
                        <IconButton
                          onClick={() =>
                            handleDelete(
                              user.phone_number,
                              user.name || user.phone_number
                            )
                          }
                          color="error"
                          aria-label={`delete user ${
                            user.name || user.phone_number
                          }`}
                          size="small"
                          sx={{
                            ml: 1,
                            "&:hover": { backgroundColor: "error.lighter" },
                          }} // Subtle hover effect
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
    </Container>
  );
};

export default UserList;
