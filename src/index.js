const fetch = require('node-fetch');

const headers = {
  "x-api-key": "mcDLmlxrtw7ZHC70gD8FL4rtrXSPsUEB4iSp4lg3",
}

// Get maximum Temperature for a year - Must return a number
exports.getMaxTemperature = async ({location, year}) => {
	let response = await fetch(`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`, {
		method: "GET",
		headers: headers
	})
	let data = await response.json()
	let maxTemp = Math.max.apply(Math, data.result.map(function(temp) { return temp.temperature_max; }))
	return maxTemp
}

// Get minimum temperature for a year - Must return a number
exports.getMinTemperature = async ({location, year}) => {
	let response = await fetch(`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`, {
		method: "GET",
		headers: headers
	})
	let data = await response.json()
	let minTemp = Math.min.apply(Math, data.result.map(function(temp) { return temp.temperature_min; }))
	return minTemp
}

// Get maximum Temperature for all years - Must return a number
exports.getMaxTemperatureForLocation = async ({location}) => {
	return 0;
}

// Get minimum temperature for all years - Must return a number
exports.getMinTemperatureForLocation = async ({location}) => {
	return 0;
}

// Get average sun hours for a year - Must return a number
exports.getAverageSunHours = async ({location, year}) => {
	let response = await fetch(`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`, {
		method: "GET",
		headers: headers
	})
	let data = await response.json();
	console.log(data)
	let monthlySunHours = data.result.map((month) => month.sun)
	let getAverage = arr => {
		let reducer = (total, currentValue) => total + currentValue;
		let sum = arr.reduce(reducer)
		return sum / arr.length;
	}
	return getAverage(monthlySunHours);
}

// Get average sun hours for all years - Must return a number
exports.getAverageSunHoursForLocation = async ({location}) => {
	return 0;
}