const {getMinTemperatureForLocation} = require('../src/index');
const {getMaxTemperatureForLocation} = require('../src/index');

describe('getMinTemperatureForLocation', () => {
	it('Successfully gets the overall min Temperature for Oxford', async () =>{
    jest.setTimeout(30000);
    const location = 'oxford';
    await getMaxTemperatureForLocation({location:location})
		const result = await getMinTemperatureForLocation({location:location});
		expect(result).toEqual(-5.8);
	})
})