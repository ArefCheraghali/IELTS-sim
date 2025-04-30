import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";

const DragDrop = ({
  initialQuestions,
  initialAnswers,
  answers,
  setAnswers,
  title,
  infoTitle,
  questionRefs,
  startIndex,
}) => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [availableAnswers, setAvailableAnswers] = useState(initialAnswers);

  useEffect(() => {
    // Only assign refs without scrolling
    questions.forEach((_, index) => {
      if (questionRefs && startIndex !== undefined) {
        questionRefs.current[startIndex + index] = null;
      }
    });
  }, [questions, questionRefs, startIndex]);

  const [updatedQuestions, setUpdatedQuestions] = useState(initialQuestions);

  useEffect(() => {
    const updatedQuestions = initialQuestions.map((question) => ({
      ...question,
      answerId: answers[question.id] || null,
    }));

    setQuestions(updatedQuestions);

    const usedAnswerIds = new Set(
      updatedQuestions.map((q) => q.answerId).filter((id) => id !== null)
    );
    const updatedAvailableAnswers = initialAnswers.filter(
      (answer) => !usedAnswerIds.has(answer.id)
    );
    setAvailableAnswers(updatedAvailableAnswers);
  }, [initialQuestions, initialAnswers, answers]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("answerId", id);
  };

  const handleDrop = (e, questionId) => {
    const answerId = e.dataTransfer.getData("answerId");
    const oldAnswerId = questions.find((q) => q.id === questionId).answerId;

    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === questionId ? { ...q, answerId } : q))
    );

    setAvailableAnswers((prevAnswers) =>
      oldAnswerId
        ? [
            ...prevAnswers.filter((a) => a.id !== answerId),
            initialAnswers.find((a) => a.id === oldAnswerId),
          ]
        : prevAnswers.filter((a) => a.id !== answerId)
    );

    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[parseInt(questionId)] = answerId;
      return newAnswers;
    });

    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleReset = (questionId) => {
    const answerToReset = questions.find((q) => q.id === questionId).answerId;

    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, answerId: null } : q
      )
    );

    setAvailableAnswers((prevAnswers) => [
      ...prevAnswers,
      initialAnswers.find((a) => a.id === answerToReset),
    ]);

    setAnswers((prevAnswers) => {
      const newAnswers = Array(prevAnswers.length).fill(null);
      prevAnswers.forEach((answer, index) => {
        if (index !== parseInt(questionId)) {
          newAnswers[index] = answer;
        }
      });
      return newAnswers;
    });
  };

  const handleClearAll = () => {
    setQuestions(questions.map((q) => ({ ...q, answerId: null })));
    setAvailableAnswers(initialAnswers);
    setAnswers(Array(answers.length).fill(null));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* <Button
        onClick={handleClearAll}
        variant="outlined"
        sx={{ mb: 2, alignSelf: "flex-end" }}
      >
        Clear All
      </Button> */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div
          style={{
            padding: 8,
            width: "50%",
          }}
        >
          <Typography>{title}</Typography>
          {questions.map((question, index) => (
            <div
              key={question.id}
              onDrop={(e) => handleDrop(e, question.id)}
              onDragOver={handleDragOver}
              style={{
                marginBottom: "8px",
                padding: "8px",
                border: "1px solid lightgrey",
                minHeight: "50px",
                backgroundColor: "white",
                position: "relative",
              }}
              ref={
                questionRefs && startIndex !== undefined
                  ? (el) => (questionRefs.current[startIndex + index] = el)
                  : null
              }
            >
              <Typography sx={{ mr: 2, fontSize: "0.9rem" }}>
                {question.text}
              </Typography>

              <span style={{ color: "#1976d2" }}>
                {question.answerId
                  ? initialAnswers.find((a) => a.id === question.answerId)
                      ?.text || ""
                  : ""}
              </span>
              {question.answerId && (
                <Button
                  style={{
                    position: "absolute",
                    right: -18,
                    top: -3,
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleReset(question.id)}
                >
                  ✖
                </Button>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            margin: 8,
            borderRadius: 4,
            padding: 8,
            width: "50%",
          }}
        >
          <Typography>{infoTitle}</Typography>
          {availableAnswers.map((answer) => (
            <div
              key={answer.id}
              draggable
              onDragStart={(e) => handleDragStart(e, answer.id)}
              style={{
                marginBottom: "8px",
                padding: "8px",
                border: "1px solid lightgrey",
                borderRadius: 4,
                cursor: "pointer",
                backgroundColor: "white",
              }}
            >
              <Typography>{answer.text}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
