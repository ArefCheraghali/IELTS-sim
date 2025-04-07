import React from "react";
import WritingTask from "../../../components/WritingTask";

const Task1 = ({ answers, setAnswers }) => {
  const prompt = `You should spend about 20 minutes on this task.

The graph below shows the number of books read by men and women at different ages.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`;

  const instructions = "Write at least 150 words about the following graph:";

  return (
    <WritingTask
      answers={answers}
      setAnswers={setAnswers}
      wordLimit={150}
      taskNumber={1}
      prompt={prompt}
      instructions={instructions}
      index={0}
      imagePath="/images/test2/test2ge writing task1.jpg"
      imageAlt="Graph showing books read by gender and age"
      placeholder="Start writing your essay here..."
    />
  );
};

export default Task1;
