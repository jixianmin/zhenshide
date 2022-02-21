//console.log(Math.floor(Math.random() * 10 + 1));
//0이상 1미만 Math.random()
//0이상 10미만 소수 Math.random()*10
//0부터 9까지 정수 Math.floor(Math.random() *10)
//1~10까지의 정수?console.log(Math.floor(Math.random() * 10 + 1));
//1~45 정수?Math.floor(Math.random() * 45) + 1;

//1 ~ 45 정수
// Math.floor(Math.random() * 45) + 1;
//numberList배열에 랜덤숫자 push * 6번 하기

// for (i = 0; i < 6; i++) {
//   const numberList = [Math.floor(Math.random() * 45) + 1];
//   console.log(numberList);
// } 넘버리스트의 배열안에 여섯개 넣기 <중복이 안되도록 하자>
//1.number List에 랜덤숫자 넣기 2.1번을 6번하기 {선언을 반복문 안에 넣어라}

/*const getRandomNumber = () => { 아래와 이것은 동일하다
  return Math.floor(Math.random() * 45) + 1;
};*/
const getRandomNumber = () => Math.floor(Math.random() * 45) + 1;
const recommend = () => {
  const numberList = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber();
    //0.랜덤 숫자 생성
    //1.중복체크 : numberlist에 생성한 숫자가 존재하는지?
    //2-1.중복이 안 된 숫자면 : 배열에 추가
    //2-2.numberList에 이미 존재하는 숫자면 0단계로 돌아가기<알고리즘 순서도>
    //중복 체크
    while (numberList.includes(randomNumber)) {
      //랜덤숫자 다시 만들기
      randomNumber = getRandomNumber();
    }

    numberList.push(randomNumber);
  }
  console.log(numberList);
  numberList.sort((a, b) => a - b);
  //여기까지가 콘솔에 연결하는것
  // numberList 배열 안에 있는 숫자 순서대로 출력하기
  const $lottoNumberList = document.querySelectorAll(".lotto-number");
  for (let i = 0; i < $lottoNumberList.length; i++) {
    $lottoNumberList[i].innerText = numberList[i];
    // numberList[i] 값에 따라서 class 붙이기
    let colorClass = "";
    if (numberList[i] <= 10) {
      colorClass = "yellow";
    } else if (numberList[i] <= 20) {
      colorClass = "blue";
    } else if (numberList[i] <= 30) {
      colorClass = "red";
    } else if (numberList[i] <= 40) {
      colorClass = "gray";
    } else {
      colorClass = "green";
    }
    $lottoNumberList[i].classList = "lotto-number";
    $lottoNumberList[i].classList.add(colorClass); //마지막 이거 추가
  }
};
//   if (numberList[i] <= 10) {
//     $lottoNumberList[i].classList.add("yellow");
//   } else if (numberList[i] <= 20) {
//     $lottoNumberList[i].classList.add("blue");
//   } else if (numberList[i] <= 30) {
//     $lottoNumberList[i].classList.add("red");
//   } else if (numberList[i] <= 40) {
//     $lottoNumberList[i].classList.add("gray");
//   } else {
//     $lottoNumberList[i].classList.add("green");
//   }
//버튼 누를때마다 번호 추천해주기

//recommend();
//init()

/*2022/02/21 미션
  1.랜덤 숫자 만들어서
  2.6개의 공에 숫자 출력,색깔 클래스 추가
  3.01.초마다 */
const printRandonNumber = () => {
  setInterval(() => {
    const number = getRandomNumber();
    const $lottoNumberList = document.querySelectorAll(".lotto-number");

    for (let i = 0; i < $lottoNumberList.length; i++) {
      const number = getRandomNumber();
      $lottoNumberList[i].innerText = number;
      // numberList[i] 값에 따라서 class 붙이기
      let colorClass = "";
      if (number <= 10) {
        colorClass = "yellow";
      } else if (number <= 20) {
        colorClass = "blue";
      } else if (number <= 30) {
        colorClass = "red";
      } else if (number <= 40) {
        colorClass = "gray";
      } else {
        colorClass = "green";
      }
      $lottoNumberList[i].classList = "lotto-number";
      $lottoNumberList[i].classList.add(colorClass); //마지막 이거 추가
    }
  }, 100);
};
document
  .querySelector("#btn-start")
  .addEventListener("click", printRandonNumber);

const recommend2 = () => {
  const $lottoNumberList = document.querySelectorAll(".lotto-number");

  for (let i = 0; i < $lottoNumberList.length; i++) {
    const intervalId = setInterval(() => {
      const number = getRandomNumber();
    });
  }
};
