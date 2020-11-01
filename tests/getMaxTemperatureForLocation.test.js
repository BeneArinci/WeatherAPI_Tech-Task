const {getMaxTemperatureForLocation} = require('../src/index');

describe('getMaxTemperatureForLocation', () => {
	it('Successfully gets the max Temperature for Oxford', async () =>{
    jest.setTimeout(30000);
    const location = 'oxford';
		const result = await getMaxTemperatureForLocation({location:location});
		expect(result).toEqual(27.4);
	})
})