import React from 'react';
import { Blog } from './Blog';

const RecordPage: React.FC = () => {
  return (
    <div>
      <h2>Health Records</h2>
      <p>All your health records will be displayed here.</p>
      <Blog/>
    </div>
  );
};

export default RecordPage;
