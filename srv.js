"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 5000;
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
const API = [
    {
        question: "5+5 = ?",
        answers: [
            { answer: 8, isCurrect: false },
            { answer: 9, isCurrect: false },
            { answer: 10, isCurrect: true },
            { answer: 11, isCurrect: false },
        ],
    },
    {
        question: "5+7 =?",
        answers: [
            { answer: 57, isCurrect: false },
            { answer: 9, isCurrect: false },
            { answer: 12, isCurrect: true },
            { answer: 8, isCurrect: false },
        ],
    },
    {
        question: "18-9 =?",
        answers: [
            { answer: 8, isCurrect: false },
            { answer: 10, isCurrect: false },
            { answer: 9, isCurrect: true },
            { answer: 11, isCurrect: false },
        ],
    },
    {
        question: "96-45 =?",
        answers: [
            { answer: 8, isCurrect: false },
            { answer: 9, isCurrect: false },
            { answer: 51, isCurrect: true },
            { answer: 11, isCurrect: false },
        ],
    },
    {
        question: "111-1 =?",
        answers: [
            { answer: 8, isCurrect: false },
            { answer: 9, isCurrect: false },
            { answer: 110, isCurrect: true },
            { answer: 11, isCurrect: false },
        ],
    },
    {
        question: "450-10 =?",
        answers: [
            { answer: 5, isCurrect: false },
            { answer: 9, isCurrect: false },
            { answer: 440, isCurrect: true },
            { answer: 11, isCurrect: false },
        ],
    },
];
app.get("/", (req, res, next) => {
    // res.send('HEllo');
    res.json(API);
});
app.listen(PORT, () => console.log("Server running on port", PORT));
