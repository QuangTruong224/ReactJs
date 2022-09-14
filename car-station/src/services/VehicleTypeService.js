import axios from "axios";

const VehicleType_API_BASE_URL = "http://localhost:8080/api/vehicle-type";
class VehicleTypeService {
  getVehicleType() {
    return axios.get(VehicleType_API_BASE_URL);
  }
}
export default new VehicleTypeService();
