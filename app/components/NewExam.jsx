"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Chip,
  IconButton,
  Alert,
  Snackbar,
  CircularProgress,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Clear as ClearIcon,
} from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { getEnv } from "../utils/env";

// Validation schema
const schema = yup.object().shape({
  exam_name: yup.string().required("Exam name is required"),
  exam_type: yup.string().required("Exam type is required"),
  test_version: yup.string().required("Test version is required"),
});

const NewExam = () => {
  // Form control
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      exam_name: "",
      exam_type: "",
      test_version: "",
    },
  });

  // State management
  const [currentTab, setCurrentTab] = useState(0);
  const [listeningAnswers, setListeningAnswers] = useState(
    Array(40).fill().map(() => []) // Array of 40 questions, each containing an array of answers
  );
  const [readingAnswers, setReadingAnswers] = useState(
    Array(40).fill().map(() => []) // Array of 40 questions, each containing an array of answers
  );
  const [currentAnswer, setCurrentAnswer] = useState(""); // For input field
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Tab configuration
  const tabs = [
    { label: "Exam Info", value: 0 },
    { label: "Listening Answers", value: 1 },
    { label: "Reading Answers", value: 2 },
  ];

  // Exam type options
  const examTypes = [
    { value: "academic", label: "Academic" },
    { value: "general", label: "General Training" },
  ];

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  // Add answer to a specific question
  const addAnswer = (questionIndex, section = "listening") => {
    if (!currentAnswer.trim()) return;

    const answers = section === "listening" ? listeningAnswers : readingAnswers;
    const setAnswers = section === "listening" ? setListeningAnswers : setReadingAnswers;

    const newAnswers = [...answers];
    if (!Array.isArray(newAnswers[questionIndex])) {
      newAnswers[questionIndex] = [];
    }
    
    // Check if answer already exists (case-insensitive)
    const answerExists = newAnswers[questionIndex].some(
      answer => answer.toLowerCase() === currentAnswer.toLowerCase().trim()
    );
    
    if (!answerExists) {
      newAnswers[questionIndex] = [...newAnswers[questionIndex], currentAnswer.trim()];
      setAnswers(newAnswers);
    }
    
    setCurrentAnswer("");
  };

  // Remove answer from a specific question
  const removeAnswer = (questionIndex, answerIndex, section = "listening") => {
    const answers = section === "listening" ? listeningAnswers : readingAnswers;
    const setAnswers = section === "listening" ? setListeningAnswers : setReadingAnswers;

    const newAnswers = [...answers];
    newAnswers[questionIndex] = newAnswers[questionIndex].filter((_, idx) => idx !== answerIndex);
    setAnswers(newAnswers);
  };

  // Clear all answers for a question
  const clearQuestionAnswers = (questionIndex, section = "listening") => {
    const answers = section === "listening" ? listeningAnswers : readingAnswers;
    const setAnswers = section === "listening" ? setListeningAnswers : setReadingAnswers;

    const newAnswers = [...answers];
    newAnswers[questionIndex] = [];
    setAnswers(newAnswers);
  };

  // Bulk import answers (paste from clipboard)
  const handleBulkImport = (section = "listening") => {
    const input = prompt(
      `Paste answers for ${section} (one per line, use | to separate multiple answers for a question):`
    );
    
    if (!input) return;

    const lines = input.split('\n');
    const answers = section === "listening" ? listeningAnswers : readingAnswers;
    const setAnswers = section === "listening" ? setListeningAnswers : setReadingAnswers;
    const newAnswers = [...answers];

    lines.forEach((line, index) => {
      if (index < 40 && line.trim()) {
        const questionAnswers = line.split('|').map(answer => answer.trim()).filter(answer => answer);
        if (questionAnswers.length > 0) {
          newAnswers[index] = questionAnswers;
        }
      }
    });

    setAnswers(newAnswers);
  };

  // Submit form
  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Validate that we have answers
    const hasListeningAnswers = listeningAnswers.some(answers => answers.length > 0);
    const hasReadingAnswers = readingAnswers.some(answers => answers.length > 0);

    if (!hasListeningAnswers && !hasReadingAnswers) {
      setErrorMessage("Please provide at least some answers for listening or reading sections.");
      setLoading(false);
      return;
    }

    try {
      const { NEXT_PUBLIC_BACKEND_URL } = getEnv();
      const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

      const requestBody = {
        exam_name: data.exam_name,
        exam_type: data.exam_type,
        test_version: data.test_version,
        listening_answers: listeningAnswers,
        reading_answers: readingAnswers,
      };

      const response = await axios.post(
        `${NEXT_PUBLIC_BACKEND_URL}/admin/create-exam`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Exam created successfully!");
        // Reset form
        reset();
        setListeningAnswers(Array(40).fill().map(() => []));
        setReadingAnswers(Array(40).fill().map(() => []));
        setCurrentTab(0);
      }
    } catch (error) {
      console.error("Error creating exam:", error);
      const errorMsg = error.response?.data?.detail || "Failed to create exam. Please try again.";
      setErrorMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Render answer input section
  const renderAnswerSection = (section) => {
    const answers = section === "listening" ? listeningAnswers : readingAnswers;
    const sectionTitle = section === "listening" ? "Listening" : "Reading";

    return (
      <Box>
        <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5">{sectionTitle} Answer Key (40 Questions)</Typography>
          <Button
            variant="outlined"
            onClick={() => handleBulkImport(section)}
            size="small"
          >
            Bulk Import
          </Button>
        </Box>

        <Grid container spacing={2}>
          {answers.map((questionAnswers, questionIndex) => (
            <Grid item xs={12} sm={6} md={4} key={questionIndex}>
              <Paper sx={{ p: 2, height: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                  <Typography variant="h6" color="primary">
                    Q{questionIndex + 1}
                  </Typography>
                  {questionAnswers.length > 0 && (
                    <IconButton
                      size="small"
                      onClick={() => clearQuestionAnswers(questionIndex, section)}
                      color="error"
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  )}
                </Box>

                {/* Display existing answers */}
                <Box sx={{ mb: 2, minHeight: 60 }}>
                  {questionAnswers.length === 0 ? (
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                      No answers yet
                    </Typography>
                  ) : (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {questionAnswers.map((answer, answerIndex) => (
                        <Chip
                          key={answerIndex}
                          label={answer}
                          size="small"
                          onDelete={() => removeAnswer(questionIndex, answerIndex, section)}
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  )}
                </Box>

                {/* Add new answer */}
                <Box sx={{ display: "flex", gap: 1 }}>
                  <TextField
                    size="small"
                    placeholder="Add answer"
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addAnswer(questionIndex, section);
                      }
                    }}
                    fullWidth
                  />
                  <IconButton
                    size="small"
                    onClick={() => addAnswer(questionIndex, section)}
                    color="primary"
                    disabled={!currentAnswer.trim()}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  // Get total answers count for display
  const getTotalAnswers = (answers) => {
    return answers.reduce((total, questionAnswers) => total + questionAnswers.length, 0);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Create New Exam
      </Typography>

      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Tabs */}
          <Tabs value={currentTab} onChange={handleTabChange} sx={{ mb: 3 }}>
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {tab.label}
                    {tab.value === 1 && (
                      <Chip
                        size="small"
                        label={getTotalAnswers(listeningAnswers)}
                        color={getTotalAnswers(listeningAnswers) > 0 ? "primary" : "default"}
                      />
                    )}
                    {tab.value === 2 && (
                      <Chip
                        size="small"
                        label={getTotalAnswers(readingAnswers)}
                        color={getTotalAnswers(readingAnswers) > 0 ? "primary" : "default"}
                      />
                    )}
                  </Box>
                }
              />
            ))}
          </Tabs>

          {/* Tab Content */}
          {currentTab === 0 && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Exam Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="exam_name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Exam Name"
                        fullWidth
                        error={!!errors.exam_name}
                        helperText={errors.exam_name?.message}
                        placeholder="e.g., IELTS Practice Test 1"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="exam_type"
                    control={control}
                    render={({ field }) => (
                      <FormControl fullWidth error={!!errors.exam_type}>
                        <InputLabel>Exam Type</InputLabel>
                        <Select {...field} label="Exam Type">
                          {examTypes.map((type) => (
                            <MenuItem key={type.value} value={type.value}>
                              {type.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="test_version"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Test Version"
                        fullWidth
                        error={!!errors.test_version}
                        helperText={errors.test_version?.message}
                        placeholder="e.g., test1ac, test2ge"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {currentTab === 1 && renderAnswerSection("listening")}
          {currentTab === 2 && renderAnswerSection("reading")}

          <Divider sx={{ my: 3 }} />

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              onClick={() => {
                reset();
                setListeningAnswers(Array(40).fill().map(() => []));
                setReadingAnswers(Array(40).fill().map(() => []));
                setCurrentTab(0);
              }}
              disabled={loading}
            >
              Clear All
            </Button>
            <Button
              type="submit"
              variant="contained"
              startIcon={loading ? <CircularProgress size={20} /> : <SaveIcon />}
              disabled={loading}
              size="large"
            >
              {loading ? "Creating..." : "Create Exam"}
            </Button>
          </Box>
        </form>
      </Paper>

      {/* Success/Error Messages */}
      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={() => setSuccessMessage("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccessMessage("")}
          severity="success"
          variant="filled"
        >
          {successMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!errorMessage}
        autoHideDuration={8000}
        onClose={() => setErrorMessage("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setErrorMessage("")}
          severity="error"
          variant="filled"
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NewExam;
