$(function(){
// 文字をフェードインする

onload=function(){
    $("#sentense").fadeIn(3000);  
}


// 画像切り替え
   var images=["image/uk.jpg","image/usa.jpg","image/wedding.jpg","image/pc.jpg"];
   var current=-1
   var picture=document.getElementById("main-image");


function changeimage(){
    current++;
    document.getElementById("main-image").src=images[current];
    if(current===images.length-1){
        current=-1;
    }
    refresh();
    };

// 画像を五秒毎に切り替える
   function refresh(){
       setTimeout(changeimage,5000);
   };



 changeimage();





});
