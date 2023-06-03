import React from 'react';
import { Link } from 'react-router-dom';
import "./Admin.css";

const AdminInterface = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#1565c0', margin: '10px', position: 'relative' }}>
      <div className="floating-object"></div>
      <div className="container-fluid">
        <Link to="/add" className="navbar-brand" style={{ color: '#FFFFFF' }}>
          Add Question
        </Link>
        <div className="floating-object"></div>
        <Link to="/display" className="navbar-brand" style={{ color: '#FFFFFF' }}>
          View Questions
        </Link>
        <div className="floating-object"></div>
        <Link to="/login" className="navbar-brand" style={{ color: '#FFFFFF' }}>
          Log out
          <div className="floating-object"></div>
        </Link>
        <div className="floating-object"></div>
      </div>
      <div className="floating-object"></div>
    </nav>
  );
};

export default AdminInterface;
