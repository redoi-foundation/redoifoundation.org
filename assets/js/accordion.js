


"use strict";

/* ======= FAQ accordion ======= */
const accordionTogglers = document.querySelectorAll('.accordion-item .accordion-header');
 
accordionTogglers.forEach((accordionToggler) => {
	accordionToggler.addEventListener('click', function () {
		console.log('clicked');
		
		let togglerIcon = accordionToggler.querySelector('.pe-icon');
		
		if (togglerIcon.classList.contains('pe-7s-less')) {
			togglerIcon.classList.remove('pe-7s-less');
			togglerIcon.classList.add('pe-7s-minus');
		} else {
			togglerIcon.classList.remove('pe-7s-minus');
			togglerIcon.classList.add('pe-7s-less');
		}
		
		
	});
});