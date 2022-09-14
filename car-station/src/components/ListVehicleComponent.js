import React, { Component } from "react";
// import CoachStationService from "../services/CoachStationService";
import VehicleService from "../services/VehicleService";
// import VehicleTypeService from "../services/VehicleTypeService";

class ListVehicleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
    };
    console.log(this.state.vehicles);

    this.addVehicle = this.addVehicle.bind(this);
    this.editVehicle = this.editVehicle.bind(this);
    this.deleteVehicle = this.deleteVehicle.bind(this);
  }
  viewVehicle(id) {
    this.props.history.push(`view-vehicle/${id}`);
  }

  editVehicle(id) {
    this.props.history.push(`add-vehicle/${id}`);
  }
  addVehicle() {
    this.props.history.push(`add-vehicle/_add`);
  }

  deleteVehicle(id) {
    VehicleService.deleteVehicle(id).then((res) => {
      this.setState({
        vehicles: this.state.vehicles.filter((vehicle) => vehicle.id !== id),
      });
    });
  }

  componentDidMount() {
    VehicleService.getVehicles().then((res) => {
      console.log(res);
      this.setState({ vehicles: res.data.content });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">List vehicle</h2>
        <div className="row"></div>
        <br></br>
        <div className="row">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col"> Stt</th>
                <th scope="col"> Number Plate</th>
                <th scope="col"> Vehicle Type</th>
                <th scope="col"> Coach Station </th>
                <th scope="col"> startSpot </th>
                <th scope="col"> stopSpot </th>
                <th scope="col"> phoneNumber </th>
                <th scope="col"> email </th>
                <th scope="col"> startTime </th>
                <th scope="col"> stopTime </th>
                <th scope="col"> Update</th>
                <th scope="col"> Delete</th>
                <th scope="col"> View</th>
              </tr>
            </thead>
            <tbody>
              {this.state.vehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>{vehicle.id}</td>
                  <td> {vehicle.numberPlate} </td>
                  <td> {vehicle.types.name} </td>
                  <td> {vehicle.coachStation.name} </td>
                  <td> {vehicle.startSpot} </td>
                  <td> {vehicle.stopSpot} </td>
                  <td> {vehicle.phoneNumber} </td>
                  <td> {vehicle.email} </td>
                  <td> {vehicle.startTime} </td>
                  <td> {vehicle.stopTime} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListVehicleComponent;
