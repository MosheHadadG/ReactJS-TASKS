import React, { useState } from "react";
import './TodoApp.css'


const TodoApp = () => {
  const [todoItems, setTodoItems] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]
  );


  const toggleCompleted = (index) => {
    const newState = [...todoItems];
    newState[index].completed = !newState[index].completed;
    setTodoItems(newState);
  }

  const renderdItems = todoItems.map((item, index) => {
    return (
      <div className="item" key={item.name}>
        <h1>
          {item.completed ? <del>{item.name}</del> : item.name}
          <span
          onClick={() => toggleCompleted(index)}
           style={{ color: 'blue', cursor: 'pointer' }}>
             {item.completed ? ' V' : ' X'}
           </span>
        </h1>
      </div>
    );
  });

  return (
    <div className="items">
      {renderdItems}
    </div>

  );

}

export default TodoApp;