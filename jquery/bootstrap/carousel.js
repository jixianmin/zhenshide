let index = 1; //nth-child 에서는 1부터 시작
$(".btn-next").click(() => {
  const itemLength = $(".carousel-list").children().length;
  //다음버튼을 누를때
  //1) index가 item갯수랑 같으면 index를 0으로
  //2) 그렇지 않으면 index 1증가
  index < itemLength ? (index += 1) : (index = 1);

  $(".carousel-item").removeClass("active");
  $(`.carousel-item:nth-child(${index})`).addClass("active");
});
$(".btn-prev").click(() => {
  //이전버튼을 누를때
  //1) index가 1이면 index를 item 갯수로
  //2) 그렇지 않으면 index 1증가
  index > 1 ? (index -= 1) : (index = 4);

  $(".carousel-item").removeClass("active");
  $(`.carousel-item:nth-child(${index})`).addClass("active");
});

$(".button-list button").click(function () {
  index = this.innerText;
  $(".carousel-item").removeClass("active");
  $(`.carousel-item:nth-child(${index})`).addClass("active");
});
