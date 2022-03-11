const callback = (element, index) => {
  return element + 1;
};

const forEach = (callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i); //i=0 callback(1,0) callback = 2
  }
};
const map = (callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result; //result = [2,3,4]
};
const filter = (callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result; //result = [2,3,4]
};

const arr = [1, 2, 3];
const newArr = arr.map((element, index) => {
  return element + 1;
}); //return [2,3,4]

const newArr2 = arr.filter((e, i) => {
  return e > 1;
}); //return [2,3]
