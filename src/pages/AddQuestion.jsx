import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const QuizGame = () => {
  const [quiz, setQuiz] = useState({
    category: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctOption: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuiz((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/questions/add", quiz);
      navigate("/display");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1>Add New Quiz Question</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Category"
          name="category"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <textarea
          rows={3}
          className="form-control"
          placeholder="Question"
          name="question"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 1"
          name="option1"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 2"
          name="option2"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 3"
          name="option3"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 4"
          name="option4"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Correct Option"
          name="correctOption"
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button className="btn btn-primary" style={{ backgroundColor: '#239023' }} onClick={handleClick}>Add</button>
        {error && <p className="text-danger">Something went wrong!</p>}
        <Link className="btn btn-primary" style={{ backgroundColor: '#239023' }} to="/admin">Go Back</Link>
      </div>
    </div>
  );
};

export default QuizGame;
