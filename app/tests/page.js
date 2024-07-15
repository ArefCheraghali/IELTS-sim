"use client";
import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";

export default function Tests() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      {user && (
        <Typography variant="h6" gutterBottom>
          Candidate: {user.name} ({user.phone})
        </Typography>
      )}
      <Typography variant="h4" gutterBottom>
        Select a Test
      </Typography>
      <Link href="/tests/test1ac/listening" passHref>
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
          test 1 Academic
        </Button>
      </Link>
      <Link href="/tests/test1ge/listening" passHref>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          test 1 general
        </Button>
      </Link>
    </Box>
  );
}
