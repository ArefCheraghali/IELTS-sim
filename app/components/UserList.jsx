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
    // Fetch users from the API
    const fetchUsers = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem("access_token");

        // Check if the user is an admin
        const role = localStorage.getItem("role");
        if (role !== "admin") {
          setError("You do not have permission to view this page.");
          setLoading(false);
          return;
        }

        // Fetch users from the API
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add the Authorization header
            },
          }
        );

        if (response.status === 200) {
          setUsers(response.data); // Set the user data
        } else {
          setError("Failed to fetch users.");
        }
      } catch (error) {
        setError("There was an error fetching the users.");
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle delete user
  const handleDelete = async (phoneNumber) => {
    try {
      const token = localStorage.getItem("access_token");

      // Send DELETE request to the API
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${phoneNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        // Remove the deleted user from the state
        setUsers(users.filter((user) => user.phone_number !== phoneNumber));
      } else {
        console.error("Failed to delete user:", response.data);
      }
    } catch (error) {
      console.error("There was an error deleting the user:", error);
    }
  };

  const handleUpdate = (phoneNumber) => {
    router.push(`/admin/update-user/${phoneNumber}`);
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        User List
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Family Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Phone Number</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Allowed Exam</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Created At</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Updated At</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.family_name}</TableCell>
              <TableCell>{user.phone_number}</TableCell>
              <TableCell>{user.allowed_exam ? "Yes" : "No"}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                {new Date(user.created_at).toLocaleString()}
              </TableCell>
              <TableCell>
                {new Date(user.updated_at).toLocaleString()}
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleUpdate(user.phone_number)}
                  color="primary"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(user.phone_number)}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
