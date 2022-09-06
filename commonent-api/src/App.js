import React from 'react';
import ReactDOM from 'react-dom';
// Set State
// class App extends React.Component {
//    constructor() {
//       super();
      
//       this.state = {
//          data: []
//       }
   
//       this.setStateHandler = this.setStateHandler.bind(this);
//    };
//    setStateHandler() {
//       var item = "setState..."
//       var myArray = this.state.data.slice();
//      myArray.push(item);
//       this.setState({data: myArray})
//    };
//    render() {
//       return (
//          <div>
//             <button onClick = {this.setStateHandler}>SET STATE</button>
//             <h4>State Array: {this.state.data}</h4>
//          </div>
//       );
//    }
// }

// forceUpdate
// class App extends React.Component {
// constructor(props) {
//    super(props);
//    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
// }
// forceUpdateHandler() {
//    this.forceUpdate();
// }
// render() {
//    return (
//       <div>
//          <button onClick = {this.forceUpdateHandler}>Force Update</button>
//          <h3> Randoms : {Math.random()}</h3>
//       </div>
//    )
// }
// }


// Find Dom Node
class App extends React.Component {
   constructor() {
      super();
      this.findDomNoteHandler = this.findDomNodeHandler.bind(this);
   }
   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'red'
   }
   render() {
      return(
         <div>
            <button onClick={this.findDomNodeHandler}>Find done</button>
            <div id="myDiv">Node</div>
         </div>
      )
   }
}
export default App;