import React from 'react';
import './App.css';
import App from './App';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList : false,
            name : '' 
        }
    }
    linkList=() => {
        this.props.closeForm();
    }
    handleAddTask = () => {
        this.props.addTask(this.state.name)
        this.linkList()
    }
    changeName=(e) => {
        this.setState({name: e.target.value});
    }

    render(){
        return(
            <div className="App">
            <App />
            {/* <h3>THêm mới</h3>
            <label>Tên task</label> */}
            <input type="text" onChange={this.changeName}></input>
            <button type="submit" onClick={this.handleAddTask}>Thêm</button>
            <button type="submit" onClick={this.linkList}>Trở về</button>
            </div>
    )

// CHuyển trang

    //     if (this.state.showList == true) {
    //         return (
    //             <App/>
    //         )
    //     }else {
    //         return (
    //             <div>
    //                 <h3>Thêm mới task</h3>
    //                 <div>
    // <label>Tên task</label>
    // <input 
    // type="text" onChange={this.changeName}>
    // </input>
    // <button type="submit" onClick={this.handleAddTask}>Thêm</button>
    // <button type="button" onClick={this.linkList}>Trở về</button>
    //                 </div>
    //                 </div>
    //         )
    //     }
    }
}


export default AddTask;