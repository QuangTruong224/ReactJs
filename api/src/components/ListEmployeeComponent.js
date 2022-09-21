import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import axios from "axios";
import "./components/Paginate.css";
class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      department: [],
      departmentId: this.props.match.params.id,
    };

    this.getOptions2();
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.changeDepartmentIdHandler = this.changeDepartmentIdHandler.bind(this);
  }
  changeDepartmentIdHandler = (event) => {
    console.log("sssid", event.target.value);
    this.setState({ departmentId: event.target.value });
  };

  // handleDateChange = (event) => {
  //   const dateBirth = event.target.value;
  //   this.setState((prevState) => {
  //     const employees = prevState.data.filter((element) => {
  //       return element.dateBirth
  //         .toLowerCase()
  //         .includes(dateBirth?.toLowerCase());
  //     });
  //     return {
  //       dateBirth,
  //       employees,
  //     };
  //   });
  // };
  // handleNameDepartmentChange = (event) => {
  //   const nameDepart = event.target.value;
  //   this.setState((prevState) => {
  //     const department = prevState.data.filter((element) => {
  //       return element.nameDepart
  //         .toLowerCase()
  //         .includes(nameDepart.toLowerCase());
  //     });
  //     return {
  //       nameDepart,
  //       department,
  //     };
  //   });
  // };

  // handleInputChange = (event) => {
  //   const name = event.target.value;
  //   this.setState((prevState) => {
  //     const employees = prevState.data.filter((element) => {
  //       return element.name.toLowerCase().includes(name?.toLowerCase());
  //     });
  //     return {
  //       name,
  //       employees,
  //     };
  //   });
  // };
  getOptions2() {
    EmployeeService.getDepartment().then((res) => {
      this.setState({ department: res.data });
    });
    return;
  }
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
    return;
    // EmployeeService.getEmployees()
    //   .then((res) => res.data)
    //   .then((data) => {
    //     // if (this.state.name === "") {
    //     const { name } = this.state;
    //     const employees = data.filter((element) => {
    //       return element.name.toLowerCase().includes(name.toLowerCase());
    //     });
    //     this.setState({
    //       data,
    //       employees,
    //     });
    //     console.log("search", this.state.name);
    //     // } else {
    //     const { dateBirth } = this.state;
    //     const dateSearch = data.filter((element) => {
    //       return element.dateBirth
    //         .toLowerCase()
    //         .includes(dateBirth?.toLowerCase());
    //     });
    //     this.setState({ dateSearch });
    //     // }
    //     const { nameDepart } = this.state;
    //     const nameDepartSearch = data.filter((element) => {
    //       return element.nameDepart
    //         .toLowerCase()
    //         .includes(nameDepart.toLowerCase());
    //     });
    //     this.setState({ nameDepartSearch });
    //   });
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
    this.props.history.push(`/update-employee/${id}`);
  }

  addEmployee() {
    this.props.history.push("/add-employee/_add");
  }
  searchData = (searchValue) => {
    console.log(searchValue);
    axios
      .get(`https://localhost:7032/api/Employees/?name=` + searchValue)
      .then((res) => {
        const employees = res.data;
        this.setState({ employees });
      })
      .catch((error) => console.log(error));
  };
  searchDate = (searchValue) => {
    console.log(searchValue);
    axios
      .get(`https://localhost:7032/api/Employees/?dateBirth=` + searchValue)
      .then((res) => {
        const employees = res.data;
        this.setState({ employees });
      })
      .catch((error) => console.log(error));
  };
  searchDepartment = (searchValue) => {
    console.log(searchValue);
    axios
      .get(`https://localhost:7032/api/Employees/?idDepart=` + searchValue)
      .then((res) => {
        const employees = res.data;
        this.setState({ employees });
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center">List employee</h2>
        <hr></hr>
        <div className="form-inline my-lg-2">
          <div className="row"></div>
          <div className="col-3">
            <input
              onChange={(e) => {
                this.searchData(e.target.value);
              }}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Name"
              aria-label="Search"
            ></input>
          </div>
          <div className="col-3">
            <input
              onChange={(e) => {
                this.searchDate(e.target.value);
              }}
              className="form-control mr-sm-2"
              type="date"
              placeholder="Date"
              aria-label="Search"
            ></input>
          </div>
          <div className="col-3">
            <select
              className="form-control"
              onChange={(e) => {
                this.searchDepartment(e.target.value);
              }}
            >
              <option value="">---Choice---</option>
              {this.state.department.map((departments) => (
                <option
                  option={this.state.nameDepart}
                  key={departments.id}
                  value={departments.id}
                >
                  {departments.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-1">
            <button className="btn btn-outline-info my-3 my-sm-9">
              Search
            </button>
          </div>
        </div>

        <div className="row">
          <button
            className="btn btn-outline-info my-2 my-sm-7"
            onClick={this.addEmployee}
          >
            {" "}
            Add Employee
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table">
            <thead className="thead">
              <tr className="table-info">
                <th scope="col"> #</th>
                <th scope="col"> Name</th>
                <th scope="col"> dateBirth</th>
                <th scope="col"> Address </th>
                <th scope="col"> Department </th>
                <th scope="col"> Update</th>
                <th scope="col"> Delete</th>
                <th scope="col"> View</th>
              </tr>
            </thead>
            <tbody className="table-secondary">
              {this.state.employees.length > 0 ? (
                this.state.employees.map((employee) => {
                  return (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td> {employee.name}</td>
                      <td> {employee.dateBirth}</td>
                      <td> {employee.address}</td>
                      <td>{employee.department.name}</td>
                      <td>
                        <button
                          type="submit"
                          onClick={() => this.editEmployee(employee.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>
                      </td>
                      <td>
                        <button
                          type="submit"
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
                          type="submit"
                          style={{ marginLeft: "5px" }}
                          onClick={() => this.viewEmployee(employee.id)}
                          className="btn btn-info"
                        >
                          View{" "}
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://img.freepik.com/free-vector/sad-emoji_53876-25516.jpg"
                    height="200px"
                    // width="1200px"
                    alt=""
                  />
                  <h4>NOT FOUND VALUE !!!</h4>
                </div>
              )}
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button type="submit" className="page-link btn">
                Previous
              </button>
            </li>
            <li className="page-item">
              <a className="page-link"></a>
            </li>
            <li className="page-item">
              <button type="submit" className="page-link btn">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default ListEmployeeComponent;
