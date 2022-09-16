import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
// import Select from "react-select";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      dateBirth: "",
      address: "",
      departmentId: this.props.match.params.id,
      department: [],

      // employee: {},
    };
    this.getOptions2();
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeDateBirthHandler = this.changeDateBirthHandler.bind(this);
    this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeDepartmentIdHandler = this.changeDepartmentIdHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }
  getOptions2() {
    EmployeeService.getDepartment().then((res) => {
      this.setState({ department: res.data });
    });
    return;
  }
  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      console.log(this.state.id);
      this.setState({ employee: res.data });
      let employee = res.data[0];
      this.setState({
        name: employee.name,
        dateBirth: employee.dateBirth,
        address: employee.address,
        departmentId: employee.departmentId,
        // department: employee.department,
      });
      console.log("state", this.state);
    });
  }

  updateEmployee = (e) => {
    e.preventDefault();

    let employee = {
      id: this.state.id,
      name: this.state.name,
      dateBirth: this.state.dateBirth,
      address: this.state.address,
      departmentId: this.state.departmentId,
    };

    console.log("employee => " + JSON.stringify(employee));
    console.log("id => " + JSON.stringify(this.state.id));
    console.log(employee);

    EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
      this.props.history.push("/employees");
    });
  };

  changeDepartmentIdHandler = (event) => {
    console.log("sssssaid", event.target.value);
    this.setState({ departmentId: event.target.value });
  };
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeDateBirthHandler = (event) => {
    this.setState({ dateBirth: event.target.value });
  };

  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  changeDepartmentHandler = (event) => {
    console.log("ss", event.target.value);
    this.setState({ department: event.target.value });
  };

  cancel() {
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      placeholder=" Name"
                      name="Name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Date of birth: </label>
                    <input
                      type="date"
                      placeholder="Date"
                      name="Date"
                      className="form-control"
                      value={this.state.dateBirth}
                      onChange={this.changeDateBirthHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Address: </label>
                    <input
                      placeholder="Address"
                      name="Address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      value={this.state.departmentId}
                      // value={this.state.department.id}
                      className="form-control"
                      onChange={this.changeDepartmentIdHandler}
                    >
                      <option>---Choice---</option>
                      {this.state.department?.map((departments) => (
                        <option key={departments.id} value={departments.id}>
                          {departments.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEmployeeComponent;
