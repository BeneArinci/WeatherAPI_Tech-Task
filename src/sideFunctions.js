// calculate the average of array data
exports.getAverage = (valuesArray) => {
	let reducer = (total, currentValue) => total + currentValue;
	let sum = valuesArray.reduce(reducer)
	return sum / valuesArray.length;
}