/**
 * Custom hook for quiz logic
 * @deprecated Use this as a template for custom hooks
 */

import { useState, useCallback } from 'react';

export const useQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = useCallback((answer) => {
    setAnswers([...answers, answer]);
    // Add your quiz logic here
  }, [answers]);

  return {
    currentQuestion,
    score,
    answers,
    handleAnswer,
    setCurrentQuestion
  };
};
