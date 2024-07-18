import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const initialQuestions = [
  { id: "10", text: "11 Superheroes", answerId: null },
  { id: "11", text: "12 Just do it", answerId: null },
  { id: "12", text: "13 Count on me", answerId: null },
  { id: "13", text: "14 Speak up", answerId: null },
  { id: "14", text: "15 Jump for joy", answerId: null },
  { id: "15", text: "16 Sticks and stones", answerId: null },
];

const initialAnswers = [
  { id: "A", text: "A) involves painting and drawing" },
  { id: "B", text: "B) will be led by a prize-winning author" },
  { id: "C", text: "C) is aimed at children with a disability" },
  { id: "D", text: "D) involves a drama activity" },
  { id: "E", text: "E) focuses on new relationships" },
  { id: "F", text: "F) is aimed at a specific age group" },
  { id: "G", text: "G) explores an unhappy feeling" },
  { id: "H", text: "H) raises awareness of a particular culture" },
];

const DragDropComponent = ({ answers, setAnswers }) => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [availableAnswers, setAvailableAnswers] = useState(initialAnswers);

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
  }, [answers]);

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
      const newAnswers = [...prevAnswers];
      newAnswers[parseInt(questionId)] = null;
      return newAnswers;
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          margin: 8,
          borderRadius: 4,
          width: 500,
          padding: 16,
        }}
      >
        <Typography>Festival workshops</Typography>

        {questions.map((question) => (
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
          >
            <Typography sx={{ mr: 2 }}>{question.text}</Typography>

            <span style={{ color: "blue" }}>
              {question.answerId
                ? initialAnswers.find((a) => a.id === question.answerId)
                    ?.text || ""
                : ""}
            </span>
            {question.answerId && (
              <button
                style={{
                  position: "absolute",
                  right: 3,
                  top: 3,
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleReset(question.id)}
              >
                ✖
              </button>
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          margin: 8,
          borderRadius: 4,
          width: 500,
          padding: 16,
        }}
      >
        <Typography>Information</Typography>
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
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDropComponent;
