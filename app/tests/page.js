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
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
          test 1 General
        </Button>
      </Link>
      <Link href="/tests/test2ac/listening" passHref>
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
          test 2 Academic
        </Button>
      </Link>
      <Link href="/tests/test2ge/listening" passHref>
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
          test 2 General
        </Button>
      </Link>
      <Link href="/tests/test3ac/listening" passHref>
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
          test 3 Academic
        </Button>
      </Link>
      {/* <Link href="/tests/test3ge/listening" passHref>
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
          test 3 General
        </Button>
      </Link> */}
      {/* <Link href="/tests/test4ac/listening" passHref>
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
          test 4 Academic
        </Button>
      </Link> */}
    </Box>
  );
}
