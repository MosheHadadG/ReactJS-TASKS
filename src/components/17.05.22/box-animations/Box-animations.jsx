import React, { Component } from "react";

class BoxAnimations extends Component {
  state = { render: false }

  componentDidMount() {
    setTimeout(() => {
      this.setState({render: true});

    }, 1000)
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({render: false})
    }, 4000)
  }

  render() {
    if (this.state.render) {
      return (
        <div className="BoxesAnimation">
          <Box
            width="150px"
            height="150px"
          />
          <Box
            width="200px"
            height="200px"
          />
          <Box
            width="100px"
            height="100px"
          />
        </div>
      );
    }
  }


}

class Box extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="BoxAnimation"
        style={{
          width: this.props.width,
          height: this.props.height
        }}>
      </div>
    )
  }
}

export default BoxAnimations;