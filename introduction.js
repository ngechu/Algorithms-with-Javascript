//Focus on creating processes

function twoSum(arr, outcome) {
	//Initialize an empty obj
	let obj = {}
	let index = 0;
	for (let i in arr) {
		const diff = outcome - arr[i]
		if (diff in obj) {
			return [obj[diff], i]
		} else {
			obj[arr[i]] = index
			index++

		}
	}
}
console.log(twoSum([2, 5, 1, 7], 6))