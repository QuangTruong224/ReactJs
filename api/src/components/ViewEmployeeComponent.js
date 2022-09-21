import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
      department: {
        // id: this.props.match.params.id,
        // name: "",
      },
    };
    this.getOptions();
  }
  getOptions() {
    EmployeeService.getDepartment().then((res) => {
      this.setState({ department: res.data });
      console.log("department", this.state.department);
    });
    return;
  }
  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.getOptions();
      this.setState({ employee: res.data });
      // this.setState({ department: res.data });
      console.log("employee", res.data);
    });
    console.log("name", this.state.employee.name);
  }

  render() {
    return (
      <div>
        {/* {this.state.employee.map((e, i) => {
          return ( */}
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Name : </label>
              <div>&nbsp; {this.state.employee.name}</div>
            </div>
            <div className="row">
              <label> Date of Birth : </label>
              <div>&nbsp; {this.state.employee.dateBirth}</div>
            </div>
            <div className="row">
              <label> Address : </label>
              <div>&nbsp; {this.state.employee.address}</div>
            </div>
            <div className="row">
              <label> Department : </label>
              <div>{this.state.department.name}</div>
              {/* {this.state.department?.map((departments) => (
                    <div if key={departments.id} value={departments.id}>
                      &nbsp; {departments.name}
                    </div>
                  ))} */}
            </div>
          </div>
        </div>
        {/* );
        })} */}
      </div>
    );
  }
}

export default ViewEmployeeComponent;
