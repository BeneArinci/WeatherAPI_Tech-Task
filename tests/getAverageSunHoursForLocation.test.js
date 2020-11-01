const {getAverageSunHoursForLocation} = require('../src/index');
const {getMaxTemperatureForLocation} = require('../src/index');

describe('getAverageSunHoursForLocation', () => {
	it('Successfully gets the overall average of sun hours for Oxford', async () =>{
    jest.setTimeout(60000);
    const location = 'oxford';
    await getMaxTemperatureForLocation({location})
		const result = await getAverageSunHoursForLocation({location:location});
		expect(result).toEqual(128.1);
  })
  it('Successfully gets the overall average of sun hours for Heathrow', async () =>{
    jest.setTimeout(60000);
    const location = 'heathrow';
    await getMaxTemperatureForLocation({location})
		const result = await getAverageSunHoursForLocation({location:location});
		expect(result).toEqual(128.5);
	})
})