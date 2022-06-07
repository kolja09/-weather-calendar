import React, {useEffect, useState} from "react";
import moment from "moment";

import WeatherInformation from "../WeatherInformation/WeatherInformation";
import { Container, Date, DatesWrapper } from "./WeatherCalendar.styled";

import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../redux/store";
import { loadWeather } from "../../redux/weather/action";

const WeatherCalendar = () => {
	const dispatch = useDispatch();

	const data = useSelector((data: RootState) => data.weatherReducer.weatherItems);

	const [chosenDate, setChosenDate] = useState<string>("");
	const [selectedDayData, setSelectedDayData] = useState<WeatherProps[]>([]);
	const [isActive, setIsActive] = useState<boolean>(false);

	const formatDate = (date: number | string, format: string) => {
		return moment(date).format(format);
	};

	const dates = data.map((d: WeatherProps) => formatDate(d.dt_txt, "DD"))
		.filter((item: string, i: number, ar: string[]) => ar.indexOf(item) === i);

	useEffect(() => {
		dispatch(loadWeather())
	}, [dispatch]);

	const handleClick = (selectedDate: string) => {
		setSelectedDayData(data.filter((d:WeatherProps) =>  formatDate(d.dt_txt, "DD") === selectedDate));
		setIsActive(true);
		setChosenDate(selectedDate);
	};

	return (
		<Container>
			<DatesWrapper>
				{
					dates.map((date: string) => (
						<Date
							isChosen={date === chosenDate}
							key={date}
							onClick={() => handleClick(date)}
						>
							{date}
						</Date>
					))
				}
			</DatesWrapper>
			{
				isActive ? <WeatherInformation
					setActive={setIsActive}
					selectedDayData={selectedDayData}
					setChosenDate={setChosenDate}
				/> : ''
			}
		</Container>
	)
}

export default WeatherCalendar 