import { Router } from 'express';
import { Question } from '../models/question';

let QUERY_SUM: number = 0;

const questions: Question[] = [
    {
        "question": "5+5 = ?",
        "answers": [
            { "answer": 8, "isCorrect": false },
            { "answer": 9, "isCorrect": false },
            { "answer": 10, "isCorrect": true },
            { "answer": 11, "isCorrect": false }
        ]
    },
    {
        "question": "1+2 = ?",
        "answers": [
            { "answer": 3, "isCorrect": true },
            { "answer": 5, "isCorrect": false },
            { "answer": 7, "isCorrect": false },
            { "answer": 2, "isCorrect": false }
        ]
    },
    {
        "question": "15-5 = ?",
        "answers": [
            { "answer": 8, "isCorrect": false },
            { "answer": 5, "isCorrect": false },
            { "answer": 11, "isCorrect": false },
            { "answer": 10, "isCorrect": true }
        ]
    },
    {
        "question": "5+7 =?",
        "answers": [
            { "answer": 12, "isCorrect": true },
            { "answer": 57, "isCorrect": false },
            { "answer": 9, "isCorrect": false },
            { "answer": 8, "isCorrect": false }
        ]
    }
];


const router = Router();

router.get('/', (req, res, next) => {
    QUERY_SUM++;
    let now = new Date(Date.now()).toISOString();
    console.log(`Date ${now} | From ${req.ip} | Query #${QUERY_SUM}`);
    res.status(200).json({questions: questions});
});

export default router;