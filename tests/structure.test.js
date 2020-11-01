const { getMaxTemperature, 
	getMinTemperature, 
	getMaxTemperatureForLocation, 
	getMinTemperatureForLocation,
	getAverageSunHours,
	getAverageSunHoursForLocation } = require('../src/index')

const LOCATION = 'oxford';
const YEAR = 2018;

const apiDataSingleYear = require ('../__mocks__/apiResponseSingleYear')

var sinon = require('sinon');
var nodeFetch = require('node-fetch')

// beforeEach(() => {
// 	sinon.stub(nodeFetch, 'Promise').returns(Promise.resolve({ json: () => { return apiDataSingleYear} }))
// })

// afterEach(() => {
// 	sinon.restore();
// });

describe('The exported function', ()=> {
	it('getMaxTemperature returns a number', async () => {
		const result = await getMaxTemperature({location: LOCATION, year: YEAR})
		expect(typeof result).toEqual('number')
	})
	it('getMinTemperature returns a number', async () => {
		const result = await getMinTemperature({location: LOCATION, year: YEAR})
		expect(typeof result).toEqual('number')
	})
	it('getMaxTemperatureForLocation returns a number', async () => {
		jest.setTimeout(30000)
		const result = await getMaxTemperatureForLocation({location: LOCATION})
		expect(typeof result).toEqual('number')
	})
	it('getMinTemperatureForLocation returns a number', async () => {
		jest.setTimeout(30000)
		const result = await getMinTemperatureForLocation({location: LOCATION})
		expect(typeof result).toEqual('number')
	})
	it('getAverageSunHours returns a number', async () => {
		const result = await getAverageSunHours({location: LOCATION, year: YEAR})
		expect(typeof result).toEqual('number')
	})
	it('getAverageSunHoursForLocation returns a number', async () => {
		jest.setTimeout(30000)
		const result = await getAverageSunHoursForLocation({location: LOCATION})
		expect(typeof result).toEqual('number')
	})
})