function showNumConfiguration(arr) {
  let result = [];
  if (arr.length != 1) {
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
      if (result.length === 0) break;
    }
    console.log(result);
  }
}

function findNumConfiguration(arr, i, n) {
  if (n < 0) {
    return console.log("n must be greater than 0");
  }

  if (n == 0) return showNumConfiguration(arr);
  for (let j = i; j <= n; j++) {
    arr.push(j);
    findNumConfiguration(arr, j, n - j);
    arr.pop();
  }
}

// number to be find
let n = 4;

// storing data
let arr = [];

findNumConfiguration(arr, 1, n);
