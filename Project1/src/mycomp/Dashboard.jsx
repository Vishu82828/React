import React from 'react';
import '../mystyle/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2 className="section-title">Section 1</h2>
          <p className="section-content">Content for section 1.</p>
        </div>
        <div className="dashboard-section">
          <h2 className="section-title">Section 2</h2>
          <p className="section-content">Content for section 2.</p>
        </div>
        <div className="dashboard-section">
          <h2 className="section-title">Section 3</h2>
          <p className="section-content">Content for section 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
