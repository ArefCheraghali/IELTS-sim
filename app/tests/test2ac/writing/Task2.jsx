import React from "react";
import WritingTask from "../../../components/WritingTask";

const Task2 = ({ answers, setAnswers }) => {
  const prompt = `In many countries, the gap between the rich and the poor is becoming wider. What problems can this difference in wealth cause? How can we reduce this gap?

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
      index={1} // Using index 1 as it appears this was the original index in the old component
    />
  );
};

export default Task2;
