import React, { useEffect, useState } from "react";
import axios from "axios";

const QuizGame = () => {
  const [questions, setQuestions] = useState([]);

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

  return (
    <div className="container">
      <h1 className="text-center mt-4" style={{ color: "#1565c0" }}>Quiz Game</h1>
      <div className="row">
        {questions.length === 0 ? (
          <div className="text-center" style={{ color: "#1565c0" }}>Loading questions...</div>
        ) : (
          questions.map((question) => (
            <div key={question.id} className="col-md-6 col-lg-4">
              <div className="card mb-3" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#1565c0" }}>{question.question}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Category: {question.category}</h6>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default QuizGame;
