// Find the maximum number in a jagged array of numbers or array of numbers.
// Input: [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]

function findMax(array) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            max = Math.max(max, array[i]);

        } else if (Array.isArray(array[i])) {
            let nesting = findMax(array[i]);
            max = Math.max(max, nesting);
        }
    }
    return max;
}

let array = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
let maxNumber = findMax(array);

console.log(maxNumber);