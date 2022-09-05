import React from 'react';
import './App.css';
import PropTypes from "prop-types";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     headerProps : "header1",
  //     contentProps : "content2"
  //   }
  // }
  // render() {
  //   return (
  //     <div>
  //     <Header header={this.state.headerProps}/>
  //     <Content content={this.state.contentProps}/>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
      <h2>Array : {this.props.propArray}</h2>
      <h2>Bool: {this.props.propBool? 'true' : 'false'}</h2>
      <h2>Object: {this.props.propObject.object1}</h2>
      <h2>Object: {this.props.propObject.object2}</h2>
      <h2>String: {this.props.propString}</h2>
      <h2>Number: {this.props.propNumber}</h2>
      </div>
    )
  }
}
App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propObject: PropTypes.object.isRequired,
  propString: PropTypes.string.isRequired,
  propNumber: PropTypes.number.isRequired

}
//  class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.header}</h1>
//       </div>
//     )
//   }
//  }
//  class Content extends React.Component {
//   render() {
//     return (
//       <div>
//    <h1>{this.props.content}</h1>
//       </div>
//     )
//   }
//  }
 App.defaultProps = {
propArray: [1,2,3,4],
propBool: false,
propObject: {
  object1:"T",
  object2:"Q"
  
},
propString:"Quang Truong",
propNumber: 12
 }

//  Giá trị default 
// App.defaultProps = {
//   header : "Test",
//   content: "Tttt"
// }
export default App;

