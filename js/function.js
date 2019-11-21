// 1. 클릭한 인디케이터(a)가 몇번째 요소인지를 나타내는 index번호 추출
// 2. 그 index 번호에 해당하는 a 요소의 직계부모에 .on 클래스를 추가한다.
// 3. 그 index 번호에 해당하는 a 요소 부모의 형제에 해당하는 다른 li에게서 .on 클래스를 제거한다.
// 4. 그 index 번호에 매칭되는 슬라이드(li) 가 보일 수 있도록 .slides-container를 계산된 값으로 left 좌표를 설정한다.
$(function () {
  var $indicator = $('.slides-pagination>li>a');
  var nowIdx = 0;

  $indicator.on('click', function (evt) {
    evt.preventDefault();

    nowIdx = $indicator.index(this);

    $(this).parent().addClass('on');
    $(this).parent().siblings().removeClass('on');

    $('.slides-container').stop().animate({
      left: ($('.slides-container>li').width() * -nowIdx)
    }, 800);
  });
});












