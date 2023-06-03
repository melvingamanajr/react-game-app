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
    <div className="container" style={{ margin: '10px'}}>
      <div className="card p-4" style={{ backgroundColor: "#e3f2fd", maxWidth: "500px", margin: "0 auto" }}>
        <h1 className="text-center mb-4" style={{ color: "#1565c0" }}>Update Question</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Question category"
            name="category"
            value={question.category}
            onChange={handleChange}
            style={{ backgroundColor: "#FFFFFF", borderRadius: "5px", padding: "10px", margin: "10px" }}
          />
        </div>
        <div className="form-group">
          <textarea
            rows={1}
            className="form-control"
            placeholder="Question"
            name="question"
            value={question.question}
            onChange={handleChange}
            style={{ backgroundColor: "#FFFFFF", borderRadius: "5px", padding: "10px", margin: "10px" }}
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
            style={{ backgroundColor: "#FFFFFF", borderRadius: "5px", padding: "10px", margin: "10px" }}
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
            style={{ backgroundColor: "#FFFFFF", borderRadius: "5px", padding: "10px", margin: "10px" }}
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
            style={{ backgroundColor: "#FFFFFF", borderRadius: "5px", padding: "10px", margin: "10px" }}
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
            style={{ backgroundColor: "#FFFFFF", borderRadius: "5px", padding: "10px", margin: "10px" }}
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
            style={{ backgroundColor: "#FFFFFF", borderRadius: "5px", padding: "10px", margin: "10px" }}
          />
        </div>
        <div className="btn-group">
          <button className="btn btn-primary" style={{ backgroundColor: "#336699", margin: '5px' }} onClick={handleClick}>
            Update
          </button>
          {error && <p className="text-danger">Something went wrong!</p>}
          <Link className="btn btn-primary" style={{ backgroundColor: "#336699", margin: '5px' }} to="/admin">
            See all questions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateQuestion;
