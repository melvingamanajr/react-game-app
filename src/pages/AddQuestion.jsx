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
    <div className="container" style={{ marginTop: '50px', maxWidth: '500px'}}>
      <h1 style={{ marginBottom: '30px', textAlign: 'center', color: '#336699' }}>Add Quiz Question</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Category"
          name="category"
          onChange={handleChange}
          style={{ width: '100%', margin: '5px'}}
        />
      </div>
      <div className="form-group">
        <textarea
          rows={3}
          className="form-control"
          placeholder="Question"
          name="question"
          onChange={handleChange}
          style={{ width: '100%' , margin: '5px'}}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 1"
          name="option1"
          onChange={handleChange}
          style={{ width: '100%', margin: '5px' }}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 2"
          name="option2"
          onChange={handleChange}
          style={{ width: '100%', margin: '5px' }}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 3"
          name="option3"
          onChange={handleChange}
          style={{ width: '100%', margin: '5px' }}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Option 4"
          name="option4"
          onChange={handleChange}
          style={{ width: '100%', margin: '5px' }}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Correct Option"
          name="correctOption"
          onChange={handleChange}
          style={{ width: '100%', margin: '5px' }}
        />
      </div>
      <div className="btn-group" style={{ display: 'flex', justifyContent: 'center', margin: '5px' }}>
        <button className="btn btn-primary" style={{ backgroundColor: '#336699', color: '#FFFFFF', marginRight: '10px', margin: '5px' }} onClick={handleClick}>Add</button>
        {error && <p className="text-danger">Something went wrong!</p>}
        <Link className="btn btn-primary" style={{ backgroundColor: '#336699', margin: '5px' }} to="/admin">Go Back</Link>
      </div>
    </div>
  );
};

export default QuizGame;
