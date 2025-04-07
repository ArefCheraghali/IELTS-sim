import React from "react";
import WritingTask from "../../../components/WritingTask";

const Task1 = ({ answers, setAnswers }) => {
  const prompt = `You should spend about 20 minutes on this task.

The diagrams below show the main reasons workers chose to work from home and the hours males and females worked at home for the year 2019.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`;

  const instructions = "Write at least 150 words about the following graphs:";

  return (
    <WritingTask
      answers={answers}
      setAnswers={setAnswers}
      wordLimit={150}
      taskNumber={1}
      prompt={prompt}
      instructions={instructions}
      index={0}
      imagePath="/images/test2/test2ac writing task1.jpg"
      imageAlt="Work from home statistics graphs"
      placeholder="Start writing your essay here..."
    />
  );
};

export default Task1;
