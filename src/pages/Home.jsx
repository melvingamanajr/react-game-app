import React from "react";
import "./Home.css"; // Import the CSS file for custom styling
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow mt-5">
            <div className="card-body text-center">
            <div className="floating-objects-container">
                <div className="floating-object"></div> {/* Floating object */}
                <div className="floating-object"></div> {/* Floating object */}
                <div className="floating-object"></div> {/* Floating object */}
              </div>
              <h1 className="display-4 mt-4 mb-5">Welcome to Quiz Game</h1>
              <p className="lead mb-5">
                Test your knowledge and have fun with our interactive quiz game!
              </p>
              <div className="text-center">
                <Link to="/quiz" style={{ color: 'inherit', textDecoration: 'none', arginTop: '10px', padding: '5px'}}>
                <button className="btn btn-primary btn-lg rounded-pill px-5 py-3">Start Quiz</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
