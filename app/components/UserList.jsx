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
  Box,
  Container,
  CircularProgress,
  Alert,
  Tooltip,
  Chip,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TableSortLabel,
  TablePagination,
  Grid,
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

  // State for features
  const [totalUsers, setTotalUsers] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("desc");

  // State for filter inputs
  const [filters, setFilters] = useState({
    name: "",
    phone_number: "",
    role: "",
  });
  const [searchTerms, setSearchTerms] = useState(filters);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPage(0); // Reset to page 1 when filters change
      setSearchTerms(filters);
    }, 500);

    // Clean up the timer if filters change again before it fires
    return () => {
      clearTimeout(timerId);
    };
  }, [filters]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("access_token");
      if (localStorage.getItem("role") !== "admin") {
        throw new Error("You do not have permission to view this page.");
      }
      if (!token) {
        throw new Error("Authentication token not found. Please log in.");
      }

      const params = new URLSearchParams({
        page: page + 1,
        page_size: rowsPerPage,
        sort,
        order,
      });

      if (searchTerms.name) params.append("name", searchTerms.name);
      if (searchTerms.phone_number)
        params.append("phone_number", searchTerms.phone_number);
      if (searchTerms.role) params.append("role", searchTerms.role);

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users?${params.toString()}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data && Array.isArray(response.data.items)) {
        setUsers(response.data.items);
        setTotalUsers(response.data.total || 0);
      } else {
        throw new Error("Received an unexpected data format from the server.");
      }
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setError(
        err.message ||
          err.response?.data?.message ||
          "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  }, [page, rowsPerPage, sort, order, searchTerms]); // Depends on searchTerms now

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleFilterChange = (event) => {
    // Update the filter state immediately on every keystroke
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSort = (property) => {
    const isAsc = sort === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setSort(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (phoneNumber) => {
    router.push(`/admin/update-user/${phoneNumber}`);
  };

  const handleDelete = async (phoneNumber, name) => {
    if (window.confirm(`Are you sure you want to delete user: ${name}?`)) {
      try {
        const token = localStorage.getItem("access_token");
        await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/${phoneNumber}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        fetchUsers(); // Re-fetch data to reflect the deletion
      } catch (err) {
        console.error("Failed to delete user:", err);
        setError(err.response?.data?.message || "Failed to delete user.");
      }
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const headCells = [
    { id: "name", label: "Name" },
    { id: "phone_number", label: "Phone Number" },
    { id: "role", label: "Role" },
    { id: "allowed_exam", label: "Exam Allowed", sortable: false },
    { id: "updated_at", label: "Last Updated" },
    { id: "actions", label: "Actions", sortable: false, align: "right" },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        User Management
      </Typography>

      <Paper sx={{ p: 2, mb: 3, display: "flex" }}>
        <TextField
          fullWidth
          label="Search by Name"
          name="name"
          variant="outlined"
          size="small"
          defaultValue={filters.name}
          onChange={handleFilterChange}
        />
        <TextField
          fullWidth
          label="Search by Phone"
          name="phone_number"
          variant="outlined"
          size="small"
          defaultValue={filters.phone_number}
          onChange={handleFilterChange}
        />
        <FormControl fullWidth size="small">
          <InputLabel>Role</InputLabel>
          <Select
            name="role"
            value={filters.role}
            label="Role"
            onChange={handleFilterChange}
          >
            <MenuItem value="">
              <em>All Roles</em>
            </MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="user list table">
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.align || "left"}
                    sortDirection={sort === headCell.id ? order : false}
                  >
                    {headCell.sortable !== false ? (
                      <TableSortLabel
                        active={sort === headCell.id}
                        direction={sort === headCell.id ? order : "asc"}
                        onClick={() => handleSort(headCell.id)}
                      >
                        {headCell.label}
                      </TableSortLabel>
                    ) : (
                      headCell.label
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={headCells.length}
                    align="center"
                    sx={{ py: 4 }}
                  >
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : users.length > 0 ? (
                users.map((user) => (
                  <TableRow key={user.phone_number} hover>
                    <TableCell component="th" scope="row">
                      {`${user.name || ""} ${user.family_name || ""}`.trim()}
                    </TableCell>
                    <TableCell>{user.phone_number}</TableCell>
                    <TableCell>
                      <Chip
                        label={user.role}
                        color={user.role === "admin" ? "secondary" : "primary"}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{user.allowed_exam ? "Yes" : "No"}</TableCell>
                    <TableCell>{formatDate(user.updated_at)}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Edit">
                        <IconButton
                          onClick={() => handleEdit(user.phone_number)}
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
                          sx={{ ml: 1 }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={headCells.length}
                    align="center"
                    sx={{ py: 4 }}
                  >
                    <Typography>
                      No users found for the selected filters.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalUsers}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
};

export default UserList;
