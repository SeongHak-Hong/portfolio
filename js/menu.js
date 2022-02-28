window.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelectorAll('#menu ul li');
  const sec = document.querySelectorAll('section');
  const getSecHeight = sec[0].offsetHeight; //섹션 offsetHeight값
  console.log(getSecHeight);
  console.dir(menu[0]);

  // 메뉴 활성화 함수
  const menuOn = function(num) {
    menu[num].style.fontSize = "1.25rem";
    menu[num].style.lineHeight = "0";
    menu[num].style.fontWeight = "500";
    menu[num].style.color = "#2a1414";
  }

  // 메뉴 비활성화 함수
  const menuOff = function(num1, num2, num3) {
    menu[num1].style.fontSize = "1rem";
    menu[num1].style.lineHeight = "0";
    menu[num1].style.fontWeight = "400";
    menu[num1].style.color = "#2a1414c0";

    menu[num2].style.fontSize = "1rem";
    menu[num2].style.lineHeight = "0";
    menu[num2].style.fontWeight = "400";
    menu[num2].style.color = "#2a1414c0";

    menu[num3].style.fontSize = "1rem";
    menu[num3].style.lineHeight = "0";
    menu[num3].style.fontWeight = "400";
    menu[num3].style.color = "#2a1414c0";
  }


  // 메뉴 클릭 이벤트
  for (i=0; i<menu.length; i++) {
    // ***메뉴 클릭시 섹션 이동, 이름 활성화
    menu[i].addEventListener('click', function(event){
      // 메뉴 li[0]일시 about 섹션으로 이동
      if (event.target == menu[0]) {
        window.scrollTo({left:0,top:0,behavior:'smooth'});
        menuOn(0);
        menuOff(1,2,3);
      }
      // 메뉴 li[1]일시 work 섹션으로 이동
      else if (event.target == menu[1]) {
        window.scrollTo({left:0,top:getSecHeight,behavior:'smooth'});
        menuOn(1);
        menuOff(0,2,3);
      }
      // 메뉴 li[2]일시 resume 섹션으로 이동
      else if (event.target == menu[2]) {
        window.scrollTo({left:0,top:getSecHeight*2,behavior:'smooth'});
        menuOn(2);
        menuOff(0,1,3);
      }
      // 메뉴 li[3]일시 contact 섹션으로 이동
      else if (event.target == menu[3]) {
        window.scrollTo({left:0,top:getSecHeight*3,behavior:'smooth'});
        menuOn(3);
        menuOff(0,1,2);
      }
    });


    // ***메뉴 클릭시 해당 섹션의 메뉴이름 active 활성화하기
    menu[i].addEventListener('click', function(event){
      menu[i].classList.remove('active');
      event.target.classList.add('active');
    });
  }
});