import { useQuiz } from "./QuizContext";
import { motion } from "framer-motion";

const Chat = () => {
  const { answers, questions, isCompleted } = useQuiz();

  return (
    <motion.div
      className="chat-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Quiz Started
      </motion.p>

      {questions.map((q, index) => (
        <motion.p
          key={q.id}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
        >
          {q.question} -{" "}
          {answers[q.id] !== undefined
            ? answers[q.id]
              ? "True"
              : "False"
            : "Not Answered"}
        </motion.p>
      ))}

      {isCompleted && (
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Quiz Completed.
        </motion.p>
      )}
    </motion.div>
  );
};

export default Chat;
