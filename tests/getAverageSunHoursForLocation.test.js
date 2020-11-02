const {getAverageSunHoursForLocation} = require('../src/index');
const {checkDataAvailability} = require('../src/index');
const {getMaxTemperatureForLocation} = require('../src/index')

describe('getAverageSunHoursForLocation', () => {
	it('Successfully gets the overall average of sun hours for Oxford', async () =>{
    jest.setTimeout(60000);
    const location = 'oxford';
    const year = '2012'
    await checkDataAvailability({location, year})
    await getMaxTemperatureForLocation({location})
		const result = await getAverageSunHoursForLocation({location:location});
		expect(result).toEqual(128.1);
  })

  it('Successfully gets the overall average of sun hours for Heathrow', async () =>{
    jest.setTimeout(60000);
    const location = 'heathrow';
    const year = '2012'
    await checkDataAvailability({location, year})
    await getMaxTemperatureForLocation({location})
		const result = await getAverageSunHoursForLocation({location:location});
		expect(result).toEqual(128.5);
  })
  it('returns 0 if data are not available for that year - example Heathrow', async () =>{
    jest.setTimeout(30000);
    const location = 'heathrow';
    const year = 1600
    await checkDataAvailability({location, year})
    await getMaxTemperatureForLocation({location})
		const result = await getAverageSunHoursForLocation({location:location});
		expect(result).toEqual(0);
  })

  it('returns 0 if data are not available for that year - example Oxford', async () =>{
    jest.setTimeout(30000);
    const location = 'oxford';
    const year = 1600
    await checkDataAvailability({location, year})
    await getMaxTemperatureForLocation({location})
		const result = await getAverageSunHoursForLocation({location:location});
		expect(result).toEqual(0);
  })
})