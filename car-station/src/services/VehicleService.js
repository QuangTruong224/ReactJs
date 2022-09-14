import axios from "axios";

const Vehicle_API_BASE_URL = "http://localhost:8080/api/vehicles";

class VehicleService {
  getVehicles() {
    return axios.get(Vehicle_API_BASE_URL);
  }

  createVehicle(vehicle) {
    return axios.post(Vehicle_API_BASE_URL, vehicle);
  }

  getVehicleById(vehicleId) {
    return axios.get(Vehicle_API_BASE_URL + "/" + vehicleId);
  }

  updateVehicle(vehicle, vehicleId) {
    return axios.put(Vehicle_API_BASE_URL + "/" + vehicleId, vehicle);
  }

  deleteVehicle(vehicleId) {
    return axios.delete(Vehicle_API_BASE_URL + "/" + vehicleId);
  }
}

export default new VehicleService();
