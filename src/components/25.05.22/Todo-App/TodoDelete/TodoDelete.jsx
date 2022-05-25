import React, { Component } from "react";


class TodoDelete extends Component {

  deleteStudentFromList = () => {
    const studentIndex = this.props.studentIndexToDelete;
    const studentsArr = this.props.students;
    const newStudentArr = [...studentsArr];
    newStudentArr.splice(studentIndex, 1);
    return newStudentArr;
  }


  render() {
    const { clickedDeleteStudent } = this.props
    return (
      <button style={{ background: "red" }} onClick={() => clickedDeleteStudent(this.deleteStudentFromList())}>Delete</button>
    )
  }

}

export default TodoDelete;
 