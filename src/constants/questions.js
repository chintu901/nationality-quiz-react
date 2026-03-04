/**
 * Quiz questions data
 * Add your nationality quiz questions here
 */

export const QUIZ_QUESTIONS = [
  // Example format:
  // {
  //   id: 1,
  //   question: "What is the capital of France?",
  //   options: ["Paris", "Lyon", "Marseille", "Nice"],
  //   correct: "Paris"
  // }
];

export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  TIMEOUT: 5000
};
