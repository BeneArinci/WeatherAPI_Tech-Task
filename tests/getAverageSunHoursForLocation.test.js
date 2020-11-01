const {getAverageSunHoursForLocation, getMinTemperatureForLocation} = require('../src/index');
const {getMaxTemperatureForLocation} = require('../src/index');

describe('getAverageSunHoursForLocation', () => {
	it('Successfully gets the overall average of sun hours for Oxford', async () =>{
    jest.setTimeout(80000);
    const location = 'oxford';
    await getMaxTemperatureForLocation({location})
		const result = await getAverageSunHoursForLocation({location:location});
		expect(result).toEqual(128.1);
	})
})