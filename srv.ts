import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const PORT: number = 5000;
let QUERY_SUM: number = 0;

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const API = [
  {
    question: "5+5 = ?",
    answers: [
      { answer: 8, isCorrect: false },
      { answer: 9, isCorrect: false },
      { answer: 10, isCorrect: true },
      { answer: 11, isCorrect: false },
    ],
  },
  {
    question: "5+7 =?",
    answers: [
      { answer: 12, isCorrect: true },
      { answer: 57, isCorrect: false },
      { answer: 9, isCorrect: false },
      { answer: 8, isCorrect: false },
    ],
  },
  {
    question: "18-9 =?",
    answers: [
      { answer: 8, isCorrect: false },
      { answer: 9, isCorrect: true },
      { answer: 10, isCorrect: false },
      { answer: 11, isCorrect: false },
    ],
  },
  {
    question: "96-45 =?",
    answers: [
      { answer: 8, isCorrect: false },
      { answer: 9, isCorrect: false },
      { answer: 11, isCorrect: false },
      { answer: 51, isCorrect: true },
    ],
  },
  {
    question: "111-1 =?",
    answers: [
      { answer: 8, isCorrect: false },
      { answer: 110, isCorrect: true },
      { answer: 9, isCorrect: false },
      { answer: 11, isCorrect: false },
    ],
  },
  {
    question: "450-10 =?",
    answers: [
      { answer: 5, isCorrect: false },
      { answer: 9, isCorrect: false },
      { answer: 440, isCorrect: true },
      { answer: 11, isCorrect: false },
    ],
  },
];

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  QUERY_SUM++;
  let now = new Date(Date.now()).toISOString();
  console.log(`___ ${now} | Query #${QUERY_SUM} from ${req.headers.origin}`);
  res.json(API);
});

app.listen(PORT, () => console.log("Server running on port", PORT));
