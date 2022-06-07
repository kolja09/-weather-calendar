export interface IWeatherInformation {
	selectedDayData: WeatherProps[],
	setActive:(option: boolean) => void,
	setChosenDate:(option: string) => void,
}