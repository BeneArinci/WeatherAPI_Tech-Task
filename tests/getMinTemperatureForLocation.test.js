const {getMinTemperatureForLocation} = require('../src/index');
const {checkDataAvailability} = require('../src/index');
const {getMaxTemperatureForLocation} = require('../src/index');

describe('getMinTemperatureForLocation', () => {
  it('Successfully gets the overall min Temperature for Heathrow', async () =>{
    jest.setTimeout(30000);
    const location = 'heathrow';
    const year = 2016
    await checkDataAvailability({location, year})
    await getMaxTemperatureForLocation({location})
		const result = await getMinTemperatureForLocation({location:location});
		expect(result).toEqual(-4.6);
  })
  
  it('Successfully gets the overall min Temperature for Oxford', async () =>{
    jest.setTimeout(30000);
    const location = 'oxford';
    const year = 2012
    await checkDataAvailability({location, year})
    await getMaxTemperatureForLocation({location})
		const result = await getMinTemperatureForLocation({location:location});
		expect(result).toEqual(-5.8);
  })

  it('returns 0 if data are not available for that year - example Heathrow', async () =>{
    jest.setTimeout(30000);
    const location = 'heathrow';
    const year = 1600
    await checkDataAvailability({location, year})
    await getMaxTemperatureForLocation({location})
		const result = await getMinTemperatureForLocation({location:location});
		expect(result).toEqual(0);
  })

  it('returns 0 if data are not available for that year - example Oxford', async () =>{
    jest.setTimeout(30000);
    const location = 'oxford';
    const year = 1600
    await checkDataAvailability({location, year})
    await getMaxTemperatureForLocation({location})
		const result = await getMinTemperatureForLocation({location:location});
		expect(result).toEqual(0);
  })
})