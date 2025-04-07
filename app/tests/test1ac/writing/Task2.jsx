import React from "react";
import WritingTask from "../../../components/WritingTask";

const Task2 = ({ answers, setAnswers }) => {
  const prompt = `Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?

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
