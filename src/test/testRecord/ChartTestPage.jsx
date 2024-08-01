// ChartTestPage.jsx
import React from 'react';
import { LineChart, Line, PieChart, Pie, BarChart, Bar, Tooltip, Legend, CartesianGrid, XAxis, YAxis } from 'recharts';

// Sample health data
const healthData = [
  { name: 'Jan', systolic: 120, diastolic: 80, weight: 70 },
  { name: 'Feb', systolic: 125, diastolic: 82, weight: 72 },
  { name: 'Mar', systolic: 130, diastolic: 85, weight: 73 },
  { name: 'Apr', systolic: 135, diastolic: 88, weight: 74 },
  { name: 'May', systolic: 140, diastolic: 90, weight: 75 },
];

const ChartTestPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2>Health Data Charts</h2>
    
    {/* Line Chart for Blood Pressure */}
    <h3>Blood Pressure Over Time</h3>
    <LineChart width={600} height={300} data={healthData}>
      <Line type="monotone" dataKey="systolic" stroke="#8884d8" name="Systolic" />
      <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" name="Diastolic" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
    
    {/* Pie Chart for Weight Distribution */}
    <h3>Weight Distribution</h3>
    <PieChart width={400} height={400}>
      <Pie dataKey="weight" data={healthData} cx={200} cy={200} outerRadius={150} fill="#8884d8" label />
      <Tooltip />
    </PieChart>
    
    {/* Bar Chart for Blood Pressure */}
    <h3>Blood Pressure (Systolic vs Diastolic)</h3>
    <BarChart width={600} height={300} data={healthData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="systolic" fill="#8884d8" name="Systolic" />
      <Bar dataKey="diastolic" fill="#82ca9d" name="Diastolic" />
    </BarChart>
  </div>
);

export default ChartTestPage;
