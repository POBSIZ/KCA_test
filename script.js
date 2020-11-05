$('.content')
  .on("dragover", dragOver)
  .on("dragleave", dragOver)
  .on("drop", uploadFiles);

function dragOver(e){
    e.stopPropagation();
    e.preventDefault();
    if (e.type == "dragover") {
        $(e.target).css({
            "background-color": "#ececec",
            "outline-offset": "-20px"
        });
    } else {
        $(e.target).css({
            "background-color": "#ececec",
            "outline-offset": "-10px"
        });
    }
}

function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        alert('하나만 올려라.');
        return;
    }
    if (files[0].type.match(/image.*/)) {
                $(e.target).css({
            "background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
            "outline": "none",
            "background-size": "100% 100%",
            // "border-radius": "40px 40px 40px 40px"
        });
    }else{
      alert('이미지가 아닙니다.');
      return;
    }
}

function changeTheme(){
    var card_theme_none = `
    <div class="temp_box"></div>
    `; 
    var card_theme_default = `
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
    `; 
    var card_theme_base = `
    <div class="temp_box">
        <div id="content_wrap"><div class="content"></div><div class="content"></div></div>
    </div>
    `

    var Ctype = document.getElementById("card_type");
    var selOpt = Ctype.selectedIndex;
    var optVal = Ctype.options[selOpt].value;
    var tempBox = document.querySelector(".temp_box");

    if(optVal == "Pimg"){
        tempBox.parentNode.removeChild(tempBox);
        $(".swiper-slide").append(card_theme_default);
    }
    if(optVal == "Pdimg"){
        tempBox.parentNode.removeChild(tempBox);
        $(".swiper-slide").append(card_theme_none);
    }
    if(optVal == "info"){
        tempBox.parentNode.removeChild(tempBox);
        $(".swiper-slide").append(card_theme_base);
    }
}