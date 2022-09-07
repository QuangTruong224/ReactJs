import React from 'react';
import './App.css';
import AddTask from './AddTask';
 
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: ['Lau', 'Quét'],
        showAddForm: false,
    }
}
setStatus = () => {
    this.setState({
        showAddForm: true
    })
}
closeForm = () => {
    this.setState({
        showAddForm: false,
        showEditForm: false
    })
}
addTask = (name) => {
    this.state.data.push(name)
    this.forceUpdate()
}
render() {
    if (this.state.showAddForm === true) {
        return (
            <AddTask addTask={this.addTask} closeForm={this.closeForm} />
        )
    } else {
        return (
            <div className="container">
                <button type="button" className="btn btn-outline-primary" onClick={this.setStatus} >Thêm mới</button>
                <h2>Danh sách</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Tên task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(function (name, index) {
                                return <Table key={index} name={name}
                                />
                            }.bind(this))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
}
class Table extends React.Component {
  render() {
    return  <tr>
        <td>{this.props.name}</td>
        
    </tr>

    
}
}


export default App;
