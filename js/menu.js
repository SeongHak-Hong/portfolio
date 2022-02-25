const menu = document.querySelectorAll('#menu ul li');
const sec = document.querySelectorAll('section');
const getSecHeight = sec[0].offsetHeight; //섹션 offsetHeight값
console.log(getSecHeight);
console.dir(menu[0]);

// 메뉴 클릭 이벤트
for (i=0; i<menu.length; i++) {
  // ***메뉴 클릭시 섹션으로 이동
  menu[i].addEventListener('click', function(event){
    // 메뉴 li[0]일시 about 섹션으로 이동
    if (event.target == menu[0]) {
      window.scrollTo({left:0,top:0,behavior:'smooth'});
    }
    // 메뉴 li[1]일시 work 섹션으로 이동
    else if (event.target == menu[1]) {
      window.scrollTo({left:0,top:getSecHeight,behavior:'smooth'});
    }
    // 메뉴 li[2]일시 resume 섹션으로 이동
    else if (event.target == menu[2]) {
      window.scrollTo({left:0,top:getSecHeight*2,behavior:'smooth'});
    }
    // 메뉴 li[3]일시 contact 섹션으로 이동
    else if (event.target == menu[3]) {
      window.scrollTo({left:0,top:getSecHeight*3,behavior:'smooth'});
    }
  });


  // ***메뉴 클릭시 해당 섹션의 메뉴이름 active 활성화하기
  menu[i].addEventListener('click', function(event){
    let getIndexValue = Number(event.target.dataset.index);
    if (getIndexValue !== i) {
      event.target.classList.add('active');
    } else {
      menu[i].classList.remove('active');
    }
  });
}



