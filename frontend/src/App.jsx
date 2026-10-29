import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import DepartmentList from './components/DepartmentList';
import AttendanceTracker from './components/AttendanceTracker';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* Redirect root to /dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Dashboard Route */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Employee Routes */}
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/new" element={<EmployeeForm />} />
            <Route path="/employees/edit/:id" element={<EmployeeForm />} />
            
            <Route path="/departments" element={<DepartmentList />} />
            <Route path="/attendance" element={<AttendanceTracker />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
