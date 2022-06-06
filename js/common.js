'use strict'

window.addEventListener('DOMContentLoaded' , () => {

  var picture = document.getElementById("picture");
  
  var text = document.getElementsByClassName("text")[0];
  
  picture.onmouseover =  () => {
    picture.src = "images/img2.jpeg";
    text.textContent = "マウスオーバー中";
  };

  picture.onmouseout = () => {
    picture.src = "images/img1.jpeg";
    text.textContent = "マウスオーバーで画像を切り替え";
  };

});