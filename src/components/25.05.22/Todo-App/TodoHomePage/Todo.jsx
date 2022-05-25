import React, { Component } from "react";
import { Link } from "react-router-dom";

import TodoAdd from "../TodoAdd/TodoAdd";
import TodoDelete from "../TodoDelete/TodoDelete";
import TodoUpdate from "../TodoUpdate/TodoUpdate";

import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      addStudent: '',
      editStudentInput: '',
    }
    // this.allStudentInputs = [];
    // this.inputEditRef = React.createRef();

  }

  changeInput = (event) => {
    const inputValue = event.target.value
    const actionName = event.target.name
    this.setState({ inputValue, [actionName]: inputValue })
  }

  changeInputStudent = (event) => {
    const inputValue = event.target.value;
    this.setState({ editStudentInput: inputValue })
  }

  updateStateStudents = (newStudentsArr) => {
    this.props.setTodoIndex({ students: newStudentsArr });
    this.setState({inputValue: '', addStudent: ''})
  }


  renderStudents = () => {
    const renderdStudent = this.props.students.map((studentName, index) => {
      return (
        <div key={index} className="Student">
          <div className="student-update-box">
            <input
              // ref={inputEditRef => (this.allStudentInputs[index] = inputEditRef)}
              name="editStudent"
              className="student-input"
              type="text"
              placeholder={studentName}
              onChange={this.changeInputStudent}
            />
            <TodoUpdate
              allStudentInputs={this.allStudentInputs}
              studentIndexToUpdate={index}
              students={this.props.students}
              nameToUpdate={this.state.editStudentInput}
              clickedUpdateStudent={this.updateStateStudents} />
          </div>
          <h1>{studentName}</h1>

          <div className="buttons">

            <TodoDelete
              studentIndexToDelete={index}
              students={this.props.students}
              clickedDeleteStudent={this.updateStateStudents} />
            <Link to={`/profile/${index}`}><button style={{ background: "purple" }}>See Profile</button></Link>

          </div>
        </div>
      )
    });
    return renderdStudent;
  }


  render() {

    const { addStudent } = this.state
    return (
      <div className="main">
        <div className="add-student-box">
          <input name="addStudent" placeholder="enter a student's name..." value={this.state.inputValue} onChange={this.changeInput} type="text" />
          <TodoAdd
            studentNameToAdd={addStudent}
            students={this.props.students}
            clickedAddStudent={this.updateStateStudents} />
        </div>
        <div className="Students">
          {this.renderStudents()}
        </div>
      </div>

    )
  }

}

export default Todo;
