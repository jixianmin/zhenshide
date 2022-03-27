"use strict"
//x = 3.14;선언안하고 쓰면 콘솔에 오류뜸
console.log("hello, vanilla.");
console.log("https://vanilla-coding-calendar.netlify.app/");
/*오늘의 현재 요일 표기 완
오늘의 현재 날짜 표기 완
오늘의 현재 월 표기 완
오늘의 현재 연도 표기 완
일,월,화,수,목,금,토 요일 라벨링 표기
현재 월의 1일이 무슨 요일인지 판별하고, 해당 요일 라벨링에 1일 표기하기
현재 월의 마지막 날짜까지 달력에 표기하기
우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기*/
var d = new Date();
var week = new Array('일','월','화','수','목','금','토');
var month = new Array('January','Fevruary','March',"April","May","June","July","August","September","October","November","December")
// document.write('오늘 요일: ' + week[d.getDay()] + '요일' + '<br/>');
document.querySelector(".day").innerText = `${week[d.getDay() + 3]}요일`
document.querySelector(".date").innerText = `${d.getDate()}`
document.querySelector(".yearMonth").innerText = `${month[d.getMonth()]} ${d.getFullYear()}`

console.log("https://www.youtube.com/watch?v=FBO_7H39tqs")
function checkLeapYear(year) { //개발의품격
  if(year%400 == 0) {
    return true;
  } else if (year%100 == 0) {
    return false;
  } else if (year%4 == 0) {
    return true;
  } else {
    return false;
  }
}

