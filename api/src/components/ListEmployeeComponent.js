import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import axios from "axios";

import Pagination from "react-js-pagination";
// import ReactPaginate from "react-paginate";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      department: [],
      departmentId: this.props.match.params.id,
      nameSearch: "",
      dateBirthSearch: "",
      idDepartmentSearch: "",
      pageSize: 4,
      next: null,
      previous: null,
      // page: 0,
      // pages: 0,
    };
    // this.getOptions2();
    // this.getData();
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.changeDepartmentIdHandler = this.changeDepartmentIdHandler.bind(this);
  }
  changeDepartmentIdHandler = (event) => {
    console.log("sssid", event.target.value);
    this.setState({ departmentId: event.target.value });
  };
  // static getDerivedStateFromProps(props, state) {
  //   console.log("state 1", state);
  //   console.log("state 2", props);
  //   return state;
  // }
  async getData(pageNumber = 1) {
    const url = `https://localhost:7218/api/Employee?PageNumber=${pageNumber}`;
    const response = await axios.get(url);
    // const { employees } = this.state;
    const { next } = this.state;
    // const { pageSize } = this.state;
    // this.setState({ employees: response.data.data });
    this.setState({
      // next: Math.floor(pageNumber + 1),
      // previous: Math.floor(next - 1),

      employees: response.data.data,
      // pages: Math.floor(employees.length / pageSize),
    });
    console.log("est", response.data.data);
  }
  handlePageClick = (event) => {
    let page = event.selected;
    this.setState({ page });
  };
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
  async componentDidMount() {
    this.getOptions2();
    await this.getData();
    // EmployeeService.getEmployees().then((res) => {
    //   this.setState({ employees: res.data });
    // });
    // return;
    console.log("paginate222222", this.state.employees);
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

  // searchData = (key, value) => {
  //   // console.log(searchValue);
  //   const params = [];
  //   if (key === "name") {
  //     params.push(`name=${value}`);
  //   }
  //   if (key === "dateBirth") {
  //     params.push(`dateBirth=${value}`);
  //   }
  //   if (key === "idDepartment") {
  //     params.push(`idDepartment=${value}`);
  //   }
  //   const url = `https://localhost:7218/api/Employee?${params.join("&")}`;
  //   console.log("e", url);
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       this.setState({ employees: res.data.data });
  //     })
  //     .catch((error) => console.log(error));
  // };
  searchData = () => {
    var url = "https://localhost:7218/api/Employee?";
    var params = [];
    if (this.state.nameSearch) {
      params.push(`name=${this.state.nameSearch}`);
    }
    if (this.state.dateBirthSearch) {
      params.push(`dateBirth=${this.state.dateBirthSearch}`);
    }
    if (this.state.idDepartmentSearch) {
      params.push(`idDepartment=${this.state.idDepartmentSearch}`);
    }
    url = url + `${params.join("&")}`;

    // const url = `https://localhost:7218/api/Employee?name=${nameSearch}&dateBirth=${dateBirthSearch}&idDepartment=${idDepartmentSearch}`;
    console.log("url", url);
    axios
      .get(url)
      .then((res) => {
        this.setState({ employees: res.data.data });
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
                this.setState({ nameSearch: e.target.value });
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
                this.setState({ dateBirthSearch: e.target.value });
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
                this.setState({ idDepartmentSearch: e.target.value });
              }}
            >
              <option value="">---Choice---</option>
              {this.state.department.map((departments) => (
                <option key={departments.id} value={departments.id}>
                  {departments.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-1">
            <button
              onClick={this.searchData}
              className="btn btn-outline-info my-3 my-sm-9"
            >
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
        <div className="mt-3">
          <Pagination
            // activePage={this.state.employees.length / this.state.pageSize}
            // itemsCoun
            // pageSize={5}
            totalItemsCount={this.state.employees.length * this.state.pageSize}
            pageRangeDisplayed={10}
            onChange={(pageNumber) => this.getData(pageNumber)}
            itemClass="page-link"
            // disabledClass={nextPageText}
            prevPageText={this.state.previous}
            nextPageText={this.state.next}
            // linkClass="page-link"
          />
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
