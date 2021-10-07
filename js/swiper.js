const swiper = new Swiper('.swiper-container--main-banner', {
  slidesPerView: 1, // 한 화면에 들어오는 슬라이드 갯수
  spaceBetween: 0, // 슬라이드 간 여백
  debugger: true, // 드래그로 슬라이드 이동
  // mousewheel: true,
  loop: true,
  // loopAdditionalSlides: 1, // loop 생성 후 복제할 슬라이드 수 추가
  effect: 'fade', // 슬라이드 이동 효과 'slide', 'fade'
  /* fadeEffect: { // effect: 'fade' 설정
    crossFade: true,
  }, */
  speed: 700, // 슬라이드 속도
  // 슬라이드 이동 자동 실행
  autoplay: {
    delay: 3500,
    disableOnInteraction: false, // 수동 이동 시 autoplay 중지
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets', // 'bullets', 'custom'
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
