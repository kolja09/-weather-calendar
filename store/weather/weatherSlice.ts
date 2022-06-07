import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiService} from "../api/api";

export const fetchWeather = createAsyncThunk(
	'weather/fetchWeather',
	async function () {
		return await apiService.getWeather().then((res) => res.data.list)
	}
)

const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		weather: [] as WeatherProps[],
		status: null as string | null,
		error: null as string | null,
	},
	reducers:{},
	extraReducers: {
		[fetchWeather.pending.type]:(state) => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchWeather.fulfilled.type]: (state, action) => {
			state.status = 'resolved';
			state.weather = action.payload;
		}
	}
})

export default weatherSlice.reducer