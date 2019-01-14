

let mobileMenu = document.querySelector('.menu-toggle');
let overlay = document.querySelector('.overlay');
let mobile = document.querySelector('.mobile');
let menuToggle = document.querySelector('.menu-toggle');

let btnDrop = document.querySelector('.menu-item-link__active');
let dropDown = document.querySelector('.drop-down');

let input = document.querySelector('#text');

mobileMenu.addEventListener('click', (e)=>{
	e.preventDefault();
	overlay.classList.toggle('dn');
	mobileMenu.classList.toggle('dn');
	mobile.classList.toggle('dn');
	menuToggle.classList.toggle('toggled-on');
});

btnDrop.addEventListener('click', (e) => {
	e.preventDefault();
	dropDown.classList.toggle('dn');
});

dropDown.addEventListener('click', (e) => {
	e.preventDefault();
	dropDown.classList.toggle('dn');
});



