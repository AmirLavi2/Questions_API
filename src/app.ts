import express from "express";
import QuestionsRoutes from './routes/questions';

const app = express();
const PORT: number = 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// const API = [
//   {
//     question: "5+5 = ?",
//     answers: [
//       { answer: 8, isCorrect: false },
//       { answer: 9, isCorrect: false },
//       { answer: 10, isCorrect: true },
//       { answer: 11, isCorrect: false },
//     ],
//   },
//   {
//     question: "5+7 =?",
//     answers: [
//       { answer: 12, isCorrect: true },
//       { answer: 57, isCorrect: false },
//       { answer: 9, isCorrect: false },
//       { answer: 8, isCorrect: false },
//     ],
//   },
//   {
//     question: "18-9 =?",
//     answers: [
//       { answer: 8, isCorrect: false },
//       { answer: 9, isCorrect: true },
//       { answer: 10, isCorrect: false },
//       { answer: 11, isCorrect: false },
//     ],
//   },
//   {
//     question: "96-45 =?",
//     answers: [
//       { answer: 8, isCorrect: false },
//       { answer: 9, isCorrect: false },
//       { answer: 11, isCorrect: false },
//       { answer: 51, isCorrect: true },
//     ],
//   },
//   {
//     question: "111-1 =?",
//     answers: [
//       { answer: 8, isCorrect: false },
//       { answer: 110, isCorrect: true },
//       { answer: 9, isCorrect: false },
//       { answer: 11, isCorrect: false },
//     ],
//   },
//   {
//     question: "450-10 =?",
//     answers: [
//       { answer: 5, isCorrect: false },
//       { answer: 9, isCorrect: false },
//       { answer: 440, isCorrect: true },
//       { answer: 11, isCorrect: false },
//     ],
//   },
// ];

app.use(QuestionsRoutes);

app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`) );