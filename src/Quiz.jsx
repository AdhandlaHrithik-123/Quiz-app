import { useQuiz } from "./QuizContext";

const Quiz = () => {
  const { questions, answers, setAnswer, submitQuiz } = useQuiz();

  return (
    <div className="quiz-container">
      {questions.map((q) => (
        <div key={q.id} className="question">
          <p>{q.question}</p>
          <button
            className={answers[q.id] === true ? "selected" : ""}
            onClick={() => setAnswer(q.id, true)}
          >
            True
          </button>
          <button
            className={answers[q.id] === false ? "selected" : ""}
            onClick={() => setAnswer(q.id, false)}
          >
            False
          </button>
        </div>
      ))}
      {Object.keys(answers).length === questions.length && (
        <button onClick={submitQuiz}>Submit Quiz</button>
      )}
    </div>
  );
};

export default Quiz;
