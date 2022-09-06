import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
    this.updateState = this.updateState.bind(this);
    this.clearState = this.clearState.bind(this);
         
  }
  updateState(e) {
    this.setState({data:e.target.value});
  }
  clearState() {
    this.setState({data:''});
    ReactDOM.findDOMNode(this.refs.myInput);
  }
  render() {
    return(
      <div>
        <input value={this.state.data} onChange={this.updateState} ref="myInput"></input>
        <button type="submit" onClick={this.clearState}>submit</button>
        <h3>{this.state.data}</h3>
        {/* <Content clearStateProps={this.clearState}  updateStateProps={this.updateState} /> */}
      </div>
    )
  }
}

// class Content extends React.Component {
//   render() {
//     return(
//       <div>
//       <input value={this.props.data} onChange={this.props.updateStateProps} ref="myInput"></input>
//       <button type="submit" onClick={this.props.clearStateProps}>submit</button>
//       <h3>{this.props.data}</h3>
//       </div>
//     )
//   }
// }

export default App;
