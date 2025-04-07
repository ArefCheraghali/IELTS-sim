import React from "react";
import WritingTask from "../../../components/WritingTask";

const Task1 = ({ answers, setAnswers }) => {
  const prompt = `You should spend about 20 minutes on this task.

You recently bought a piece of equipment for your kitchen but it did not work. You phoned the shop but no action was taken.

Write a letter to the shop manager. In your letter:
• describe the problem with the equipment
• explain what happened when you phoned the shop
• say what you would like the manager to do`;

  const instructions = "Write at least 150 words.";

  const additionalInstructions = `You do NOT need to write any addresses.
Begin your letter as follows:

Dear Sir or Madam,`;

  return (
    <WritingTask
      answers={answers}
      setAnswers={setAnswers}
      wordLimit={150}
      taskNumber={1}
      prompt={prompt}
      instructions={instructions}
      additionalInstructions={additionalInstructions}
      index={0}
      placeholder="Start writing your letter here..."
    />
  );
};

export default Task1;
