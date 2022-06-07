import React, {useEffect, useState} from "react";
import moment from "moment";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

import { fetchWeather } from "store/weather/weatherSlice";
import WeatherInformation from "../WeatherInformation";

import { Container, Date, DatesWrapper } from "./WeatherCalendar.styled";

const WeatherCalendar = () => {
	const dispatch = useDispatch();

	const data = useSelector((data: RootStateOrAny) => data.weather.weather);

	const [chosenDate, setChosenDate] = useState<string>("");
	const [selectedDayData, setSelectedDayData] = useState<WeatherProps[]>([]);
	const [isActive, setIsActive] = useState<boolean>(false);

	const formatDate = (date: number | string, format: string) => {
		return moment(date).format(format);
	};

	const dates = data.map((d: WeatherProps) => formatDate(d.dt_txt, "DD"))
		.filter((item: string, i: number, ar: string[]) => ar.indexOf(item) === i);

	useEffect(() => {
		dispatch(fetchWeather())
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