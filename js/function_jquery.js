$(function () {

  var $indicator = $('.slides>.slides-pagination>li>a');
  var $container = $('.slides>.slides-container');
  var $btnPrev = $('.slides>.slides-prev');
  var $btnNext = $('.slides>.slides-next');
  var nowIdx = 0;

  //인디케이터에 대한 클릭이벤트
  $indicator.on('click', function (evt) {
    evt.preventDefault();

    //인디케이터 활성화
    $(this).parent().addClass('on')
      .siblings().removeClass('on');

    //index번호 추출
    nowIdx = $indicator.index(this);

    //컨테이너 이동
    $container.stop().animate({
      left: -(100 * nowIdx) + '%'
    });
  });

  //이전버튼에 대한 클릭이벤트 구문
  //a가 아니므로 preventDefault 필요없음
  $btnPrev.on('click',function(){
    
    //인덱스 번호 추출
    oldIdx = nowIdx;
    if(nowIdx>0){
      //nowIdx = nowIdx-1;
      //nowIdx -=1;
      nowIdx--
    }else{
      nowIdx = 3;
    }
    
    //인디케이터 활성화
    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    
    //컨테이너 이동
    $container.stop().animate({
      left: -(100 * nowIdx) + '%'
    });
    
  });

  //다음버튼에 대한 클릭이벤트 구문
  $btnNext.on('click',function(){
    oldIdx = nowIdx;
    if(nowIdx<3){
      nowIdx++
    }else{
      nowIdx = 0;
    }

    $indicator.parent().eq(nowIdx).addClass('on').siblings().removeClass('on');
    
    $container.stop().animate({
      left: -(100 * nowIdx) + '%'
    });
    
  });

});











