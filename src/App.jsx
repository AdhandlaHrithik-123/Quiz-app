import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from "./Quiz";
import Chat from "./Chat";
import ResultsChart from "./ResultsChart";
import { QuizProvider, useQuiz } from "./QuizContext";
import "./App.css";

const AppContent = ({ toggleTheme, theme }) => {
  const { isCompleted, answers, questions } = useQuiz();

  const correctAnswers = questions.filter((q) => answers[q.id] === q.correct);
  const incorrectAnswers = questions.length - correctAnswers.length;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-outline-primary" onClick={toggleTheme}>
          {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="row">
        <div className="col-md-4 border-end">
          <h2 className="text-primary">Quiz</h2>
          <Quiz />
        </div>

        <div className="col-md-4 border-end">
          <h2 className="text-success">Chat</h2>
          <Chat />
        </div>

        <div className="col-md-4">
          <h2 className="text-danger">Results</h2>
          {isCompleted && (
            <ResultsChart
              correct={correctAnswers.length}
              incorrect={incorrectAnswers}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-bs-theme", newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <QuizProvider>
      <AppContent toggleTheme={toggleTheme} theme={theme} />
    </QuizProvider>
  );
};

export default App;
