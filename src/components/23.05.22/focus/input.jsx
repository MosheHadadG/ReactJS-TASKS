import React, {Component} from "react";
import './input.css'


class Input extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }


componentDidMount() {
  this.inputRef.current.focus();
}
  
render(){
  return (
    <div className="input-container">
      <input ref={this.inputRef} type="text"></input>
    </div>

  );
}
}

export default Input;