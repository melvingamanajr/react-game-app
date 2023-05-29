import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QuizQuestions from './pages/QuizQuestions';
import AddQuestion from './pages/AddQuestion';
import UpdateQuestion from './pages/UpdateQuestion';
import Quiz from './pages/Quiz';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="app" style={{ backgroundColor: '#70dc70', height: '100vh' }}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#239023' }}>
          <div className="container">
            <Link className="navbar-brand" to="/home">
              Quiz Game
            </Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quiz">
                  Play
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/display" element={<QuizQuestions />} />
            <Route path="/add" element={<AddQuestion />} />
            <Route path="/update/:id" element={<UpdateQuestion />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
