# MySolution
I wanted to thank you all for allowing me to work on this tech task. I did not have a lot of experience with Node.js and this allowed me to brush up on my existing knowledge but also to learn a lot of new things :)
<br>
While telling you how I solved this challenge, there are a few points worth to be mentioned.

## Priority to performance
I started by keeping all the exported functions divided from the others. Every one of them was performing a specific call to the API server. This solution was working but it was extremely slow for a large number of API calls/quantity of data to be analyzed. On top of this, there was a lot of repetition on my code (fetching the same data multiple times for example). <br>
For this reason, I refactored my code in order to reduce to the minimum the API calls and improve the performance. Consequently, I decided to store the API data into variables so that all the other functions were able to use them. The performance significantly improved passing from ~35sec to ~15sec execution time (Oxford).<br>
On top of this, I tried to divide as much as possible the responsibilities for different tasks into different functions.

## Steps
As I mentioned above, I built all the methods and then I refactored my code in order to improve the performance. I did this taking into consideration only the "best-case scenario" - the user inserting a year with available data. <br>
After completing a working app, I decided to take into consideration the main edge case: the user entering a data unavailable year. <br>
I developed a method for checking the year data availability. The first function called by app.js (getMaxTemperature) is the one calling it. It stores the year availability inside a variable (boolean) that is used by all the other functions. Based on this variable (dataAvailability), every function knows if having to check for data or just return 0 (when the year is not available).

## Testing
I tested all the main functions with real API data (both in a normal scenario and edge case).<br>
In the beginning, I also created a file with mock API data (still available even if no longer used) and I had the opportunity to test with that the real functionality of all the functions that were making a single API call (getMaxTemp, getMinTemp, getAverageSunHours).<br>
After adding the function for checking if the data for the requested year were available, also the above functions were required to do 2 different fetch calls and it became impossible to do a generic fetch mock. For this reason, I had to deactivate the existing mockAPI tests.

## External Libraries
I used the *node-fetch* library to allow the use of the fetch function from the back-end.
*Sinon* is the library that I used for mocking the fetch calls (read the "testing" paragraph)

## Areas of improvement/doubts
I wasn't allowed to modify the app.js file. If I could, I would have preferred to check on data/year availability straight away after receiving the location and year input rather than asking the first called function to do that. This is an area of improvement but also a huge doubt for me because I started thinking that you might wanted me to proceed in a different way.<br>
Another area of improvement might be sending an error message/not returning results if the user misspells the location or is inserting a not available one. 


----------

### Task
Your task is to create a client for a weather API.
We have already implemented the user interface for this in `app.js`. Your task is to finish implementing the functions that will be calling the api.

You need to implement the 6 functions that are currently stubbed in the `src/index.js` file and then write corresponding tests for them. You should not make any changes to the `app.js`. We value performant applications and would like the execution time of running `node app.js` to be under 30 seconds.

The exported functions must always return a number, if the function would error or not return a number it should return `0`

As this task will be tested automatically, you must not change the name or inputs of the exported functions in the `src/index.js`.

If you want to split the task across multiple javascript files, please add them into the `src` folder.

#### FAQ
##### Am I allowed to use third party libraries?
Yes, you can use any third party libraries you want.

### API
The api docs are in a separate markdown file called `api.md`.

### Setup
To begin please run: `npm i` to install all packages that are required.

### Running 
You can run `node app.js` to run and test the exported functions in `src/index.js`. 

### Tests
Jest is used to test this task.
To run the tests run: `npm run test`

A tests folder has already been created with a `tests/structure.test.js` file. Please don't modify this test file, it is used to ensure that the exported functions in the `src/index.js` return the correct type.

A failing test has also been created in `tests/getMaxTemperature.test.js`. Getting this to test to pass should be a good starting point.
