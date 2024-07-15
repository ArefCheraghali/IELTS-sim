import { Typography } from "@mui/material";
import React, { useState } from "react";

const initialQuestions = [
  { id: "q1", text: "11 Superheroes ", answer: "" },
  { id: "q2", text: "12 Just do it", answer: "" },
  { id: "q3", text: "13 Count on me", answer: "" },
  { id: "q4", text: "14 Speak up", answer: "" },
  { id: "q5", text: "15 Jump for joy", answer: "" },
  // { id: "q6", text: "16 Sticks and stones", answer: "" },
];

const initialAnswers = [
  { id: "a1", text: "A) involves painting and drawing" },
  { id: "a2", text: "B) will be led by a prize-winning author" },
  { id: "a3", text: "C) is aimed at children with a disability" },
  { id: "a4", text: "D) involves a drama activity" },
  { id: "a5", text: "E) focuses on new relationships" },
  // { id: "a6", text: "F) is aimed at a specific age group" },
  // { id: "a7", text: "G) explores an unhappy feeling" },
  // { id: "a8", text: "H) raises awareness of a particular culture" },
];

const DragDropComponent = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [answers, setAnswers] = useState(initialAnswers);

  const handleDragStart = (e, text) => {
    e.dataTransfer.setData("text/plain", text);
  };

  const handleDrop = (e, index) => {
    const text = e.dataTransfer.getData("text/plain");
    const newQuestions = questions.map((question, i) => {
      if (i === index) {
        return { ...question, answer: text };
      } else if (question.answer === text) {
        return { ...question, answer: "" };
      }
      return question;
    });

    const newAnswers = answers.filter((answer) => answer.text !== text);
    if (questions[index].answer) {
      newAnswers.push({
        id: `a${newAnswers.length + 1}`,
        text: questions[index].answer,
      });
    }

    setQuestions(newQuestions);
    setAnswers(newAnswers);
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleReset = (index) => {
    const answerToReset = questions[index].answer;
    const newQuestions = questions.map((question, i) => {
      if (i === index) {
        return { ...question, answer: "" };
      }
      return question;
    });

    const newAnswers = [
      ...answers,
      { id: `a${answers.length + 1}`, text: answerToReset },
    ];
    setQuestions(newQuestions);
    setAnswers(newAnswers);
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

        {questions.map((question, index) => (
          <div
            key={question.id}
            onDrop={(e) => handleDrop(e, index)}
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
            {question.text}
            <span style={{ color: "blue" }}> {question.answer}</span>
            {question.answer && (
              <button
                onClick={() => handleReset(index)}
                style={{ position: "absolute", right: "10px", top: "10px" }}
              >
                x
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
        {answers.map((answer) => (
          <div
            key={answer.id}
            draggable
            onDragStart={(e) => handleDragStart(e, answer.text)}
            style={{
              userSelect: "none",
              padding: 16,
              margin: "0 0 8px 0",
              minHeight: "30px",
              backgroundColor: "white",
              border: "1px solid lightgrey",
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
