// let a = 3;
// let b = 5;

// // a에 담긴 값과 b에 담긴 값을 교환

// let c = b;
// b = a;
// a = c;

// console.log(a);
// console.log(b);

//버블 정렬
// console.log([111,2,5,2].sort((a,b) => a - b)); 숫자 크기에 맞춰

// 두 숫자를 비교해서 큰 숫자를 뒤로 보낸다. <시간 복잡도><버블정렬>
/*
const bubble = (arr) => {
  const result = [...arr];

  for (let j = 0; j < result.length; j++) {
    for (let i = 0; i < result.length - j; i++) {
      if (result[i] > result[i + 1]) {
        let c = result[i];
        result[i] = result[i + 1];
        result[i + 1] = c;
      }
    }
  }
  return result;
};
const arr1 = [2, 43, 23, 74, 24, 546, 75, 1];
console.log(bubble(arr1));
*/
//선택 정렬
/*
배열에서 가장작은 수의 index를 찾는다
그 수와 첫번째 수와 자리바꾸기
배열에서 두번째 작은수 찾기
그 수와 두번째수 자리 바꾸기
*/
const bubble = (arr) => {
  const result = [...arr];
  for (let j = 0; j < result.length; j++) {
    for (let i = j; i < result.length; i++) {
      if (result[j] > result[i + 1]) {
        let c = result[j];
        result[j] = result[i + 1];
        result[i + 1] = c;
      }
    }
  }

  return result;
};

const arr1 = [2, 43, 23, 74, 24, 546, 75, 1];
console.log(bubble(arr1));
/*
for (let i = 0; i < result.length - 1; i++) {
    if (result[0] > result[i + 1]) {
      let c = result[0];
      result[0] = result[i + 1];
      result[i + 1] = c;
    }
  }
*/
