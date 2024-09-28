"use strict";

/* ==== Vanilla JS Back To Top Widget ====== */
/* Ref: https://github.com/vfeskov/vanilla-back-to-top */
addBackToTop({
  cornerOffset: 15, // px
  id:'back-to-top',
});


/* ======= Header animation ======= */   
const header = document.getElementById('header');  

window.onload=function() 
{   
    let scrollTop = window.scrollY;
    headerAnimation(); 

};

window.onresize=function() 
{   
	let scrollTop = window.scrollY;
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    let scrollTop = window.scrollY;
    headerAnimation(); 

}; 
    

function headerAnimation () {

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 0 ) {	    
	    header.classList.add('header-change');    
	    	    
	} else {
	    header.classList.remove('header-change');
	}

};
    

/* ======= Nav Side Panel ====== */
const navbarToggle = document.getElementById('navbar-toggle'); 
const navMenuPanel = document.getElementById('navmenu-panel'); 
const navMenuClose = document.getElementById('navmenu-close'); 

navbarToggle.addEventListener('click', (e) => {
		
		e.preventDefault();
		
		
		if (navMenuPanel.classList.contains('navmenu-panel-open')) {		
	        navMenuPanel.classList.remove('navmenu-panel-open');
	        navMenuPanel.classList.add('navmenu-panel-hide');
	
	    }
	    else {      	    			
	        navMenuPanel.classList.remove('navmenu-panel-hide');
	        navMenuPanel.classList.add('navmenu-panel-open');  
	    }

        
		
});

navMenuClose.addEventListener('click', (e) => {
	e.preventDefault();
	navbarToggle.click();
});








    
    