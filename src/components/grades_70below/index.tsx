import React from 'react';
import { StudentGradesContext } from '../../context/StudentGradesContext';

class Grades70Below extends React.Component {
  render() {
    return (
      <StudentGradesContext.Consumer>
        {(context) => (
          <>
            <h1>Student with 70% and below</h1>

            <ul>
              {context
                .studentGrades
                .filter((studentGrade) => {
                  return studentGrade.grade <= 70;
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

export default Grades70Below;