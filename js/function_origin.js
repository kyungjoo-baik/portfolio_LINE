//오리지널 자바스크립트 버전
document.addEventListener('DOMContentLoaded',function(){
  var $indicators = document.querySelectorAll('#slides>.slides-pagination>li>a');
  var $container = document.querySelector('#slides>.slides-container');
  var $btnPrev = document.querySelector('#slides>.slides-prev');
  var $btnNext = document.querySelector('#slides>.slides-next');
  var nowIdx = 0;
  var oldIdx; //siblings 대신

  $indicators.forEach(function($indicator, idx){ //인자 indicator, idx

    $indicator.addEventListener('click',function(event){
      event.preventDefault();
      oldIdx = nowIdx;
      nowIdx = idx;

      //인디케이터 활성화    //this = currentTarget
      event.currentTarget.parentElement.classList.add('on');
      $indicators[oldIdx].parentElement.classList.remove('on');
      
      //컨테이너 이동
      $container.style.setProperty('left',-(100*nowIdx)+'%'); 
      //css 속성은 property html은 attribute...
    });//end of click
  });//end of forEach

  //이전 버튼에 대한 클릭이벤트 구문
  $btnPrev.addEventListener('click', function(){
    oldIdx = nowIdx;
    if(nowIdx>0){
      //nowIdx = nowIdx-1;
      //nowIdx -=1;
      nowIdx--
    }else{
      nowIdx = 2;
    }

    //인디케이터 활성화
    $indicators[nowIdx].parentElement.classList.add('on');
    $indicators[oldIdx].parentElement.classList.remove('on');
    
    //컨테이너 이동
    $container.style.setProperty('left',-(100*nowIdx)+'%');

  });
  //다음 버튼에 대한 클릭이벤트 구문
  $btnNext.addEventListener('click',function(){
    oldIdx = nowIdx;
    if(nowIdx<2){
      nowIdx++
    }else{
      nowIdx = 0;
    }

    //인디케이터 활성화    //this = currentTarget
    $indicators[nowIdx].parentElement.classList.add('on');
    $indicators[oldIdx].parentElement.classList.remove('on');
    
    //컨테이너 이동
    $container.style.setProperty('left',-(100*nowIdx)+'%');

  });

});//end of DOMContentLoaded