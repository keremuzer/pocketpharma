let bars = document.getElementById("bars");
let active = false;

bars.addEventListener("click", function(){
  if(!active){
    document.getElementById("mySidenav").style.width = "100%";
    bars.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    active = true;
  }
  else{
    document.getElementById("mySidenav").style.width = "0";
    bars.innerHTML = '<i class="fa-solid fa-bars"></i>';
    active = false;
  }
});