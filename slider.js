var card_inf = `
<div class="swiper-slide">
    <div class="temp_box">

      <div class="txt_box">
        <span class="txt_title">BRAND</span>
        <p class="txt_inf">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget augue nisl. 
          Suspendisse tempus sapien et risus bibendum rutrum. Morbi 
          elementum ex non dui tempus, in facilisis ipsum mattis. Donec consectetur 
          sit amet sem nec lobortis. In lacus nulla, ultrices id sodales sed, dapibus nec augue. 
          Sed sollicitudin enim eu nisl tempus, at iaculis nulla varius. Proin porttitor orci eleifend 
        </p>
      </div>
      
      <div class="txt_box">
        <span class="txt_title">BRAND</span>
        <p class="txt_inf">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget augue nisl. 
          Suspendisse tempus sapien et risus bibendum rutrum. Morbi 
          elementum ex non dui tempus, in facilisis ipsum mattis. Donec consectetur 
          sit amet sem nec lobortis. In lacus nulla, ultrices id sodales sed, dapibus nec augue. 
          Sed sollicitudin enim eu nisl tempus, at iaculis nulla varius. Proin porttitor orci eleifend 
        </p>
      </div>

      <div id="content_wrap"><div class="content"></div><div class="content"></div></div>
    </div>

    <select id='card_type'>
      <option value="Pimg">상품 사진</option>
      <option value="Pdimg">상품 상세사진</option>
      <option value="Pifor">상품 소개</option>
      <option value="Psize">상품 사이즈</option>
      <option value="info">안내사항</option>
    </select>
  </div>

</div>
`
var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
slidesPerView: 3,
centeredSlides: true,
spaceBetween: 30,
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
});
document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
e.preventDefault();
swiper.prependSlide([
  '<div class="swiper-slide">' + (card_inf) + '</div>',
  '<div class="swiper-slide">' + (card_inf) + '</div>'
  ]);
});
document.querySelector('.prepend-slide').addEventListener('click', function (e) {
e.preventDefault();
swiper.prependSlide('<div class="swiper-slide">' + (card_inf) + '</div>');
});
document.querySelector('.append-slide').addEventListener('click', function (e) {
e.preventDefault();
swiper.appendSlide('<div class="swiper-slide">' + (card_inf) + '</div>');
});
document.querySelector('.append-2-slides').addEventListener('click', function (e) {
e.preventDefault();
swiper.appendSlide([
  '<div class="swiper-slide">' + (card_inf) + '</div>',
  '<div class="swiper-slide"> ' + (card_inf) + '</div>'
  ]);
});