import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: [],
      department: [],
    };
  }
  getOptions() {
    EmployeeService.getDepartment().then((res) => {
      this.setState({ department: res.data });
      console.log("department", this.state.department);
    });
    return;
  }
  componentDidMount() {
    this.getOptions();
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
      console.log("employee", res.data);
    });
    console.log("name", this.state.employee.name);
  }

  render() {
    return (
      <div>
        {this.state.employee.map((e, i) => {
          return (
            <div className="card col-md-6 offset-md-3">
              <h3 className="text-center"> View Employee Details</h3>
              <div className="card-body">
                <div className="row">
                  <label> Name : </label>
                  <div>&nbsp; {e.name}</div>
                </div>
                <div className="row">
                  <label> Date of Birth : </label>
                  <div>&nbsp; {e.dateBirth}</div>
                </div>
                <div className="row">
                  <label> Address : </label>
                  <div>&nbsp; {e.address}</div>
                </div>
                <div className="row">
                  <label> Department : </label>
                  {this.state.department?.map((departments) => (
                    <div if key={departments.id} value={departments.id}>
                      &nbsp; {departments.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ViewEmployeeComponent;
