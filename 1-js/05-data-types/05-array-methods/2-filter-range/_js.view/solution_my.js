function filterRange(arr, a, b) {

    return arr.filter(item => item >= a && item <= b);

}

console.log(filterRange([1, 3, 5, 7, 9], 2, 7));