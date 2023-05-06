let slider_img = document.querySelector('.slider-img');
let images = ['1', '2', '3'];
let i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "img/Ventolin/"+images[i]);
}

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