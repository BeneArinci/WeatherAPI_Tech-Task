const {getMaxTemperature} = require('../src/index');
const apiDataMock = require ('../__mocks__/apiResponseSingleYear');
const sinon = require('sinon');
const nodeFetch = require('node-fetch');

describe('getMaxTemperature using apiMock', () => {
	it('Successfully gets the max Temperature based on mock data', async () =>{
		const location = 'oxford';
		const year = 2018;
		sinon.stub(nodeFetch, 'Promise').returns(Promise.resolve({ json: () => { return apiDataMock} }));
		const result = await getMaxTemperature({location:location, year:year});
		expect(result).toEqual(30);
		sinon.restore();
	})

	it('Successfully gets the max Temperature for oxford 2018', async () =>{
		const location = 'oxford';
		const year = 2018;
		const result = await getMaxTemperature({location:location, year:year});
		expect(result).toEqual(27.4);
	})
})