import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // bg-info (light-blue) for contrast, text-dark for visibility
    <nav className="navbar navbar-expand-lg navbar-light bg-info p-3 shadow-md"> 
      <div className="container-fluid max-w-7xl mx-auto"> 
        <Link className="navbar-brand fs-4 fw-bold text-dark" to="/">Lost & Found Hub</Link>
        <div className="collapse navbar-collapse show">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0 space-x-6"> {/* ms-auto pushes links right */}
            <Link className="nav-link text-dark fw-bold hover:text-soft-blue transition" to="/list">View All Items</Link>
            <Link className="nav-link text-dark fw-bold hover:text-soft-blue transition" to="/report-lost">Report Lost</Link>
            <Link className="nav-link text-dark fw-bold hover:text-soft-blue transition" to="/report-found">Report Found</Link>
            <Link className="nav-link text-dark fw-bold hover:text-soft-blue transition" to="/search">Search</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;