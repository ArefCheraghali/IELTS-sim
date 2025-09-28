import Task1 from "./Task1";
import Task2 from "./Task2";

export const test2acWritingData = {
  testName: "Test 2 AC",
  testType: "Writing",
  timeLimit: 60,
  sections: [Task1, Task2],
  partQuestions: {
    0: { start: 1, end: 1 }, // Corresponds to Task 1
    1: { start: 2, end: 2 }, // Corresponds to Task 2
  },
};
