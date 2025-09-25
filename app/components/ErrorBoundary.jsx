"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error boundary caught an error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            p: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom color="error">
            Something went wrong
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 600 }}>
            We're sorry, but something unexpected happened. Please try reloading
            the page or contact support if the problem persists.
          </Typography>
          <Button variant="contained" onClick={this.handleReload}>
            Reload Page
          </Button>
          {process.env.NODE_ENV === "development" && (
            <Box sx={{ mt: 3, p: 2, bgcolor: "grey.100", borderRadius: 1 }}>
              <Typography variant="body2" component="pre">
                {this.state.error && this.state.error.toString()}
              </Typography>
            </Box>
          )}
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
