import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    console.log(this.state.vehicles);
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }
  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }
  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
      console.log(res);
    });
  }
  addEmployee() {
    this.props.history.push("/add-employee/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">List employee</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            {" "}
            Add Employee
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col"> Stt</th>
                <th scope="col"> Name</th>
                <th scope="col"> dateBirth</th>
                <th scope="col"> address </th>
                <th scope="col"> Department </th>
                <th scope="col"> Update</th>
                <th scope="col"> Delete</th>
                <th scope="col"> View</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td> {employee.name} </td>
                  <td> {employee.dateBirth}</td>
                  <td> {employee.address}</td>
                  <td>{employee.department.name} </td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      style={{ marginLeft: "5px" }}
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                  </td>
                  <td>
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
