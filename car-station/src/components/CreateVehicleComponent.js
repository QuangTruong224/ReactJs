import React, { Component } from "react";
import VehicleService from "../services/VehicleService";

class CreateVehicleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id,
      numberPlate: "",
      startSpot: "",
      stopSpot: "",
      phoneNumber: "",
      email: "",
      startTime: "",
      stopTime: "",
      types: "",
      coachStation: "",
    };
    this.changeNumberPlate = this.changeNumberPlate.bind(this);
    this.changeStartSpot = this.changeStartSpot.bind(this);
    this.changeStopSpot = this.changeStopSpot.bind(this);
    this.changePhoneNumber = this.changePhoneNumber.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeStartTime = this.changeStartTime.bind(this);
    this.changeStopTime = this.changeStopTime.bind(this);
    this.changeTypes = this.changeTypes.bind(this);
    this.changeCoachStation = this.changeCoachStation.bind(this);
  }
  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      VehicleService.getVehicleById(this.state.id).then((res) => {
        let vehicle = res.data;
        this.setState({
          numberPlate: vehicle.numberPlate,
          startSpot: vehicle.startSpot,
          stopSpot: vehicle.stopSpot,
          phoneNumber: vehicle.phoneNumber,
          email: vehicle.email,
          types: vehicle.types,
          coachStation: vehicle.coachStation,
          startTime: vehicle.startTime,
          stopTime: vehicle.stopTime,
        });
      });
    }
  }
  saveOrUpdateVehicle = (e) => {
    e.preventDefault();
    let vehicle = {
      numberPlate: this.state.numberPlate,
      startSpot: this.state.startSpot,
      stopSpot: this.state.stopSpot,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      types: this.state.types,
      coachStation: this.state.coachStation,
      startTime: this.state.startTime,
      stopTime: this.state.stopTime,
    };
    console.log("vehicle =>" + JSON.stringify(vehicle));
    if (this.state.id === "_add") {
      VehicleService.createVehicle(vehicle).then(() =>
        this.props.history.push("/vehicles")
      );
    } else {
      VehicleService.updateVehicle(vehicle).then(() =>
        this.props.history.push("/vehicles")
      );
    }
  };
  changeNumberPlate = (event) => {
    this.setState({ numberPlate: event.target.value });
  };
  changeStartSpot = (event) => {
    this.setState({ startSpot: event.target.value });
  };
  changeStopSpot = (event) => {
    this.setState({ stopSpot: event.target.value });
  };
  changePhoneNumber = (event) => {
    this.setState({ phoneNUmber: event.target.value });
  };
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changeTypes = (event) => {
    this.setState({ types: event.taget.value });
  };
  changeCoachStation = (event) => {
    this.setState({ coachStation: event.taget.value });
  };
  changeStartTime = (event) => {
    this.setState({ startTime: event.taget.value });
  };
  changeStopTime = (event) => {
    this.setState({ stopTime: event.taget.value });
  };
  cancel() {
    this.props.history.push("/vehicles");
  }
  getTitle() {
    if (this.state.id === "_add") {
      return <h2 className="text-center">Add vehicle</h2>;
    } else {
      return <h2 className="text-center">Update Vehicle</h2>;
    }
  }
  render() {
    return (
      <div>
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form>
                  <div className="form-group">
                    <span className="form-label">Số xe</span>
                    <input type="text" className="form-control"></input>
                  </div>

                  <div className="form-group">
                    <span className="form-label">Loại xe</span>
                    <select></select>
                  </div>
                  <div className="form-group">
                    <span className="form-label">Nhà xe</span>
                    <select></select>
                  </div>

                  <div className="row no-margin">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <span className="form-label">Nơi đi</span>
                        <input type="text" className="form-control"></input>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                            <span className="form-label">

                            </span>

                        </div>

                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
