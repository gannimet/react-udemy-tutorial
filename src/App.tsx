import React from 'react';
import './App.css';
import StudentGrades from './components/StudentGrades';
import { StudentGradesContextProvider } from './context/StudentGradesContext';

const App: React.FC = () => {
  return (
    <>
      <StudentGradesContextProvider>
        <StudentGrades />
      </StudentGradesContextProvider>
    </>
  )
};

export default App;
