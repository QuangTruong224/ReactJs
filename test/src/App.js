import React from "react";
import './App.css'
class App extends React.Component {
 
//  render() {
//   let i =1;
//   return (
//   <div>
//     <a class ="myCss">{i === 1 ? "true" : "false"}</a>
//   </div>

//   );
//  }

// App components render 2 tk components con
// render() {
//   return ( <div>
//     <Header/>
//     <Content/>
//   </div>)
 
// }


constructor() {
  super();
  this.state = {
    data : [
      {
        "id" : 1,
        "name":"Truong",
        "age" : " 20"
      },
      {
        "id" : 2,
        "name":"Xuân Hải",
        "age" : " 12"
      }
    ]
  }
}
render() {
  return (
    <div>
    <Header/>
    <table>
      <tbody>
        {this.state.data.map((person,i) => <Table key={i}
        data ={person}/>)}
      </tbody>
    </table>
    </div>
  )
}
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    )
  }
}

class Table extends React.Component {
  render() {
    return (
      <table class="myCss">
  
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
      </table>
    )
  }
}
// Test jsx
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <a>Teset</a>
//       </div>
//     )
//   }
// }
// class Content extends React.Component {
//   render() {
//     return (
//       <div>
//         <a>Content</a><p>Test</p>
//       </div>
//     )
//   }
// }
export default App;
