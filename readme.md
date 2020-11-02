# MySolution
I wanted to thank you all for allowing me to work on this tech task. I did not have a lot of experience with Node.js and this allowed me to brush up on my existing knowledge but also to learn a lot of new things :)
<br>
While telling you how I solved this challenge, there are a few points worth to be mentioned.

## Priority to performance
I started by keeping all the exported functions divided from the others. Everyone of them was performing a specific call to the api server. This solution was working but it was extremely slow for the large number of API calls/quantity of data to be analysed. On top of this, there was a lot of repetition on my code (fetching same data multiple times for example). <br>
For this reason I refactored my code in order to reduce to the minimum the API calls and improve the performance. Consequently, I decided to store the api data into variables so that all the other functions were able to use them. The performance significantly improved passing from ~35sec to ~15sec execution time (Oxford). <br>
On top of this, I tried to divide as much as possible the responsponibilities for different tasks into different functions. <br>

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
