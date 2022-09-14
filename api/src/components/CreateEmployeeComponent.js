import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
// import Select from "react-select";
class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    // this.departmentList = [];

    console.log(this.departmentId);
    this.state = {
      // step 2
      id: this.props.match.params.id,
      name: "",
      dateBirth: "",
      address: "",
      department: [],
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeDateBirthHandler = this.changeDateBirthHandler.bind(this);
    this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
  }
  // async getOptions() {
  //   EmployeeService.getDepartment().then((res) => {
  //     this.setState({ department: res.data });
  //     console.log(res);
  //   });
  // }
  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      // this.getOptions();
      EmployeeService.getDepartment().then((res) => {
        this.setState({ department: res.data });

        this.departmentList = res.data;
        console.log(res.data);
        // console.log(this.departmentList);
      });

      return;
    } else {
      EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          name: employee.name,
          dateBirth: employee.dateBirth,
          address: employee.address,
          department: employee.department,
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
      // department: this.state.department,
    };
    console.log("employee => " + JSON.stringify(employee));

    // step 5
    if (this.state.id === "_add") {
      EmployeeService.createEmployee(employee).then((res) => {
        this.props.history.push("/employees");
      });
    } else {
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push("/employees");
      });
    }
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
    console.log(event.value);
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
                      name="lastName"
                      className="form-control"
                      value={this.state.dateBirth}
                      onChange={this.changeDateBirthHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Address: </label>
                    <input
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
                      value={this.departmentList}
                      onChange={this.changeDepartmentHandler}
                      options={options}
                    /> */}
                    <span className="form-label">Department</span>
                    <select className="form-control" name="form-field-name">
                      <option>---Choice---</option>
                      {this.state.department.map((departments, i) => (
                        <option
                          key={i}
                          onChange={this.changeDepartmentHandler}
                          value={departments.value}
                        >
                          {departments.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateEmployee}
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

export default CreateEmployeeComponent;
