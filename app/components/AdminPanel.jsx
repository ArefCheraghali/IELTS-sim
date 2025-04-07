"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import UserList from "./UserList";
import NewUserForm from "./NewUserForm";

export default function AdminPanel() {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    router.push("/");
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
        <Button
          onClick={() => setShowForm(!showForm)}
          variant="contained"
          sx={{
            backgroundColor: "#856404",
            "&:hover": {
              backgroundColor: "#a3790a",
            },
            "&:active": {
              backgroundColor: "#6b4f03",
            },
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {showForm ? "Show Users" : "New User"}
        </Button>

        <Button
          onClick={handleLogout}
          variant="contained"
          sx={{
            backgroundColor: "#dc3545", // Red color for logout
            "&:hover": {
              backgroundColor: "#c82333", // Darker red on hover
            },
            "&:active": {
              backgroundColor: "#bd2130", // Even darker red when clicked
            },
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Logout
        </Button>
      </Box>

      {showForm ? <NewUserForm /> : <UserList />}
    </Box>
  );
}
