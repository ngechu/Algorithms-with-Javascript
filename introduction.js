//Focus on creating processes

function twoSum(arr, outcome) {
	//Initialize an empty obj
	let obj = {}
	let index = 0;
	let indexes = []
	for (let i in arr) {
		const diff = outcome - arr[i]

		if (diff in obj) {
			indexes = [...indexes, Number(obj[diff]), Number(i)]
		} else {
			obj[arr[i]] = index
			index++

		}
	}
	console.log('=========', indexes)

	return indexes
}


twoSum([2, 5, 1, 7], 6)