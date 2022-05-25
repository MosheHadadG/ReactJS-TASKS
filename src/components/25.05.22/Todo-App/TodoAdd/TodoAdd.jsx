import { hover } from "@testing-library/user-event/dist/hover";
import React, { Component } from "react";


class TodoAdd extends Component {

  addStudentToList = () => {
    const studentName = this.props.studentNameToAdd;
    const studentsArr = this.props.students
    const newStudentArr = [...studentsArr]
    newStudentArr.push(studentName)
    return newStudentArr;
  }

  render() {
    const { clickedAddStudent, studentNameToAdd } = this.props
    return (
      <button style={{ background: "green"}}
        onClick={() => studentNameToAdd ? clickedAddStudent(this.addStudentToList()) : null}>
        Add Student
      </button>
    )
  }

}

export default TodoAdd;
