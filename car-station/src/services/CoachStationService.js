import axios from "axios";

const CoachStation_API_BASE_URL = "http://localhost:8080/api/coach-station";
 class CoachStationService {
   getCoachStation() {
     return axios.get(CoachStation_API_BASE_URL);
   }
 }
 export default new CoachStationService();