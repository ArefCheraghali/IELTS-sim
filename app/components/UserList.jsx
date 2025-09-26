"use client";

import React, { useEffect, useState, useCallback } from "react";
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
  TextField,
  Button,
  Pagination,
  Stack,
  Snackbar,
  MenuItem,
  Chip,
  Box, // Box is better for flexible layouts
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LockResetIcon from "@mui/icons-material/LockReset";

const UserList = () => {
  // --- Your existing state and logic (unchanged) ---
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const [filters, setFilters] = useState({
    name: "",
    family_name: "", // Added family_name to state
    phone_number: "",
    role: "",
  });

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("access_token");
      const role = localStorage.getItem("role");

      if (role !== "admin") {
        throw new Error("You do not have permission to view this page.");
      }
      if (!token) {
        throw new Error("Authentication token not found. Please log in.");
      }

      const params = {
        page,
        page_size: pageSize,
        ...Object.fromEntries(
          Object.entries(filters).filter(([_, v]) => v !== "")
        ),
      };

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params,
        }
      );

      if (response.status === 200) {
        setUsers(response.data.items || []);
        setTotalPages(response.data.total_pages || 1);
      } else {
        throw new Error(`Failed to fetch users. Status: ${response.status}`);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.detail ||
        error.message ||
        "An unexpected error occurred.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, filters]); // Added filters to dependency array

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]); // fetchUsers is now stable due to useCallback

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1); // Reset to page 1 for new search
    // fetchUsers is already called by the useEffect when filters change
  };

  const handleCloseSuccess = () => {
    setSuccess(null);
  };

  const handleDelete = async (phoneNumber, userName) => {
    if (!window.confirm(`Delete user "${userName}" (Phone: ${phoneNumber})?`))
      return;
    try {
      const token = localStorage.getItem("access_token");
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${phoneNumber}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess(`User "${userName}" deleted successfully.`);
      fetchUsers(); // Refresh list
    } catch (error) {
      alert(
        `Error deleting user: ${error.response?.data?.detail || error.message}`
      );
    }
  };

  const handleUpdate = (phoneNumber) => {
    router.push(`/admin/update-user/${phoneNumber}`);
  };

  const handleResetPassword = async (phoneNumber, userName) => {
    if (!window.confirm(`Reset password for "${userName}"?`)) return;
    try {
      const token = localStorage.getItem("access_token");
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/users/${phoneNumber}/reset-password`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess(`Password for "${userName}" reset successfully.`);
    } catch (error) {
      alert(
        `Error resetting password: ${
          error.response?.data?.detail || error.message
        }`
      );
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "–";
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // --- UI Rendering ---

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Loading users...</Typography>
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
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        User Management
      </Typography>

      <Paper component="form" onSubmit={handleSearch} sx={{ p: 2, mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allows items to wrap on smaller screens
            gap: 2, // Consistent spacing between items
            alignItems: "center",
          }}
        >
          <TextField
            label="Name"
            name="name"
            size="small"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            sx={{ flexGrow: 1, minWidth: "150px" }}
          />
          <TextField
            label="Family Name"
            name="family_name"
            size="small"
            value={filters.family_name}
            onChange={(e) =>
              setFilters({ ...filters, family_name: e.target.value })
            }
            sx={{ flexGrow: 1, minWidth: "150px" }}
          />
          <TextField
            label="Phone Number"
            name="phone_number"
            size="small"
            value={filters.phone_number}
            onChange={(e) =>
              setFilters({ ...filters, phone_number: e.target.value })
            }
            sx={{ flexGrow: 1, minWidth: "180px" }}
          />
          <TextField
            select
            label="Role"
            name="role"
            size="small"
            value={filters.role}
            onChange={(e) => setFilters({ ...filters, role: e.target.value })}
            sx={{ flexGrow: 1, minWidth: 120 }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>
          <Button type="submit" variant="contained">
            Search
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="user list table">
            <TableHead>
              <TableRow sx={{ "& th": { fontWeight: "bold" } }}>
                <TableCell>Name</TableCell>
                <TableCell>Family Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell align="center">Allowed Exam</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Updated At</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} align="center" sx={{ py: 5 }}>
                    <Typography>
                      No users found for the selected filters.
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user.phone_number} hover>
                    <TableCell>{user.name || "–"}</TableCell>
                    <TableCell>{user.family_name || "–"}</TableCell>
                    <TableCell>{user.phone_number}</TableCell>
                    <TableCell align="center">
                      {user.allowed_exam ? "Yes" : "No"}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.role}
                        color={user.role === "admin" ? "secondary" : "primary"}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{formatDate(user.created_at)}</TableCell>
                    <TableCell>{formatDate(user.updated_at)}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Reset Password">
                        <IconButton
                          onClick={() =>
                            handleResetPassword(user.phone_number, user.name)
                          }
                          color="warning"
                          size="small"
                        >
                          <LockResetIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton
                          onClick={() => handleUpdate(user.phone_number)}
                          color="primary"
                          size="small"
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() =>
                            handleDelete(user.phone_number, user.name)
                          }
                          color="error"
                          size="small"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {totalPages > 1 && (
          <Stack alignItems="center" sx={{ my: 2 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              color="primary"
            />
          </Stack>
        )}
      </Paper>

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

export default UserList;
