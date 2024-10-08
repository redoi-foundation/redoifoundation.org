"use strict";

/* ======= Toggle between Signup & Login & ResetPass Modals ======= */ 
const loginModal = new bootstrap.Modal(document.getElementById('login-modal'));
const signupModal = new bootstrap.Modal(document.getElementById('signup-modal'));


const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');



signupLink.addEventListener('click', function(e) {
	e.preventDefault();
	loginModal.toggle();
	signupModal.show();
});


loginLink.addEventListener('click', function(e) {
	e.preventDefault();
	signupModal.toggle();
	loginModal.show();
});