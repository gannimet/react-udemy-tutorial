import React from 'react';
import { StudentGradesContext } from '../../context/StudentGradesContext';

class Grades90Plus extends React.Component {
  render() {
    return (
      <StudentGradesContext.Consumer>
        {(context) => (
          <>
            <h1>Student with 90% and above</h1>

            <ul>
              {context
                .studentGrades
                .filter((studentGrade) => {
                  return studentGrade.grade >= 90;
                })
                .map((studentGrade) => (
                  <li key={studentGrade.name}>{studentGrade.name} - {studentGrade.grade}</li>
                ))
              }
            </ul>
          </>
        )}
      </StudentGradesContext.Consumer>
    )
  }
}

export default Grades90Plus;