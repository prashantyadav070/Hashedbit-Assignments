function modifyArray(arr) {
  arr.push("new item");
  arr.pop(); // removes that new item
  return arr;
}

console.log(modifyArray([1, 2, 3]));
