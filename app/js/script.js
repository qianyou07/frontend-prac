const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".header_menu");
const sideMenu = document.querySelector(".side-menu");
const menuImg = document.querySelector("#menu-img");


hamburger.addEventListener('click', function(){
	if(hamburger.classList.contains('open')){ // Close Hamburger Menu
		hamburger.classList.remove('open');    
		overlay.classList.remove('darken');
		overlay.classList.add('lighten');
		sideMenu.classList.remove('slide-in');
		sideMenu.classList.add('slide-out');
		menuImg.src = "images/icon-menu.svg";
	  }
	  else { // Open Hamburger Menu
		hamburger.classList.add('open');
		overlay.classList.add('darken');
		overlay.classList.remove('lighten');
		sideMenu.classList.add('slide-in');
		sideMenu.classList.remove('slide-out');
		menuImg.src = "images/icon-close-menu.svg";
	  }  
});