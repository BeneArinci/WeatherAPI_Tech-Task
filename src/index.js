const fetch = require('node-fetch');
const { getAverage } = require('./sideFunctions');

const headers = {
  "x-api-key": "mcDLmlxrtw7ZHC70gD8FL4rtrXSPsUEB4iSp4lg3",
};

let startYear;
let endYear;
let apiDataSingleYear;
let apiDataLocation = [];
let dataAvailable;

// fetching available start and end years for specific location
const getYears = async ({location}) => {
	let response = await fetch(`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/years`, {
		method: "GET",
		headers: headers
	})
	let data = await response.json();
  startYear = data.result.startYear;
	endYear = data.result.endYear;
}

// private support function for checking if year is available
const isYearAvailable = (year) => {
	return year>=startYear && year<=endYear;
}

// checking data availability for a specific year
const checkDataAvailability = async({year, location}) => {
	await getYears({location})
	if (isYearAvailable(year)) {
		dataAvailable=true
	} else { dataAvailable=false }
}

// function for fetching data related to a location in a specific year
const fetchingSingleYear = async ({location, year}) => {
	let response = await fetch(`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`, {
		method: "GET",
		headers: headers
	})
	let data = await response.json();
	apiDataSingleYear = data.result;
}

// function for fetching all data related to a location
const fetchingLocationData = async ({location}) => {
	for(year=startYear; year<=endYear; year++) {
		let response = await fetch(`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/${location}/year/${year}`, {
			method: "GET",
			headers: headers
		})
		let data = await response.json();
		apiDataLocation.push(data.result);
	}
}

// Get maximum Temperature for a year - Must return a number
exports.getMaxTemperature = async ({location, year}) => {
	await checkDataAvailability({location, year})
	if(dataAvailable) {
		await fetchingSingleYear({location, year})
		maxTemp = Math.max.apply(Math, apiDataSingleYear.map(function(temp) { return temp.temperature_max; }))
		return maxTemp
	} 
	return 0;
}

// Get minimum temperature for a year - Must return a number
exports.getMinTemperature = async ({location, year}) => {
	if(dataAvailable === true) {
		minTemp = Math.min.apply(Math, apiDataSingleYear.map(function(temp) { return temp.temperature_min; }))
		return minTemp
	} 
	return 0;
}

// Get maximum Temperature for all years - Must return a number
exports.getMaxTemperatureForLocation = async ({location}) => {
	if (dataAvailable) {
		await fetchingLocationData({location})
		let highestTemp = 0;
		apiDataLocation.forEach((year) => {
			let maxTemp = Math.max.apply(Math, year.map(function(temp) { return temp.temperature_max; }))
			if (maxTemp>highestTemp) {
				highestTemp = maxTemp
			}
		})
		return highestTemp;
	}
	return 0;
}

// Get minimum temperature for all years - Must return a number
exports.getMinTemperatureForLocation = async ({location}) => {
	if(dataAvailable) {
		let lowestTemp = 100;
		apiDataLocation.forEach((year) => {
			let minTemp = Math.min.apply(Math, year.map(function(temp) { return temp.temperature_min; }))
			if (minTemp<lowestTemp) {
				lowestTemp = minTemp
			}
		})
		return lowestTemp;
	}
	return 0;
}

// Get average sun hours for a year - Must return a number
exports.getAverageSunHours = async ({location, year}) => {
	if(dataAvailable) {
		let monthlySunHours = apiDataSingleYear.map((month) => month.sun)
		let average = getAverage(monthlySunHours).toFixed(1);
		return Number(average)
	}
	return 0;
}

// Get average sun hours for all years - Must return a number
exports.getAverageSunHoursForLocation = async ({location}) => {
	if(dataAvailable) {
		let sunAverages = []
  apiDataLocation.forEach((year) => {
		let monthlySunHours = year.map((month) => month.sun);
		let yearlySunAverage = getAverage(monthlySunHours);
		if (yearlySunAverage !== 0) {
			sunAverages.push(yearlySunAverage)
		}
	})
	let average = getAverage(sunAverages).toFixed(1);
	return Number(average);
	}
	return 0;
}

module.exports.checkDataAvailability = checkDataAvailability;
module.exports.fetchingSingleYear = fetchingSingleYear;
module.exports.fetchingLocationData = fetchingLocationData;