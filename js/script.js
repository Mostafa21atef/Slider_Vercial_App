// var ele=document.querySelector("h1");
// var btn = document.querySelector(".btn")
// var counter = 1;

// var one = setInterval(function(){
//     ele.innerHTML=counter;
//     counter++;
// },1000)
// btn.addEventListener("click",function(){
//     clearInterval(one);
// })
// var img =document.querySelector("img");
// document.addEventListener("mousemove",function(e){
// img.style.top=e.clientY+"px";
// img.style.left=e.clientX+"px";
// });
// start carousal task
// var img = document.querySelectorAll(".carousal img")
// var car1 =document.querySelector("#car1")
// for(var i = 0;i<img.length;i++){
//     img[i].addEventListener("click",function(e){
//      var MySrc = e.target.getAttribute("src");
//      car1.setAttribute("src",MySrc);
//     })
// }
// end carousal task

// start slider-vercel
let images = Array.from(document.querySelectorAll(".item img"));
let LightBoxContainer = document.querySelector(".LightBoxContainer");
let exit = document.querySelector(".close_Tab");
let LightBox = document.querySelector(".LightBox");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let currentIndex;

for(let i=0 ; i<images.length ; i++){

    images[i].addEventListener("click",function(e){

        LightBoxContainer.classList.replace("d-none" , "d-flex");

        let mySrc = e.target.getAttribute("src");

        LightBox.style.backgroundImage=`url(${mySrc})`;

        currentIndex = images.indexOf(e.target);
    })
} 
function slide(step){
    currentIndex += step;
    if(currentIndex==images.length){
        currentIndex=0;
    }

    if(currentIndex < 0 ){
        currentIndex=images.length -1;
    }
    let mySrc =images[currentIndex].getAttribute("src");
    LightBox.style.backgroundImage=`url(${mySrc})`;
}
next.addEventListener("click",function(){
    slide(1);
})
prev.addEventListener("click",function(){
    slide(-1);
})

 exit.addEventListener("click",function(){
 LightBoxContainer.classList.replace("d-flex" , "d-none");
})
LightBoxContainer.addEventListener("click",function(){
    LightBoxContainer.classList.add("d-none");
})
LightBox.addEventListener("click",function(e){
e.stopPropagation();
})

// end slider-vercel 