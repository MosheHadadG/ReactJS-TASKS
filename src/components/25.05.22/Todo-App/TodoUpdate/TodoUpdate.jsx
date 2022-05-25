import React, { Component } from "react";


class TodoUpdate extends Component {


  updateStudentName = () => {
    const { studentIndexToUpdate, students, nameToUpdate, allStudentInputs } = this.props;
    const studentIndex = studentIndexToUpdate;
    const studentsArr = students;
    // const studentInput = allStudentInputs[studentIndex];
    // studentInput.removeAttribute('disabled')
    const newStudentArr = [...studentsArr];
    newStudentArr[studentIndex] = nameToUpdate;
    return newStudentArr;
  }

  render() {
    const { clickedUpdateStudent, nameToUpdate } = this.props
    return (
      <button
        style={{ background: "green" }}
        onClick={() => nameToUpdate ? clickedUpdateStudent(this.updateStudentName()) : null}>
        Update
      </button>
    )
  }

}

export default TodoUpdate;


