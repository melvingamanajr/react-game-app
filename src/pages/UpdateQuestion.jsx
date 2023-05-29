import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateQuestion = () => {
  const [question, setQuestion] = useState({
    category: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctOption: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const questionId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/questions/${questionId}`);
        setQuestion(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestion();
  }, [questionId]);

  const handleChange = (e) => {
    setQuestion((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/api/questions/${questionId}`, question);
      navigate("/display");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1>Update the Question</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Question category"
          name="category"
          value={question.category}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <textarea
          rows={5}
          className="form-control"
          placeholder="Question"
          name="question"
          value={question.question}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 1"
          name="option1"
          value={question.option1}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 2"
          name="option2"
          value={question.option2}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 3"
          name="option3"
          value={question.option3}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 4"
          name="option4"
          value={question.option4}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Correct Option"
          name="correctOption"
          value={question.correctOption}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button className="btn btn-primary" style={{ backgroundColor: '#239023' }} onClick={handleClick}>Update</button>
        {error && <p className="text-danger">Something went wrong!</p>}
        <Link className="btn btn-primary" style={{ backgroundColor: '#239023' }} to="/admin">See all questions</Link>
      </div>
    </div>
  );
};

export default UpdateQuestion;
