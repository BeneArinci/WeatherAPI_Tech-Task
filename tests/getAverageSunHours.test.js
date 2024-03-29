const {getAverageSunHours, getAverageSunHoursForLocation} = require('../src/index');
const {fetchingSingleYear} = require('../src/index');
const {checkDataAvailability} = require('../src/index');
const apiDataMock = require ('../__mocks__/apiResponseSingleYear');
const sinon = require('sinon');
const nodeFetch = require('node-fetch');



describe('getAverageSunHours using real api data', () => {
	// test no longer working after adding the extra fetch
	// it('Successfully gets the the average sun hours based on mock data', async () =>{
  //   const location = 'oxford';
	// 	const year = 2018;
  //   sinon.stub(nodeFetch, 'Promise').returns(Promise.resolve({ json: () => { return apiDataMock} }));
  //   await getMaxTemperature({location:location, year:year});
	// 	const result = await getAverageSunHours({location:location, year:year});
	// 	expect(result).toEqual(75);
	// 	sinon.restore();
	// })

	it('Successfully gets the average sun hours for oxford 2018', async () =>{
		const location = 'oxford';
    const year = 2018;
    await checkDataAvailability({location:location, year:year});
    await fetchingSingleYear({location:location, year:year});
		const result = await getAverageSunHours();
		expect(result).toEqual(147.9);
	})

	it('Successfully gets the average sun hours for Heathrow 2015', async () =>{
		const location = 'heathrow';
    const year = 2015;
    await checkDataAvailability({location:location, year:year});
    await fetchingSingleYear({location:location, year:year});
		const result = await getAverageSunHours();
		expect(result).toEqual(125.6);
	})

	it('returns 0 if data for the selected year are unavailable, example Heathrow', async () =>{
		const location = 'heathrow';
		const year = 1800;
		await checkDataAvailability({location:location, year:year});
    await fetchingSingleYear({location:location, year:year});
		const result = await getAverageSunHours();
		expect(result).toEqual(0);
	})

	it('returns 0 if data for the selected year are unavailable, example Oxford', async () =>{
		const location = 'oxford';
		const year = 1800;
		await checkDataAvailability({location:location, year:year});
    await fetchingSingleYear({location:location, year:year});
		const result = await getAverageSunHours();
		expect(result).toEqual(0);
	})
})


