// $(window).on("load",function(){
//   $(".progress").fadeOut("slow");
// })

// let progress = document.querySelector(".progress");
// const tl = new TimelineMax();
// let x = 0;
// // tl.fromTo(progress, 4, {width: "0%"}, {width: "100%"});
// function Next(){
//   x++;
//   if(x == 4){
//     window.location = "index.html"
//   }
// }

let count = 1;

setInterval(()=>{
  count++
  if(count > 15) location.replace('/index.html')
},1000)