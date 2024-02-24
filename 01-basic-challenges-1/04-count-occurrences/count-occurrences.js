// Solution-01
function countOccurrences(str, char) {
	str = String(str).toLowerCase()
	char = String(char).toLowerCase()

	const characterCountMap = {}

	for (const character of str) {
		if (!characterCountMap.hasOwnProperty(character)) {
			characterCountMap[character] = 0
		}

		characterCountMap[character] = characterCountMap[character] + 1
	}

	const characterCount = characterCountMap[char]
	return characterCount ?? 0
}

// Solution 02
/* function countOccurrences(str, char) {
	str = String(str).toLowerCase()
	char = String(char).toLowerCase()

	let count = 0
	Array.from(str).forEach(character => character === char && count++)

	return count
} */

// solution 03
// const countOccurrences = (str, char) =>
// 	Array.from(str).reduce(
// 		(acc, character) => (character === char ? acc + 1 : acc),
// 		0,
// 	)

module.exports = countOccurrences
