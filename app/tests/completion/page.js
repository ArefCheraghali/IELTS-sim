'use client';

import { useRouter } from 'next/navigation';
import { Button, Container, Typography, Box } from '@mui/material';

export default function CompletionPage() {
  const router = useRouter();

  const handleReturnToDashboard = () => {
    router.push('/user');
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center',
          gap: 4
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Exam Submitted Successfully
        </Typography>
        <Typography variant="body1" gutterBottom>
          Thank you for completing the exam. You can now return to your dashboard.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleReturnToDashboard}
        >
          Return to Dashboard
        </Button>
      </Box>
    </Container>
  );
}