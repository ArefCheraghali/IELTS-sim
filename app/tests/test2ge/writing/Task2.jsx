import React from "react";
import WritingTask from "../../../components/WritingTask";

const Task2 = ({ answers, setAnswers }) => {
  const prompt = `Some people say that in our modern world, dominated by science, technology and industrialization, there is no longer a place for dreaming and imagination. What is your opinion?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.`;

  const instructions = "Write about the following topic:";

  return (
    <WritingTask
      answers={answers}
      setAnswers={setAnswers}
      wordLimit={250}
      taskNumber={2}
      prompt={prompt}
      instructions={instructions}
      index={0}
    />
  );
};

export default Task2;
