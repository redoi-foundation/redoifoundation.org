"use strict";

/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */


let scrollLinks = document.querySelectorAll('.scrollto');

scrollLinks.forEach((scrollLink) => {
	
	scrollLink.addEventListener('click', (e) => {
		
		e.preventDefault();
		
		var target = scrollLink.getAttribute("href").replace('#', '');
		
		//console.log(target);
		
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
        
		
    });
	
});