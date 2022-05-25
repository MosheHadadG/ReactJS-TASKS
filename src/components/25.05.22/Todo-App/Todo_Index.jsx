import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Todo from "./TodoHomePage/Todo";
import ProfilePage from "./profile/Profile";
import { TodoData } from "./TodoData/TodoData";

class Todo_Index extends Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const studentsName = TodoData.map((student) => student.firstName + " " + student.lastName)
    this.setState({students: studentsName})
  }


  setTodoIndex = (newState) => this.setState(newState)

  render() {
    
    return (
      <BrowserRouter>
        <Route exact path="/" render={() => <Todo setTodoIndex={this.setTodoIndex} students={this.state.students}/>} />
        <Route exact path="/profile/:id" render={(props) => <ProfilePage {...props} students={this.state.students}/>}  />
      </BrowserRouter>
    )
  }

}

export default Todo_Index;


