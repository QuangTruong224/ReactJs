import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://localhost:7218/api/Employee";
const DEPARTMENT_API_BASE_URL = "https://localhost:7218/api/Department";
class EmployeeService {
  getDepartment = () => {
    return axios.get(DEPARTMENT_API_BASE_URL);
  };
  getEmployees = () => {
    // const params = request;
    return axios.get(EMPLOYEE_API_BASE_URL);
  };
  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  getEmployeeById = (employeeId) => {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  };

  updateEmployee = (employee, employeeId) => {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee);
  };

  deleteEmployee = (employeeId) => {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  };
}

export default new EmployeeService();
