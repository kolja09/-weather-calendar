import axios from "axios";
import { coordinates, apiKey } from "../static/constants";

class ApiService{
	getWeather = () => axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`)
}

export const apiService = new ApiService();