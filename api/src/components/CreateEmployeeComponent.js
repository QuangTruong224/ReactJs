import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
// import Select from "react-select";
class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      dateBirth: "",
      address: "",
      departmentId: this.props.match.params.id,
      department: [],
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeDateBirthHandler = this.changeDateBirthHandler.bind(this);
    this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeDepartmentIdHandler = this.changeDepartmentIdHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    console.log("data create", this.state.departmentId);
    // console.log("sss", this.state.department);
  }

  getOptions() {
    EmployeeService.getDepartment().then((res) => {
      this.setState({ department: res.data });
      console.log("goi api", this.state.department);
    });
    return;
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      this.getOptions();
      EmployeeService.getEmployees().then((res) => {
        this.setState({ employees: res.data });
        console.log(res);
      });
    } else {
      this.getOptions() &&
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
          let employee = res.data;
          this.setState({
            name: employee.name,
            dateBirth: employee.dateBirth,
            address: employee.address,
            department: employee.department,
            departmentId: employee.departmentId,
          });
        });
    }
  }
  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      name: this.state.name,
      dateBirth: this.state.dateBirth,
      address: this.state.address,
      department: this.state.department,
      departmentId: this.state.departmentId,
    };

    console.log("employee => " + JSON.stringify(employee));
    console.log(employee);
    if (this.state.id === "_add") {
      EmployeeService.createEmployee(employee).then((res) => {
        this.props.history.push("/employees");
        console.log(res);
      });
    } else {
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push("/employees");
      });
    }
  };
  changeDepartmentIdHandler = (event) => {
    console.log("sssid", event.target.value);
    this.setState({ departmentId: event.target.value });
  };
  changeNameHandler = (event) => {
    console.log("sssssaid", event.target.value);
    this.setState({ name: event.target.value });
  };

  changeDateBirthHandler = (event) => {
    this.setState({ dateBirth: event.target.value });
  };

  changeAddressHandler = (event) => {
    console.log("create address", event.target.value);
    this.setState({ address: event.target.value });
  };

  changeDepartmentHandler = (event) => {
    console.log("ss", event.target.value);
    this.setState({ department: event.target.value });
  };
  cancel() {
    this.props.history.push("/employees");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
    }
  }

  render() {
    // let options = this.departmentList.map(function (departments) {
    //   return { value: departments.name, label: departments.name };
    // });
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      type="text"
                      placeholder=" Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Date of birth: </label>
                    <input
                      type="date"
                      placeholder="Last Name"
                      name="dateBirth"
                      className="form-control"
                      value={this.state.dateBirth}
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
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                    />
                  </div>
                  <div className="form-group">
                    {/* <Select
                      name="form-field-name"
                      value={this.state.departmentId}
                      onChange={this.changeDepartmentIdHandler}
                      options={departmentId}
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
                    onClick={this.saveOrUpdateEmployee}
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
      </div>
    );
  }
}

export default CreateEmployeeComponent;
