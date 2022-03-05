window.addEventListener('DOMContentLoaded', function() {
  const sidemenu = document.querySelector('#side-menu');

  console.log(sidemenu.children[0].children);

  const sec = document.querySelectorAll('section'); 
  const getSecHeight = sec[0].offsetHeight; // 섹션의 오프셋높이값 얻기
  console.log(getSecHeight);
  console.dir(document.body);

  // 페이지 진입시 첫째 사이드메뉴 스타일링
  sidemenu.children[0].children[0].style.width = 5 + "rem";
  sidemenu.children[0].children[0].style.backgroundColor = '#262626';

  // 사이드메뉴 on 스타일링 함수
  const sidemenuOnStyle = function (num) {
    sidemenu.children[num].children[0].style.width = 5 + "rem";
    sidemenu.children[num].children[0].style.backgroundColor = '#262626';
  }
  // 사이드메뉴 off 스타일링 함수
  const sidemenuOffStyle = function () {
    for (i=0; i<sidemenu.children.length; i++) {
      sidemenu.children[i].children[0].style.width = 1.5 + "rem";
      sidemenu.children[i].children[0].style.backgroundColor = '#26262671';
    }
  }

  // 윈도우 스크롤 이벤트
  window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    // 스크롤y값이 섹션1일 때 사이드메뉴 스타일링
    if (window.scrollY >= getSecHeight * 0 && window.scrollY < getSecHeight * .9) {
      sidemenuOffStyle();
      sidemenuOnStyle(0);
    }
    // 스크롤y값이 섹션2일 때 사이드메뉴 스타일링
    if (window.scrollY >= getSecHeight * .9) {
      sidemenuOffStyle();
      sidemenuOnStyle(1);
    }
    // 스크롤y값이 섹션3일 때 사이드메뉴 스타일링
    if (window.scrollY >= getSecHeight * 1.8) {
      sidemenuOffStyle();
      sidemenuOnStyle(2);
    }
  });


  // 사이드메뉴 클릭이벤트
  for (i=0; i<sidemenu.children.length; i++) {
    sidemenu.children[i].addEventListener('click', function(event) {
      console.log(event.currentTarget);
      // 첫번째 막대기 클릭시
      if (event.currentTarget == sidemenu.children[0]) {
        sidemenuOffStyle();
        sidemenuOnStyle(0);
        window.scrollTo({left:0, top:getSecHeight * 0, behavior:"smooth"});
      }
      // 두번째 막대기 클릭시
      if (event.currentTarget == sidemenu.children[1]) {
        sidemenuOffStyle();
        sidemenuOnStyle(0);
        window.scrollTo({left:0, top:getSecHeight * 1, behavior:"smooth"});
      }
      // 세번째 막대기 클릭시
      if (event.currentTarget == sidemenu.children[2]) {
        sidemenuOffStyle();
        sidemenuOnStyle(0);
        window.scrollTo({left:0, top:getSecHeight * 2, behavior:"smooth"});
      }
    });
  }
});