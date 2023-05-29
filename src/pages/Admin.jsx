import React from 'react';
import { Link } from 'react-router-dom';

const AdminInterface = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '' }}>
      <div className="container-fluid">
        <Link to="/add" className="navbar-brand">Add Question</Link>
        <Link to="/display" className="navbar-brand">View Questions</Link>
        <Link to="/login" className="navbar-brand">Log out</Link>
      </div>
    </nav>
  );
};

export default AdminInterface;
