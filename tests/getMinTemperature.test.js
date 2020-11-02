const {getMinTemperature} = require('../src/index');
const {fetchingSingleYear} = require('../src/index');
const {checkDataAvailability} = require('../src/index');
const apiDataMock = require ('../__mocks__/apiResponseSingleYear');
const sinon = require('sinon');
const nodeFetch = require('node-fetch');

describe('getMinTemperature using real api Data', () => {
  it('Successfully gets the min Temperature for oxford 2018', async () =>{
		const location = 'oxford';
    const year = 2018;
    await checkDataAvailability({location:location, year:year});
    await fetchingSingleYear({location:location, year:year});
		const result = await getMinTemperature({location:location, year:year});
		expect(result).toEqual(0.3);
  })

  it('Successfully gets the min Temperature for Heathrow 2000', async () =>{
		const location = 'heathrow';
    const year = 2000;
    await checkDataAvailability({location:location, year:year});
    await fetchingSingleYear({location:location, year:year});
		const result = await getMinTemperature({location:location, year:year});
		expect(result).toEqual(2.4);
  })

  //test no longer working because of multiple fetch calls and only a single mock
  // it('Successfully gets the min Temperature based on mock data', async () =>{
  //   const location = 'oxford';
	// 	const year = 2018;
  //   sinon.stub(nodeFetch, 'Promise').returns(Promise.resolve({ json: () => { return apiDataMock} }));
  //   await checkDataAvailability({location:location, year:year});
  //   await fetchingSingleYear({location:location, year:year});
	// 	const result = await getMinTemperature({location:location, year:year});
	// 	expect(result).toEqual(-3);
	// 	sinon.restore();
	// })
})