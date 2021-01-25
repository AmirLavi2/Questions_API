export interface Question {
    question: string;
    answers: Answers[];
}

export interface Answers {
    answer: number;
    isCorrect: boolean;
}
  