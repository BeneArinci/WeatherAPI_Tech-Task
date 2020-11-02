const {getMaxTemperatureForLocation} = require('../src/index');
const {checkDataAvailability} = require ('../src/index')

describe('getMaxTemperatureForLocation', () => {
	it('Successfully gets the max Temperature for Oxford', async () =>{
    jest.setTimeout(30000);
    const location = 'oxford';
    const year = 2018
    await checkDataAvailability({location, year})
		const result = await getMaxTemperatureForLocation({location:location});
		expect(result).toEqual(27.4);
  })
  
  it('Successfully gets the max Temperature for Heathrow', async () =>{
    jest.setTimeout(30000);
    const location = 'heathrow';
    const year = 2004
    await checkDataAvailability({location, year})
		const result = await getMaxTemperatureForLocation({location:location});
		expect(result).toEqual(28.3);
  })
  
  it('Returns 0 if year is not available', async () =>{
    jest.setTimeout(30000);
    const location = 'oxford';
    const year = 1800
    await checkDataAvailability({location, year})
		const result = await getMaxTemperatureForLocation({location:location});
		expect(result).toEqual(0);
  })

  it('Returns 0 if year is not available', async () =>{
    jest.setTimeout(30000);
    const location = 'heathrow';
    const year = 1700
    await checkDataAvailability({location, year})
		const result = await getMaxTemperatureForLocation({location:location});
		expect(result).toEqual(0);
  })
})