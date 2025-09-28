import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Box, Paper, Typography, List, ListItem } from "@mui/material";

// Helper component to fix StrictMode compatibility issue
const StrictModeDroppable = ({ children, ...props }) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }
  return <Droppable {...props}>{children}</Droppable>;
};

const DragDrop = ({
  initialQuestions,
  initialAnswers,
  setAnswers,
  answers,
  title,
  infoTitle,
  questionRefs,
  startIndex,
  refStartIndex = 0,
}) => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [answerOptions, setAnswerOptions] = useState(initialAnswers);

  useEffect(() => {
    const newQuestions = initialQuestions.map((q, index) => {
      const parentAnswer = answers[startIndex + index];
      return { ...q, answerId: parentAnswer || null };
    });
    setQuestions(newQuestions);

    const usedAnswerIds = newQuestions.map((q) => q.answerId).filter(Boolean);
    setAnswerOptions(
      initialAnswers.filter((a) => !usedAnswerIds.includes(a.id))
    );
  }, [answers, startIndex, initialQuestions, initialAnswers]);

  // THIS IS THE CORRECTED AND COMPLETE FUNCTION
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const sourceId = source.droppableId;
    const destId = destination.droppableId;
    const newParentAnswers = [...answers];

    // Case 1: Moving from answer list to a question
    if (sourceId === "answer-list" && destId.startsWith("question-")) {
      const destQuestionIndex = initialQuestions.findIndex(
        (q) => `question-${q.id}` === destId
      );
      if (destQuestionIndex === -1) return;

      const oldAnswerInDest = newParentAnswers[startIndex + destQuestionIndex];
      newParentAnswers[startIndex + destQuestionIndex] = draggableId;

      // If the destination had an answer, find which question it came from and clear it
      if (oldAnswerInDest) {
        const sourceQuestionWithOldAnswer = initialQuestions.findIndex(
          (q, idx) => newParentAnswers[startIndex + idx] === oldAnswerInDest
        );
        if (
          sourceQuestionWithOldAnswer !== -1 &&
          sourceQuestionWithOldAnswer !== destQuestionIndex
        ) {
          newParentAnswers[startIndex + sourceQuestionWithOldAnswer] = null;
        }
      }
    }
    // Case 2: Moving from a question back to the answer list
    else if (sourceId.startsWith("question-") && destId === "answer-list") {
      const sourceQuestionIndex = initialQuestions.findIndex(
        (q) => `question-${q.id}` === sourceId
      );
      if (sourceQuestionIndex !== -1) {
        newParentAnswers[startIndex + sourceQuestionIndex] = null;
      }
    }
    // Case 3: Moving from one question to another (swapping)
    else if (
      sourceId.startsWith("question-") &&
      destId.startsWith("question-")
    ) {
      const sourceQuestionIndex = initialQuestions.findIndex(
        (q) => `question-${q.id}` === sourceId
      );
      const destQuestionIndex = initialQuestions.findIndex(
        (q) => `question-${q.id}` === destId
      );
      if (sourceQuestionIndex !== -1 && destQuestionIndex !== -1) {
        // Swap the answers
        const sourceAnswerId =
          newParentAnswers[startIndex + sourceQuestionIndex];
        const destAnswerId = newParentAnswers[startIndex + destQuestionIndex];
        newParentAnswers[startIndex + sourceQuestionIndex] = destAnswerId;
        newParentAnswers[startIndex + destQuestionIndex] = sourceAnswerId;
      }
    }

    setAnswers(newParentAnswers);
  };

  const getAnswerById = (id) => initialAnswers.find((a) => a.id === id);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          mt: 2,
        }}
      >
        <Box sx={{ width: "55%" }}>
          <Typography variant="h6">{title}</Typography>
          <List>
            {questions.map((q, index) => (
              <ListItem
                key={q.id}
                ref={questionRefs.current[refStartIndex + index]}
              >
                <StrictModeDroppable droppableId={`question-${q.id}`}>
                  {(provided, snapshot) => (
                    <Paper
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      sx={{
                        p: 2,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        border: snapshot.isDraggingOver
                          ? "2px dashed blue"
                          : "1px solid #ccc",
                      }}
                    >
                      <Typography sx={{ flexGrow: 1 }}>{q.text}</Typography>
                      {q.answerId && getAnswerById(q.answerId) && (
                        <Draggable draggableId={q.answerId} index={index}>
                          {(provided) => (
                            <Box
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              sx={{
                                p: 1,
                                bgcolor: "lightblue",
                                borderRadius: 1,
                              }}
                            >
                              <Typography variant="body2">
                                {getAnswerById(q.answerId).text}
                              </Typography>
                            </Box>
                          )}
                        </Draggable>
                      )}
                      {provided.placeholder}
                    </Paper>
                  )}
                </StrictModeDroppable>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ width: "40%" }}>
          <Typography variant="h6">{infoTitle}</Typography>
          <StrictModeDroppable droppableId="answer-list">
            {(provided, snapshot) => (
              <Paper
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={{
                  p: 2,
                  minHeight: "200px",
                  bgcolor: snapshot.isDraggingOver ? "lightgreen" : "#f5f5f5",
                }}
              >
                {answerOptions.map((ans, index) => (
                  <Draggable key={ans.id} draggableId={ans.id} index={index}>
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{ p: 1, mb: 1, bgcolor: "white", boxShadow: 1 }}
                      >
                        <Typography variant="body2">{ans.text}</Typography>
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Paper>
            )}
          </StrictModeDroppable>
        </Box>
      </Box>
    </DragDropContext>
  );
};

export default DragDrop;
