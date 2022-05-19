import React, {Component} from "react";

class ChangingBox extends Component {
  state = {boxColor: ['black','red','blue','purple','yellow'], index: 0, circle: '0%'}

  componentDidMount() {
    setTimeout(() => {
      this.setState({index: this.state.index + 1})
    }, 500) 
  }

  componentDidUpdate() {
    if (this.state.boxColor.length - 1 < this.state.index) {
      this.setState({circle: '50%', index: 0});
    }
    
    setTimeout(() => {
      this.setState({index: this.state.index + 1})
    },500)
  }


  render() {
    return(
      <div className="ChangingBox" style={{backgroundColor: this.state.boxColor[this.state.index], borderRadius: [this.state.circle]}}></div>
    );
  }
}

export default ChangingBox;