import React from 'react';

const Employees = () => {
  // Dummy data for demonstration purposes
  const employeeList = [
    { id: 1, name: 'Alice Johnson', position: 'Software Engineer' },
    { id: 2, name: 'Bob Smith', position: 'Product Manager' },
    { id: 3, name: 'Carol White', position: 'UX Designer' }
  ];

  return (
    <div>
      <h2>Employees</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Position</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map(employee => (
            <tr key={employee.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
