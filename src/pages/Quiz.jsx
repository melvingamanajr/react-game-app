import React, { useEffect, useState } from "react";
import axios from "axios";

const QuizGame = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchAllQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/questions");
        setQuestions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllQuestions();
  }, []);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <h1>Quiz Game</h1>
      {questions.length === 0 ? (
        <div>Loading questions...</div>
      ) : (
        <div className="question">
          <h2>{questions[currentQuestionIndex].question}</h2>
          <p>Category: {questions[currentQuestionIndex].category}</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(option.isCorrect)}
              >
                {option.text}
              </li>
            ))}
          </ul>
          <p>Correct Option: {questions[currentQuestionIndex].correctOption}</p>
        </div>
      )}

      {currentQuestionIndex + 1 < questions.length ? (
        <button
          onClick={() =>
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
          }
        >
          Next Question
        </button>
      ) : (
        <div>
          <p>Quiz completed!</p>
          <p>Final Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
