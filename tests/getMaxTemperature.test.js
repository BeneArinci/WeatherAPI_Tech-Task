const {getMaxTemperature} = require('../src/index');
const apiDataMock = require ('../__mocks__/apiResponseSingleYear');
const sinon = require('sinon');
const nodeFetch = require('node-fetch');

describe('getMaxTemperature using api', () => {
	it('Successfully gets the max Temperature for oxford 2018', async () =>{
		const location = 'oxford';
		const year = 2018;
		const result = await getMaxTemperature({location:location, year:year});
		expect(result).toEqual(27.4);
	})

	it('Successfully gets the max Temperature for Heathrow 1950', async () =>{
		const location = 'heathrow';
		const year = 1950;
		const result = await getMaxTemperature({location, year});
		expect(result).toEqual(23.6);
	})

	it('returns 0 if data for the selected year are unavailable, example Heathrow', async () =>{
		const location = 'heathrow';
		const year = 1800;
		const result = await getMaxTemperature({location:location, year:year});
		expect(result).toEqual(0);
	})

	it('returns 0 if data for the selected year are unavailable, example Oxford', async () =>{
		const location = 'oxford';
		const year = 1800;
		const result = await getMaxTemperature({location:location, year:year});
		expect(result).toEqual(0);
	})
})


//test not possible anymore because this method is invoking multiple fetch now
// describe('getMaxTemperature using mock api data', () => {
// 	it('Successfully gets the max Temperature based on mock data', async () =>{
// 		sinon.stub(nodeFetch, 'Promise').returns(Promise.resolve({ json: () => { return apiDataMock} }));
// 		const location = 'oxford';
// 		const year = 2018;
// 		const result = await getMaxTemperature({location:location, year:year});
// 		expect(result).toEqual(30);
// 		sinon.restore();
// 	})
// })