"use client";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useState } from "react";
import axios from "axios";

const ConfirmDetails = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (!userData) {
          setError("Phone number not found. Please log in again.");
          setLoading(false);
          return;
        }

        const phoneNumber = userData;
        const token = localStorage.getItem("access_token");
        const testData = JSON.parse(localStorage.getItem("selectedTest"));

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${phoneNumber}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUser(response.data);
          setSelectedTest(testData);
        } else {
          setError("Failed to fetch user data.");
        }
      } catch (error) {
        setError("There was an error fetching the user data.");
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleConfirm = () => {
    router.push("/tests/instructions");
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        bgcolor: "#f5f5f5",
        padding: 4,
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          p: 4,
          width: "100%",
          maxWidth: 600,
          boxShadow: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Box
            component="img"
            src="/images/ielts-usercheck.png"
            alt="Confirm details"
            sx={{ width: 40, height: 40, mr: 2 }}
          />
          <Typography variant="h5">Confirm your details</Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          {user && (
            <>
              <Typography variant="body1" gutterBottom>
                Name: {user.name} {user.family_name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone Number: {user.phone_number}
              </Typography>
            </>
          )}

          {selectedTest && (
            <Typography variant="body1" gutterBottom>
              Selected Test: Test {selectedTest.testId}{" "}
              {selectedTest.testType.charAt(0).toUpperCase() +
                selectedTest.testType.slice(1)}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <InfoIcon color="info" sx={{ mr: 1 }} />
          <Typography variant="body2">
            If your details aren't correct, please inform the invigilator.
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleConfirm}
          sx={{ mt: 2 }}
        >
          My details are correct
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmDetails;
