const {getMaxTemperatureForLocation} = require('../src/index')

const apiDataMock = require ('../__mocks__/apiResponseSingleYear')

var sinon = require('sinon');
var nodeFetch = require('node-fetch')

// describe('getMaxTemperatureForLocation using apiMock', () => {
// 	it('Successfully gets the max Temperature for location based on mock data', async () =>{
// 		const location = 'oxford';
// 		const year = 2018;
// 		sinon.stub(nodeFetch, 'Promise').returns(Promise.resolve({ json: () => { return apiDataMock} }))
// 		const result = await getMaxTemperatureForLocation({location:location, year:year});
// 		expect(result).toEqual(30)
// 		sinon.restore();
// 	})
// })


describe('getMaxTemperatureForLocation', () => {
	it('Successfully gets the max Temperature for Oxford', async () =>{
    jest.setTimeout(30000)
    const location = 'oxford';
    
		const result = await getMaxTemperatureForLocation({location:location});

		expect(result).toEqual(27.4)
	})
})