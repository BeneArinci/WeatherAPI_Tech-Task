const fetch = require('node-fetch');

const headers = {
  "x-api-key": "mcDLmlxrtw7ZHC70gD8FL4rtrXSPsUEB4iSp4lg3",
}

let startYear;
let endYear;
let maxTemp;
let minTemp;
let monthlySunHours;

const getYears = async ({location}) => {
	let response = await fetch(`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/years`, {
		method: "GET",
		headers: headers
	})
	let data = await response.json()
  startYear = data.result.startYear
	endYear = data.result.endYear
}

const fetchingSingleYear = async ({location, year}) => {
	let response = await fetch(`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`, {
		method: "GET",
		headers: headers
	})
	let data = await response.json()
	maxTemp = Math.max.apply(Math, data.result.map(function(temp) { return temp.temperature_max; }))
	minTemp = Math.min.apply(Math, data.result.map(function(temp) { return temp.temperature_min; }))
	monthlySunHours = data.result.map((month) => month.sun)
}

const getAverage = (valuesArray) => {
	let reducer = (total, currentValue) => total + currentValue;
	let sum = valuesArray.reduce(reducer)
	return sum / valuesArray.length;
}

// Get maximum Temperature for a year - Must return a number
exports.getMaxTemperature = async ({location, year}) => {
	await fetchingSingleYear({location, year})
	return maxTemp
}

// Get minimum temperature for a year - Must return a number
exports.getMinTemperature = async ({location, year}) => {
	return minTemp
}

// Get maximum Temperature for all years - Must return a number
exports.getMaxTemperatureForLocation = async ({location}) => {
	await getYears({location})
	let highestTemp = 0;
	for(year=startYear; year<=endYear; year++) {
		let response = await fetch(`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`, {
			method: "GET",
			headers: headers
		})
		let data = await response.json();
		let maxTemp = Math.max.apply(Math, data.result.map(function(temp) { return temp.temperature_max; }))
		if (maxTemp>highestTemp) {
			highestTemp = maxTemp
		}
	}
	return highestTemp;
}

// Get minimum temperature for all years - Must return a number
exports.getMinTemperatureForLocation = async ({location}) => {
	let lowestTemp = 100;
	for(year=startYear; year<=endYear; year++) {
		let response = await fetch(`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`, {
			method: "GET",
			headers: headers
		})
		let data = await response.json();
		let minTemp = Math.min.apply(Math, data.result.map(function(temp) { return temp.temperature_min; }))
		if (minTemp<lowestTemp) {
			lowestTemp = minTemp
		}
	}
	return lowestTemp;
}

// Get average sun hours for a year - Must return a number
exports.getAverageSunHours = async ({location, year}) => {
	return getAverage(monthlySunHours);
}

// Get average sun hours for all years - Must return a number
exports.getAverageSunHoursForLocation = async ({location}) => {
	let sunAverages = []
	for(year=startYear; year<=endYear; year++) {
		let response = await fetch(`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`, {
			method: "GET",
			headers: headers
		})
		let data = await response.json()
		let monthlySunHours = data.result.map((month) => month.sun)
		let yearlySunAverage = getAverage(monthlySunHours)
		if (yearlySunAverage !== 0) {
			sunAverages.push(yearlySunAverage)
		}
	}
	return getAverage(sunAverages);
}