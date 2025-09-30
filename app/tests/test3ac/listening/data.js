import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";

export const test3acListeningData = {
  testName: "Test 3 AC",
  testType: "Listening",
  timeLimit: 32,
  audioSrc: "/audio/Listening3.mp3",
  audioDelay: 27000, // 27 seconds
  sections: [Part1, Part2, Part3, Part4],
  partQuestions: {
    0: { start: 1, end: 10 },
    1: { start: 11, end: 20 },
    2: { start: 21, end: 30 },
    3: { start: 31, end: 40 },
  },
};
