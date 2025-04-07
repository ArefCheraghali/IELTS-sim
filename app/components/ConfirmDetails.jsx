"use client";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useState } from "react";

const ConfirmDetails = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const testData = JSON.parse(localStorage.getItem("selectedTest"));
    setUser(userData);
    setSelectedTest(testData);
  }, []);

  const handleConfirm = () => {
    // Navigate to instructions first
    router.push("/tests/instructions");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
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
                Name: {user.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone Number: {user.phone}
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
