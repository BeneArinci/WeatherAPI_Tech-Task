const {getMinTemperature} = require('../src/index')
const {getMaxTemperature} = require('../src/index')

const apiDataMock = require ('../__mocks__/apiResponseSingleYear')

var sinon = require('sinon');
var nodeFetch = require('node-fetch')

describe('getMinTemperature using apiMock', () => {
	it('Successfully gets the min Temperature based on mock data', async () =>{
    const location = 'oxford';
		const year = 2018;
    sinon.stub(nodeFetch, 'Promise').returns(Promise.resolve({ json: () => { return apiDataMock} }))
    await getMaxTemperature({location:location, year:year});
		const result = await getMinTemperature({location:location, year:year});
		expect(result).toEqual(-3)
		sinon.restore();
	})
})


describe('getMinTemperature', () => {
	it('Successfully gets the min Temperature for oxford 2018', async () =>{
		const location = 'oxford';
    const year = 2018;
    await getMaxTemperature({location:location, year:year});

		const result = await getMinTemperature({location:location, year:year});

		expect(result).toEqual(0.3)
	})
})