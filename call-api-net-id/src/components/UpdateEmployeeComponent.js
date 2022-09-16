import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
// import axios from "axios";
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
      employee: [],
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeDateBirthHandler = this.changeDateBirthHandler.bind(this);
    this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeDepartmentIdHandler = this.changeDepartmentIdHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }
  getOptions() {
    // this.getOptions() &&
    // EmployeeService?.getEmployeeById(
    //   this.state.id
    // ).EmployeeService.getDepartment.then((res) => {
    //   console.log("xxxxx", res);
    //   let employee = res.data;

    //   this.setState({
    //     name: employee.name,
    //     dateBirth: employee.dateBirth,
    //     address: employee.address,
    //     departmentId: employee.departmentId,
    //     department: employee.department,
    //   });
    // });
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.state.employee = res.data;
      this.setState({
        name: this.state.name,
        dateBirth: this.state.dateBirth,
        address: this.state.address,
        departmentId: this.state.departmentId,
        department: this.state.department,
      });
      console.log("employee", this.state.employee);
    });
  }

  componentDidMount() {
    this.getOptions();
    EmployeeService.getDepartment().then((res) => {
      this.setState({ department: res.data });
      console.log("department", this.state.department);
    });
    return;
  }

  updateEmployee = (e) => {
    e.preventDefault();
    let employees = this.state.employee.map((e, i) => {
      return {
        name: e.name,
        dateBirth: e.dateBirth,
        address: e.address,
        departmentId: e.departmentId,
        employee: e.employee,

        // employeeDto: this.state.id,
      };
    });
    console.log("employee => " + JSON.stringify(employees));
    console.log("id => " + JSON.stringify(this.state.id));
    console.log("employee", employees);
    EmployeeService.updateEmployee(employees, this.state.id).then((res) => {
      this.props.history.push("/employees");
    });
  };

  changeDepartmentIdHandler = (event) => {
    console.log("sssssaid", event.target.value);
    // this.setState({ departmentId: event.target.value });
    console.log("departmentid", event.target.value);
    this.setState({ departmentId: event.target.value });
  };
  changeNameHandler = (event) => {
    console.log("name", event.target.value);
    this.setState({ name: event.target.value });
    // const name = [...this.state.name];
    // name[index] = event.target.value;
    // this.setState({ name });
  };

  changeDateBirthHandler = (event) => {
    console.log("date", event.target.value);
    this.setState({ dateBirth: event.target.value });
  };

  changeAddressHandler = (event) => {
    console.log("address", event.target.value);
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
        {this.state.employee.map((e, i) => {
          return (
            <div className="container" key={i}>
              <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                  <h3 className="text-center">Update Employee</h3>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label> Name: </label>
                        <input
                          // id="name"
                          // autoComplete="name"
                          type="text"
                          placeholder=" Name"
                          name="name"
                          className="form-control"
                          // key={e.id}
                          value={e.name}
                          onChange={this.changeNameHandler}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label> Date of birth: </label>
                        <input
                          type="date"
                          placeholder="Date of birth"
                          name="dateBirth"
                          className="form-control"
                          value={e.dateBirth}
                          onChange={this.changeDateBirthHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label> Address: </label>
                        <input
                          type="text"
                          placeholder=" Address"
                          name="address"
                          className="form-control"
                          value={e.address}
                          onChange={this.changeAddressHandler}
                        />
                      </div>
                      <div className="form-group">
                        {/* <Select
                      name="form-field-name"
                      value={this.departmentList} 
                      onChange={this.changeDepartmentHandler}
                      options={options}
                    /> */}
                        <span className="form-label">Department</span>
                        <select
                          className="form-control"
                          onChange={this.changeDepartmentIdHandler}
                        >
                          <option>---Choice---</option>

                          {this.state.department.map((departments) => (
                            <option key={departments.id} value={departments.id}>
                              {departments.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={this.updateEmployee}
                      >
                        Save
                      </button>
                      <button
                        type="submit"
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
          );
        })}
        <br></br>
      </div>
    );
  }
}

export default UpdateEmployeeComponent;
