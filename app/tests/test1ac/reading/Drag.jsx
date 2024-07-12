// components/DragDropComponent.js
import React, { useState } from "react";

const initialQuestions = [
  { id: "q1", text: "The capital of France is", answer: "" },
  { id: "q2", text: "The largest ocean is", answer: "" },
];

const initialAnswers = [
  { id: "a1", text: "Paris" },
  { id: "a2", text: "Pacific" },
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
          border: "1px solid lightgrey",
          borderRadius: 4,
          width: 300,
          padding: 16,
        }}
      >
        <h3>Questions</h3>
        {questions.map((question, index) => (
          <div
            key={question.id}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
            style={{
              marginBottom: "16px",
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
          border: "1px solid lightgrey",
          borderRadius: 4,
          width: 200,
          padding: 16,
        }}
      >
        <h3>Answers</h3>
        {answers.map((answer) => (
          <div
            key={answer.id}
            draggable
            onDragStart={(e) => handleDragStart(e, answer.text)}
            style={{
              userSelect: "none",
              padding: 16,
              margin: "0 0 8px 0",
              minHeight: "50px",
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
