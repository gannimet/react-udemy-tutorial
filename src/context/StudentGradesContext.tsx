import React from 'react';

export interface StudentGrade {
  name: string;
  grade: number;
}

export interface StudentGradesContextType {
  studentGrades: StudentGrade[];
  addStudentGrade(studentGrade: StudentGrade): void;
}

export const StudentGradesContext = React.createContext<StudentGradesContextType>({
  studentGrades: [],
  addStudentGrade: () => {},
});

interface StudentGradesContextProviderState {
  studentGrades: StudentGrade[];
}

export class StudentGradesContextProvider extends React.Component<{}, StudentGradesContextProviderState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      studentGrades: [],
    };
  }

  handleAddStudentGrade = (studentGrade: StudentGrade) => {
    this.setState({
      studentGrades: [...this.state.studentGrades, studentGrade],
    })
  }

  render() {
    return (
      <StudentGradesContext.Provider value={{
        studentGrades: this.state.studentGrades,
        addStudentGrade: this.handleAddStudentGrade,
      }}>
        {this.props.children}
      </StudentGradesContext.Provider>
    )
  }
}