
import './App.css';
import React from 'react';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    data: "loading"
  }
  this.updateState = this.updateState.bind(this);
}
updateState() {
  this.setState({data: "succcess"
  })
}
render() {
  return (
    <div>
      llll
<Content  updateStateProps={this.updateState}  myDataProp={this.state.data} />
    </div>
  )
}
}
 class Content extends React.Component {
render() {
  return (
    <div>
    <button onClick={this.props.updateStateProps}>submit</button>
    <h3>{this.props.myDataProp}</h3>
    </div>
  )
}
 }
export default App;
