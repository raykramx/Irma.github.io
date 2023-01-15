function showDiv() {StartMarquee();document.getElementById('subkonten').style.opacity = "1"; document.getElementById('konten').style.top = "0";document.getElementById('foto_awal').style.opacity = "1";document.getElementById('foto_awal').style.height = "160px";document.querySelector("body").style.animation = "fanim 9s ease infinite";}
function showKlik() {document.getElementById('sp4').style.visibility = "hidden";document.getElementById('foto_awal').style.display = "none";document.getElementById('subkonten').style.display = "none";document.getElementById('tombKlik').style.visibility = "visible";document.getElementById('tombKlik').style.opacity = "1";document.getElementById('tombKlik').style.paddingTop = "80px";}
function yay() {document.getElementById('sp4').style.visibility = "visible";document.getElementById('sp4').style.opacity = "1";document.getElementById('sp4').style.paddingBottom = "40px";}  
function tombol() {document.getElementById('tombWA').style.visibility = "visible";document.getElementById('tombWA').style.opacity = "1";}  

async function lanjut(){
  var e1 = document.getElementById('animasi');e1.classList.add("surprise");
  lanjut2();setInterval(createHeart,200);
  //document.body.style.backgroundColor = "#000";
  //document.getElementById('foto_awal').style.opacity = "0";document.getElementById('foto_awal').style.height = "0";
  document.getElementById('lopyu').style.opacity = "1";document.getElementById('lopyu').style.height = "200px";document.getElementById('lopyu').style.margin = "50px 0 0 0";
  //document.getElementById('subkonten').style.display = "none";
}
function lanjut2(){
  if(a<bar.length){document.getElementById("sp2").innerHTML += bar.charAt(a);a++;setTimeout(lanjut2,100);}
  if(a==bar.length){lanjut3();}
}
function lanjut3(){
  if(i<bar2.length){document.getElementById("sp3").innerHTML += bar2.charAt(i);i++;setTimeout(lanjut3,200);}
  if(i==bar2.length){setTimeout(yay,1000);setTimeout(tombol,2000);}
}

async function expl(){setTimeout(lanjut,200);document.getElementById('tapmeid').style.display = "none";}

function StartMarquee(){var marquee = document.getElementById ("marq");marquee.start();}
function StopMarquee(){var marquee = document.getElementById ("marq");marquee.stop();}
StopMarquee();