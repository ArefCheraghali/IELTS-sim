import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

export const test4acReadingData = {
  testName: "Test 4 AC",
  testType: "Reading",
  timeLimit: 60,
  sections: [Part1, Part2, Part3],
  partQuestions: {
    0: { start: 1, end: 13 },
    1: { start: 14, end: 26 },
    2: { start: 27, end: 40 },
  },
};