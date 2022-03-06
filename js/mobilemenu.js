const mobileMenuBtn = document.querySelector('#mobile-menu-btn'); // 모바일메뉴 버튼(헤더)
const mobileMenu = document.querySelector('#mobile-menu'); // 모바일메뉴
const closeBtn = document.querySelector('#close-btn'); // 모바일메뉴 닫기버튼

// 모바일메뉴 스타일(오른쪽에 숨기기)
mobileMenu.style.right = '-60%';

// 모바일메뉴 클릭 이벤트
mobileMenuBtn.addEventListener('click', function(){
  mobileMenu.style.right = '0';
});

// 모바일메뉴 닫기버튼 클릭 이벤트
closeBtn.addEventListener('click', function(){
  mobileMenu.style.right = '-60%';
});