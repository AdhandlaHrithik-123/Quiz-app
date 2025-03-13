import { createContext, useContext, useState } from "react";

// Create Context
const QuizContext = createContext();

// Context Provider
export const QuizProvider = ({ children }) => {
  const questions = [
    { id: 1, question: "React is a library, not a framework.", correct: true },
    { id: 2, question: "JavaScript is a compiled language.", correct: false },
    { id: 3, question: "CSS stands for Cascading Style Sheet.", correct: true },
    { id: 4, question: "HTML is a programming language.", correct: false },
    { id: 5, question: "React uses a virtual DOM.", correct: true },
  ];

  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const setAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const submitQuiz = () => {
    setIsCompleted(true);
  };

  return (
    <QuizContext.Provider
      value={{ questions, answers, setAnswer, isCompleted, submitQuiz }}
    >
      {children}
    </QuizContext.Provider>
  );
};

// Custom Hook to use Quiz Context
export const useQuiz = () => useContext(QuizContext);
