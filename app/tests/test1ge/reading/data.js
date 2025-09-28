import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

export const test1geReadingData = {
  testName: "Test 1 GE",
  testType: "Reading",
  timeLimit: 60,
  sections: [Part1, Part2, Part3],
  partQuestions: {
    0: { start: 1, end: 14 },
    1: { start: 15, end: 28 },
    2: { start: 29, end: 40 },
  },
};
