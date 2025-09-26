import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

export const test2geReadingData = {
  testName: "Test 2 GE",
  testType: "Reading",
  timeLimit: 60,
  sections: [Part1, Part2, Part3],
  partQuestions: {
    0: { start: 1, end: 14 },
    1: { start: 15, end: 27 },
    2: { start: 28, end: 40 },
  },
};
