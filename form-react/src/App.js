
import './App.css';
import React from "react";

// Sử dụng form
// class App extends React.Component{
//   constructor(props){
//   super(props);
//   this.state = {
//     data : 'Truongaaaaaaaa'
//   }
//   this.updateState = this.updateState.bind(this);
//   }
//  updateState(e){
//   this.setState({data: e.target.value});
//  }
//  render(){
//   return (
//     <div>
//       <input type="text" value={this.state.data} onChange={this.updateState}>
//       </input>
//       <h5>{this.state.data}</h5>
//     </div>
//   )
//  }
// }


// Sử dụng form trong component con form
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'truong....'
    }
    this.updateState = this.updateState.bind(this);
  }
  updateState(state) {
    this.setState({data: state.target.value});
  }
  render() {
    return(
      <div>
      <Content 
      myDataProp={this.state.data} 
      updateStateProp={this.updateState} />
      </div>
    )
  }
}
class Content extends React.Component {
  render() {
    return(
      <div>
      <input type="text" value={this.props.myDataProp}
      onChange={this.props.updateStateProp}></input>
        <h3>{this.props.myDataProp}</h3>
      </div>
    )
  }
}
export default App;
