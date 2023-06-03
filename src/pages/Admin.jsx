import React from 'react';
import { Link } from 'react-router-dom';

const AdminInterface = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#1565c0', margin: '10px' }}>
      <div className="container-fluid">
        <Link to="/add" className="navbar-brand" style={{ color: '#FFFFFF' }}>
          Add Question
        </Link>
        <Link to="/display" className="navbar-brand" style={{ color: '#FFFFFF' }}>
          View Questions
        </Link>
        <Link to="/login" className="navbar-brand" style={{ color: '#FFFFFF' }}>
          Log out
        </Link>
      </div>
    </nav>
  );
};

export default AdminInterface;
