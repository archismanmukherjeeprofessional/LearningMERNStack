function arrOperations(arr) {
  function maxElement(arr) {
    arrLen = arr.length;
    console.log("Maximum number in the array is ", arr.sort()[arrLen - 1]);
  }
  const sum = function (arr) {
    s = 0;
    arr.forEach((e) => {
      s = s + e;
    });
    console.log("The sum of all the elements of the array is ", s);
  };
  const oddCount = (arr) => {
    flag = 0;
    arr.forEach((e) => {
      if (Math.floor(e % 2) != 0) {
        flag++;
      }
    });
    console.log("The number of odd numbers in the array is ", flag);
  };
  maxElement(arr);
  sum(arr);
  oddCount(arr);
}

let a = [45, 35, 74, 96, 21, 48, 56];
let b = [55, 48, 89, 14, 2, 3, 78, 71, 90];
let c = [789, 258, 899, 258, 789, 102, 51, 3];
arrOperations(a);
arrOperations(b);
arrOperations(c);
