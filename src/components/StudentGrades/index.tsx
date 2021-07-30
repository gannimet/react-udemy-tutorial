import React, { ChangeEvent } from 'react';
import { StudentGradesContext, StudentGradesContextType } from '../../context/StudentGradesContext';
import { Button } from '../Button';
import Grades70Below from '../grades_70below';
import Grades90Plus from '../grades_90plus';
import { Input } from '../Input';
import { StudentGradesProps, StudentGradesState } from './interface';

class StudentGrades extends React.Component<StudentGradesProps, StudentGradesState> {
  nameInputRef = React.createRef<HTMLInputElement>();
  gradeInputRef = React.createRef<HTMLInputElement>();

  constructor(props: StudentGradesProps) {
    super(props);

    this.state = {
      inputStudentName: '',
      inputStudentGrade: '',
      studentNameHasError: false,
      studentGradeHasError: false,
    };
  }

  handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    this.setState({
      inputStudentName: value,
      studentNameHasError: !value || value.length === 0,
    })
  }

  handleChangeGrade = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    this.setState({
      inputStudentGrade: value,
      studentGradeHasError: !value || value.length === 0 || Number.isNaN(parseFloat(value)),
    })
  }

  handleAddButtonClick = (context: StudentGradesContextType) => {
    if (this.state.inputStudentName.length === 0) {
      this.setState({
        studentNameHasError: true,
      });
      this.nameInputRef.current?.focus();

      return;
    }

    const numericGrade = parseFloat(this.state.inputStudentGrade);
    if (Number.isNaN(numericGrade)) {
      this.setState({
        studentGradeHasError: true,
      });
      this.gradeInputRef.current?.focus();

      return;
    }

    context.addStudentGrade({
      name: this.state.inputStudentName,
      grade: numericGrade,
    });

    this.setState({
      inputStudentName: '',
      inputStudentGrade: '',
      studentNameHasError: false,
      studentGradeHasError: false,
    });
  }

  render() {
    return (
      <>
        <h1>Student Grades</h1>

        <StudentGradesContext.Consumer>
          {(context) => (
            <>
              <ul>
                {context.studentGrades.map((studentGrade) => (
                  <li key={studentGrade.name}>{studentGrade.name} - {studentGrade.grade}</li>
                ))}
              </ul>

              <Input
                label="Student name"
                errorMessage="Please enter a student name"
                value={this.state.inputStudentName}
                onChange={this.handleChangeName}
                ref={this.nameInputRef}
                hasError={this.state.studentNameHasError}
              />

              <Input
                label="Grade"
                errorMessage="Please enter a grade"
                value={this.state.inputStudentGrade}
                onChange={this.handleChangeGrade}
                ref={this.gradeInputRef}
                hasError={this.state.studentGradeHasError}
              />

              <Button type="primary" onClick={() => this.handleAddButtonClick(context)}>Add Student Grade</Button>
            </>
          )}
        </StudentGradesContext.Consumer>

        <Grades90Plus />
        <Grades70Below />
      </>
    )
  }
}

export default StudentGrades;