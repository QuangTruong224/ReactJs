import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
      {component: "one", id : 1},
      {component: "two",id :2},
      {component: "three",id :3}
      ]
    }
  }
  render() {
    return (
      <div>
      <div>{this.state.data.map((dymanmicComponent,i) =>
       <Content key={i} componentData = {dymanmicComponent} />)}
      </div>
      </div>
    )
  }
}

class Content extends React.Component {
render() {
  return (
    <div>
    <div>{this.props.componentData.component}</div>
    <div>{this.props.componentData.id}</div>
    </div>
  )
}
}
export default App;
